// Näytetään tervetuloviesti käyttäjälle
alert("Hei! Tervetuloa sivulle!");

// Tulostetaan viesti selaimen konsoliin
console.log("JavaScript toimii oikein 🚀");

console.log("--01_muuttujat-- ");

let count = 0;
count++;
console.log(count);

console.log("--02_muuttujat-- ");

const ageLimit = 18;
console.log(ageLimit);

console.log("--03_muuttujat-- ");

let studentName = "Mikko";   
let student = studentName;
console.log(student);

console.log("--04_tietotyypit-- ");

// Luo muuttuja nimeltään age ja anna sille kokonaislukuarvo
let age = 20;

// Luo muuttuja nimeltään name ja anna sille merkkijonoarvo
let name = "Mikko";

// Luo muuttuja nimeltään isStudent ja anna sille totuusarvo
let isStudent = true;

// Luo muuttuja nimeltään hobbies ja anna sille taulukko merkkijonoarvoja
let hobbies = ["lukeminen", "urheilu", "ohjelmointi"];

// Luo info-olio, jossa on kaksi ominaisuutta: schoolName ja grade
let info = {
  schoolName: "Helsingin Lukio",
  grade: 10
};

// Tulostetaan kaikki muuttujat konsoliin
console.log(age);
console.log(name);
console.log(isStudent);
console.log(hobbies);
console.log(info);

// Käytetään typeof-operaattoria tarkistamaan tietotyypit
console.log(typeof age);       // number
console.log(typeof name);      // string
console.log(typeof isStudent); // boolean
console.log(typeof hobbies);   // object (taulukko on myös objekti)
console.log(typeof info);      // object



console.log("--01_numerot-- ");
// Muuntaa numeron merkkijonoksi
function convertNumberToString(number) {
  return String(number); // tai: return number.toString();
}

// Muuntaa merkkijonon numeroksi
function convertStringToNumber(string) {
  return Number(string); // tai: return parseInt(string);
}

// Esimerkki - älä muokkaa
console.log(convertNumberToString(42)); // haluttu vastaus: "42"
console.log(convertNumberToString(97)); // haluttu vastaus: "97"
console.log(convertNumberToString(11)); // haluttu vastaus: "11"

console.log(convertStringToNumber('42')); // haluttu vastaus: 42
console.log(convertStringToNumber('97')); // haluttu vastaus: 97
console.log(convertStringToNumber('11')); // haluttu vastaus: 11




console.log("--02_numerot-- ");
// Määritellään funktio, joka muuntaa Fahrenheit-asteet Celsius-asteiksi
function fahrenheitToCelsius(fahrenheit) {
  let celsius = (fahrenheit - 32) * 5 / 9;      // Lämpötilan muunnos
  return celsius.toFixed(1);                    // Pyöristetään yhteen desimaaliin ja palautetaan merkkijonona
}

// Esimerkki - älä muokkaa
console.log(fahrenheitToCelsius(21)); // haluttu tulos: "-6.1"


console.log("--03_numerot-- ");
// Luo muuttuja nimeltä 'num1' ja anna sille liukulukuarvo
let num1 = 5.7;

// Luo muuttuja nimeltä 'num2' ja anna sille eri liukulukuarvo
let num2 = 8.3;

// Pyöristetään lähimpään kokonaislukuun
let roundedNum1 = Math.round(num1);
let roundedNum2 = Math.round(num2);

// Lasketaan neliöjuuri 'roundedNum1':stä
let sqrtNum1 = Math.sqrt(roundedNum1);

// Etsitään suurempi numero 'roundedNum1':n ja 'roundedNum2':n välillä
let maxNum = Math.max(roundedNum1, roundedNum2);

// Tulostetaan tulokset konsoliin
console.log("roundedNum1:", roundedNum1);
console.log("roundedNum2:", roundedNum2);
console.log("sqrtNum1:", sqrtNum1);
console.log("maxNum:", maxNum);

// Tarkistetaan tietotyypit typeof-operaattorilla
console.log("typeof roundedNum1:", typeof roundedNum1);
console.log("typeof roundedNum2:", typeof roundedNum2);
console.log("typeof sqrtNum1:", typeof sqrtNum1);
console.log("typeof maxNum:", typeof maxNum);


console.log("--04_numerot-- ");

// Luo kaksi muuttujaa ja anna niille arvot
let number1 = 20;
let number2 = 4;

// Laske jakolaskun tulos ja tallenna se uuteen muuttujaan
let result = number1 / number2;

// Tulosta vastaus konsoliin
console.log("Jakolaskun tulos on:", result);

console.log("--05_numerot-- ");


// Määritellään tuotteiden hinnat
let omena = 1.5;
let maito = 2.3;
let leipä = 3.2;
let juusto = 4.5;

// Lasketaan tuotteiden yhteishinta
let yhteishinta = omena + maito + leipä + juusto;

// Tulostetaan yhteishinta konsoliin
console.log("Ostoskorin yhteishinta on:", yhteishinta, "€");


console.log("--01_operaattorit-- ");

// Luo muuttujat a ja b ja anna niille kokonaislukuarvot
let a = 15;
let b = 4;

// Lasketaan yhteenlasku ja tallennetaan tulos muuttujaan 'summa'
let summa = a + b;

// Lasketaan vähennyslasku ja tallennetaan tulos muuttujaan 'erotus'
let erotus = a - b;

// Lasketaan kertolasku ja tallennetaan tulos muuttujaan 'tulo'
let tulo = a * b;

// Lasketaan jakolasku ja tallennetaan tulos muuttujaan 'osamaara'
let osamaara = a / b;

// Lasketaan jakojäännös ja tallennetaan tulos muuttujaan 'jakojaannos'
let jakojaannos = a % b;

// Tulostetaan jokaisen laskutoimituksen tulos konsoliin
console.log("Summa (a + b):", summa);          // 15 + 4 = 19
console.log("Erotus (a - b):", erotus);        // 15 - 4 = 11
console.log("Tulo (a * b):", tulo);            // 15 * 4 = 60
console.log("Osamäärä (a / b):", osamaara);    // 15 / 4 = 3.75
console.log("Jakojäännös (a % b):", jakojaannos); // 15 % 4 = 3

console.log("--02_operaattorit-- ");

// Luo kaksi muuttujaa: etunimi ja sukunimi
let etunimi = "AliAkbar";
let sukunimi = "Saberi";

// Yhdistetään merkkijonot ja tallennetaan tulos muuttujaan 'kokoNimi'
let kokoNimi = etunimi + " " + sukunimi;

// Tulostetaan yhdistetty nimi konsoliin
console.log("Yhdistetty nimi:", kokoNimi);
