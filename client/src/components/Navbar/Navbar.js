import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { RiLoginBoxFill, RiLogoutBoxFill } from "react-icons/ri";
import { CgProfile } from "react-icons/cg";

export default function Navbar() {
  const sessionUser = sessionStorage.getItem("user");

  return (
    <nav>
      {!sessionUser ? (
        <ul>
          <li>
            <Link to="/login">
              <RiLoginBoxFill />
            </Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/write">Write</Link>
          </li>
          <li>
            <Link to="/users">Bloggers</Link>
          </li>
          <li>
            <RiLogoutBoxFill
              onClick={() => sessionStorage.clear()}
              className="icon"
            />
          </li>
          <li>
            <Link to="me">
              <CgProfile className="icon" />
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
}
