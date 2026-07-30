import React, { useState, useEffect } from 'react';
import { CameraScanner } from '../CameraScanner/CameraScanner';

export const TeacherDashboard = ({ onLogout }) => {
  const [subjects, setSubjects] = useState([]);
  const [newSubject, setNewSubject] = useState('');
  const [activeSubject, setActiveSubject] = useState(null);
  const [activeScanner, setActiveScanner] = useState(null); // 'face' or 'voice'
  const [logs, setLogs] = useState([]);

  // Simulate fetching subjects on mount
  useEffect(() => {
    const mockSubjects = [
      { id: 1, name: 'Data Structures (CS201)', enrollments: 45 },
      { id: 2, name: 'Machine Learning (CS405)', enrollments: 32 }
    ];
    setSubjects(mockSubjects);
  }, []);

  const handleCreateSubject = (e) => {
    e.preventDefault();
    if (!newSubject.trim()) return;
    
    setSubjects([...subjects, {
      id: Date.now(),
      name: newSubject,
      enrollments: 0
    }]);
    setNewSubject('');
  };

  const handleScanComplete = () => {
    setActiveScanner(null);
    const newLog = {
      id: Date.now(),
      subject: activeSubject.name,
      type: activeScanner === 'face' ? 'Face Rec' : 'Voice Rec',
      studentsMarked: Math.floor(Math.random() * 5) + 15,
      time: new Date().toLocaleTimeString()
    };
    setLogs([newLog, ...logs]);
  };

  return (
    <div className="animate-fade-in">
      <div className="layout-header">
        <div>
          <h2 className="gradient-text">Teacher Dashboard</h2>
          <p style={{ color: 'var(--text-muted)' }}>Manage subjects and take AI attendance</p>
        </div>
        <button className="btn-secondary" onClick={onLogout}>Sign Out</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '2rem' }}>
        <div>
          {/* Main Content Area */}
          {activeScanner ? (
            <div className="glass-panel">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                <h3>{activeScanner === 'face' ? '📸 Facial Recognition' : '🗣️ Voice Biometrics'} Active</h3>
                <button className="btn-secondary" onClick={() => setActiveScanner(null)}>Cancel</button>
              </div>
              <CameraScanner type={activeScanner} onScanComplete={handleScanComplete} />
            </div>
          ) : activeSubject ? (
            <div className="glass-panel">
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '2rem' }}>
                <div>
                  <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem' }}>{activeSubject.name}</h3>
                  <p style={{ color: 'var(--text-muted)' }}>Enrollments: {activeSubject.enrollments} | Join Code: <strong>{activeSubject.id.toString().slice(-4)}</strong></p>
                </div>
                <button className="btn-secondary" onClick={() => setActiveSubject(null)}>Back to Subjects</button>
              </div>

              <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
                <button className="btn-primary" onClick={() => setActiveScanner('face')} style={{ flex: 1 }}>
                  📸 Start Face Recognition
                </button>
                <button className="btn-primary" onClick={() => setActiveScanner('voice')} style={{ flex: 1, background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }}>
                  🗣️ Start Voice Recognition
                </button>
              </div>
            </div>
          ) : (
            <div className="glass-panel">
              <h3>Your Subjects</h3>
              <div className="grid-cards">
                {subjects.map(subject => (
                  <div key={subject.id} className="subject-card" onClick={() => setActiveSubject(subject)}>
                    <h4>{subject.name}</h4>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginTop: '0.5rem' }}>
                      {subject.enrollments} Students Enrolled
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Sidebar */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
          <div className="glass-panel">
            <h3 style={{ marginBottom: '1rem' }}>Create Subject</h3>
            <form onSubmit={handleCreateSubject}>
              <input 
                type="text" 
                className="form-input" 
                placeholder="e.g. Algorithms CS301" 
                value={newSubject}
                onChange={(e) => setNewSubject(e.target.value)}
                style={{ marginBottom: '1rem' }}
              />
              <button type="submit" className="btn-primary" style={{ width: '100%' }}>Add Subject</button>
            </form>
          </div>

          <div className="glass-panel">
            <h3 style={{ marginBottom: '1rem' }}>Recent Attendance</h3>
            {logs.length === 0 ? (
              <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>No recent attendance logs.</p>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {logs.map(log => (
                  <div key={log.id} style={{ paddingBottom: '1rem', borderBottom: '1px solid var(--glass-border)' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.25rem' }}>
                      <strong style={{ fontSize: '0.9rem' }}>{log.subject}</strong>
                      <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{log.time}</span>
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                      <span style={{ color: 'var(--success)' }}>+{log.studentsMarked} Present</span>
                      <span>{log.type}</span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
