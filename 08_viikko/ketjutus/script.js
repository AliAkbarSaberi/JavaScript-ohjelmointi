
"use strict";

/* ✅ Tehtävä 1: Korjaa käyttäjädatan käsittely  
   Suodatetaan aktiiviset käyttäjät ja palautetaan heidän nimensä isoilla kirjaimilla.
*/
const users = [
  { id: 1, name: "Alice", active: true },
  { id: 2, name: "Bob", active: false },
  { id: 3, name: "Charlie", active: true },
];

// Oikea ratkaisu:
const activeUsers = users
  .filter(user => user.active) // otetaan vain aktiiviset
  .map(user => user.name.toUpperCase()); // muunnetaan nimet isoiksi kirjaimiksi

console.log("Tehtävä 1:", activeUsers); // ["ALICE", "CHARLIE"]


/* ✅ Tehtävä 2: Korjaa valinnainen ketjutus  
   Käytetään ?. -operaattoria turvalliseen pääsyyn syvälle objektissa.
*/
const userData = { details: { contact: { email: "jane@example.com" } } };

// Oikea ratkaisu:
console.log("Tehtävä 2:", userData?.details?.contact?.email); // "jane@example.com"


/* ✅ Tehtävä 3: Korjaa valinnainen ketjutus taulukoiden kanssa  
   Palautetaan toinen alkio, jos se on olemassa.
*/
const customer = { orders: [1001, 1002] };

// Oikea ratkaisu:
console.log("Tehtävä 3:", customer?.orders?.[1]); // 1002


/* ✅ Tehtävä 4: Korjaa ketjutettu merkkijonojen käsittely  
   Poimitaan nimikirjaimet koko nimestä metodiketjutuksella.
*/
const fullName = "John Doe";

// Oikea ratkaisu:
const initials = fullName
  .split(" ") // jaetaan sanat
  .map(word => word[0].toUpperCase()) // otetaan ensimmäinen kirjain isolla
  .join(" "); // yhdistetään väleillä

console.log("Tehtävä 4:", initials); // "J D"


/* ✅ Tehtävä 5: Luo oma funktio  
   Palauttaa pilkulla erotetun merkkijonon varastossa olevien tuotteiden nimistä isoilla kirjaimilla.
*/
function getAvailableProducts(products) {
  return products
    .filter(product => product.stock > 0) // vain varastossa olevat
    .map(product => product.name.toUpperCase()) // nimet isoiksi kirjaimiksi
    .join(", "); // erotetaan pilkulla
}

// Testidata
const products = [
  { name: "Laptop", stock: 10 },
  { name: "Phone", stock: 0 }
];

console.log("Tehtävä 5:", getAvailableProducts(products)); // "LAPTOP"
