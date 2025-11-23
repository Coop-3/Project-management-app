import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Topbar from "./components/Topbar";
import Sidebar from "./components/SideNav";

import Dashboard from "./pages/Dashboard";
import MyTasks from "./pages/MyTasks";
import Projects from "./pages/Projects";
import Messages from "./pages/Messages";
import Alerts from "./pages/Alerts";
import Settings from "./pages/settings";

export default function App() {
  return (
    <div className="app-root d-flex">
      <Sidebar />
      <div className="main-content flex-grow-1">
        <Topbar />
        <div className="page-container p-4">
          <Routes>
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/tasks" element={<MyTasks />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/messages" element={<Messages />} />
            <Route path="/alerts" element={<Alerts />} />
            <Route path="/settings" element={<Settings />} />
            {/* Add protected routes/auth checks later */}
          </Routes>
        </div>
      </div>
    </div>
  );
}
