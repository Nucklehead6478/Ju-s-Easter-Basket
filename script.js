
const clues = [
  { code: "bunny", image: "images/clue1.png" },
  { code: "carrot", image: "images/clue2.png" },
  { code: "jellybean", image: "images/clue3.png" },
  { code: "basket", image: "images/clue4.png" }
];

let currentClue = 0;

document.getElementById("submitBtn").addEventListener("click", showClue);

function showClue() {
  const input = document.getElementById("passwordInput").value.trim().toLowerCase();
  const clueContainer = document.getElementById("clueContainer");

  if (clues[currentClue] && input === clues[currentClue].code) {
    currentClue++;

    if (currentClue < clues.length) {
      clueContainer.innerHTML = `
        <h2>Clue ${currentClue + 1}</h2>
        <img src="${clues[currentClue].image}" alt="Clue ${currentClue + 1}" />
      `;
    } else {
      clueContainer.innerHTML = `
        <h2>🎉 You found your Easter basket! 🎉</h2>
        <img src="images/easter-bunny.gif" alt="Easter Bunny" class="bouncing-bunny" />
        <img src="${clues[clues.length - 1].image}" alt="Final Clue" />
      `;
      confetti({
        particleCount: 200,
        spread: 100,
        origin: { y: 0.6 }
      });
    }
    document.getElementById("passwordInput").value = "";
  } else {
    clueContainer.innerHTML = "<p>❌ Incorrect code. Try again!</p>";
  }
}
