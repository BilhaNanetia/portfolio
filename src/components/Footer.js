import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons'; // Import social media icons

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-4 sm:py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="social-links flex space-x-4 mb-4 sm:mb-0">
            {/* LinkedIn */}
            <a href="https://www.linkedin.com/in/bilha-leposo-1656392b8" target="_blank" rel="noopener noreferrer" className="hover:text-blue-500">
              <FontAwesomeIcon icon={faLinkedin} size="lg" />
            </a>
            {/* GitHub */}
            <a href="https://github.com/BilhaNanetia" target="_blank" rel="noopener noreferrer" className="hover:text-gray-500">
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </a>
            {/* Instagram */}
            <a href="https://www.instagram.com/bilhaleposo/" target="_blank" rel="noopener noreferrer" className="hover:text-pink-500">
              <FontAwesomeIcon icon={faInstagram} size="lg" />
            </a>
          </div>
          <div className="text-center sm:text-right additional-info">
            <p className="text-sm sm:text-base">&copy; {new Date().getFullYear()} Bilha Leposo. All rights reserved.</p>
            <p className="text-sm sm:text-base">Based in Narok & Nairobi, Kenya</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
