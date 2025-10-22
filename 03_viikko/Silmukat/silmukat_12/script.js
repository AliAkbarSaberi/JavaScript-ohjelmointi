// Luo funktio nimeltä buildGroceryList
function buildGroceryList() {
  const groceries = []; // Lista ostoksille

  while (true) {
    // Pyydetään käyttäjältä ostos
    const item = prompt("Lisää ostoslistalle tuote (kirjoita 'valmis' lopettaaksesi):");

    // Jos käyttäjä painaa peruuta tai kirjoittaa "valmis", lopetetaan
    if (item === null || item.toLowerCase() === "valmis") {
      break;
    }

    // Jos syöte ei ole tyhjä, lisätään listaan
    if (item.trim() !== "") {
      groceries.push(item.trim());
    } else {
      alert("Et syöttänyt tuotteen nimeä. Yritä uudelleen.");
    }
  }

  // Tulostetaan lista konsoliin
  console.log("Ostoslista:");
  if (groceries.length > 0) {
    groceries.forEach((product, index) => {
      console.log(`${index + 1}. ${product}`);
    });
  } else {
    console.log("Lista on tyhjä!");
  }

  alert("Ostoslista tallennettu! Katso konsolista tulos (F12 → Console).");
}

// Kutsutaan funktiota
buildGroceryList();
