// Harjoitus 1
let myAlphabet = ["A", "B", "C", "D", "E", "F", "G"];

function myAlphabetLength() {
  console.log("Taulukon pituus:", myAlphabet.length);
  if (myAlphabet.length >= 5) {
    console.log("Taulukon pituus on riittävä");
  } else {
    console.log("Taulukon pituus on liian lyhyt.");
  }
}
myAlphabetLength();

// Harjoitus 2
const planets = ["Merkurius", "Venus", "Maa", "Mars", "Jupiter"];
planets.forEach((planet, index) => {
  console.log(`Planeetta: ${planet}, Indeksi: ${index}`);
});

// Harjoitus 3
const mixedValues = [42, "Heippa", true, { nimi: "Kettu" }, null, undefined];
mixedValues.forEach((value, index) => {
  console.log(`Alkio: ${value}, Indeksi: ${index}, Tyyppi: ${typeof value}`);
});

// Harjoitus 4
let myArr = [1, "Koira", 3.14, false];
console.log(myArr[0], myArr[1], myArr[2], myArr[3]);

// Harjoitus 5
let elainvarasto1 = ["Kettu", "Peura", "Pöllö", "Karhu"];
let elainvarasto2 = ["Karhu", "Susi", "Kotka", "Kettu"];
elainvarasto1.forEach(elain => {
  if (elainvarasto2.includes(elain)) {
    console.log("Yhteinen laji:", elain);
  }
});

// Harjoitus 6
let animalNames = ["Leijona", "Tiikeri", "Panda"];
animalNames.forEach(animal => {
  console.log(`Kirjaimet sanassa '${animal}': ${animal.split("").join(", ")}`);
});

// Harjoitus 7
let temperatures = [-10, 5, -3, 15, -8, 20, 2];
let positiveTemps = temperatures.filter(temp => temp > 0);
console.log("Positiiviset lämpötilat:", positiveTemps);

function getPositiveTemperatures() {
  return temperatures.filter(temp => temp > 0);
}
console.log("Funktiolla:", getPositiveTemperatures());

// Harjoitus 8
let zooAnimals = ["Elefantti", "Kirahvi", "Panda", "Kettu", "Kenguru"];
let foxIndex = zooAnimals.indexOf("Kettu");
console.log("Kettu:n indeksi:", foxIndex);

// Harjoitus 9
let penguinIndex = zooAnimals.indexOf("Pingviini");
if (penguinIndex === -1) {
  console.log("Pingviini ei ole eläintarhassa.");
} else {
  console.log("Pingviini indeksi:", penguinIndex);
}

// Harjoitus 10
let giraffeIndex = zooAnimals.indexOf("Kirahvi");
if (giraffeIndex !== -1) {
  zooAnimals[giraffeIndex] = "Alpakka";
}
console.log("Uusi lista:", zooAnimals);

// Harjoitus 11
let safariAnimals = ["Zeebra", "Leopardi", "Elefantti", "Gazelli"];
safariAnimals.sort();
console.log("Aakkosjärjestyksessä:", safariAnimals);

// Harjoitus 12
safariAnimals.reverse();
console.log("Käännetty järjestys:", safariAnimals);

// Harjoitus 13
console.log("Sisältääkö Tiikeri?:", zooAnimals.includes("Tiikeri"));

// Harjoitus 14
let attendees = ["Jonna", "Santtu", "Jonna", "Alex", "Jonna"];
let jonnaIndexes = [];
attendees.forEach((name, index) => {
  if (name === "Jonna") jonnaIndexes.push(index);
});
console.log("Jonna:n esiintymät:", jonnaIndexes);

// Harjoitus 15
let upperCaseNames = attendees.map(name => name.toUpperCase());
console.log("Isoilla kirjaimilla:", upperCaseNames);

// Harjoitus 16
let forestAnimals = ["Peura", "Karhu", "Susi"];
let farmAnimals = ["Hevonen", "Lammas", "Vuohi"];
let combinedAnimals = forestAnimals.concat(farmAnimals);
console.log("Yhdistetyt:", combinedAnimals);

// Harjoitus 17
let birdSpecies = ["Kotka", "Pöllö", "Haukka", "Pääsky", "Pingviini"];
birdSpecies.shift(); // poistaa ensimmäisen
birdSpecies.pop();   // poistaa viimeisen
console.log("Jäljelle jääneet:", birdSpecies);

// Harjoitus 18
let numbers = [10, 20, 30, 40, 50];
let index30 = numbers.indexOf(30);
numbers.splice(index30, 1, 25, 27);
console.log("Uusi numbers:", numbers);

// Harjoitus 19
let prices = [5, 10, 15, 20];
let increasedPrices = prices.map(price => price * 1.1);
console.log("Korotetut hinnat:", increasedPrices);

// Harjoitus 20
let words = ["omena", "banaani", "kirsikka", "kiivi", "mansikka"];
let longWords = words.filter(word => word.length > 5);
console.log("Yli 5 kirjainta:", longWords);
