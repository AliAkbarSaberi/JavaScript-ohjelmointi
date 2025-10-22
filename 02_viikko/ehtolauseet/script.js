console.log("-- ehtolause_01.js-- ");
// Luo funktio nimeltä checkAdult
function checkAdult(age) {
  if (age >= 18) {
    return "Olet aikuinen.";
  }
  // Jos ikä on alle 18, ei palauteta mitään
}

// Kutsu funktiota eri ikäarvoilla
console.log(checkAdult(20)); // "Olet aikuinen."
console.log(checkAdult(15)); // undefined
console.log(checkAdult(18)); // "Olet aikuinen."

console.log("-- ehtolause_02.js-- ");
// Luo funktio nimeltä checkForFox
function checkForFox(hasFox) {
  if (hasFox) {
    return "Sinulla on lemmikkikettu!";
  } else {
    return "Ei havaittu kettua!";
  }
}

// Kutsu funktiota arvoilla true ja false
console.log(checkForFox(true));  // "Sinulla on lemmikkikettu!"
console.log(checkForFox(false)); // "Ei havaittu kettua!"

console.log("-- ehtolause_03.js-- ");
// Luo funktio nimeltä getGrade
function getGrade(score) {
  if (score >= 90) {
    return "Arvosana Kiitettävä";
  } else if (score >= 80 && score <= 89) {
    return "Arvosana Hyvä";
  } else {
    return "Arvosana Tyydyttävä";
  }
}

// Kutsu funktiota pisteillä 85 ja 75
console.log(getGrade(85)); // "Arvosana Hyvä"
console.log(getGrade(75)); // "Arvosana Tyydyttävä"


console.log("-- ehtolause_04.js-- ");

// Luo funktio nimeltä canVote
function canVote(age) {
  return age >= 18;
}

// Kutsu funktiota ja tulosta viesti palautusarvon perusteella
const age = 17;

if (canVote(age)) {
  console.log("Saat äänestää");
} else {
  console.log("Et saa vielä äänestää");
}

console.log("-- ehtolause_05.js-- ");

// Luo funktio nimeltä checkAnimal
function checkAnimal(animalType) {
  return animalType === "fox"
    ? "Sinulla on fiksu seuralainen!"
    : "Ei kettu, mutta silti kiva!";
}

// Kutsu funktiota arvoilla
console.log(checkAnimal("fox")); // "Sinulla on fiksu seuralainen!"
console.log(checkAnimal("cat")); // "Ei kettu, mutta silti kiva!"

console.log("-- ehtolause_06.js-- ");

// Luo funktio nimeltä isEven
function isEven(number) {
  return number % 2 === 0;
}

// Kutsu funktiota ja tulosta viesti tuloksen perusteella
const num1 = 4;
const num2 = 7;

if (isEven(num1)) {
  console.log("Numero on parillinen!");
} else {
  console.log("Numero on pariton!");
}

if (isEven(num2)) {
  console.log("Numero on parillinen!");
} else {
  console.log("Numero on pariton!");
}

console.log("-- ehtolause_07.js-- ");

// Luo funktio nimeltä getAnimalDescription
function getAnimalDescription(favoriteAnimal) {
  switch (favoriteAnimal) {
    case "fox":
      return "Ketut ovat viekkaita ja fiksuja!";
    case "dog":
      return "Koirat ovat uskollisia ystäviä.";
    case "cat":
      return "Kissat ovat kiinnostuneita ja itsenäisiä.";
    default:
      return "Kaikki eläimet ovat mahtavia!";
  }
}

// Kutsu funktiota eri eläimillä
console.log(getAnimalDescription("fox"));  // "Ketut ovat viekkaita ja fiksuja!"
console.log(getAnimalDescription("dog"));  // "Koirat ovat uskollisia ystäviä."
console.log(getAnimalDescription("cat"));  // "Kissat ovat kiinnostuneita ja itsenäisiä."
console.log(getAnimalDescription("rabbit")); // "Kaikki eläimet ovat mahtavia!"

console.log("-- ehtolause_08.js-- ");
// Luo funktio nimeltä canEat
function canEat(isHungry, hasFood) {
  if (isHungry && hasFood) {
    return "Aika syödä!";
  } else {
    return "Sinun täytyy löytää ruokaa!";
  }
}

// Kutsu funktiota eri yhdistelmillä
console.log(canEat(true, true));   // "Aika syödä!"
console.log(canEat(true, false));  // "Sinun täytyy löytää ruokaa!"
console.log(canEat(false, true));  // "Sinun täytyy löytää ruokaa!"
console.log(canEat(false, false)); // "Sinun täytyy löytää ruokaa!"

console.log("-- ehtolause_09.js-- ");
// Luo funktio nimeltä canEnterEvent
function canEnterEvent(age, hasID) {
  if (age >= 18 && hasID) {
    return "Sisäänpääsy myönnetty.";
  } else {
    return "Sisäänpääsy evätty.";
  }
}

// Kutsu funktiota eri yhdistelmillä
console.log(canEnterEvent(20, true));   // "Sisäänpääsy myönnetty."
console.log(canEnterEvent(17, true));   // "Sisäänpääsy evätty."
console.log(canEnterEvent(25, false));  // "Sisäänpääsy evätty."
console.log(canEnterEvent(16, false));  // "Sisäänpääsy evätty."

console.log("-- ehtolause_10.js-- ");
// Luo funktio nimeltä findFox
function findFox(hasFox, foxName) {
  if (hasFox && foxName === "Kikka") {
    return "Kikka-kettu on täällä!";
  } else {
    return "No foxes found.";
  }
}

// Kutsu funktiota eri arvoilla
console.log(findFox(true, "Kikka"));   // "Kikka-kettu on täällä!"
console.log(findFox(true, "Mikko"));   // "No foxes found."
console.log(findFox(false, "Kikka"));  // "No foxes found."
console.log(findFox(false, "Mikko"));  // "No foxes found."

console.log("-- ehtolause_11.js-- ");
// Luo funktio nimeltä getDayName
function getDayName(day) {
  switch (day) {
    case 1:
      return "Maanantai";
    case 2:
      return "Tiistai";
    case 3:
      return "Keskiviikko";
    case 4:
      return "Torstai";
    case 5:
      return "Perjantai";
    case 6:
      return "Lauantai";
    case 7:
      return "Sunnuntai";
    default:
      return "Epäkelpo päivä";
  }
}

// Kutsu funktiota eri arvoilla
console.log(getDayName(1)); // "Maanantai"
console.log(getDayName(4)); // "Torstai"
console.log(getDayName(7)); // "Sunnuntai"
console.log(getDayName(9)); // "Epäkelpo päivä"

console.log("-- ehtolause_12.js-- ");
// Luo funktio nimeltä checkFoxLover
function checkFoxLover(age, likesFoxes) {
  if (age >= 18) {
    if (likesFoxes) {
      return "Olet aikuinen, joka tykkää ketuista!";
    } else {
      return "Et ole kettufani, mutta se on ok!";
    }
  } else {
    return "Olet vielä nuori, tutustu ketuihin myöhemmin!";
  }
}

// Kutsu funktiota eri yhdistelmillä
console.log(checkFoxLover(25, true));   // "Olet aikuinen, joka tykkää ketuista!"
console.log(checkFoxLover(30, false));  // "Et ole kettufani, mutta se on ok!"
console.log(checkFoxLover(16, true));   // "Olet vielä nuori, tutustu ketuihin myöhemmin!"
console.log(checkFoxLover(12, false));  // "Olet vielä nuori, tutustu ketuihin myöhemmin!"

console.log("-- ehtolause_13.js-- ");

// Luo funktio nimeltä planAdventure
function planAdventure(isWeekend, isSunny, likesFoxes) {
  if (isWeekend && isSunny && likesFoxes) {
    return "Täydellinen päivä kettuseikkailulle!";
  } else if (isWeekend || isSunny) {
    return "Hyvä päivä, mutta ei täydellinen.";
  } else {
    return "Ehkä joku toinen päivä.";
  }
}

// Kutsu funktiota eri yhdistelmillä
console.log(planAdventure(true, true, true));   // "Täydellinen päivä kettuseikkailulle!"
console.log(planAdventure(true, false, true));  // "Hyvä päivä, mutta ei täydellinen."
console.log(planAdventure(false, true, false)); // "Hyvä päivä, mutta ei täydellinen."
console.log(planAdventure(false, false, true)); // "Ehkä joku toinen päivä."

console.log("-- ehtolause_14.js-- ");

// Luo funktio nimeltä rainAdvice
function rainAdvice(isRaining) {
  return isRaining ? "Pysy sisällä" : "Nauti ulkoilmasta!";
}

// Kutsu funktiota eri arvoilla
console.log(rainAdvice(true));  // "Pysy sisällä"
console.log(rainAdvice(false)); // "Nauti ulkoilmasta!"
