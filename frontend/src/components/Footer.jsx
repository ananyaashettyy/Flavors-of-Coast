import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer" role="contentinfo">
      <div className="footer-container">
        <p>&copy; {new Date().getFullYear()} Flavors Of Coast. All rights reserved.</p>
        <p>Made with ❤️ for food lovers.</p>
      </div>
    </footer>
  );
};

export default Footer;
