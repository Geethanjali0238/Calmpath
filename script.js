function login() {
  const name = document.getElementById("name").value;
  if (!name) return alert("Enter name");

  localStorage.setItem("user", name);
  document.getElementById("auth").classList.add("hidden");
  document.getElementById("app").classList.remove("hidden");
  document.getElementById("username").innerText = name;
}

function show(id) {
  document.querySelectorAll("main section").forEach(s => s.classList.add("hidden"));
  document.getElementById(id).classList.remove("hidden");
  if (id === "history") loadHistory();
  if (id === "journal") loadJournal();
}

function saveMood() {
  const mood = {
    date: new Date().toLocaleDateString(),
    stress: stress.value,
    sleep: sleep.value,
    energy: energy.value,
    focus: focus.value,
    emoji: emoji.value
  };

  const data = JSON.parse(localStorage.getItem("moods") || "[]");
  data.push(mood);
  localStorage.setItem("moods", JSON.stringify(data));
  alert("Mood saved 🌱");
}

function loadHistory() {
  const table = document.getElementById("historyTable");
  table.innerHTML = "";
  const data = JSON.parse(localStorage.getItem("moods") || "[]");

  data.forEach(m => {
    table.innerHTML += `
      <tr>
        <td>${m.date}</td>
        <td>${m.stress}</td>
        <td>${m.sleep}</td>
        <td>${m.energy}</td>
        <td>${m.focus}</td>
        <td>${m.emoji}</td>
      </tr>`;
  });
}

function saveJournal() {
  const text = journalText.value;
  if (!text) return;

  const data = JSON.parse(localStorage.getItem("journal") || "[]");
  data.push({ date: new Date().toLocaleDateString(), text });
  localStorage.setItem("journal", JSON.stringify(data));
  journalText.value = "";
  loadJournal();
}

function loadJournal() {
  const list = document.getElementById("journalList");
  list.innerHTML = "";
  const data = JSON.parse(localStorage.getItem("journal") || "[]");

  data.forEach(j => {
    list.innerHTML += `<li><b>${j.date}</b>: ${j.text}</li>`;
  });
}
