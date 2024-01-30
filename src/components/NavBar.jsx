import React from "react";
import { Link } from "react-router-dom";
import "./PlayerCard.css";

const NavBar = () => {
  return (
    <nav className="nav-bar">
      <Link to="/">Home</Link>
      <Link to="/players">All players</Link>
    </nav>
  );
};

export default NavBar;
