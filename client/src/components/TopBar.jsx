import React, { useState } from "react";
import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

export default function Topbar() {
  const [query, setQuery] = useState("");
  return (
    <header className="topbar d-flex align-items-center justify-content-between px-4 py-2">
      <div className="left d-flex align-items-center gap-3">
        <div className="page-title h5 m-0">Overview</div>

        <div className="search-input d-none d-md-flex align-items-center">
          <FaSearch className="me-2" />
          <input
            className="form-control form-control-sm search-field"
            placeholder="Search tasks, projects..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
        </div>
      </div>

      <div className="right d-flex align-items-center gap-3">
        <button className="btn btn-sm icon-btn position-relative">
          <FaBell />
          <span className="badge bg-warning text-dark position-absolute top-0 start-100 translate-middle">3</span>
        </button>

        <div className="profile d-flex align-items-center gap-2">
          <FaUserCircle size={28} />
          <div className="d-none d-md-block">
            <div className="fw-bold">Makayla</div>
            <div className="small text-muted">Student</div>
          </div>
        </div>
      </div>
    </header>
  );
}
