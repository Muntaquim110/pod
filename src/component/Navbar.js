import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import "./Navbar.css";

 const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav>
      <Link to="/" className="title">
        POD
      </Link>
      <div className="menu" onClick={() => setMenuOpen(!menuOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <ul className={menuOpen ? "open" : ""}>
        <li>
          <NavLink to="/about" onClick={() => setMenuOpen (false)}>About</NavLink>
        </li>
        <li>
          <NavLink to="/podlist"  onClick={() => setMenuOpen (false)}>POD-List</NavLink>
        </li>
        <li>
          <NavLink to="/contact"  onClick={() => setMenuOpen (false)}>Contact</NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default  Navbar;