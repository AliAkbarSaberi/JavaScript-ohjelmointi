console.log("-- DOM_01A-- ");
// Funktio, joka päivittää elementin tekstin
function paivitaTeksti() {
  // Haetaan elementti sen id:n perusteella
  const elementti = document.getElementById("teksti");
  
  // Päivitetään tekstisisältö
  elementti.textContent = "Hei, maailma!";
}

