// NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";

export default function NavBar({ activePage }) {
  return (
    <nav className="navbar">
      <div className="navbar-left">
        <div className="company-logo">
          <img src="https://repository-images.githubusercontent.com/507652699/4ba4b94d-14da-45f2-a34a-bca62f2b019e" alt="Company Logo" />
        </div>
        <ul className="navbar-menu">
          <li>
            <Link to="/" className={`navbar-link ${activePage === 'home' ? 'active' : ''}`}>Home</Link>
          </li>
          <li>
            <Link to="/services" className={`navbar-link ${activePage === 'services' ? 'active' : ''}`}>Our Services</Link>
          </li>
          <li>
            <Link to="/tutors" className={`navbar-link ${activePage === 'tutors' ? 'active' : ''}`}>Our Tutors</Link>
          </li>
          <li>
            <Link to="/become-tutor" className={`navbar-link ${activePage === 'become-tutor' ? 'active' : ''}`}>Become A Tutor</Link>
          </li>
          <li>
            <Link to="/become-client" className={`navbar-link ${activePage === 'become-client' ? 'active' : ''}`}>Become A Client</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-buttons-right">
        <button className="navbar-button">Contact Us</button>
        <button className="navbar-button">Log in</button>
        <button className="navbar-button">Sign up</button>
      </div>
    </nav>
  );
}