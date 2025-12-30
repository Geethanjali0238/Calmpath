// @ts-nocheck
import { useState } from "react";
import Layout from "../components/Layout";

const solution = [
  ["1", "2", "3", "4"],
  ["3", "4", "1", "2"],
  ["2", "1", "4", "3"],
  ["4", "3", "2", "1"],
];

export default function Sudoku() {
  const [grid, setGrid] = useState([
    ["1", "", "", "4"],
    ["", "4", "", ""],
    ["", "", "4", ""],
    ["4", "", "", "1"],
  ]);

  const handleChange = (r, c, value) => {
    if (!/^[1-4]?$/.test(value)) return;
    const copy = [...grid];
    copy[r][c] = value;
    setGrid(copy);
  };

  const checkSolution = () => {
    const correct = JSON.stringify(grid) === JSON.stringify(solution);
    alert(correct ? "🎉 Correct!" : "❌ Try again");
  };

  return (
    <Layout>
      <h2>🔢 Sudoku (Easy)</h2>

      <div style={board}>
        {grid.map((row, r) =>
          row.map((cell, c) => (
            <input
              key={`${r}-${c}`}
              value={cell}
              onChange={(e) => handleChange(r, c, e.target.value)}
              style={cellStyle}
            />
          ))
        )}
      </div>

      <button style={btn} onClick={checkSolution}>
        Check
      </button>
    </Layout>
  );
}

const board = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 50px)",
  gap: "5px",
  marginTop: "20px",
};

const cellStyle = {
  width: "50px",
  height: "50px",
  textAlign: "center",
  fontSize: "18px",
};

const btn = {
  marginTop: "20px",
  padding: "10px",
  background: "#2d6a4f",
  color: "white",
  border: "none",
  borderRadius: "8px",
};
