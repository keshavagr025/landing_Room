import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar__brand">Landing Room</div>
      <nav className="navbar__links">
        <a href="#home">Home</a>
        <a href="#features">Features</a>
        <a href="#pricing">Pricing</a>
        <a href="#contact">Contact</a>
      </nav>
      <button className="navbar__cta" type="button">Get Started</button>
    </header>
  )
}

export default Navbar
