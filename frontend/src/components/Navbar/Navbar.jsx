import React, { useState, useEffect } from 'react';
import './Navbar.css';
import { HiAcademicCap } from "react-icons/hi2";

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`landing-navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <div className="nav-brand">
          <HiAcademicCap />
          <span className="gradient-text" style={{ fontWeight: '700' }}>Attendy</span>
        </div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#demo">Live Demo</a>
          <a href="#tech-stack">Technology</a>
        </div>
        <div className="nav-actions">
          <button className="btn-secondary">Login</button>
          <button className="btn-primary">Get Started</button>
        </div>
      </div>
    </nav>
  );
};
