// @ts-nocheck
import React from "react";

import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = () => {
    // EMAIL RULE
    if (
      !email.endsWith("@gmail.com") &&
      !email.endsWith("@yahoo.co.in") &&
      !email.endsWith("@outlook.com")
    ) {
      setError("Use @gmail.com, @yahoo.co.in or @outlook.com only");
      return;
    }

    // PASSWORD RULE
    if (
      password.length < 8 ||
      !/[A-Z]/.test(password) ||
      !/[a-z]/.test(password) ||
      !/[!@#$%^&*]/.test(password)
    ) {
      setError(
        "Password must be 8+ chars with uppercase, lowercase & special character"
      );
      return;
    }

    // SAVE USER (PROFILE LINK)
    localStorage.setItem(
      "user",
      JSON.stringify({ name, email, password })
    );

    navigate("/login");
  };

  return (
    <div style={page}>
      <div style={card}>
        <h2 style={title}>CalmPath 🌿</h2>
        <p>Create your account</p>

        {error && <p style={errorText}>{error}</p>}

        <input
          style={input}
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

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

        <button style={btn} onClick={handleSignup}>
          Sign Up
        </button>

        <p style={linkText}>
          Already have an account?{" "}
          <span style={link} onClick={() => navigate("/login")}>
            Login
          </span>
        </p>
      </div>
    </div>
  );
}

/* ---------- STYLES ---------- */
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
