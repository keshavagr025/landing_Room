import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__brand">Attendy Class</div>
      <nav className="navbar__links">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#pricing">Journey</a>
        <a href="#contact">Tech Stack</a>
      </nav>
      <button className="navbar__cta" type="button">Start AI Attendance</button>
    </header>
  )
}

export default Navbar
