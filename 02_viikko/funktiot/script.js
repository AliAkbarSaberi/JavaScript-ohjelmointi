console.log("-- funktiot_01.js-- ");

// Luo funktio nimeltä add
function add(a, b) {
  return a + b;
}

// Kutsu funktiota arvoilla 10 ja 5
const sum1 = add(10, 5);
console.log("The sum of 10 and 5 is: " + sum1);

// Bonus: Kutsu funktiota useita kertoja eri argumenteilla
const sum2 = add(7, 3);
const sum3 = add(100, 250);
const sum4 = add(-5, 20);

console.log("The sum of 7 and 3 is: " + sum2);
console.log("The sum of 100 and 250 is: " + sum3);
console.log("The sum of -5 and 20 is: " + sum4);

console.log("-- funktiot_02.js-- ");

// Luo funktio nimeltä isEven
function isEven(num) {
  return num % 2 === 0;
}

// Kutsu funktiota arvoilla 4 ja 7
console.log("Is 4 even? " + isEven(4));
console.log("Is 7 even? " + isEven(7));

console.log("-- funktiot_03.js-- ");

// Luo funktio nimeltä getLength
function getLength(str) {
  return str.length;
}

// Kutsu funktiota merkkijonolla "JavaScript"
const length = getLength("JavaScript");

// Tulosta tulos
console.log("The length of the string is: " + length);

console.log("-- funktiot_04.js-- ");

// Luo funktio nimeltä capitalize
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1).toLowerCase();
}

// Kutsu funktiota merkkijonolla "javascript"
const capitalizedWord = capitalize("javascript");

// Tulosta tulos
console.log(capitalizedWord);

console.log("-- funktiot_05.js-- ");

// Luo funktio nimeltä generateRandomNumber
function generateRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Kutsu funktiota arvoilla 1 ja 10
const randomNum = generateRandomNumber(1, 10);

// Tulosta tulos
console.log("Random number between 1 and 10: " + randomNum);

console.log("-- funktiot_06.js-- ");

// Luo funktio nimeltä replaceWord
function replaceWord(sentence, oldWord, newWord) {
  return sentence.replace(oldWord, newWord);
}

// Kutsu funktiota arvoilla
const replacedSentence = replaceWord("I like apples.", "apples", "bananas");

// Tulosta tulos
console.log(replacedSentence);





console.log("-- funktiot_07.js-- ");
// Luo funktio nimeltä containsWord
function containsWord(sentence, word) {
  return sentence.includes(word);
}

// Kutsu funktiota arvoilla
console.log(containsWord("JavaScript is fun!", "fun")); // true


console.log("-- funktiot_08.js-- ");

// Luo funktio nimeltä roundNumber
function roundNumber(num, precision) {
  return num.toFixed(precision);
}

// Kutsu funktiota arvoilla 19.56789 ja 2
const rounded = roundNumber(19.56789, 2);

// Tulosta tulos
console.log(rounded);



console.log("-- funktiot_09.js-- ");
// Luo funktio nimeltä findMax
function findMax(a, b, c) {
  return Math.max(a, b, c);
}

// Kutsu funktiota arvoilla 12, 7 ja 20
const largestNumber = findMax(12, 7, 20);

// Tulosta tulos
console.log("The largest number is: " + largestNumber);

console.log("-- funktiot_10.js-- ");
// Luo funktio nimeltä cleanAndTransform
function cleanAndTransform(str) {
  return str.trim().toLowerCase().replace("powerful", "amazing");
}

// Kutsu funktiota merkkijonolla
const result = cleanAndTransform(" JavaScript is powerful! ");

// Tulosta tulos
console.log(result);

