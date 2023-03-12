import React from "react";
import { Link } from "react-router-dom";
import './CSS/Footer.css'

const Footer = () => {
  return (
    <div id="deepFooter">
      <div id="postlogos">
        <i class="fa-brands fa-facebook"></i>
        <i class="fa-brands fa-twitter"></i>
        <i class="fa-brands fa-instagram"></i>
        <i class="fa-brands fa-pinterest"></i>
      </div>

      <div id="adminFooterLink">
        <Link to='adminPage'>Admin Login</Link>
      </div>
    </div>
  );
};

export default Footer;
