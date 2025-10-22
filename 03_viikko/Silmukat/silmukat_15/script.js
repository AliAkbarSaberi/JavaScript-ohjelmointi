// Kysytään käyttäjältä viisi kertaa sana
function askForWords() {
  const words = [];

  for (let i = 1; i <= 5; i++) {
    let word = prompt(`Anna sana ${i}/5:`);

    // Jos käyttäjä painaa "Peruuta", lopetetaan kysely kokonaan
    if (word === null) {
      alert("Syöttö peruutettu.");
      break;
    }

    // Ohitetaan tyhjät vastaukset
    if (word.trim() === "") {
      alert("Et antanut sanaa, ohitetaan tämä kerta.");
      continue;
    }

    // Lisätään sana listaan
    words.push(word.trim());
  }

  // Tulostetaan annetut sanat
  if (words.length > 0) {
    console.log("Annetut sanat:");
    words.forEach((w, index) => console.log(`${index + 1}. ${w}`));
  } else {
    console.log("Et antanut yhtään sanaa.");
  }
}

// Kutsutaan funktiota
askForWords();
