import React from "react";
import { NavLink, Link} from "react-router-dom";

export default function Header() {

   const activeStyle = {
    fontWeight: "bold",
    textDecoration: "underline",
    color: "#161616"
   }
  return (
    <header className="header">
      <Link className="site-logo" to="/">#VANLIFE</Link>
      <nav className="nav">
        <NavLink 
        to="/about"
        style={({ isActive }) => (isActive ? activeStyle : null)}
        >About</NavLink>
        <NavLink 
        to="/vans"
        style={({ isActive }) => (isActive ? activeStyle : null)}
        >Vans</NavLink>
        <NavLink 
        to="/host"
        style={({ isActive }) => (isActive ? activeStyle : null)}
        >Host</NavLink>
        <NavLink
        to="/login"
        className="login-link"
        style={({ isActive }) => (isActive ? activeStyle : null)}
        >log in</NavLink>
        <NavLink
        to="/logout"
        style={({ isActive }) => (isActive ? activeStyle : null)}
        >log out</NavLink>
      </nav>
    </header>
  );
}

        