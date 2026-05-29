const API = "http://localhost:3000/api";

function loadHistory() {
  const user = JSON.parse(localStorage.getItem("user"));

  fetch(`${API}/mood/${user.id}`)
    .then(res => res.json())
    .then(data => {
      const table = document.getElementById("list");
      table.innerHTML = "";

      data
        .filter(m => m.stress && m.sleep && m.energy && m.focus)
        .forEach(m => {
          table.innerHTML += `
            <tr>
              <td>${new Date(m.date).toLocaleDateString()}</td>
              <td>${m.stress}</td>
              <td>${m.sleep}</td>
              <td>${m.energy}</td>
              <td>${m.focus}</td>
              <td>${m.emoji}</td>
            </tr>
          `;
        });
    });
}
