import { useState } from "react";
import Layout from "../components/Layout";

import MemoryGame from "../games/MemoryGame";
import Sudoku from "../games/Sudoku";
import Crossword from "../games/Crossword";

/** @typedef {"memory" | "sudoku" | "crossword" | null} GameType */

export default function MindGames() {
  /** @type {[GameType, Function]} */
  const [activeGame, setActiveGame] = useState(null);

  return (
    <Layout>
      <div className="game-container">
        {!activeGame && (
          <div style={{ display: "flex", gap: "20px" }}>
            <div className="game-card" onClick={() => setActiveGame("memory")}>
              Memory Game
            </div>
            <div className="game-card" onClick={() => setActiveGame("sudoku")}>
              Sudoku
            </div>
            <div className="game-card" onClick={() => setActiveGame("crossword")}>
              Crossword
            </div>
          </div>
        )}

        {activeGame === "memory" && (
          <MemoryGame onBack={() => setActiveGame(null)} />
        )}
        {activeGame === "sudoku" && (
          <Sudoku onBack={() => setActiveGame(null)} />
        )}
        {activeGame === "crossword" && (
          <Crossword onBack={() => setActiveGame(null)} />
        )}
      </div>
    </Layout>
  );
}
