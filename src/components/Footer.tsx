import React from 'react';
import './Footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>&copy; 2024 Learn & Translate ESL. All rights reserved.</p>
        <div className="footer-links">
          <a href="/about">About Us</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="/contact">Contact</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
