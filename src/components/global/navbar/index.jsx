import React from "react";
import "./index.css";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <a className="navbar-button" href="/">
        Home
      </a>
      <a className="navbar-button create" href="/create-article">
        Create an article
      </a>
    </div>
  );
};

export default Navbar;
