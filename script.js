// Quiz Logic
document.getElementById('quizBtn').addEventListener('click', () => {
  const time = prompt("How many months have you been at IITB?");
  const res = document.getElementById('quizResult');
  const m = parseInt(time);
  if (isNaN(m)) res.textContent = "Please enter a number!";
  else if (m < 3) res.textContent = "You're still exploring the campus!";
  else if (m < 12) res.textContent = "You've seen a good chunk of IITB!";
  else res.textContent = "You're almost a campus veteran!";
});
