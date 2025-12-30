// @ts-nocheck
import Layout from "../components/Layout";

export default function MoodHistory() {
  const user = JSON.parse(localStorage.getItem("user"));
  const allData = JSON.parse(localStorage.getItem("moodData")) || [];

  const data = allData.filter(
    (m) => m.email === user.email
  );

  return (
    <Layout>
      <div style={page}>
        <h2 style={title}>🌿 {user.name}'s Mood History</h2>

        {data.length === 0 ? (
          <p style={empty}>
            No mood entries yet 🌸  
            Start tracking your mood today.
          </p>
        ) : (
          <div style={table}>
            {/* TABLE HEADER */}
            <div style={rowHeader}>
              <span>Date</span>
              <span>Stress</span>
              <span>Sleep</span>
              <span>Happiness</span>
              <span>Energy</span>
              <span>Focus</span>
              <span>Mood</span>
            </div>

            {/* TABLE ROWS */}
            {data.map((m, i) => (
              <div key={i} style={row}>
                <span>{m.date}</span>
                <span>{m.stress}/5</span>
                <span>{m.sleep}/5</span>
                <span>{m.happiness}/5</span>
                <span>{m.energy}/5</span>
                <span>{m.focus}/5</span>
                <span style={emoji}>{m.emoji}</span>
              </div>
            ))}
          </div>
        )}

        <div style={quote}>
          🌱 <i>
            Understanding your emotions is the first step to healing.
          </i>
        </div>
      </div>
    </Layout>
  );
}

/* ---------- STYLES ---------- */

const page = {
  minHeight: "100vh",
  backgroundColor: "#f4f9f6",
  padding: "30px",
};

const title = {
  color: "#2d6a4f",
  marginBottom: "20px",
};

const empty = {
  color: "#666",
};

const table = {
  backgroundColor: "white",
  borderRadius: "14px",
  overflow: "hidden",
  boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
};

const rowHeader = {
  display: "grid",
  gridTemplateColumns: "2fr repeat(6, 1fr)",
  backgroundColor: "#e9f5ec",
  padding: "12px",
  fontWeight: "bold",
  color: "#2d6a4f",
};

const row = {
  display: "grid",
  gridTemplateColumns: "2fr repeat(6, 1fr)",
  padding: "12px",
  borderTop: "1px solid #eee",
  alignItems: "center",
};

const emoji = {
  fontSize: "22px",
};

const quote = {
  marginTop: "30px",
  backgroundColor: "#e9f5ec",
  padding: "18px",
  borderRadius: "12px",
  textAlign: "center",
};
