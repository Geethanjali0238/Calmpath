//@ts-nocheck
import React , { useState } from "react";

const solution = [
  [1,2,3,4],
  [3,4,1,2],
  [2,1,4,3],
  [4,3,2,1]
];

export default function Sudoku4x4() {
  const [grid, setGrid] = useState([
    [1,"","",4],
    ["",4,"",""],
    ["","",4,""],
    [4,"","",1]
  ]);

  function change(r,c,v) {
    if (v === "" || /^[1-4]$/.test(v)) {
      const g = grid.map(row => [...row]);
      g[r][c] = v;
      setGrid(g);
    }
  }

  function check() {
    const ok = grid.every((row,r) =>
      row.every((v,c) => Number(v) === solution[r][c])
    );
    alert(ok ? "✅ Correct!" : "❌ Try again");
  }

  return (
    <div style={{ marginBottom: 40 }}>
      <h3 style={{ color: "#2e7d32" }}>Sudoku 4×4</h3>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 40px)", gap: 4 }}>
        {grid.map((row,r) =>
          row.map((v,c) => (
            <input
              key={`${r}-${c}`}
              value={v}
              onChange={e => change(r,c,e.target.value)}
              style={{
                width: 40,
                height: 40,
                textAlign: "center",
                fontSize: 18
              }}
            />
          ))
        )}
      </div>

      <button onClick={check} style={{ marginTop: 10 }}>Check Answer</button>
    </div>
  );
}
