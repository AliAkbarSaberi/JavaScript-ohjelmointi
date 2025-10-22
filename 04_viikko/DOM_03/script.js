// Haetaan elementit
const textInput = document.getElementById("textInput");
const displayText = document.getElementById("displayText");

// Lisätään kuuntelija input-tapahtumalle
textInput.addEventListener("input", function() {
  displayText.textContent = textInput.value; // Päivitetään teksti reaaliajassa
});
