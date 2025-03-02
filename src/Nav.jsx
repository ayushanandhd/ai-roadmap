import React from 'react';
import { FaGithub, FaTwitter, FaInstagram, FaSun, FaMoon } from 'react-icons/fa';
import './Nav.css';

export default function Nav() {

    // function toggleTheme() {
    //     const body = document.querySelector('body');
    //     const theme = body.getAttribute('data-theme');
    //     if (theme === 'light') {
    //         body.setAttribute('data-theme', 'dark');
    //     } else {
    //         body.setAttribute('data-theme', 'light');
    //     };

    //     if(document.querySelector('.theme-button').textContent === 'Dark Mode'){
    //         document.querySelector('.theme-button').textContent = 'Light Mode';
    //     } else{
    //         document.querySelector('.theme-button').textContent = 'Dark Mode';
    //     }
    // }

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        AI Roadmap
      </div>
      <div className="toggle-theme">
        {/* <button onClick={()=>{toggleTheme()}} className="theme-button">
            Dark Mode
        </button> */}
      </div>
      <div className="navbar-links">
        <a href="https://github.com/ayushanandhd/ai-roadmap" target="_blank" rel="noopener noreferrer">
          <FaGithub />
        </a>
        <a href="https://x.com/ayushanandhd" target="_blank" rel="noopener noreferrer">
          <FaTwitter />
        </a>
        <a href="https://instagram.com/ayushanandhd" target="_blank" rel="noopener noreferrer">
          <FaInstagram />
        </a>
      </div>
    </nav>
  );
}