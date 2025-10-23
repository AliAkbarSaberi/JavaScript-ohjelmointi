"use strict";

/* 
Tehtävä 1: Viivästetty tervehdys (Callback)
---------------------------------------
*/
function delayedGreet(name, callback) {
  setTimeout(() => {
    callback(`Hei, ${name}!`);
  }, 2000);
}

delayedGreet("Alice", (message) => console.log(message));

/* 
Tehtävä 2: Tilauskäsittely (Callback)
---------------------------------------
*/
function processOrder(orderNumber, callback) {
  setTimeout(() => {
    callback(`Tilaus ${orderNumber} on noudettavissa.`);
  }, 3000);
}

processOrder(101, (message) => console.log(message));

/* 
Tehtävä 3: Kirjautumisjärjestelmä (Callback)
---------------------------------------
*/
function loginUser(username, validUser, callback) {
  if (validUser) {
    setTimeout(() => {
      callback(`Tervetuloa, ${username}!`);
    }, 1000);
  } else {
    callback("Virheellinen kirjautuminen");
  }
}

loginUser("Sam", true, (message) => console.log(message));
loginUser("Alex", false, (message) => console.log(message));

/* 
Tehtävä 4: Käyttäjätietojen haku (Promise)
---------------------------------------
*/
function fetchUserData(shouldFail) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldFail) reject("Virhe käyttäjätietojen haussa");
      else resolve("Käyttäjätiedot haettu");
    }, 2000);
  });
}

fetchUserData(false).then(console.log).catch(console.error);
fetchUserData(true).then(console.log).catch(console.error);

/* 
Tehtävä 5: Tilauskäsittely (Promise-ketju)
---------------------------------------
*/
function processOrderPromise() {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Tilaus vastaanotettu");
      resolve();
    }, 2000);
  })
    .then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Tilausta valmistellaan");
          resolve();
        }, 3000);
      });
    })
    .then(() => {
      return new Promise((resolve) => {
        setTimeout(() => {
          console.log("Tilaus valmis noudettavaksi");
          resolve("Kaikki vaiheet suoritettu!");
        }, 1000);
      });
    });
}

processOrderPromise().then(console.log);

/* 
Tehtävä 6: API-simulaatio (Promise)
---------------------------------------
*/
function getUserProfile(userExists) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userExists) resolve("Käyttäjäprofiili ladattu");
      else reject("Käyttäjää ei löytynyt");
    }, 2000);
  });
}

getUserProfile(true).then(console.log).catch(console.error);
getUserProfile(false).then(console.log).catch(console.error);

/* 
Tehtävä 7: Käyttäjätietojen haku (Async/Await)
---------------------------------------------
*/
async function fetchUserDataAsync(shouldFail) {
  await new Promise((resolve) => setTimeout(resolve, 2000));
  if (shouldFail) throw new Error("Tietojen haku epäonnistui");
  return "Käyttäjätiedot ladattu";
}

fetchUserDataAsync(false).then(console.log).catch(console.error);
fetchUserDataAsync(true).then(console.log).catch(console.error);

/* 
Tehtävä 8: Verkkokaupan kassaprosessi (Async/Await)
-----------------------------------------------------
*/
async function checkoutCart() {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Varaston tarkistus...");

  await new Promise((resolve) => setTimeout(resolve, 2000));
  console.log("Maksu käsitelty");

  await new Promise((resolve) => setTimeout(resolve, 1000));
  console.log("Tilaus valmis!");
}

checkoutCart().then(() => console.log("Kiitos ostoksista!"));

/* 
Tehtävä 9: Tuotetietojen haku (Async/Await)
---------------------------------------------
*/
async function fetchProductDetails(hasError) {
  try {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    if (hasError) throw new Error("Virhe tuotteen haussa");
    return "Tuotetiedot haettu";
  } catch (error) {
    throw error;
  }
}

fetchProductDetails(false).then(console.log).catch(console.error);
fetchProductDetails(true).then(console.log).catch(console.error);

