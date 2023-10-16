import React from "react";
import logo from "../images/logo-1.png";
import { navLinks } from "../data";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar" id="home">
      <div className="navbar-center">
        <div className="navbar-header">
          <img src={logo} className="navbar-logo" alt="cakes" />
        </div>

        <ul className="links" id="nav-links">
          {navLinks.map(({ id, href, text }) => {
            return (
              <li key={id}>
                <Link to={href} className="link">
                  {text}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
