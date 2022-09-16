import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

const Header = () => {
  return (
    <header className="d-flex justify-content-between align-items-center p-3">
      <h2 className="ms-5">
        <span>memo</span>ries
      </h2>
      <div className="header-links me-5">
        <Link to="/login">Login</Link>
        <Link to="/register">Sign Up</Link>
      </div>
    </header>
  );
};

export default Header;
