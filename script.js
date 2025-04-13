const clues = [
  { password: "bunny", image: "images/image1.jpg" },
  { password: "chocolate", image: "images/image2.jpg" },
  { password: "jellybean", image: "images/image3.jpg" },
  { password: "carrot", image: "images/image4.jpg" },
  { password: "tulip", image: "images/image5.jpg" },
  { password: "peeps", image: "images/image6.jpg" },
  { password: "basket", image: "images/image7.jpg" },
  { password: "daffodil", image: "images/image8.jpg" },
  { password: "marshmallow", image: "images/image9.jpg" },
  { password: "egg", image: "images/image10.jpg" },
  { password: "bonnet", image: "images/image11.jpg" },
  { password: "chick", image: "images/image12.jpg" },
  { password: "spring", image: "images/image13.jpg" },
  { password: "candy", image: "images/image14.jpg" },
  { password: "lily", image: "images/image15.jpg" },
  { password: "hunt", image: "images/image16.jpg" },
  { password: "treats", image: "images/image17.jpg" },
  { password: "flower", image: "images/image18.jpg" },
  { password: "grass", image: "images/image19.jpg" },
  { password: "sunshine", image: "images/image20.jpg" },
  { password: "surprise", image: "images/image21.jpg" }
];

let currentClueIndex = 0;

function showClue() {
  const clueContainer = document.getElementById("clueContainer");
  if (currentClueIndex < clues.length) {
    const clue = clues[currentClueIndex];
    clueContainer.innerHTML = `
      <img src="${clue.image}" alt="Clue ${currentClueIndex + 1}" style="max-width: 100%; margin-bottom: 10px;" />
      <form onsubmit="return checkPassword(event)">
        <input type="text" id="passwordInput" placeholder="Enter code for Egg #${currentClueIndex + 2}" />
        <button type="submit">Submit</button>
      </form>
    `;
  } else {
    clueContainer.innerHTML = "<h2>🎉 You found your Easter basket! 🎉</h2>";
  }
}

function checkPassword(event) {
  event.preventDefault();
  const input = document.getElementById("passwordInput").value.trim().toLowerCase();
  if (input === clues[currentClueIndex].password) {
    currentClueIndex++;
    showClue();
  } else {
    alert("Oops! Try again 🐰");
  }
}

document.addEventListener("DOMContentLoaded", showClue);
