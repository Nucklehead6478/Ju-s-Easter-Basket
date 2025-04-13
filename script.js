const codes = {
  1: "apple",
  2: "banana"
};

function checkCode(step) {
  const input = document.getElementById(`code${step}`).value.trim().toLowerCase();
  if (input === codes[step]) {
    document.getElementById(`img${step}`).style.display = 'block';
  } else {
    alert("❌ Incorrect code. Try again!");
  }
}
