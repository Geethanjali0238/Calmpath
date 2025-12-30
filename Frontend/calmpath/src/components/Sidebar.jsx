import { useNavigate } from "react-router-dom";

export default function Sidebar() {
  const navigate = useNavigate();

  return (
    <div style={sidebar}>
      <h2>CalmPath 🌿</h2>

      <p style={item} onClick={() => navigate("/dashboard")}>
        Dashboard
      </p>

      <p style={item} onClick={() => navigate("/mood")}>
        Mood Tracker
      </p>

      <p style={item} onClick={() => navigate("/history")}>
        Mood History
      </p>

      <p style={item} onClick={() => navigate("/journal")}>
        Journal
      </p>
      <p style={item} onClick={() => navigate("/mindgames")}>
  🧠 Mind Games
      </p>


      <p style={item} onClick={() => navigate("/profile")}>
        Profile
      </p>
    </div>
  );
}

const sidebar = {
  width: "240px",
  background: "#1b4332",
  color: "white",
  minHeight: "100vh",
  padding: "20px",
};

const item = {
  padding: "12px",
  marginBottom: "10px",
  background: "#2d6a4f",
  borderRadius: "10px",
  cursor: "pointer",
};
