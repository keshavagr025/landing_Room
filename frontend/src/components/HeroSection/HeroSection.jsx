import React, { useState, useEffect } from 'react';
import './Hero.css';

const FaceMeshSVG = () => (
  <svg viewBox="0 0 100 100" className="face-mesh-svg" style={{ width: '100%', height: '100%', position: 'absolute', top: 0, left: 0 }}>
    <g className="mesh-group">
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

export const HeroSection = () => {
  const words = ['AI-Powered', 'Biometric', 'Automated', 'Seamless'];
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsAnimating(true);
      setTimeout(() => {
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
        setIsAnimating(false);
      }, 500); // Wait for fade out
    }, 3000); // Change word every 3 seconds

    return () => clearInterval(interval);
  }, [words.length]);

  return (
    <section className="hero-section">
      <div className="hero-content">
        <div className="hero-badge animate-fade-in" style={{ animationDelay: '0.1s' }}>
          <span className="pulse-dot"></span>
          Revolutionizing College Attendance
        </div>
        
        <h1 className="hero-title animate-fade-in" style={{ animationDelay: '0.2s' }}>
          The First <br />
          <span className={`dynamic-word gradient-text ${isAnimating ? 'fade-out' : 'fade-in'}`}>
            {words[currentWordIndex]}
          </span>
          <br /> Attendance System.
        </h1>
        
        <p className="hero-subtitle animate-fade-in" style={{ animationDelay: '0.3s' }}>
          Eliminate manual roll-calls and buddy punching. SayCheese.ai uses advanced Facial Recognition and Voice Biometrics backed by high-accuracy ML pipelines to make attendance invisible and secure.
        </p>
        
        <div className="hero-cta animate-fade-in" style={{ animationDelay: '0.4s' }}>
          <button className="btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Start Free Trial
          </button>
          <button className="btn-secondary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
            Book a Demo
          </button>
        </div>

        <div className="hero-stats animate-fade-in" style={{ animationDelay: '0.5s' }}>
          <div className="stat-item">
            <h3 className="gradient-text">99.8%</h3>
            <p>Recognition Accuracy</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h3 className="gradient-text">&lt; 1s</h3>
            <p>Processing Time</p>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <h3 className="gradient-text">100%</h3>
            <p>Fraud Prevention</p>
          </div>
        </div>
      </div>
      
      <div className="hero-visual animate-fade-in" style={{ animationDelay: '0.6s' }}>
        <div className="glass-panel abstract-dashboard">
          <div className="abstract-header">
            <div className="dots"><span></span><span></span><span></span></div>
            <div className="search-bar"></div>
          </div>
          <div className="abstract-body">
            <div className="abstract-sidebar"></div>
            <div className="abstract-main">
              <div className="abstract-card large" style={{ position: 'relative' }}>
                <div className="scan-line-mock"></div>
                <div className="face-box">
                  <FaceMeshSVG />
                </div>
              </div>
              <div className="abstract-row">
                <div className="abstract-card small"></div>
                <div className="abstract-card small"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Decorative elements */}
        <div className="glow-orb primary-orb"></div>
        <div className="glow-orb secondary-orb"></div>
      </div>
    </section>
  );
};
