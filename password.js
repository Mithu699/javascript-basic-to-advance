const form = document.getElementById("passwordForm");
const passwordList = document.getElementById("passwordList");
const searchInput = document.getElementById("search");

let passwords = JSON.parse(localStorage.getItem("passwords")) || [];

function saveToLocalStorage() {
  localStorage.setItem("passwords", JSON.stringify(passwords));
}

function renderPasswords(data = password) {
  passwordList.innerHTML = "";
  data.forEach((item, index) => {
    const row = document.createElement("tr");

    row.innerHTML = `
            <td>${item.website}</td>
            <td>${item.username}</td>
            <td>••••••••</td>
            <td>
                <button class="action-btn copy" onclick="copyPassword('${item.password}')">
                    Copy
                </button>

                <button class="action-btn delete" onclick="deletePassword(${index})">
                    Delete
                </button>
            </td>
        `;
    passwordList.appendChild(row);
  });
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const website = document.getElementById("website").value;
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  password.push({
    website,
    username,
    password,
  });

  saveToLocalStorage();
  renderPasswords();
  form.reset();
});

function copyPassword(password) {
  navigator.clipboard.writeText(password);
  alert("password copied");
}

function deletePassword(index) {
  passwords.splice(index, 1);
  saveToLocalStorage();
  renderPasswords();
}

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  const filtered = passwords.filter((item) =>
    item.website.toLowerCase().includes(searchTerm),
  );

  renderPasswords(filtered);
});

renderPasswords();
