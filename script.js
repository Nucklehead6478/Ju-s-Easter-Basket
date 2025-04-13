const codes = {
  1: "bunny",
  2: "basket",
  3: "egg",
  4: "spring",
  5: "jellybean",
  6: "carrot",
  7: "hop",
  8: "chick",
  9: "pastel",
  10: "tulip",
  11: "peeps",
  12: "nest",
  13: "petal",
  14: "sunny",
  15: "grass",
  16: "surprise",
  17: "hunt",
  18: "ribbon",
  19: "marshmallow",
  20: "treat",
  21: "delivery"
};

function checkCode(step) {
  const input = document.getElementById('code' + step).value.trim().toLowerCase();
  if (input === codes[step]) {
    const nextImage = document.getElementById('img' + step);
    if (nextImage) nextImage.style.display = 'block';
  } else {
    alert("Oops! That's not the right code. Try again!");
  }
}
