// Haetaan elementit
const paragraph = document.getElementById("textParagraph");
const button = document.getElementById("toggleButton");

// Lisätään napille tapahtumankuuntelija
button.addEventListener("click", function() {
  if (paragraph.style.display === "none") {
    paragraph.style.display = "block";
    button.textContent = "Piilota teksti";
  } else {
    paragraph.style.display = "none";
    button.textContent = "Näytä teksti";
  }
});
