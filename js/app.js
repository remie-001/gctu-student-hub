// ==========================================================
// GCTU Student Hub - Main JavaScript file
// This file starts the app. For now it only shows a
// welcome message and today's date on the dashboard.
// ==========================================================

// Returns "Good morning", "Good afternoon" or "Good evening"
// depending on the hour (0-23) we give it.
function getGreeting(hour) {
  if (hour < 12) {
    return "Good morning";
  } else if (hour < 17) {
    return "Good afternoon";
  } else {
    return "Good evening";
  }
}

// Turns a Date into readable text, e.g. "Saturday 17 October 2026".
function formatDate(date) {
  return date.toLocaleDateString("en-GB", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

// Finds the dashboard elements in the HTML and fills them in.
function showWelcome() {
  const now = new Date(); // the current date and time on this computer

  // document.getElementById finds the HTML element with that id="..."
  const messageElement = document.getElementById("welcome-message");
  const dateElement = document.getElementById("today-date");

  messageElement.textContent = getGreeting(now.getHours()) + ", welcome to GCTU Student Hub";
  dateElement.textContent = formatDate(now);
}

// Run our code once the page has finished loading.
document.addEventListener("DOMContentLoaded", showWelcome);
