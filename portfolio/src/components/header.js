// src/components/Header.js
import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';

const Header = () => (
  <header className="header">
    <img src='/path/to/logo.svg' alt='Logo' className="logo" />
    <nav className="navbar">
      
      <Link to="/" className="nav-link">About</Link>
      <Link to="/skills" className="nav-link">Skills</Link>
      <Link to="/projects" className="nav-link">Projects</Link>
      <Link to="/contact" className="nav-link">Contact</Link>
    </nav>
  </header>
);

export default Header;
