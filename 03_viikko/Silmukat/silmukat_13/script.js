// Luo funktio nimeltä validatePassword
function validatePassword() {
  const correctPassword = "oikein123"; // Oikea salasana

  while (true) {
    // Pyydetään käyttäjältä salasana
    const input = prompt("Anna salasana:");

    // Jos käyttäjä painaa Peruuta, lopetetaan silmukka
    if (input === null) {
      alert("Peruit salasanan syötön.");
      break;
    }

    // Tarkistetaan, onko salasana oikein
    if (input === correctPassword) {
      alert("Salasana oikein!");
      console.log("Salasana oikein!");
      break;
    } else {
      alert("Yritä uudelleen!");
    }
  }
}

// Kutsutaan funktiota
validatePassword();


console.log("-- silmukat_14.js --");
// Luo funktio nimeltä createWordPyramid
function createWordPyramid(word) {
  console.log(`Pyramidi sanalle "${word}":`);
  
  for (let i = 1; i <= word.length; i++) {
    console.log(word.substring(0, i));
  }
}

// Kutsutaan funktiota esimerkillä
createWordPyramid("koodi");
