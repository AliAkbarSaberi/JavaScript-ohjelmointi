// Luo funktio nimeltä findMinMax
function findMinMax() {
  // Kysytään, kuinka monta numeroa käyttäjä haluaa antaa
  let count = parseInt(prompt("Kuinka monta numeroa haluat antaa?"));

  // Tarkistetaan, että käyttäjä syötti kelvollisen luvun
  if (isNaN(count) || count <= 0) {
    alert("Anna positiivinen kokonaisluku!");
    return;
  }

  // Taulukko numeroille
  let numbers = [];

  // Pyydetään käyttäjältä haluttu määrä numeroita
  for (let i = 1; i <= count; i++) {
    let input = prompt(`Syötä numero ${i}/${count}:`);
    let num = parseFloat(input);

    if (isNaN(num)) {
      alert("Se ei ollut kelvollinen numero, yritä uudelleen.");
      i--; // Pysytään samassa kohdassa
      continue;
    }

    numbers.push(num);
  }

  // Etsitään pienin ja suurin luku
  const min = Math.min(...numbers);
  const max = Math.max(...numbers);

  // Tulostetaan tulokset konsoliin ja alertina
  console.log(`Pienin numero: ${min}`);
  console.log(`Suurin numero: ${max}`);
  alert(`Pienin numero: ${min}\nSuurin numero: ${max}`);
}

// Kutsutaan funktiota
findMinMax();
