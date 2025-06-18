// journey-script.js
const slider = document.getElementById('slider');
const display = document.getElementById('eventDisplay');

const events = [
  "📍 Orientation Day: New campus, new dreams.",
  "🛏️ Hostel setup & first night away from home.",
  "🎊 Mood Indigo: Hosted guests, partied hard!",
  "🧠 Midsems & late night study sessions.",
  "💻 Project builds, deadlines, breakthroughs.",
  "🚀 Summer Internships: Theory meets reality."
];

slider.addEventListener("input", () => {
  display.textContent = events[slider.value];
});
