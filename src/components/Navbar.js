import React, { useState, useEffect, useRef } from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaTrello,
  FaGoogleDrive,
  FaFile,
  FaAngleDown,
  FaBars,
  FaTimes,
} from "react-icons/fa"; // Import additional icons
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);
  const menuRef = useRef(null); // Reference for the mobile menu

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Close mobile menu when a link is clicked
  const handleLinkClick = () => {
    setMobileMenuOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">Dibas Debnath</Link>
      </div>
      <button className="mobile-menu-icon" onClick={toggleMobileMenu}>
        {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
      </button>
      <ul
        ref={menuRef}
        className={`navbar-links ${isMobileMenuOpen ? "active" : ""}`}
      >
        <li>
          <Link to="/Research" onClick={handleLinkClick}>
            Research
          </Link>
        </li>
        <li>
          <Link to="/UnityProjects" onClick={handleLinkClick}>
            Unity Projects
          </Link>
        </li>
        <li>
          <Link to="/CocosProjects" onClick={handleLinkClick}>
            Cocos Projects
          </Link>
        </li>
        <li>
          <Link to="/UnrealProjects" onClick={handleLinkClick}>
            Unreal Projects
          </Link>
        </li>
        <li>
          <Link to="/WebProjects" onClick={handleLinkClick}>
            Web Projects
          </Link>
        </li>
        <li className="dropdown">
          <span className="dropdown-toggle">
            Links <FaAngleDown className="dropdown-icon" />
          </span>
          <ul className="dropdown-menu">
            <li>
              <a
                href="DibasDebnathResume2024.pdf"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick} // Close menu when resume link is clicked
              >
                <FaFile className="icon" /> Resume
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/dibasdebnath/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick} // Close menu when LinkedIn link is clicked
              >
                <FaLinkedin className="icon" /> LinkedIn
              </a>
            </li>
            <li>
              <a
                href="mailto:dibasdebnath@gmail.com"
                onClick={handleLinkClick} // Close menu when email link is clicked
              >
                <FaEnvelope className="icon" /> Email
              </a>
            </li>
            <li>
              <a
                href="https://github.com/DibasDebnath"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick} // Close menu when GitHub link is clicked
              >
                <FaGithub className="icon" /> GitHub
              </a>
            </li>
            <li>
              <a
                href="https://trello.com/b/J7yfD7wU/skating-master"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick} // Close menu when Trello link is clicked
              >
                <FaTrello className="icon" /> Trello
              </a>
            </li>
            <li>
              <a
                href="https://drive.google.com/drive/folders/1iy2ALHIfbG3pO2-nyiepcJhW3iH6PBS8?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                onClick={handleLinkClick} // Close menu when Google Drive link is clicked
              >
                <FaGoogleDrive className="icon" /> Documents
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
