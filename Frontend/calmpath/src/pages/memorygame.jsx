// @ts-nocheck
import React from "react";

import { useState, useEffect } from "react";
import Layout from "../components/Layout";

const symbols = ["🍎", "🍌", "🍇", "🍉", "🥝", "🍓"];

export default function MemoryGame() {
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);

  // create & shuffle cards ONCE
  useEffect(() => {
    const shuffled = [...symbols, ...symbols]
      .map((symbol) => ({ symbol, id: Math.random() }))
      .sort(() => Math.random() - 0.5);

    setCards(shuffled);
  }, []);

  const handleFlip = (index) => {
    if (
      flipped.length === 2 ||
      flipped.includes(index) ||
      matched.includes(cards[index].symbol)
    ) {
      return;
    }

    const newFlipped = [...flipped, index];
    setFlipped(newFlipped);

    if (newFlipped.length === 2) {
      const [i1, i2] = newFlipped;

      if (cards[i1].symbol === cards[i2].symbol) {
        setMatched([...matched, cards[i1].symbol]);
      }

      setTimeout(() => setFlipped([]), 800);
    }
  };

  return (
    <Layout>
      <h2 style={{ color: "#2d6a4f" }}>🎯 Memory Game</h2>
      <p>Flip two cards and find matching pairs</p>

      <div style={grid}>
        {cards.map((card, index) => {
          const isOpen =
            flipped.includes(index) ||
            matched.includes(card.symbol);

          return (
            <div
              key={card.id}
              style={{
                ...cardStyle,
                background: isOpen ? "#2d6a4f" : "#95d5b2",
              }}
              onClick={() => handleFlip(index)}
            >
              {isOpen ? card.symbol : "❓"}
            </div>
          );
        })}
      </div>

      {matched.length === symbols.length && (
        <p style={win}>🎉 You matched all cards!</p>
      )}
    </Layout>
  );
}

/* ---------- STYLES ---------- */

const grid = {
  display: "grid",
  gridTemplateColumns: "repeat(4, 70px)",
  gap: "15px",
  marginTop: "30px",
};

const cardStyle = {
  width: "70px",
  height: "70px",
  borderRadius: "12px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "28px",
  cursor: "pointer",
  color: "white",
  userSelect: "none",
};

const win = {
  marginTop: "20px",
  color: "#2d6a4f",
  fontWeight: "600",
};
