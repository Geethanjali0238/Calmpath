const API = "http://localhost:3000/api";
const ratings = { stress: 0, sleep: 0, energy: 0, focus: 0 };
let selectedEmoji = "";

document.querySelectorAll(".stars").forEach(starDiv => {
  const id = starDiv.dataset.id;
  for (let i = 1; i <= 5; i++) {
    const span = document.createElement("span");
    span.innerHTML = "★";
    span.onclick = () => {
      ratings[id] = i;
      [...starDiv.children].forEach((s, idx) =>
        s.classList.toggle("active", idx < i)
      );
    };
    starDiv.appendChild(span);
  }
});

document.querySelectorAll("#emoji span").forEach(e => {
  e.onclick = () => {
    selectedEmoji = e.textContent;
    document.querySelectorAll("#emoji span")
      .forEach(x => x.classList.remove("active"));
    e.classList.add("active");
  };
});

function saveMood() {
  const user = JSON.parse(localStorage.getItem("user"));

  fetch(`${API}/mood/save`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      userId: user.id,
      ...ratings,
      emoji: selectedEmoji
    })
  }).then(() => alert("Mood saved 🌱"));
}
