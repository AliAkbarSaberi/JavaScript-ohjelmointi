// Luo funktio nimeltä sumFromOneToHundred
function sumFromOneToHundred() {
  let sum = 0;

  // Käydään luvut 1–100 läpi ja lisätään ne summaan
  for (let i = 1; i <= 100; i++) {
    sum += i;
  }

  // Tulostetaan lopputulos konsoliin
  console.log("Lukujen 1–100 summa on:", sum);
}

// Kutsutaan funktiota
sumFromOneToHundred();

console.log("-- silmukat_10.js --");

// Luo funktio nimeltä countdownTimer
function countdownTimer(startNumber) {
  for (let i = startNumber; i >= 0; i--) {
    console.log(i);
  }
  console.log("Aika loppui!");
}

// Kutsutaan funktiota esimerkillä
countdownTimer(10);


console.log("-- silmukat_11.js --");

// Luo funktio nimeltä generateMultiplicationTable
function generateMultiplicationTable(number) {
  console.log(`Kertotaulu luvulle ${number}:`);

  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}

// Kutsutaan funktiota esimerkillä
generateMultiplicationTable(5);
