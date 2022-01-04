import React from "react";
import { Link } from "react-router-dom";
import logo from "../logo.svg";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to="/">
          <img src={logo} className="logo" alt="cocktail logo" />
        </Link>
      </div>
      <div className="nav-links">
        <Link to="/"> Home</Link>
        <Link to="/about"> About</Link>
      </div>
    </nav>
  );
};

export default Navbar;
