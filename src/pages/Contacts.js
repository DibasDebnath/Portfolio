import React from "react";
import {
  FaLinkedin,
  FaGithub,
  FaEnvelope,
  FaTrello,
  FaGoogleDrive,
  FaFile
} from "react-icons/fa"; // Font Awesome icons
import "./Contacts.css";

const Contacts = () => {
  return (
    <div className="contacts">
      <h1>Contact Me</h1>
      <ul className="contacts-list">
        <li>
          <a
            href="DibasDebnathResume2024.pdf"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaFile className="icon" /> Resume
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/dibasdebnath/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="icon" /> LinkedIn
          </a>
        </li>
        <li>
          <a href="mailto:dibasdebnath@gmail.com">
            <FaEnvelope className="icon" /> dibasdebnath@gmail.com
          </a>
        </li>
        <li>
          <a
            href="https://github.com/DibasDebnath"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub className="icon" /> GitHub
          </a>
        </li>
        <li>
          <a
            href="https://trello.com/b/J7yfD7wU/skating-master"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaTrello className="icon" /> Trello
          </a>
        </li>

        <li>
          <a
            href="https://drive.google.com/drive/folders/1iy2ALHIfbG3pO2-nyiepcJhW3iH6PBS8?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGoogleDrive className="icon" /> Project Documents
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Contacts;
