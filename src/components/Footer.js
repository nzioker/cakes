import React from "react";
import { navLinks } from "../data";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        {navLinks.map(({ id, href, text }) => {
          return (
            <li key={id}>
              <Link to={href} className="footer-link">
                {text}
              </Link>
            </li>
          );
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Cakes By Jewel
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};

export default Footer;
