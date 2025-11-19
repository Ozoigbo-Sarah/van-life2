import { NavLink, Outlet } from "react-router-dom";

export default function HostLayout() {
  const activeStyle = {
    fontWeight: "bold",
    borderBottom: "2px solid black",
    color: "#161616"
  };

  return (
    <div className="host-layout">
      <nav className="host-nav">
        <NavLink to="." end style={({ isActive }) => (isActive ? activeStyle : null)}>
          Dashboard
        </NavLink>
        <NavLink to="income" style={({ isActive }) => (isActive ? activeStyle : null)}>
          Income
        </NavLink>
        <NavLink to="vans" style={({ isActive }) => (isActive ? activeStyle : null)}>
          Vans
        </NavLink>
        <NavLink to="review" style={({ isActive }) => (isActive ? activeStyle : null)}>
          Reviews
        </NavLink>
      </nav>

      <div className="host-content">
        <Outlet />
      </div>
    </div>
  );
}