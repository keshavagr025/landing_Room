import React, { useState, useEffect } from 'react';
import './Hero.css';

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
          Eliminate manual roll-calls and buddy punching. Attendy uses advanced Facial Recognition and Voice Biometrics backed by high-accuracy ML pipelines to make attendance invisible and secure.
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
              <div className="abstract-card large">
                <div className="scan-line-mock"></div>
                <div className="face-box"></div>
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
