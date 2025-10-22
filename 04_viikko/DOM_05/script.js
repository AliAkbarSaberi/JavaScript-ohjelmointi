// Haetaan elementit
const bgButton = document.getElementById("bgButton");
const colorInput = document.getElementById("colorInput");
const colorText = document.getElementById("colorText");

// Funktio satunnaisen värin luomiseen (RGB-muodossa)
function getRandomColor() {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}

// Vaihdetaan taustaväri, kun nappia painetaan
bgButton.addEventListener("click", function() {
  document.body.style.backgroundColor = getRandomColor();
});

// Päivitetään tekstin väri käyttäjän syötteen mukaan
colorInput.addEventListener("input", function() {
  colorText.style.color = colorInput.value;
});
