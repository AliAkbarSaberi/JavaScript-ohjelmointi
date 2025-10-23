"use strict";

/* ✅ Tehtävä 1
Tallenna merkkijono LocalStorageen ja hae se.
*/
localStorage.setItem("message", "Hello, LocalStorage!");
const message = localStorage.getItem("message");
console.log("Tehtävä 1:", message);


/* ✅ Tehtävä 2
Tallenna olio JSON-muodossa ja hae se.
*/
const userSettings = {
  theme: "dark",
  language: "English"
};

// Tallenna JSONiksi
localStorage.setItem("userSettings", JSON.stringify(userSettings));

// Hae ja pura JSON
const retrievedSettings = JSON.parse(localStorage.getItem("userSettings"));
console.log("Tehtävä 2 - Teema:", retrievedSettings.theme);


/* ✅ Tehtävä 3
Tallenna taulukko olioista ja tulosta nimet.
*/
const favoriteBooks = [
  { title: "The Hobbit", author: "J.R.R. Tolkien" },
  { title: "1984", author: "George Orwell" },
  { title: "To Kill a Mockingbird", author: "Harper Lee" }
];

localStorage.setItem("favoriteBooks", JSON.stringify(favoriteBooks));

const retrievedBooks = JSON.parse(localStorage.getItem("favoriteBooks"));
console.log("Tehtävä 3 - Kirjat:");
retrievedBooks.forEach(book => console.log(book.title));


/* ✅ Tehtävä 4
Funktio tallentamiseen LocalStorageen.
*/
function saveToLocalStorage(key, object) {
  const json = JSON.stringify(object);
  localStorage.setItem(key, json);
  console.log(`Tallennettu avaimella "${key}":`, object);
}

// Testataan
saveToLocalStorage("testUser", { name: "Alice", age: 25 });


/* ✅ Tehtävä 5
Funktio hakemiseen LocalStoragesta.
*/
function getFromLocalStorage(key) {
  const data = localStorage.getItem(key);
  try {
    const parsed = JSON.parse(data);
    console.log(`Haettu "${key}":`, parsed);
    return parsed;
  } catch {
    console.log(`Haettu "${key}":`, data);
    return data;
  }
}

// Testataan
getFromLocalStorage("testUser");


/* ✅ Tehtävä 6
Tallenna olio ja päivitä sen arvo LocalStoragessa.
*/
const userProfile = {
  username: "Ali",
  email: "ali@example.com",
  preferences: {
    theme: "light",
    notifications: true
  }
};

localStorage.setItem("userProfile", JSON.stringify(userProfile));

// Hae, päivitä ja tallenna takaisin
const profileData = JSON.parse(localStorage.getItem("userProfile"));
profileData.preferences.theme = "dark mode";
localStorage.setItem("userProfile", JSON.stringify(profileData));
console.log("Tehtävä 6 - Päivitetty profiili:", profileData);


/* ✅ Tehtävä 7
Ostolista + lisääminen listaan.
*/
const shoppingList = { items: ["Milk", "Bread"] };
localStorage.setItem("shoppingList", JSON.stringify(shoppingList));

function addItemToList(item) {
  const list = JSON.parse(localStorage.getItem("shoppingList")) || { items: [] };
  list.items.push(item);
  localStorage.setItem("shoppingList", JSON.stringify(list));
  console.log("Tehtävä 7 - Päivitetty lista:", list.items);
}

// Testataan
addItemToList("Cheese");


/* ✅ Tehtävä 8
Luo counter ja kasvata arvoa.
*/
const counter = { count: 0 };
localStorage.setItem("counter", JSON.stringify(counter));

function incrementCounter() {
  const c = JSON.parse(localStorage.getItem("counter")) || { count: 0 };
  c.count++;
  localStorage.setItem("counter", JSON.stringify(c));
  console.log("Tehtävä 8 - Laskuri:", c.count);
}

// Testataan
incrementCounter();
incrementCounter();


/* ✅ Tehtävä 9
Tehtävälista + tehtävän merkitseminen valmiiksi.
*/
const tasks = [
  { id: 1, description: "Buy milk", completed: false },
  { id: 2, description: "Read book", completed: false },
  { id: 3, description: "Go jogging", completed: false }
];

localStorage.setItem("tasks", JSON.stringify(tasks));

function markTaskComplete(taskId) {
  const allTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const task = allTasks.find(t => t.id === taskId);
  if (task) {
    task.completed = true;
    localStorage.setItem("tasks", JSON.stringify(allTasks));
    console.log(`Tehtävä ${taskId} merkitty valmiiksi:`, allTasks);
  } else {
    console.log(`Tehtävää ID:llä ${taskId} ei löytynyt.`);
  }
}

// Testataan
markTaskComplete(2);


/* ✅ Tehtävä 10
Tyhjennä LocalStorage.
*/
function clearLocalStorage() {
  localStorage.clear();
  console.log("Tehtävä 10: LocalStorage tyhjennetty.");
}

// Testataan (kommentoi pois, jos et halua tyhjentää kaikkia arvoja heti!)
// clearLocalStorage();

