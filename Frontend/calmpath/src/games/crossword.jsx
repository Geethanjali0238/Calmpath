import { useState } from "react";

/**
 * @param {{ onBack: () => void }} props
 */
export default function Crossword({ onBack }) {
  /** @type {[{ calm: string; zen: string }, Function]} */
  const [answers, setAnswers] = useState({ calm: "", zen: "" });

  function check() {
    if (
      answers.calm.toLowerCase() === "calm" &&
      answers.zen.toLowerCase() === "zen"
    ) {
      alert("✅ Correct!");
    } else {
      alert("❌ Try again");
    }
  }

  return (
    <div className="game-box">
      <button onClick={onBack}>← Back</button>
      <h3>Crossword</h3>

      <p>Opposite of stress (4)</p>
      <input
        value={answers.calm}
        onChange={(e) => setAnswers({ ...answers, calm: e.target.value })}
      />

      <p>State of deep peace (3)</p>
      <input
        value={answers.zen}
        onChange={(e) => setAnswers({ ...answers, zen: e.target.value })}
      />

      <button onClick={check}>Check</button>
    </div>
  );
}
