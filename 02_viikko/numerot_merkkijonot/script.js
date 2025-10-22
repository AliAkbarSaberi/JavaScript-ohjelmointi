// Näytetään tervetuloviesti käyttäjälle
alert("Hei! Tervetuloa sivulle!");

// Tulostetaan viesti selaimen konsoliin
console.log("JavaScript toimii oikein");

console.log("--06_numerot_jatko-- ");
// Luodaan kaksi muuttujaa merkkijonoarvoilla
let numString1 = "42";
let numString2 = "3.14";

// Muunnetaan numString1 kokonaisluvuksi parseInt()-funktiolla
let kokonaisluku = parseInt(numString1);

// Muunnetaan numString2 liukuluvuksi parseFloat()-funktiolla
let liukuluku = parseFloat(numString2);

// Tulostetaan tulokset konsoliin
console.log("Kokonaisluku on " + kokonaisluku + ".");
console.log("Liukuluku on " + liukuluku + ".");

console.log("--07_numerot_jatko-- ");
// Luo muuttuja nimeltä price ja anna sille arvoksi 19.56789
let price = 19.56789;

// Pyöristetään hinta kahden desimaalin tarkkuuteen
let priceTwoDecimals = price.toFixed(2);

// Pyöristetään hinta ilman desimaaleja
let priceNoDecimals = price.toFixed(0);

// Tulostetaan molemmat tulokset konsoliin
console.log("Hinta 2 desimaalilla: " + priceTwoDecimals);
console.log("Hinta ilman desimaaleja: " + priceNoDecimals);

console.log("--08_numerot_jatko-- ");

// Luodaan kaksi muuttujaa
let num1String = "10";
let num2String = "notANumber";

// Muunnetaan merkkijonot liukuluvuiksi parseFloat()-metodilla
let number1 = parseFloat(num1String);
let number2 = parseFloat(num2String);

// Lasketaan summa
let summa = number1 + number2;

// Tulostetaan tulos konsoliin
console.log(summa);

console.log("--09_numerot_jatko-- ");

// Luodaan muuttuja userInput ja annetaan sille arvo
let userInput = "25.75 omenaa";

// Käytetään parseFloat() irrottamaan numeerinen arvo
let numberValue = parseFloat(userInput);

// Pyöristetään tulos yhteen desimaaliin
let roundedValue = numberValue.toFixed(1);

// Tulostetaan tulos konsoliin
console.log(roundedValue);

console.log("--10_numerot_jatko-- ");
// 1. Luo muuttuja num ja aseta sille arvoksi 5.67
let num = 5.67;

// 2. Pyöristetään lähimpään kokonaislukuun Math.round():lla
let rounded = Math.round(num);

// 3. Pyöristetään alaspäin Math.floor():lla
let roundedDown = Math.floor(num);

// 4. Pyöristetään ylöspäin Math.ceil():lla
let roundedUp = Math.ceil(num);

// 5. Tulostetaan kaikki tulokset selittävien tekstien kanssa
console.log("Lähimpään kokonaislukuun pyöristetty:", rounded);      // 6
console.log("Alaspäin pyöristetty (floor):", roundedDown);         // 5
console.log("Ylöspäin pyöristetty (ceil):", roundedUp);            // 6

console.log("--11_numerot_jatko-- ");
// 1. Generoidaan satunnaisluku 0 ja 1 väliltä
let randomNumber = Math.random();

// 2. Kerrotaan tulos kymmenellä ja pyöristetään alaspäin kokonaisluvuksi
let finalNumber = Math.floor(randomNumber * 10);

// 3. Tulostetaan lopputulos konsoliin
console.log("Arvottu lukusi on " + finalNumber);

console.log("--12_numerot_jatko-- ");

// 1. Luo kolme muuttujaa
let a = 12;
let b = 7;
let c = 20;

// 2. Etsi suurin luku Math.max():n avulla
let largest = Math.max(a, b, c);

// 3. Etsi pienin luku Math.min():n avulla
let smallest = Math.min(a, b, c);

// 4. Tulosta tulokset konsoliin
console.log("The largest number is " + largest + ".");
console.log("The smallest number is " + smallest + ".");

console.log("-- 01-merkkijonot.js -- ");

const teksti1 = 'Yksinkertaisilla lainausmerkeillä merkitty merkkijono';
const teksti2 = "Kaksoislainausmerkeillä merkitty merkkijono";
const teksti3 = `Mallimerkkijono`;

// Tulostetaan kaikki kolme konsoliin
console.log(teksti1);
console.log(teksti2);
console.log(teksti3);

console.log("-- 02-merkkijonot.js -- ");

const language = "JavaScript";

const lause = `I am learning ${language}.`;

console.log(lause);

console.log("-- 03-merkkijonot.js -- ");

const multiLine = `This is line one.
This is line two.
This is line three.`;

console.log(multiLine);

console.log("-- 04-merkkijonot.js -- ");

const text = "Hello, World!";
const textLength = text.length;
console.log(`The length of the text is ${textLength}.`);

console.log("-- 05-merkkijonot.js -- ");

// Määritetään muuttuja ja annetaan sille arvo
const word = "JavaScript";

// Haetaan ensimmäinen ja viimeinen merkki hakasulkunotaatiolla
const firstChar = word[0];
const lastChar = word[word.length - 1];

// Tulostetaan viestit konsoliin
console.log(`The first character is ${firstChar}.`);
console.log(`The last character is ${lastChar}.`);

console.log("-- 06-merkkijonot.js -- ");

// Määritetään muuttujat
const numA = 7;
const numB = 5;

// Luodaan merkkijono ja upotetaan summauslauseke mallimerkkijonoon
const result = `The sum of ${numA} and ${numB} is ${numA + numB}.`;

// Tulostetaan merkkijono konsoliin
console.log(result);


console.log("-- 07-merkkijonot.js -- ");

// Luo muuttuja ja anna sille arvo
const greeting = "Hello, World!";

// Muunna isoiksi kirjaimiksi
const upperCaseGreeting = greeting.toUpperCase();

// Muunna pieniksi kirjaimiksi
const lowerCaseGreeting = greeting.toLowerCase();

// Tulosta molemmat tulokset
console.log(upperCaseGreeting);
console.log(lowerCaseGreeting);

console.log("-- 08-merkkijonot.js -- ");

// Luo muuttuja ja anna sille arvo
const sentence = "Learning JavaScript is fun!";

// Erotetaan sana "JavaScript" substring()-menetelmällä
const extractedWord = sentence.substring(9, 19);

// Tulostetaan erotettu sana
console.log("Extracted word: " + extractedWord);

console.log("-- 09-merkkijonot.js -- ");

// Luo muuttuja ja anna sille arvo
const messyString = " Clean me up! ";

// Poista ylimääräiset välilyönnit trim()-menetelmällä
const cleanedString = messyString.trim();

// Tulosta siistitty merkkijono
console.log("Cleaned string: " + cleanedString);

console.log("-- 10-merkkijonot.js -- ");

// Luo muuttuja ja anna sille arvo
const phrase1 = "JavaScript is versatile and powerful.";

// Tarkista sisältääkö merkkijono sanan "powerful"
const containsWord = phrase1.includes("powerful");

// Tulosta tulos konsoliin
console.log("Does the phrase include 'powerful'? " + containsWord);

console.log("-- 11-merkkijonot.js -- ");

// Luo muuttuja ja anna sille arvo
const phrase = "JavaScript is versatile and powerful.";

// Käytä .includes()-menetelmää tarkistaaksesi, sisältääkö merkkijono sanan "powerful"
const hasPowerful = phrase.includes("powerful");

// Tulosta tulos konsoliin
console.log("Does the phrase include 'powerful'? " + hasPowerful);


console.log("-- 12-merkkijonot.js -- ");
// Luo muuttuja ja anna sille arvo
const longText = "The quick brown fox jumps over the lazy dog.";

// Erotetaan "quick brown fox" slice()-menetelmällä
const slicedText = longText.slice(4, 19);

// Tulostetaan erotettu osa
console.log("Sliced text: " + slicedText);

console.log("-- 13-merkkijonot.js -- ");
// Luo muuttuja ja anna sille arvo
const description = " JavaScript is Fun and powerful! ";

// Poista ylimääräiset välilyönnit
const trimmed = description.trim();

// Muunna pieniksi kirjaimiksi
const lowerCased = trimmed.toLowerCase();

// Tarkista, sisältääkö sanan "fun"
const includesFun = lowerCased.includes("fun");

// Korvaa "powerful" sanalla "amazing"
const finalDescription = lowerCased.replace("powerful", "amazing");

// Tulosta lopullinen merkkijono ja tieto sanan sisältymisestä
console.log("Final description: " + finalDescription);
console.log("Does it include 'fun'? " + includesFun);



