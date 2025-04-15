const clues = [
  { password: "bunny", image: "images/image1.jpg" },
  { password: "carrot", image: "images/image2.jpg" },
  { password: "basket", image: "images/image3.jpg" },
  { password: "jellybean", image: "images/image4.jpg" },
  { password: "chick", image: "images/image5.jpg" },
  { password: "peeps", image: "images/image6.jpg" },
  { password: "daffodil", image: "images/image7.jpg" },
  { password: "sunshine", image: "images/image8.jpg" },
  { password: "pastel", image: "images/image9.jpg" },
  { password: "marshmallow", image: "images/image10.jpg" },
  { password: "sprinkles", image: "images/image11.jpg" },
  { password: "tulip", image: "images/image12.jpg" },
  { password: "chocolate", image: "images/image13.jpg" },
  { password: "hatch", image: "images/image14.jpg" },
  { password: "hop", image: "images/image15.jpg" },
  { password: "puzzle", image: "images/image16.jpg" },
  { password: "candy", image: "images/image17.jpg" },
  { password: "duckling", image: "images/image18.jpg" },
  { password: "petal", image: "images/image19.jpg" },
  { password: "daisy", image: "images/image20.jpg" },
  { password: "surprise", image: "images/image21.jpg" }
];

let currentClue = 0;

function showClue() {
  const clueContainer = document.getElementById("clueContainer");
  const passwordInput = document.getElementById("passwordInput");
  const password = passwordInput.value.trim().toLowerCase();

  // Check if the entered password matches the current clue's password.
  if (password === clues[currentClue].password) {
    // Increment the clue index. For the first clue (index 0), this moves us to clue 2.
    currentClue++;
    passwordInput.value = "";

    if (currentClue < clues.length) {
      // From here onward (starting with Clue 2), show the header and image.
      clueContainer.innerHTML = `
        <h2>Clue ${currentClue + 1}</h2>
        <img src="${clues[currentClue].image}" alt="Clue ${currentClue + 1}" />
      `;
    } else {
      // Once the final password is entered, show the Easter basket reward.
      clueContainer.innerHTML = `
        <h2>🎉 You found your Easter basket! 🎉</h2>
        <img src="images/easter-bunny.gif" alt="Easter Bunny" style="width: 200px; margin: 10px 0;" />
        <img src="${clues[clues.length - 1].image}" alt="Final Clue" style="max-width: 100%;" />
      `;
      confetti();
    }
  } else {
    alert("Hmm… that password doesn’t match this egg. Try again silly Julie! 🧐");
  }
}

document.getElementById("submitBtn").addEventListener("click", showClue);
document.getElementById("passwordInput").addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    showClue();
  }
});
