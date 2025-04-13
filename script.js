const clues = [
  { password: "bunny", image: "images/image1.jpg" },
  { password: "chocolate", image: "images/image2.jpg" },
  { password: "colorful", image: "images/image3.jpg" },
  { password: "carrot", image: "images/image4.jpg" },
  { password: "tulip", image: "images/image5.jpg" },
  { password: "peeps", image: "images/image6.jpg" },
  { password: "basket", image: "images/image7.jpg" },
  { password: "daffodil", image: "images/image8.jpg" },
  { password: "love", image: "images/image9.jpg" },
  { password: "egg", image: "images/image10.jpg" },
  { password: "hunt", image: "images/image11.jpg" },
  { password: "chick", image: "images/image12.jpg" },
  { password: "spring", image: "images/image13.jpg" },
  { password: "candy", image: "images/image14.jpg" },
  { password: "lily", image: "images/image15.jpg" },
  { password: "hunt", image: "images/image16.jpg" },
  { password: "treats", image: "images/image17.jpg" },
  { password: "flower", image: "images/image18.jpg" },
  { password: "stinky", image: "images/image19.jpg" },
  { password: "sunshine", image: "images/image20.jpg" },
  { password: "surprise", image: "images/image21.jpg" }
];

let currentClue = 0;

function showClue() {
  const clueContainer = document.getElementById("clueContainer");
  const passwordInput = document.getElementById("passwordInput");
  const password = passwordInput.value.trim().toLowerCase();

  if (password === clues[currentClue].password) {
    currentClue++;
    passwordInput.value = "";

    if (currentClue < clues.length) {
      clueContainer.innerHTML = `
        <h2>Clue ${currentClue + 1}</h2>
        <img src="${clues[currentClue].image}" alt="Clue ${currentClue + 1}" />
      `;
    } else {
      // Final clue reached!
      clueContainer.innerHTML = `
        <h2>🎉 You found your Easter basket! 🎉</h2>
        <img src="images/easter-bunny.gif" alt="Easter Bunny" style="width: 200px; margin: 20px auto; display: block; animation: bounce 1.5s infinite;" />
        <img src="${clues[clues.length - 1].image}" alt="Final Clue" style="max-width: 100%; margin-top: 10px;" />
      `;
    }
  } else {
    alert("Hmm… that password doesn’t match this egg. Try again! 🧐");
  }
}

document.getElementById("submitBtn").addEventListener("click", showClue);

// Optional: Allow Enter key to submit
document.getElementById("passwordInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    showClue(if (currentClue < clues.length) {
  clueContainer.innerHTML = `
    <h2>Clue ${currentClue + 1}</h2>
    <img src="${clues[currentClue].image}" alt="Clue ${currentClue + 1}" />
  `;
} else {
  // Final clue reached!
  clueContainer.innerHTML = `
    <h2>🎉 You found your Easter basket! 🎉</h2>
    <img src="images/easter-bunny.gif" alt="Easter Bunny" class="bouncing-bunny" />
    <img src="${clues[clues.length - 1].image}" alt="Final Clue" style="max-width: 100%; margin-top: 10px;" />
  `;

  // 🎊 Launch confetti!
  confetti({
    particleCount: 200,
    spread: 100,
    origin: { y: 0.6 }
  });
}

  }
});
