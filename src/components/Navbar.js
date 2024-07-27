import React from 'react';
import { Link } from 'react-router-dom';
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import '../styles/Navbar.css';

const SocialMediaIcons = ({ github, linkedin }) => {
  return (
    <div className="social-media-icons">
      <a href={github} target="_blank" rel="noopener noreferrer">
        <AiFillGithub size="2rem" />
      </a>
      <a href={linkedin} target="_blank" rel="noopener noreferrer">
        <AiFillLinkedin size="2rem" />
      </a>
    </div>
  );
};

const Navbar = () => {
  const githubLink = "https://github.com/BilhaNanetia";
  const linkedinLink = "https://www.linkedin.com/in/bilha-leposo-1656392b8";

  return (
    <nav className="navbar mt-4">
      <div className="navbar-content flex items-center justify-between">
        <img src="/assets/images/logo.png" alt="Bilha Leposo Logo" className="logo" />
        <ul className="nav-links flex space-x-4 justify-center">
          <li><Link to="/" className="hover:underline">Home</Link></li>
          <li><Link to="/about" className="hover:underline">About</Link></li>
          <li><Link to="/projects" className="hover:underline">Projects</Link></li>
          <li><Link to="/skills" className="hover:underline">Skills</Link></li>
          <li><Link to="/experience" className="hover:underline">Experience</Link></li>
          <li><Link to="/contact" className="hover:underline">Contact</Link></li>
        </ul>
        <div className="social-media-container">
          <SocialMediaIcons linkedin={linkedinLink} github={githubLink} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
