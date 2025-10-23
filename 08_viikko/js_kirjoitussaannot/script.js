/* ✅ Tehtävä 1: Käytä "strict mode" -tilaa
   Yritä käyttää muuttujaa ilman sen julistamista ja ota virhe kiinni.
*/
function task1() {
  "use strict";
  try {
    // Tämä aiheuttaa virheen, koska muuttujaa ei ole julistettu
    x = 10;
    console.log("x:", x);
  } catch (error) {
    console.log("Strict mode -virhe:", error.message);
  }
}

/* ✅ Tehtävä 2: Muuttujien oikea julistus
   Vakion muuttaminen aiheuttaa virheen.
*/
function task2() {
  const MAX_USERS = 100;
  let currentUsers = 10;

  try {
    MAX_USERS = 200; // Virhe!
  } catch (error) {
    console.log("Virhe vakion muuttamisessa:", error.message);
  }

  console.log("Nykyiset käyttäjät:", currentUsers, "/", MAX_USERS);
}

/* ✅ Tehtävä 3: Luo objekti ja tulosta se
*/
function task3() {
  const userProfile = {
    name: "Ali Akbar Saberi",
    email: "ali@example.com",
    isAdmin: true
  };

  console.log("Käyttäjäprofiili:", userProfile);
}

/* ✅ Tehtävä 4: Yksinkertainen funktio pinta-alan laskemiseen
*/
function calculateArea(width, height) {
  return width * height;
}

/* ✅ Tehtävä 5: Vältä taikalukuja
   Käytä vakioita ja laske alennettu hinta.
*/
const DISCOUNT = 0.1;

function applyDiscount(price) {
  const discountedPrice = price - price * DISCOUNT;
  return discountedPrice.toFixed(2);
}

/* ✅ Tehtävä 6: Kirjoita hyödyllisiä kommentteja
   Tämä funktio palauttaa käyttäjälle henkilökohtaisen tervehdyksen.
*/
function greetUser(name) {
  return `Hei ${name}! Tervetuloa takaisin sivulle.`;
}

/* ✅ Tehtävä 7: Refaktoroi epäselvä koodi selkeämmäksi
   Palauttaa tekstinä, onko luku negatiivinen, positiivinen vai nolla.
*/
function checkNumber(number) {
  if (number < 0) {
    return "negative";
  } else if (number === 0) {
    return "zero";
  } else {
    return "positive";
  }
}

/* ✅ Tehtävä 8: Korjaa koodin muotoilu
   Tässä esimerkki selkeästä sisennyksestä ja muuttujien käytöstä.
*/
let x = 10;

function example() {
  console.log("x:n arvo on:", x);
}

/* 🔍 Testitulosteet konsoliin automaattisesti */
console.log("---- TESTIT ----");
task1();
task2();
task3();
console.log("Pinta-ala 5x8 =", calculateArea(5, 8));
console.log("Alennettu hinta 100€ →", applyDiscount(100), "€");
console.log(greetUser("AliAkbar"));
console.log("Luku 5 on:", checkNumber(5));
console.log("Luku -2 on:", checkNumber(-2));
console.log("Luku 0 on:", checkNumber(0));
example();

