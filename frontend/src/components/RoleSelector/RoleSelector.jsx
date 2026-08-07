import React from 'react';

export const RoleSelector = ({ onSelectRole }) => {
  return (
    <div className="glass-panel animate-fade-in" style={{ maxWidth: '600px', margin: '4rem auto', textAlign: 'center' }}>
      <h1 className="gradient-text" style={{ marginBottom: '1rem' }}>Welcome to SayCheese.ai</h1>
      <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>
        AI-Powered Attendance Management for College. Select your portal to continue.
      </p>
      
      <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
        <button 
          className="btn-primary" 
          onClick={() => onSelectRole('teacher')}
          style={{ padding: '1.5rem', flex: 1 }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '2rem' }}>👨‍🏫</span>
            <span>Teacher Portal</span>
          </div>
        </button>
        
        <button 
          className="btn-secondary" 
          onClick={() => onSelectRole('student')}
          style={{ padding: '1.5rem', flex: 1 }}
        >
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.5rem' }}>
            <span style={{ fontSize: '2rem' }}>👨‍🎓</span>
            <span>Student Portal</span>
          </div>
        </button>
      </div>
    </div>
  );
};
