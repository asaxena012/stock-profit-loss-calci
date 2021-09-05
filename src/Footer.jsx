import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex-column-center">
      <p>Aditya Saxena | 2021</p>
      <div className="icon-container">
        <a
          href="https://www.linkedin.com/in/adityasaxena012"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
        <a
          href="https://www.github.com/asaxena012"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>
        <a
          href="https://www.twitter.com/keenAadi"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Footer;
