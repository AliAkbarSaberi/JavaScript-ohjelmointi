console.log("-- silmukat_01.js --");

// Luo funktio nimeltä logOddNumbers
function logOddNumbers() {
  for (let i = 1; i <= 100; i++) {
    if (i % 2 !== 0) {
      console.log(i);
    }
  }
}

// Kutsutaan funktiota
logOddNumbers();
 
console.log("-- silmukat_02.js --");
// Luo funktio nimeltä logEvenNumbers
function logEvenNumbers() {
  let numbers = [];

  for (let i = 2; i <= 50; i += 2) {
    numbers.push(i);           // pienenevä luku
    numbers.push(100 - i);     // vastaava "peililuku" lopusta
  }

  console.log(numbers.join(", "));
}

// Kutsutaan funktiota
logEvenNumbers();


console.log("-- silmukat_03.js --");
// Luo funktio nimeltä averageSpeed
function averageSpeed() {
  while (true) {
    // Pyydetään käyttäjältä etäisyys
    let distance = parseFloat(prompt("Anna etäisyys kilometreinä (0 lopettaa):"));

    // Jos käyttäjä syöttää 0, lopetetaan ohjelma
    if (distance === 0) {
      alert("Ohjelma päättyy. Kiitos!");
      break;
    }

    // Jos syöte ei ole kelvollinen numero
    if (isNaN(distance) || distance < 0) {
      alert("Anna positiivinen numero tai 0 lopettaaksesi.");
      continue;
    }

    // Pyydetään aika tunteina
    let time = parseFloat(prompt("Anna aika tunteina:"));

    // Tarkistetaan, ettei aika ole nolla tai virheellinen
    if (isNaN(time) || time <= 0) {
      alert("Ajan täytyy olla positiivinen luku.");
      continue;
    }

    // Lasketaan keskinopeus
    let speed = distance / time;

    // Näytetään tulos käyttäjälle
    alert(`Keskinopeus: ${speed.toFixed(2)} km/h`);
  }
}

// Kutsutaan funktiota
averageSpeed();
console.log("-- silmukat_04.js --");

// Luo funktio nimeltä countEvenNumbers
function countEvenNumbers() {
  let evenCount = 0; // Lasketaan parilliset luvut

  // Pyydetään käyttäjää syöttämään 20 lukua
  for (let i = 1; i <= 20; i++) {
    let input = prompt(`Syötä luku ${i}/20:`);
    let number = parseInt(input);

    // Tarkistetaan, että syöte on numero
    if (isNaN(number)) {
      alert("Se ei ollut kelvollinen numero. Kokeile uudelleen.");
      i--; // palataan samaan kohtaan
      continue;
    }

    // Tarkistetaan, onko luku parillinen
    if (number % 2 === 0) {
      evenCount++;
    }
  }

  // Tulostetaan tulos konsoliin
  console.log(`Syötit ${evenCount} parillista lukua 20:stä.`);
  alert(`Syötit ${evenCount} parillista lukua 20:stä.`);
}

// Kutsutaan funktiota
countEvenNumbers();


console.log("-- silmukat_05.js --");
// Luo funktio nimeltä calculateAverageUntilZero
function calculateAverageUntilZero() {
  let sum = 0;      // Lukujen summa
  let count = 0;    // Syötettyjen lukujen määrä

  while (true) {
    // Pyydetään käyttäjältä numero
    let input = prompt("Syötä numero (0 lopettaa):");
    let number = parseFloat(input);

    // Tarkistetaan onko syöte kelvollinen
    if (isNaN(number)) {
      alert("Syötä kelvollinen numero.");
      continue;
    }

    // Jos käyttäjä syöttää 0, lopetetaan silmukka
    if (number === 0) {
      break;
    }

    // Lisätään arvo summaan ja kasvatetaan laskuria
    sum += number;
    count++;
  }

  // Lasketaan keskiarvo vain jos numeroita on syötetty
  if (count > 0) {
    let average = sum / count;
    console.log(`Syötettyjen lukujen keskiarvo on: ${average.toFixed(2)}`);
    alert(`Syötettyjen lukujen keskiarvo on: ${average.toFixed(2)}`);
  } else {
    console.log("Et syöttänyt yhtään numeroa.");
    alert("Et syöttänyt yhtään numeroa.");
  }
}

// Kutsutaan funktiota
calculateAverageUntilZero();

console.log("-- silmukat_06.js --");

// Luo funktio nimeltä askToContinue
function askToContinue() {
  let sum = 0;       // Lukujen summa
  let count = 0;     // Lukujen määrä

  while (true) {
    // Pyydetään käyttäjältä numero
    let input = prompt("Syötä numero:");
    let number = parseFloat(input);

    // Tarkistetaan että syöte on kelvollinen numero
    if (isNaN(number)) {
      alert("Syötä kelvollinen numero!");
      continue;
    }

    // Lisätään numero summaan ja kasvatetaan laskuria
    sum += number;
    count++;

    // Kysytään haluaako käyttäjä jatkaa
    let answer = prompt("Haluatko jatkaa numeroiden antamista? (k/e)");

    // Jos käyttäjä vastaa "e" tai peruuttaa promptin, lopetetaan
    if (answer === null || answer.toLowerCase() === "e") {
      break;
    }
  }

  // Lasketaan ja näytetään keskiarvo
  if (count > 0) {
    let average = sum / count;
    console.log(`Syötettyjen lukujen keskiarvo on: ${average.toFixed(2)}`);
    alert(`Syötettyjen lukujen keskiarvo on: ${average.toFixed(2)}`);
  } else {
    console.log("Et syöttänyt yhtään numeroa.");
    alert("Et syöttänyt yhtään numeroa.");
  }
}

// Kutsutaan funktiota
askToContinue();
