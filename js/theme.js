// ==========================================================
// GCTU Student Hub - Light / Dark theme switch
// The colours live in css/styles.css. This file only changes
// the data-theme attribute on <html>, and the CSS does the rest.
// ==========================================================

// Applies a theme ("light" or "dark") to the page and updates the button.
function setTheme(theme) {
  // document.documentElement is the <html> element.
  // dataset.theme reads/writes its data-theme="..." attribute.
  document.documentElement.dataset.theme = theme;

  // Tell screen readers whether the "Dark mode" button is on or off.
  const button = document.getElementById("theme-toggle");
  if (theme === "dark") {
    button.setAttribute("aria-pressed", "true");
  } else {
    button.setAttribute("aria-pressed", "false");
  }
}

// Switches to the opposite of the current theme.
function toggleTheme() {
  const currentTheme = document.documentElement.dataset.theme;

  if (currentTheme === "dark") {
    setTheme("light");
  } else {
    setTheme("dark");
  }
}

// Once the page has loaded, run toggleTheme every time the button is clicked.
// (A <button> also "clicks" when you press Enter or Space on the keyboard.)
document.addEventListener("DOMContentLoaded", function () {
  const button = document.getElementById("theme-toggle");
  button.addEventListener("click", toggleTheme);
});
