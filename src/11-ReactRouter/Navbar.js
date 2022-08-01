import React from "react";
import {Link} from "react-router-dom";

// <a href="/">Home</a>
//           <a href="/About">About</a>
//           <a href="/People">People</a>
const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/About">About</Link>
        </li>
        <li>
          <Link to="/People">People</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
