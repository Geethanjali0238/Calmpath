import { useState } from "react";

/**
 * @param {{ onBack: () => void }} props
 */
export default function Sudoku({ onBack }) {
  const initialGrid = [
    [5, 3, "", "", 7, "", "", "", ""],
    [6, "", "", 1, 9, 5, "", "", ""],
    ["", 9, 8, "", "", "", "", 6, ""],
    [8, "", "", "", 6, "", "", "", 3],
    [4, "", "", 8, "", 3, "", "", 1],
    [7, "", "", "", 2, "", "", "", 6],
    ["", 6, "", "", "", "", 2, 8, ""],
    ["", "", "", 4, 1, 9, "", "", 5],
    ["", "", "", "", 8, "", "", 7, 9]
  ];

  /** @type {[ (string|number)[][], Function ]} */
  const [grid, setGrid] = useState(initialGrid);

  /**
   * @param {number} row
   * @param {number} col
   * @param {string} value
   */
  function updateCell(row, col, value) {
    if (!/^[1-9]?$/.test(value)) return;

    const copy = grid.map(r => [...r]);
    copy[row][col] = value === "" ? "" : Number(value);
    setGrid(copy);
  }

  return (
    <div className="game-box">
      <button onClick={onBack}>← Back</button>
      <h3>Sudoku</h3>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(9, 42px)",
          gap: "2px",
          marginTop: "10px"
        }}
      >
        {grid.map((row, r) =>
          row.map((cell, c) => (
            <input
              key={`${r}-${c}`}
              value={cell}
              maxLength={1}
              onChange={(e) => updateCell(r, c, e.target.value)}
              style={{
                width: "42px",
                height: "42px",
                textAlign: "center",
                fontSize: "16px",
                border: "1px solid #d1d5db",
                background: cell !== "" ? "#d1fae5" : "#ffffff"
              }}
            />
          ))
        )}
      </div>
    </div>
  );
}
