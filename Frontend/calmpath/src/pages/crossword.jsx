// @ts-nocheck
import React, { useState } from "react";
import Layout from "../components/Layout";

export default function Crossword() {
  const [answers, setAnswers] = useState({
    relax: "",
    sky: "",
    fruit: "",
  });

  const check = () => {
    if (
      answers.relax.toLowerCase() === "relax" &&
      answers.sky.toLowerCase() === "blue" &&
      answers.fruit.toLowerCase() === "apple"
    ) {
      alert("🎉 All correct!");
    } else {
      alert("❌ Try again");
    }
  };

  return (
    <Layout>
      <h2>✏️ Easy Crossword</h2>

      <p>1. Opposite of stress</p>
      <input
        value={answers.relax}
        onChange={(e) =>
          setAnswers({ ...answers, relax: e.target.value })
        }
      />

      <p>2. Color of the sky</p>
      <input
        value={answers.sky}
        onChange={(e) =>
          setAnswers({ ...answers, sky: e.target.value })
        }
      />

      <p>3. A red fruit</p>
      <input
        value={answers.fruit}
        onChange={(e) =>
          setAnswers({ ...answers, fruit: e.target.value })
        }
      />

      <br />
      <button style={btn} onClick={check}>
        Check Answers
      </button>
    </Layout>
  );
}

const btn = {
  marginTop: "20px",
  padding: "10px",
  background: "#2d6a4f",
  color: "white",
  border: "none",
  borderRadius: "8px",
};