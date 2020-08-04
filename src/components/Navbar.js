import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Navbar(props) {
  return (
    <div className="nav">
      <div>
        <ul>
          <li>
            <Link to="/">Animal Crossing</Link>
          </li>
          <li>
            <Link to="/discover">Discover</Link>
          </li>
          <li>
            <Link to="/search">Search</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
