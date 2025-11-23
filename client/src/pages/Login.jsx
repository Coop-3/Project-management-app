import React, { useState } from "react";
import { FaGoogle, FaGithub } from "react-icons/fa";
import "../styles/auth.css";
import connectLogo from "../assets/Logo.png";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const data = await res.json();

      if (res.ok) {
        setMessage("✔ Valid credentials — Login successful!");
      } else {
        setMessage(`❌ ${data.error || "Login failed"}`);
      }
    } catch (error) {
      console.error(error);
      setMessage("❌ Network error — backend may be down");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper login-bg">
      <div className="auth-content">
        <div className="auth-card">
          <img src={connectLogo} alt="Connect+ logo" className="auth-logo" />

          <h2 className="auth-heading">Connect+</h2>

          <form className="mt-3" onSubmit={handleSubmit}>
            <div className="mb-3">
              <label className="form-label">Email</label>
              <input
                type="email"
                className="form-control"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Password</label>
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
                required
              />
            </div>

            <button type="submit" className="btn auth-btn w-100 mb-3" disabled={loading}>
              {loading ? "Checking..." : "Login"}
            </button>

            {message && (
              <div className="text-center" style={{ color: message.includes("✔") ? "green" : "red" }}>
                {message}
              </div>
            )}

            <div className="text-center mb-3">
              <a href="/forgot-password" className="text-muted small">Forgot Password?</a>
            </div>

            <div className="divider"><span>or</span></div>

            <div className="social-row">
              <button className="social-btn social-google"><FaGoogle /> <span>Google</span></button>
              <button className="social-btn social-github"><FaGithub /> <span>GitHub</span></button>
            </div>

            <p className="text-center small mt-3">
              Don’t have an account? <a href="/signup">Sign Up</a>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
