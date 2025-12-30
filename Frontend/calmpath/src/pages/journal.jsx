// @ts-nocheck
import { useState } from "react";
import Layout from "../components/Layout";

export default function Journal() {
  const user = JSON.parse(localStorage.getItem("user"));

  const allJournals =
    JSON.parse(localStorage.getItem("journals")) || [];

  const userJournals = allJournals.filter(
    (j) => j.email === user.email
  );

  const savedPin = localStorage.getItem("journalPin");

  const [pin, setPin] = useState("");
  const [unlocked, setUnlocked] = useState(!savedPin);
  const [journals, setJournals] = useState(userJournals);
  const [text, setText] = useState("");
  const [writing, setWriting] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const [openIndex, setOpenIndex] = useState(null);

  /* 🔐 PIN */
  const unlockJournal = () => {
    if (!savedPin) {
      localStorage.setItem("journalPin", pin);
      alert("PIN set successfully 🔐");
      setUnlocked(true);
    } else if (pin === savedPin) {
      setUnlocked(true);
    } else {
      alert("Wrong PIN ❌");
    }
    setPin("");
  };

  /* 💾 SAVE / EDIT */
  const saveJournal = () => {
    if (!text.trim()) return alert("Write something first");

    let updated;

    if (editIndex !== null) {
      updated = allJournals.map((j, i) =>
        j.email === user.email && i === editIndex
          ? { ...j, content: text }
          : j
      );
    } else {
      updated = [
        ...allJournals,
        {
          email: user.email,
          date: new Date().toLocaleString(),
          content: text,
        },
      ];
    }

    localStorage.setItem("journals", JSON.stringify(updated));
    setJournals(updated.filter((j) => j.email === user.email));
    setText("");
    setWriting(false);
    setEditIndex(null);
    setOpenIndex(null);
  };

  /* 🗑 DELETE */
  const deleteJournal = (index) => {
    const updated = allJournals.filter(
      (j, i) => !(j.email === user.email && i === index)
    );
    localStorage.setItem("journals", JSON.stringify(updated));
    setJournals(updated.filter((j) => j.email === user.email));
  };

  /* ✏️ EDIT */
  const editJournal = (index) => {
    setText(journals[index].content);
    setEditIndex(index);
    setWriting(true);
    setOpenIndex(index);
  };

  /* 🔒 LOCK SCREEN */
  if (!unlocked) {
    return (
      <Layout>
        <div style={lockCard}>
          <h2>🔐 Journal Locked</h2>
          <input
            type="password"
            placeholder="Enter PIN"
            value={pin}
            onChange={(e) => setPin(e.target.value)}
            style={input}
          />
          <button style={btn} onClick={unlockJournal}>
            Unlock
          </button>
        </div>
      </Layout>
    );
  }

  return (
    <Layout>
      <div style={page}>
        <h2 style={{ color: "#2d6a4f" }}>
          {user.name}'s Journal 🌸
        </h2>

        {/* WRITE */}
        <div style={writeCard}>
          {writing ? (
            <>
              <textarea
                rows={6}
                style={textarea}
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Write your thoughts here..."
              />
              <button style={btn} onClick={saveJournal}>
                {editIndex !== null ? "Update" : "Save"}
              </button>
              <button
                style={cancelBtn}
                onClick={() => setWriting(false)}
              >
                Cancel
              </button>
            </>
          ) : (
            <button style={btn} onClick={() => setWriting(true)}>
              ➕ Write New Journal
            </button>
          )}
        </div>

        {/* PREVIOUS JOURNALS */}
        <div style={{ marginTop: 40 }}>
          <h3 style={{ color: "#2d6a4f" }}>📚 Previous Journals</h3>

          {journals.length === 0 && <p>No journals yet 🌷</p>}

          {journals.map((j, i) => (
            <div key={i} style={entryCard}>
              {/* TOP ROW */}
              <div style={topRow}>
                <strong>{j.date}</strong>

                {openIndex === i ? (
                  <button
                    style={smallBtn}
                    onClick={() => setOpenIndex(null)}
                  >
                    🙈 Hide
                  </button>
                ) : (
                  <button
                    style={smallBtn}
                    onClick={() => setOpenIndex(i)}
                  >
                    👁 View
                  </button>
                )}
              </div>

              {/* CONTENT */}
              {openIndex === i && (
                <p style={{ marginTop: "10px" }}>{j.content}</p>
              )}

              {/* ACTIONS */}
              <div style={{ marginTop: "10px" }}>
                <button
                  style={smallBtn}
                  onClick={() => editJournal(i)}
                >
                  ✏️ Edit
                </button>
                <button
                  style={deleteBtn}
                  onClick={() => deleteJournal(i)}
                >
                  🗑 Delete
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Layout>
  );
}

/* 🎨 STYLES */

const page = {
  backgroundColor: "#fde2e4",
  padding: "30px",
  borderRadius: "12px",
};

const writeCard = {
  backgroundColor: "#e9f5ec",
  padding: "20px",
  borderRadius: "12px",
};

const entryCard = {
  backgroundColor: "white",
  padding: "15px",
  borderRadius: "10px",
  marginBottom: "15px",
  boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
};

const topRow = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
};

const lockCard = {
  backgroundColor: "#fde2e4",
  padding: "30px",
  borderRadius: "12px",
  maxWidth: "320px",
};

const textarea = {
  width: "100%",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  marginBottom: "10px",
};

const input = {
  width: "100%",
  padding: "10px",
  borderRadius: "8px",
  border: "1px solid #ccc",
  marginBottom: "10px",
};

const btn = {
  padding: "10px 16px",
  backgroundColor: "#2d6a4f",
  color: "white",
  border: "none",
  borderRadius: "8px",
  cursor: "pointer",
  marginRight: "10px",
};

const cancelBtn = {
  ...btn,
  backgroundColor: "#f4a6b8",
};

const smallBtn = {
  ...btn,
  padding: "6px 10px",
};

const deleteBtn = {
  ...smallBtn,
  backgroundColor: "#f4a6b8",
};
