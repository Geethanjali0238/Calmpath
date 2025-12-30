// @ts-nocheck
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Layout from "../components/Layout";

export default function MoodTracker() {
  const navigate = useNavigate();

  const [stress, setStress] = useState(0);
  const [energy, setEnergy] = useState(0);
  const [sleep, setSleep] = useState(0);
  const [focus, setFocus] = useState(0);
  const [happiness, setHappiness] = useState(0);
  const [emoji, setEmoji] = useState("");

  const saveMood = () => {
    if (!stress || !energy || !sleep || !focus || !happiness || !emoji) {
      alert("Please answer all questions");
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));

    const entry = {
      email: user.email,
      date: new Date().toLocaleString(),
      stress,
      energy,
      sleep,
      focus,
      happiness,
      emoji,
    };

    const existing =
      JSON.parse(localStorage.getItem("moodData")) || [];

    localStorage.setItem(
      "moodData",
      JSON.stringify([...existing, entry])
    );

    alert("Mood saved successfully 🌿");
    navigate("/history");
  };

  return (
    <Layout>
      <div style={page}>
        <h2 style={{ color: "#2d6a4f" }}>
          Daily Mood Tracker 🌈
        </h2>

        <div style={card}>
          <StarQuestion label="Stress Level" value={stress} setValue={setStress} />
          <StarQuestion label="Energy Level" value={energy} setValue={setEnergy} />
          <StarQuestion label="Sleep Quality" value={sleep} setValue={setSleep} />
          <StarQuestion label="Focus Level" value={focus} setValue={setFocus} />
          <StarQuestion
            label="Happiness Level"
            value={happiness}
            setValue={setHappiness}
          />

          <hr style={{ margin: "25px 0" }} />

          <h3>Overall Mood</h3>
          <div style={emojiRow}>
            {["😄", "🙂", "😐", "😔", "😢"].map((e) => (
              <span
                key={e}
                style={{
                  ...emojiStyle,
                  backgroundColor:
                    emoji === e ? "#e9f5ec" : "transparent",
                  border:
                    emoji === e ? "2px solid #2d6a4f" : "2px solid transparent",
                }}
                onClick={() => setEmoji(e)}
              >
                {e}
              </span>
            ))}
          </div>

          <button style={btn} onClick={saveMood}>
            Save Mood
          </button>
        </div>
      </div>
    </Layout>
  );
}

/* ⭐ STAR QUESTION COMPONENT */
function StarQuestion({ label, value, setValue }) {
  return (
    <div style={{ marginBottom: "20px" }}>
      <p style={{ marginBottom: "8px", fontWeight: "bold" }}>
        {label}
      </p>
      {[1, 2, 3, 4, 5].map((n) => (
        <span
          key={n}
          style={{
            fontSize: "26px",
            cursor: "pointer",
            color: n <= value ? "#f4c430" : "#ccc",
            marginRight: "6px",
          }}
          onClick={() => setValue(n)}
        >
          ★
        </span>
      ))}
    </div>
  );
}

/* 🎨 STYLES */

const page = {
  backgroundColor: "#f4f9f6",
  padding: "30px",
  borderRadius: "12px",
};

const card = {
  backgroundColor: "white",
  padding: "30px",
  borderRadius: "14px",
  maxWidth: "600px",
  boxShadow: "0 10px 25px rgba(0,0,0,0.08)",
};

const emojiRow = {
  display: "flex",
  gap: "15px",
  marginTop: "10px",
  marginBottom: "30px",
};

const emojiStyle = {
  fontSize: "32px",
  cursor: "pointer",
  padding: "8px",
  borderRadius: "50%",
  transition: "0.2s",
};

const btn = {
  width: "100%",
  padding: "12px",
  backgroundColor: "#2d6a4f",
  color: "white",
  border: "none",
  borderRadius: "8px",
  fontSize: "15px",
  cursor: "pointer",
};
