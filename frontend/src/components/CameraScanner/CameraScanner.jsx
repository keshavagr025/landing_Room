import React, { useState, useEffect } from 'react';

const FaceMeshSVG = () => (
  <svg viewBox="0 0 100 100" className="face-mesh-svg" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0, opacity: 0.5, pointerEvents: 'none' }}>
    <g className="mesh-group" style={{ transform: 'scale(1.5) translate(-15%, -10%)' }}>
      {/* Head contour */}
      <path className="mesh-line" d="M30 20 Q50 5 70 20 Q85 45 75 70 Q60 90 50 95 Q40 90 25 70 Q15 45 30 20 Z" />
      {/* Forehead / Brow */}
      <path className="mesh-line" d="M30 35 L40 35 L50 38 L60 35 L70 35" />
      <path className="mesh-line" d="M30 20 L30 35 L40 45 L50 45 L60 45 L70 35 L70 20" />
      {/* Nose bridge & base */}
      <path className="mesh-line" d="M50 38 L45 55 L50 65 L55 55 Z" />
      <path className="mesh-line" d="M40 45 L45 55 M60 45 L55 55" />
      {/* Cheeks */}
      <path className="mesh-line" d="M25 50 L35 55 L45 65 M75 50 L65 55 L55 65" />
      <path className="mesh-line" d="M25 70 L40 75 L50 85 L60 75 L75 70" />
      {/* Mouth */}
      <path className="mesh-line" d="M40 75 Q50 72 60 75 Q50 80 40 75" />
      
      {/* Intersection Nodes */}
      {[
        [30, 20], [70, 20], [50, 5], [75, 70], [50, 95], [25, 70], [30, 35], [40, 35], [50, 38],
        [60, 35], [70, 35], [40, 45], [50, 45], [60, 45], [45, 55], [50, 65], [55, 55], [25, 50],
        [35, 55], [75, 50], [65, 55], [40, 75], [60, 75], [50, 85], [50, 72], [50, 80]
      ].map((pos, i) => (
        <circle 
          key={i} 
          cx={pos[0]} 
          cy={pos[1]} 
          r="2.5" 
          className="mesh-node" 
          style={{ animationDelay: `${(i % 5) * 0.2}s` }} 
        />
      ))}
    </g>
  </svg>
);

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
      {type === 'face' && <FaceMeshSVG />}
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
