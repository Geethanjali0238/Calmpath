import { useState } from "react";

/**
 * @param {{ onBack: () => void }} props
 */
export default function MemoryGame({ onBack }) {
  const symbols = ["🌸", "🌿", "💗", "⭐", "🌸", "🌿", "💗", "⭐"];

  /** @type {[string[], Function]} */
  const [cards] = useState(() =>
    [...symbols].sort(() => Math.random() - 0.5)
  );

  /** @type {[number[], Function]} */
  const [open, setOpen] = useState([]);

  /** @type {[string[], Function]} */
  const [matched, setMatched] = useState([]);

  /**
   * @param {number} index
   */
  function handleClick(index) {
    if (open.length === 2 || open.includes(index)) return;

    const nextOpen = [...open, index];
    setOpen(nextOpen);

    if (nextOpen.length === 2) {
      const [a, b] = nextOpen;
      if (cards[a] === cards[b]) {
        setMatched([...matched, cards[a]]);
      }
      setTimeout(() => setOpen([]), 700);
    }
  }

  return (
    <div className="game-box">
      <button onClick={onBack}>← Back</button>
      <h3>Memory Game</h3>

      <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 70px)", gap: "12px" }}>
        {cards.map((card, i) => {
          const show = open.includes(i) || matched.includes(card);
          return (
            <div
              key={i}
              onClick={() => handleClick(i)}
              style={{
                width: "70px",
                height: "70px",
                background: show ? "#d1fae5" : "#fce7f3",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: "26px",
                cursor: "pointer"
              }}
            >
              {show ? card : ""}
            </div>
          );
        })}
      </div>
    </div>
  );
}
