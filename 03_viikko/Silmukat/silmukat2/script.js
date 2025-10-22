console.log("-- silmukat_07.js --");
// Luo funktio nimeltä sumAndAverage
function sumAndAverage() {
  let numbers = []; // Lista käyttäjän syöttämistä numeroista

  // Pyydetään käyttäjältä 10 numeroa
  for (let i = 1; i <= 10; i++) {
    let input = prompt(`Syötä numero ${i}/10:`);
    let num = parseFloat(input);

    // Tarkistetaan, onko syöte kelvollinen numero
    if (isNaN(num)) {
      alert("Syötä kelvollinen numero!");
      i--; // Palataan samaan vaiheeseen
      continue;
    }

    numbers.push(num);
  }

  // Lasketaan summa
  let sum = 0;
  for (let n of numbers) {
    sum += n;
  }

  // Lasketaan keskiarvo
  let average = sum / numbers.length;

  // Etsitään suurin ja pienin numero
  let max = Math.max(...numbers);
  let min = Math.min(...numbers);

  // Tulostetaan tulokset konsoliin ja alertiin
  console.log(`Summa: ${sum}`);
  console.log(`Keskiarvo: ${average.toFixed(2)}`);
  console.log(`Suurin numero: ${max}`);
  console.log(`Pienin numero: ${min}`);

  alert(
    `Tulokset:\nSumma: ${sum}\nKeskiarvo: ${average.toFixed(
      2
    )}\nSuurin numero: ${max}\nPienin numero: ${min}`
  );
}

// Kutsutaan funktiota
sumAndAverage();

