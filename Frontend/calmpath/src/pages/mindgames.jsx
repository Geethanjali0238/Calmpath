// @ts-nocheck
import React, { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

export default function MindGames() {
  const navigate = useNavigate();

  return (
    <Layout>
      <h2 style={{ color: "#2d6a4f" }}>🧠 Mind Games</h2>
      <p>Choose a game to relax your mind</p>

      <div style={grid}>
        <div style={card} onClick={() => navigate("/mindgames/sudoku")}>
          🔢 Sudoku
        </div>

        <div style={card} onClick={() => navigate("/mindgames/memory")}>
          🎯 Memory Game
        </div>

        <div style={card} onClick={() => navigate("/mindgames/crossword")}>
          ✏️ Crossword
        </div>
      </div>
    </Layout>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
  gap: "20px",
  marginTop: "30px",
};

const card = {
  background: "#f4f9f6",
  padding: "25px",
  borderRadius: "14px",
  textAlign: "center",
  fontWeight: "600",
  cursor: "pointer",
};