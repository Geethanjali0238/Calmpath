// @ts-nocheck
import React, { useState, useEffect } from "react";

// @ts-nocheck
import { useState } from "react";
import Layout from "../components/Layout";

const cards = ["🍎", "🍌", "🍇", "🍉"];

export default function MemoryGame() {
  const shuffled = [...cards, ...cards].sort(() => Math.random() - 0.5);

  const [opened, setOpened] = useState([]);
  const [matched, setMatched] = useState([]);

  const handleClick = (index) => {
    if (opened.length === 2 || opened.includes(index)) return;

    const newOpened = [...opened, index];
    setOpened(newOpened);

    if (newOpened.length === 2) {
      const [i1, i2] = newOpened;
      if (shuffled[i1] === shuffled[i2]) {
        setMatched([...matched, shuffled[i1]]);
      }
      setTimeout(() => setOpened([]), 800);
    }
  };

  return (
    <Layout>
      <h2>🎯 Memory Game</h2>

      <div style={grid}>
        {shuffled.map((card, i) => {
          const show =
            opened.includes(i) || matched.includes(card);
          return (
            <div
              key={i}
              style={cardStyle}
              onClick={() => handleClick(i)}
            >
              {show ? card : "❓"}
            </div>
          );
        })}
      </div>
    </Layout>
  );
}

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 60px)",
  gap: "10px",
  marginTop: "20px",
};

const cardStyle = {
  width: "60px",
  height: "60px",
  background: "#2d6a4f",
  color: "white",
  fontSize: "24px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "8px",
  cursor: "pointer",
};