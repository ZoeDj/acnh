import React from "react";
import { Link } from "react-router-dom";
import "../index.css";

export default function Navbar(props) {
  return (
    <div className="nav">
      <div>
        <ul>
          <li>
            <Link to="/acnh">Animal Crossing</Link>
          </li>
          <li>
            <Link to="/acnh/discover">Discover</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
