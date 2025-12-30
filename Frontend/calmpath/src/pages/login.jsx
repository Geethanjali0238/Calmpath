// @ts-nocheck
import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = () => {
    const user = JSON.parse(localStorage.getItem("user"));

    if (!user) {
      setError("No account found. Please sign up.");
      return;
    }

    // EMAIL RULE
    if (
      !email.endsWith("@gmail.com") &&
      !email.endsWith("@yahoo.co.in") &&
      !email.endsWith("@outlook.com")
    ) {
      setError("Invalid email domain");
      return;
    }

    // PASSWORD RULE
    if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[!@#$%^&*]/.test(password)
    ) {
      setError("Invalid password format");
      return;
    }

    if (email !== user.email || password !== user.password) {
      setError("Incorrect email or password");
      return;
    }

    navigate("/dashboard"); // ✅ sidebar appears here
  };

  return (
    <div style={page}>
      <div style={card}>
        <h2 style={title}>CalmPath 🌿</h2>
        <p>Welcome back</p>

        {error && <p style={errorText}>{error}</p>}

        <input
          style={input}
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          style={input}
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button style={btn} onClick={handleLogin}>
          Login
        </button>

        <p style={linkText}>
          New here?{" "}
          <span style={link} onClick={() => navigate("/signup")}>
            Create account
          </span>
        </p>
      </div>
    </div>
  );
}

/* SAME STYLES AS SIGNUP */
const page = {
  height: "100vh",
  background: "#f4f9f6",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
};

const card = {
  background: "white",
  padding: "35px",
  borderRadius: "16px",
  width: "340px",
  boxShadow: "0 10px 30px rgba(0,0,0,0.1)",
  textAlign: "center",
};

const title = {
  color: "#2d6a4f",
  marginBottom: "10px",
};

const input = {
  width: "100%",
  padding: "10px",
  marginTop: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
};

const btn = {
  width: "100%",
  padding: "10px",
  marginTop: "15px",
  background: "#2d6a4f",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontWeight: "600",
};

const errorText = {
  color: "red",
  fontSize: "14px",
};

const linkText = {
  marginTop: "12px",
  fontSize: "14px",
};

const link = {
  color: "#2d6a4f",
  fontWeight: "600",
  cursor: "pointer",
};
