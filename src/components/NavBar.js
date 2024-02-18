// NavBar.js

import React from 'react';
import { Link } from 'react-router-dom';
import "./NavBar.css";

export default function NavBar() {
  return (
    <nav>
      <div className="navbar-left">
        <div className="company-logo">
          <img src="" alt="Company Logo" /> {/*add company logo source here*/}
        </div>
        <ul className="navbar-menu">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Our Services</Link>
          </li>
          <li>
            <Link to="/tutors">Our Tutors</Link>
          </li>
          <li>
            <Link to="/become-tutor">Become A Tutor</Link>
          </li>
          <li>
            <Link to="/become-client">Become A Client</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-buttons-right">
        <button>Contact Us</button>
        <button>Log in</button>
        <button>Sign up</button>
      </div>
    </nav>
  );
}
