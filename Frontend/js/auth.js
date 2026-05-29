const API = "http://localhost:3000/api";

function login() {
  const name = document.getElementById("name").value;
  const password = document.getElementById("password").value;

  fetch(`${API}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, password })
  })
    .then(res => res.json())
    .then(data => {
      localStorage.setItem("user", JSON.stringify(data.user));
      window.location.href = "dashboard.html";
    });
}
