import React, { useState } from "react";
import "../styles/auth.css";
import connectLogo from "../assets/Logo.png";

export default function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await fetch("http://localhost:5000/api/auth/forgot-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = await res.json();
      if (res.ok) {
        alert("If your email exists, reset instructions were sent.");
      } else {
        alert(data.error || "Failed to send reset link");
      }
    } catch (err) {
      console.error(err);
      alert("Network error — check backend");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-wrapper forgot-bg">
      <div className="auth-card forgot-card">
        <img src={connectLogo} alt="Connect+" className="auth-logo" />
        <h2 className="auth-heading">Forgot Password</h2>

        <form onSubmit={handleSubmit} className="auth-form">
          <label className="form-label">Email</label>
          <input
            className="form-control"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          <button className="auth-btn" type="submit" disabled={loading}>
            {loading ? "Sending..." : "Send Reset Link"}
          </button>
        </form>

        <p className="auth-footer-small">
          <a className="link-purple" href="/login">Back to login</a>
        </p>
      </div>
    </div>
  );
}
