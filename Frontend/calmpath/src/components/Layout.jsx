// @ts-nocheck
import React from "react";

import { useNavigate } from "react-router-dom";

export default function Layout({ children }) {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.clear();
    navigate("/login");
  };

  return (
    <div style={container}>
      {/* SIDEBAR */}
      <aside style={sidebar}>
        {/* TOP NAV */}
        <div>
          <h2 style={logo}>CalmPath 🌿</h2>

          <button style={navBtn} onClick={() => navigate("/dashboard")}>
            Dashboard
          </button>
          <button style={navBtn} onClick={() => navigate("/mood")}>
            Mood Tracker
          </button>
          <button style={navBtn} onClick={() => navigate("/history")}>
            Mood History
          </button>
          <button style={navBtn} onClick={() => navigate("/journal")}>
            Journal
          </button>
          <button style={navBtn} onClick={() => navigate("/mindgames")}>
  🧠 Mind Games
          </button>

          <button style={navBtn} onClick={() => navigate("/profile")}>
            Profile
          </button>
        </div>

        {/* BOTTOM */}
        <button style={logoutBtn} onClick={logout}>
          🔓 Logout
        </button>
      </aside>

      {/* MAIN CONTENT */}
      <main style={content}>{children}</main>
    </div>
  );
}

/* ---------- STYLES (REAL DARK GREEN) ---------- */

const container = {
  display: "flex",
  minHeight: "100vh",
};

const sidebar = {
  width: "240px",
  padding: "25px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "space-between",
  backgroundColor: "#1b4332", // 🌿 DARK GREEN
};

const logo = {
  color: "#d8f3dc",
  marginBottom: "28px",
  fontWeight: "600",
};

const navBtn = {
  display: "block",
  width: "100%",
  padding: "12px",
  marginBottom: "14px",
  border: "none",
  borderRadius: "10px",
  backgroundColor: "#2d6a4f", // slightly lighter green
  color: "#ecfdf3",
  fontSize: "14px",
  fontWeight: "500",
  cursor: "pointer",
  textAlign: "left",
};

const logoutBtn = {
  padding: "12px",
  border: "none",
  borderRadius: "10px",
  backgroundColor: "#40916c",
  color: "white",
  fontWeight: "600",
  cursor: "pointer",
};

const content = {
  flex: 1,
  padding: "30px",
  backgroundColor: "#f8faf9",
};
