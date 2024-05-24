import React, { useContext } from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ThemeContext } from "../context";

export const Navbar = () => {

  const {mode} = useContext(ThemeContext)
  console.log(mode);
  
  return (
    <div>
      <ul>
        <li>
          <Link className="link" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="link" to="first">
            First
          </Link>
        </li>
        <li>
          <Link className="link" to="second">
            Second
          </Link>
        </li>
        <li>
          <Link className="link" to="third">
            Third
          </Link>
        </li>
      </ul>
    </div>
  );
};
