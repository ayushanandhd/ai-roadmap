import React from 'react';
import { FaGithub, FaTwitter, FaInstagram } from 'react-icons/fa';
import './Nav.css';

function Nav() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        AI Roadmap
      </div>
      <div className="navbar-links">
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}

export default Nav;