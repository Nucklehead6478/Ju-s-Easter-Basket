const clues = [
  { password: "bunny", image: "images/image1.jpg" },
  { password: "chocolate", image: "images/image2.jpg" },
  { password: "colorful", image: "images/image3.jpg" },
  { password: "carrot", image: "images/image4.jpg" },
  { password: "basket", image: "images/image5.jpg" },
  { password: "tulip", image: "images/image6.jpg" },
  { password: "treats", image: "images/image7.jpg" },
  { password: "daffodil", image: "images/image8.jpg" },
  { password: "candy", image: "images/image9.jpg" },
  { password: "peeps", image: "images/image10.jpg" },
  { password: "lily", image: "images/image11.jpg" },
  { password: "sunshine", image: "images/image12.jpg" },
  { password: "hunt", image: "images/image13.jpg" },
  { password: "love", image: "images/image14.jpg" },
  { password: "flower", image: "images/image15.jpg" },
  { password: "egg", image: "images/image16.jpg" },
  { password: "family", image: "images/image17.jpg" },
  { password: "spring", image: "images/image18.jpg" },
  { password: "chick", image: "images/image19.jpg" },
  { password: "stinky", image: "images/image20.jpg" },
  { password: "surprise", image: "images/image21.jpg" }
];

let currentClue = 0;

// Initialize the clue container without showing an image
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("clueContainer").innerHTML = `<h2>Clue 1</h2>`;
});

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
        <img src="${clues[currentClue - 1].image}" alt="Reward for Clue ${currentClue}" />
      `;
    } else {
      clueContainer.innerHTML = `
        <h2>🎉 You found your Easter basket! 🎉</h2>
        <img src="images/easter-bunny.gif" alt="Easter Bunny" style="width: 200px; margin: 10px 0;" />
        <img src="${clues[clues.length - 1].image}" alt="Final Clue" style="max-width: 100%;" />
      `;
      confetti();
    }
  } else {
    alert("Hmm… that password doesn’t match this egg. Try again silly Julie!! 🧐");
  }
}

document.getElementById("submitBtn").addEventListener("click", showClue);
document.getElementById("passwordInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    showClue();
  }
});

