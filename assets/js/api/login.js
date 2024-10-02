document.addEventListener("DOMContentLoaded", function () {
  const token = localStorage.getItem("token");

  if (!token) {
    alert("Please login to access");
    window.location.href = "login.html";
  }

  function logout() {
    localStorage.removeItem("token");
    window.location.href = "login.html";
  }

  document.getElementById("logoutBtn").addEventListener("click", logout);
});
