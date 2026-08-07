import React, { useState, useEffect } from 'react';

export const StudentDashboard = ({ onLogout }) => {
  const [enrolledSubjects, setEnrolledSubjects] = useState([]);
  const [joinCode, setJoinCode] = useState('');
  const [biometricSetup, setBiometricSetup] = useState({ face: false, voice: false });
  const [showSetup, setShowSetup] = useState(null); // 'face' or 'voice'

  useEffect(() => {
    // Mock initial data
    setEnrolledSubjects([
      { id: 1, name: 'Data Structures (CS201)', attendance: 85 },
      { id: 2, name: 'Operating Systems (CS302)', attendance: 92 }
    ]);
    
    // Check local storage for biometrics (simulated)
    const stored = localStorage.getItem('SayCheese.ai_biometrics');
    if (stored) {
      setBiometricSetup(JSON.parse(stored));
    }
  }, []);

  const handleJoinSubject = (e) => {
    e.preventDefault();
    if (joinCode.trim().length < 4) return;
    
    setEnrolledSubjects([...enrolledSubjects, {
      id: Date.now(),
      name: `Joined Subject ${joinCode}`,
      attendance: 100 // Starts at 100%
    }]);
    setJoinCode('');
  };

  const handleCompleteSetup = (type) => {
    const newSetup = { ...biometricSetup, [type]: true };
    setBiometricSetup(newSetup);
    localStorage.setItem('SayCheese.ai_biometrics', JSON.stringify(newSetup));
    setShowSetup(null);
  };

  return (
    <div className="animate-fade-in">
      <div className="layout-header">
        <div>
          <h2 className="gradient-text">Student Dashboard</h2>
          <p style={{ color: 'var(--text-muted)' }}>Track attendance and manage biometrics</p>
        </div>
        <button className="btn-secondary" onClick={onLogout}>Sign Out</button>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 350px', gap: '2rem' }}>
        
        {/* Main Area: Subjects */}
        <div>
          <div className="glass-panel" style={{ marginBottom: '2rem' }}>
            <h3 style={{ marginBottom: '1rem' }}>Join Subject</h3>
            <form onSubmit={handleJoinSubject} style={{ display: 'flex', gap: '1rem' }}>
              <input 
                type="text" 
                className="form-input" 
                placeholder="Enter 4-digit Join Code" 
                value={joinCode}
                onChange={(e) => setJoinCode(e.target.value)}
              />
              <button type="submit" className="btn-primary" style={{ whiteSpace: 'nowrap' }}>Enroll Now</button>
            </form>
          </div>

          <div className="glass-panel">
            <h3>My Enrollments</h3>
            <div className="grid-cards">
              {enrolledSubjects.map(sub => (
                <div key={sub.id} className="subject-card">
                  <h4>{sub.name}</h4>
                  <div style={{ marginTop: '1rem' }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem', marginBottom: '0.5rem' }}>
                      <span>Attendance</span>
                      <span style={{ color: sub.attendance >= 75 ? 'var(--success)' : 'var(--warning)' }}>{sub.attendance}%</span>
                    </div>
                    <div style={{ width: '100%', height: '6px', background: '#334155', borderRadius: '3px' }}>
                      <div style={{ 
                        width: `${sub.attendance}%`, 
                        height: '100%', 
                        background: sub.attendance >= 75 ? 'var(--success)' : 'var(--warning)', 
                        borderRadius: '3px' 
                      }}></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar: Biometrics Profile */}
        <div>
          <div className="glass-panel">
            <h3 style={{ marginBottom: '1.5rem' }}>Biometric Profile</h3>
            
            {showSetup ? (
              <div className="animate-fade-in">
                <h4 style={{ marginBottom: '1rem' }}>Registering {showSetup === 'face' ? 'Face' : 'Voice'}</h4>
                <div className="camera-view" style={{ minHeight: '150px', marginBottom: '1rem' }}>
                  <div className="scan-line"></div>
                </div>
                <button 
                  className="btn-primary" 
                  style={{ width: '100%' }} 
                  onClick={() => handleCompleteSetup(showSetup)}
                >
                  Complete Registration
                </button>
              </div>
            ) : (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: 'rgba(15,23,42,0.5)', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>📸</span>
                    <div>
                      <div style={{ fontWeight: '500' }}>Facial Data</div>
                      <div style={{ fontSize: '0.8rem', color: biometricSetup.face ? 'var(--success)' : 'var(--danger)' }}>
                        {biometricSetup.face ? 'Registered' : 'Not Registered'}
                      </div>
                    </div>
                  </div>
                  {!biometricSetup.face && (
                    <button className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }} onClick={() => setShowSetup('face')}>Setup</button>
                  )}
                </div>

                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '1rem', background: 'rgba(15,23,42,0.5)', borderRadius: '8px', border: '1px solid var(--glass-border)' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                    <span style={{ fontSize: '1.5rem' }}>🗣️</span>
                    <div>
                      <div style={{ fontWeight: '500' }}>Voice Embeddings</div>
                      <div style={{ fontSize: '0.8rem', color: biometricSetup.voice ? 'var(--success)' : 'var(--danger)' }}>
                        {biometricSetup.voice ? 'Registered' : 'Not Registered'}
                      </div>
                    </div>
                  </div>
                  {!biometricSetup.voice && (
                    <button className="btn-secondary" style={{ padding: '0.5rem 1rem', fontSize: '0.8rem' }} onClick={() => setShowSetup('voice')}>Setup</button>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
};
