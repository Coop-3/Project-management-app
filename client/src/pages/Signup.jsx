import React, { useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import "../styles/auth.css";
import connectLogo from "../assets/Logo.png";

export default function Signup() {
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignup = async (e) => {
    e.preventDefault();

    const res = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ fullName, username, email, password }),
    });

    const data = await res.json();
    alert(data.message || data.error);
  };

  return (
    <div className="auth-wrapper signup-bg">
      <div className="auth-content">
        <div className="auth-card">
          <div className="logo-row">
            <img src={connectLogo} alt="Connect+ logo" className="auth-logo" />
          </div>

          <h2 className="auth-heading">Join Connect+</h2>

          <form className="mt-3" onSubmit={handleSignup}>
            {/* FULL NAME */}
            <div className="mb-3">
              <label className="form-label">Full Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="John Doe"
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                required
              />
            </div>

            {/* USERNAME */}
            <div className="mb-3">
              <label className="form-label">Username</label>
              <input
                type="text"
                className="form-control"
                placeholder="johndoe123"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>

            {/* EMAIL */}
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </div>

            {/* PASSWORD */}
            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                placeholder="Create a password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </div>

            {/* MAIN SIGNUP BUTTON */}
            <button type="submit" className="btn auth-btn w-100 mb-3">
              Create Account
            </button>

            {/* DIVIDER */}
            <div className="divider">
              <span>or</span>
            </div>

            {/* SOCIAL LOGIN BUTTONS */}
            <div className="social-row">
              <button type="button" className="social-btn social-google">
                <FaGoogle /> <span>Sign up with Google</span>
              </button>

              <button type="button" className="social-btn social-github">
                <FaGithub /> <span>Sign up with GitHub</span>
              </button>
            </div>

            <p className="text-center small mt-3">
              Already have an account? <a href="/login">Log in</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
