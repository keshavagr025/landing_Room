import React, { useState, useEffect } from 'react';

export const CameraScanner = ({ onScanComplete, type }) => {
  const [scanningStatus, setScanningStatus] = useState('Initializing camera...');
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    // Simulate complex AI pipeline with timeouts
    const step1 = setTimeout(() => {
      setScanningStatus(type === 'face' ? 'Detecting faces...' : 'Listening for audio...');
      setProgress(30);
    }, 1500);

    const step2 = setTimeout(() => {
      setScanningStatus('Extracting embeddings...');
      setProgress(60);
    }, 3000);

    const step3 = setTimeout(() => {
      setScanningStatus('Matching with database...');
      setProgress(90);
    }, 4500);

    const step4 = setTimeout(() => {
      setScanningStatus('Success!');
      setProgress(100);
      onScanComplete();
    }, 6000);

    return () => {
      clearTimeout(step1);
      clearTimeout(step2);
      clearTimeout(step3);
      clearTimeout(step4);
    };
  }, [onScanComplete, type]);

  return (
    <div className="camera-view">
      <div className="scan-line"></div>
      
      <div style={{ position: 'absolute', bottom: '20px', left: '20px', right: '20px' }}>
        <div style={{ 
          background: 'rgba(0,0,0,0.7)', 
          padding: '1rem', 
          borderRadius: '8px',
          backdropFilter: 'blur(4px)'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '0.5rem' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="scanning-indicator"></span>
              {scanningStatus}
            </span>
            <span>{progress}%</span>
          </div>
          <div style={{ width: '100%', height: '4px', background: '#334155', borderRadius: '2px' }}>
            <div style={{ 
              width: `${progress}%`, 
              height: '100%', 
              background: 'var(--success)', 
              borderRadius: '2px',
              transition: 'width 0.3s ease'
            }}></div>
          </div>
        </div>
      </div>
    </div>
  );
};
