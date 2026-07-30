import React, { useState } from 'react';
import { CameraScanner } from '../CameraScanner/CameraScanner';

export const LiveDemoSection = () => {
  const [demoState, setDemoState] = useState('idle'); // idle, scanning_face, scanning_voice, success
  const [logs, setLogs] = useState([]);

  const handleStartDemo = (type) => {
    setDemoState(type === 'face' ? 'scanning_face' : 'scanning_voice');
  };

  const handleScanComplete = () => {
    setDemoState('success');
    
    // Add dummy log
    const type = demoState === 'scanning_face' ? 'Facial Match' : 'Voice Embeddings Match';
    setLogs([{
      id: Date.now(),
      student: 'Alex Johnson',
      confidence: (Math.random() * (99.9 - 95.0) + 95.0).toFixed(1) + '%',
      type: type,
      time: new Date().toLocaleTimeString()
    }, ...logs].slice(0, 5)); // Keep last 5

    setTimeout(() => {
      setDemoState('idle');
    }, 3000);
  };

  return (
    <section id="demo" style={{ padding: '6rem 2rem', background: 'rgba(15, 23, 42, 0.3)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <div className="section-header">
          <h2 className="gradient-text">Experience the Magic</h2>
          <p style={{ color: 'var(--text-muted)' }}>
            Try out our interactive demo of the core recognition pipeline.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          
          {/* Demo Controller */}
          <div className="glass-panel">
            <h3 style={{ marginBottom: '1.5rem', fontSize: '1.5rem' }}>Interactive Sandbox</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', marginBottom: '2rem' }}>
              <button 
                className="btn-primary" 
                onClick={() => handleStartDemo('face')}
                disabled={demoState !== 'idle'}
              >
                📸 Simulate Face Scan
              </button>
              <button 
                className="btn-primary" 
                style={{ background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)' }}
                onClick={() => handleStartDemo('voice')}
                disabled={demoState !== 'idle'}
              >
                🗣️ Simulate Voice Verification
              </button>
            </div>

            <div style={{ background: 'rgba(0,0,0,0.2)', borderRadius: '8px', padding: '1rem' }}>
              <h4 style={{ marginBottom: '1rem', fontSize: '1.1rem', color: 'var(--text-muted)' }}>Real-time Logs</h4>
              {logs.length === 0 ? (
                <p style={{ color: 'rgba(255,255,255,0.2)', fontSize: '0.9rem', fontStyle: 'italic' }}>
                  Awaiting scan initialization...
                </p>
              ) : (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                  {logs.map(log => (
                    <div key={log.id} className="animate-fade-in" style={{ 
                      fontSize: '0.85rem', 
                      background: 'rgba(16, 185, 129, 0.1)', 
                      border: '1px solid rgba(16, 185, 129, 0.3)',
                      padding: '0.5rem', 
                      borderRadius: '4px',
                      display: 'flex',
                      justifyContent: 'space-between'
                    }}>
                      <span>[SUCCESS] {log.student} verified via {log.type}</span>
                      <span style={{ color: 'var(--success)' }}>{log.confidence}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Camera View Area */}
          <div style={{ position: 'relative' }}>
            {demoState.startsWith('scanning') ? (
              <div className="glass-panel" style={{ padding: '1rem' }}>
                <CameraScanner 
                  type={demoState === 'scanning_face' ? 'face' : 'voice'} 
                  onScanComplete={handleScanComplete} 
                />
              </div>
            ) : demoState === 'success' ? (
              <div className="glass-panel animate-fade-in" style={{ 
                aspectRatio: '16/9', 
                display: 'flex', 
                flexDirection: 'column',
                alignItems: 'center', 
                justifyContent: 'center',
                background: 'rgba(16, 185, 129, 0.1)',
                border: '2px solid var(--success)'
              }}>
                <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>✅</div>
                <h3 style={{ color: 'var(--success)' }}>Verification Successful</h3>
              </div>
            ) : (
              <div className="glass-panel" style={{ 
                aspectRatio: '16/9', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center',
                borderStyle: 'dashed'
              }}>
                <p style={{ color: 'var(--text-muted)' }}>Camera/Microphone inactive. Press a button to start.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </section>
  );
};
