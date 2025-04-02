document.addEventListener("DOMContentLoaded", function() {
  // Check localStorage for the preferred mode; default to dark if not set
  const savedMode = localStorage.getItem("mode") || "dark";
  const body = document.body;
  const modeToggle = document.getElementById("mode-toggle");

  if (savedMode === "light") {
    body.classList.remove("dark-mode");
    body.classList.add("light-mode");
    modeToggle.textContent = "Dark Mode";
  } else {
    body.classList.remove("light-mode");
    body.classList.add("dark-mode");
    modeToggle.textContent = "Light Mode";
  }

  modeToggle.addEventListener("click", function () {
    if (body.classList.contains("dark-mode")) {
      body.classList.remove("dark-mode");
      body.classList.add("light-mode");
      modeToggle.textContent = "Dark Mode";
      localStorage.setItem("mode", "light");
    } else {
      body.classList.remove("light-mode");
      body.classList.add("dark-mode");
      modeToggle.textContent = "Light Mode";
      localStorage.setItem("mode", "dark");
    }
  });
});
