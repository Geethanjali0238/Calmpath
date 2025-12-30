import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function MindGames() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>🧠 Mind Games</h1>

      {/* GAME LINKS */}
      <div style={{ marginBottom: "20px" }}>
        <Link to="sudoku">Sudoku</Link> |{" "}
        <Link to="memory">Memory Game</Link> |{" "}
        <Link to="crossword">Crossword</Link>
      </div>

      {/* THIS IS MANDATORY */}
      <Outlet />
    </div>
  );
}
