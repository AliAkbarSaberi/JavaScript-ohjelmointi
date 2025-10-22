// Haetaan elementit niiden id-arvojen perusteella
const nappi = document.getElementById("nappi");
const numero = document.getElementById("numero");

// Luodaan muuttuja laskurin arvolle
let laskuri = 0;

// Lisätään tapahtumankuuntelija, joka reagoi napin painallukseen
nappi.addEventListener("click", function() {
  laskuri++; // kasvatetaan arvoa yhdellä
  numero.textContent = laskuri; // päivitetään arvo sivulle
});
