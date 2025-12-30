// @ts-nocheck
import { useState, useEffect } from "react";
import Layout from "../components/Layout";

const EMPTY_GRID = [
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
  ["", "", "", "", ""],
];

const SOLUTION = [
  ["A", "P", "P", "L", "E"],
  ["", "B", "", "", ""],
  ["", "L", "", "", ""],
  ["", "U", "", "", ""],
  ["R", "E", "L", "A", "X"],
];

export default function Crossword() {
  const [grid, setGrid] = useState(EMPTY_GRID);

  // 🔥 THIS FIXES AUTO‑RESET
  useEffect(() => {
    setGrid(EMPTY_GRID);
  }, []);

  const handleChange = (r, c, value) => {
    if (!/^[A-Za-z]?$/.test(value)) return;
    const copy = grid.map(row => [...row]);
    copy[r][c] = value.toUpperCase();
    setGrid(copy);
  };

  const checkAnswers = () => {
    const correct =
      JSON.stringify(grid) === JSON.stringify(SOLUTION);
    alert(correct ? "🎉 Correct!" : "❌ Try again");
  };

  const resetCrossword = () => {
    setGrid(EMPTY_GRID);
  };

  return (
    <Layout>
      <h2 style={{ color: "#2d6a4f" }}>✏️ Easy Crossword</h2>

      <div style={board}>
        {grid.map((row, r) =>
          row.map((cell, c) => {
            const isBlocked = SOLUTION[r][c] === "";
            return (
              <input
                key={`${r}-${c}`}
                value={cell}
                disabled={isBlocked}
                onChange={(e) =>
                  handleChange(r, c, e.target.value)
                }
                style={{
                  ...box,
                  backgroundColor: isBlocked ? "#ccc" : "white",
                }}
              />
            );
          })
        )}
      </div>

      <div style={clues}>
        <b>Across</b>
        <p>1. A red fruit (5)</p>
        <p>3. Opposite of stress (5)</p>

        <b>Down</b>
        <p>2. Color of the sky (4)</p>
      </div>

      <div style={btnRow}>
        <button style={btn} onClick={checkAnswers}>
          Check Answers
        </button>
        <button style={resetBtn} onClick={resetCrossword}>
          Reset
        </button>
      </div>
    </Layout>
  );
}

/* ---------- STYLES ---------- */

const board = {
  display: "grid",
  gridTemplateColumns: "repeat(5, 50px)",
  gap: "6px",
  marginTop: "20px",
};

const box = {
  width: "50px",
  height: "50px",
  textAlign: "center",
  fontSize: "18px",
  fontWeight: "600",
  border: "1px solid #333",
};

const clues = {
  marginTop: "20px",
  fontSize: "14px",
};

const btnRow = {
  display: "flex",
  gap: "12px",
  marginTop: "20px",
};

const btn = {
  padding: "10px 18px",
  background: "#2d6a4f",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};

const resetBtn = {
  padding: "10px 18px",
  background: "#adb5bd",
  color: "#333",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
};
