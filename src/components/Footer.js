import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Import social media icons
import '../styles/Footer.css'; 

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="social-links">
          {/* LinkedIn */}
          <a href="https://www.linkedin.com/in/bilha-leposo-1656392b8" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          {/* GitHub */}
          <a href="https://github.com/BilhaNanetia" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faGithub} />
          </a>
          {/* Instagram */}
          <a href="https://www.instagram.com/bilhaleposo/" target="_blank" rel="noopener noreferrer">
            <FontAwesomeIcon icon={faInstagram} />
          </a>
        </div>
        <div className="additional-info">
          <p>&copy; {new Date().getFullYear()} Bilha Leposo. All rights reserved.</p>
          <p>Based in Narok & Nairobi, Kenya</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
