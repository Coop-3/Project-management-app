import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaTachometerAlt, FaTasks, FaProjectDiagram, FaEnvelope, FaBell, FaCog, FaChevronLeft } from "react-icons/fa";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <aside className={`sidebar bg-light ${collapsed ? "collapsed" : ""}`}>
      <div className="sidebar-top d-flex align-items-center justify-content-between px-3 py-3">
        <div className="brand d-flex align-items-center gap-2">
          <div className="brand-mark" />
          <div className="brand-text">Connect+</div>
        </div>
        <button className="btn btn-sm btn-toggle" onClick={() => setCollapsed(!collapsed)}>
          <FaChevronLeft />
        </button>
      </div>

      <nav className="nav flex-column px-2">
        <NavLink to="/dashboard" className={({isActive}) => "nav-link d-flex align-items-center gap-2 py-2 px-3 " + (isActive ? "active" : "")}>
          <FaTachometerAlt /> <span className="link-text">Dashboard</span>
        </NavLink>

        <NavLink to="/tasks" className={({isActive}) => "nav-link d-flex align-items-center gap-2 py-2 px-3 " + (isActive ? "active" : "")}>
          <FaTasks /> <span className="link-text">My Tasks</span>
        </NavLink>

        <NavLink to="/projects" className={({isActive}) => "nav-link d-flex align-items-center gap-2 py-2 px-3 " + (isActive ? "active" : "")}>
          <FaProjectDiagram /> <span className="link-text">Projects</span>
        </NavLink>

        <NavLink to="/messages" className={({isActive}) => "nav-link d-flex align-items-center gap-2 py-2 px-3 " + (isActive ? "active" : "")}>
          <FaEnvelope /> <span className="link-text">Messages</span>
        </NavLink>

        <NavLink to="/alerts" className={({isActive}) => "nav-link d-flex align-items-center gap-2 py-2 px-3 " + (isActive ? "active" : "")}>
          <FaBell /> <span className="link-text">Alerts</span>
        </NavLink>

        <NavLink to="/settings" className={({isActive}) => "nav-link d-flex align-items-center gap-2 py-2 px-3 " + (isActive ? "active" : "")}>
          <FaCog /> <span className="link-text">Settings</span>
        </NavLink>
      </nav>

      <div className="sidebar-footer px-3 mt-auto">
        <small className="text-muted">© Connect+</small>
      </div>
    </aside>
  );
}
