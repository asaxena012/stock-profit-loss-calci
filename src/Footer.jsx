import React from "react";
import { FaLinkedinIn, FaGithub, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex-column-center">
      <p>Aditya Saxena | 2021</p>
      <div className="icon-container">
        <a href="linkedin.com/in/adityasaxena012">
          <FaLinkedinIn />
        </a>
        <a href="github.com/asaxena012">
          <FaGithub />
        </a>
        <a href="twitter.com/keenAadi">
          <FaTwitter />
        </a>
      </div>
    </div>
  );
};

export default Footer;
