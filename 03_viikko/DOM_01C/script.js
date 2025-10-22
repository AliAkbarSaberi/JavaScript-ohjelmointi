// Haetaan elementit id:n avulla
const lisaaBtn = document.getElementById("lisaaBtn");
const vahennaBtn = document.getElementById("vahennaBtn");
const numero = document.getElementById("numero");

// Muuttuja laskurin arvolle
let laskuri = 0;

// Funktio, joka kasvattaa laskurin arvoa
function lisaaYksi() {
  laskuri++;
  numero.textContent = laskuri;
}

// Funktio, joka vähentää laskurin arvoa
function vahennaYksi() {
  laskuri--;
  numero.textContent = laskuri;
}

// Lisätään tapahtumankuuntelijat molemmille napeille
lisaaBtn.addEventListener("click", lisaaYksi);
vahennaBtn.addEventListener("click", vahennaYksi);
