import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaTrello,
  FaGoogleDrive,
  FaFile,
} from "react-icons/fa"; // Import icons
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} Dibas Debnath. All rights reserved.
        </p>
        <ul className="footer-links">
          <li>
            <a
              href="DibasDebnathResume2024.pdf"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFile className="icon" />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/dibasdebnath/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="icon" />
            </a>
          </li>
          <li>
            <a href="mailto:dibasdebnath@gmail.com">
              <FaEnvelope className="icon" />
            </a>
          </li>
          <li>
            <a
              href="https://github.com/DibasDebnath"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="icon" />
            </a>
          </li>

          <li>
            <a
              href="https://trello.com/b/J7yfD7wU/skating-master"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTrello className="icon" />
            </a>
          </li>
          <li>
            <a
              href="https://drive.google.com/drive/folders/1iy2ALHIfbG3pO2-nyiepcJhW3iH6PBS8?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGoogleDrive className="icon" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
