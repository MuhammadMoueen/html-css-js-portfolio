const btn = document.querySelector(".dark-btn");
const body = document.body;
const label = btn.querySelector(".toggle-label");

btn.addEventListener("click", () => {
  const isDark = body.classList.toggle("dark");
  btn.classList.toggle("active", isDark);
  btn.setAttribute("aria-pressed", String(isDark));
  label.textContent = isDark ? "Dark mode" : "Light mode";
});