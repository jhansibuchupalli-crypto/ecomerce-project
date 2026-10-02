// ===== CHECK LOGIN & UPDATE HEADER =====
document.addEventListener("DOMContentLoaded", () => {
  const loginBtn = document.querySelector(".login-btn");
  if (!loginBtn) return;

  const user = JSON.parse(localStorage.getItem("loggedInUser"));

  if (user) {
    loginBtn.outerHTML = `
      <div class="user-dropdown">
        <span class="user-name" onclick="toggleDropdown(event)">
          👤 ${user.name} ▼
        </span>
        <div class="dropdown-menu" id="dropdownMenu">
          <a href="#">👤 My Profile</a>
          <a href="#">📦 My Orders</a>
          <a href="#" onclick="logout(event)">🚪 Logout</a>
        </div>
      </div>
    `;
  }
});

// ===== TOGGLE DROPDOWN =====
function toggleDropdown(e) {
  e.stopPropagation();
  const menu = document.getElementById("dropdownMenu");
  menu.classList.toggle("show");
}

// ===== LOGOUT =====
function logout(e) {
  e.preventDefault();
  localStorage.removeItem("loggedInUser");
  alert("Logged out successfully!");
  window.location.href = "index.html";
}

// ===== OUTSIDE CLICK CHESTHE DROPDOWN CLOSE =====
document.addEventListener("click", () => {
  const menu = document.getElementById("dropdownMenu");
  if (menu) menu.classList.remove("show");
});