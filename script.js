let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 0;

function checkGuess() {
  const userGuess = Number(document.getElementById("guessInput").value);
  const feedback = document.getElementById("feedback");
  attempts++;
  document.getElementById("attempts").innerText = attempts;

  if (!userGuess || userGuess < 1 || userGuess > 100) {
    feedback.textContent = "Please enter a number between 1 and 100.";
  } else if (userGuess === secretNumber) {
    feedback.textContent = `🎉 Correct! The number was ${secretNumber}. You guessed it in ${attempts} tries.`;
  } else if (userGuess < secretNumber) {
    feedback.textContent = "Too low! Try again.";
  } else {
    feedback.textContent = "Too high! Try again.";
  }
}

function resetGame() {
  secretNumber = Math.floor(Math.random() * 100) + 1;
  attempts = 0;
  document.getElementById("feedback").textContent = "";
  document.getElementById("guessInput").value = "";
  document.getElementById("attempts").innerText = "0";
}

