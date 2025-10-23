/* Tehtävä 1 */
let weather = {
  temperature: 15,
  humidity: 80,
  condition: "Sateinen"
};

function checkWeather(weather) {
  if (weather.condition === "Sateinen") {
    console.log("Ota sateenvarjo!");
  } else {
    console.log("Sää on hyvä!");
  }
}
checkWeather(weather);

/* Tehtävä 2 */
let shoppingCart = {
  products: [
    { name: "Omena", price: 1.2, quantity: 5 },
    { name: "Maito", price: 2.5, quantity: 2 },
    { name: "Leipä", price: 3.0, quantity: 1 }
  ]
};

function calculateTotal(cart) {
  let total = 0;
  for (let item of cart.products) {
    total += item.price * item.quantity;
  }
  return total;
}

console.log("Ostoskorin kokonaishinta:", calculateTotal(shoppingCart), "€");

/* Tehtävä 3 */
let restaurants = [
  { name: "Bella Italia", cuisineType: "Italialainen", rating: 4.5 },
  { name: "Sushi House", cuisineType: "Japanilainen", rating: 3.8 },
  { name: "Tandoori", cuisineType: "Intialainen", rating: 4.2 }
];

function topRated(restaurants) {
  return restaurants.filter(r => r.rating >= 4);
}
console.log("Hyvät ravintolat:", topRated(restaurants));

/* Tehtävä 4 */
let bankAccount = {
  accountHolder: "Matti Meikäläinen",
  balance: 1000,
  transactions: [200, -150, 50, -100]
};

function calculateBalance(account) {
  let total = account.balance;
  for (let t of account.transactions) {
    total += t;
  }
  return total;
}
console.log("Kokonaissaldo:", calculateBalance(bankAccount), "€");

/* Tehtävä 5 */
let students = [
  { name: "Anna", scores: [90, 95, 88], averageScore: null },
  { name: "Mikko", scores: [75, 80, 79], averageScore: null },
  { name: "Sara", scores: [100, 98, 97], averageScore: null }
];

function calculateAverages(students) {
  for (let student of students) {
    let sum = student.scores.reduce((a, b) => a + b, 0);
    student.averageScore = (sum / student.scores.length).toFixed(2);
  }
}
calculateAverages(students);
console.log("Päivitetyt opiskelijat:", students);

/* Tehtävä 6 */
let courses = [
  { courseName: "Matematiikka", instructor: "Leena", studentsEnrolled: 25 },
  { courseName: "Ohjelmointi", instructor: "Antti", studentsEnrolled: 40 },
  { courseName: "Historia", instructor: "Tuula", studentsEnrolled: 15 }
];

function printPopularCourses(courses) {
  courses.forEach(course => {
    if (course.studentsEnrolled > 30) {
      console.log(course.courseName);
    }
  });
}
printPopularCourses(courses);

/* Tehtävä 7 */
let pet = { species: "Koira", name: "Rekku", isVaccinated: false };

function checkVaccination(pet) {
  return pet.isVaccinated ? "Rokotus kunnossa" : "Rokotusta tarvitaan";
}
console.log(checkVaccination(pet));

/* Tehtävä 8 */
let city = { name: "Helsinki", population: 1300000, landmark: "Tuomiokirkko" };

function checkCity(city) {
  if (city.population > 1000000) {
    console.log("Tämä on suuri kaupunki!");
  } else {
    console.log("Pieni mutta viihtyisä kaupunki!");
  }
}
checkCity(city);

/* Tehtävä 9 */
let transactions = [
  { type: "credit", amount: 500 },
  { type: "debit", amount: 200 },
  { type: "credit", amount: 300 },
  { type: "debit", amount: 100 }
];

function calculateTransactionBalance(transactions) {
  let balance = 0;
  for (let t of transactions) {
    if (t.type === "credit") balance += t.amount;
    else balance -= t.amount;
  }
  return balance;
}
console.log("Tapahtumien kokonaissaldo:", calculateTransactionBalance(transactions));

/* Tehtävä 10 */
let foxPack = {
  foxes: [
    { name: "Ruby", age: 1.5, furColor: "Punainen" },
    { name: "Max", age: 3, furColor: "Harmaa" },
    { name: "Luna", age: 0.8, furColor: "Ruskea" }
  ]
};

function getYoungFoxes(pack) {
  return pack.foxes.filter(fox => fox.age < 2);
}
console.log("Nuoret ketut:", getYoungFoxes(foxPack));

/* Tehtävä 11 */
let gameCharacter = {
  name: "Arin",
  level: 12,
  health: 100,
  inventory: ["Miekka", "Kilpi", "Potion"]
};

function printInventory(character) {
  console.log("Varustelista:", character.inventory.join(", "));
}
printInventory(gameCharacter);

/* Tehtävä 12 */
let employees = [
  { name: "Laura", role: "Manager", workingHours: 38 },
  { name: "Pekka", role: "Developer", workingHours: 42 },
  { name: "Sanna", role: "Designer", workingHours: 45 }
];

function findHardWorkers(employees) {
  return employees.filter(e => e.workingHours > 40);
}
console.log("Ylityötä tekevät työntekijät:", findHardWorkers(employees));

/* Tehtävä 13 */
let musicAlbums = [
  { title: "Hybrid Theory", artist: "Linkin Park", releaseYear: 2000 },
  { title: "Back in Black", artist: "AC/DC", releaseYear: 1980 },
  { title: "21", artist: "Adele", releaseYear: 2011 }
];

function recentAlbums(albums) {
  return albums.filter(a => a.releaseYear > 2000);
}
console.log("2000-luvun albumit:", recentAlbums(musicAlbums));

/* Tehtävä 14 */
let cars = [
  { brand: "Tesla", model: "Model S", horsepower: 670 },
  { brand: "BMW", model: "M3", horsepower: 503 },
  { brand: "Ferrari", model: "812", horsepower: 789 }
];

function findMostPowerfulCar(cars) {
  let maxCar = cars[0];
  for (let car of cars) {
    if (car.horsepower > maxCar.horsepower) {
      maxCar = car;
    }
  }
  return maxCar;
}
console.log("Vahvin auto:", findMostPowerfulCar(cars));

/* Tehtävä 15 */
let airports = [
  { name: "Helsinki-Vantaa", country: "Suomi", flightsPerDay: 500 },
  { name: "Oulu Airport", country: "Suomi", flightsPerDay: 120 },
  { name: "Frankfurt Airport", country: "Saksa", flightsPerDay: 700 }
];

function busiestAirport(airports) {
  let busiest = airports[0];
  for (let airport of airports) {
    if (airport.flightsPerDay > busiest.flightsPerDay) {
      busiest = airport;
    }
  }
  return busiest;
}
console.log("Vilkkain lentokenttä:", busiestAirport(airports));



/* -------------------------  Tehtävä 1  ------------------------- */
// Konstruktori-funktio
function User(username, email) {
  this.username = username;
  this.email = email;
  this.showInfo = function() {
    console.log(`Käyttäjä: ${this.username}, sähköposti: ${this.email}`);
  };
}

// Luodaan käyttäjä ja näytetään tiedot
const user1 = new User("Ali", "ali@example.com");
user1.showInfo();


/* -------------------------  Tehtävä 2  ------------------------- */
// ES6 Class-syntaksi
class UserClass {
  constructor(username, email) {
    this.username = username;
    this.email = email;
  }

  showInfo() {
    console.log(`Käyttäjä: ${this.username}, sähköposti: ${this.email}`);
  }

  changeEmail(newEmail) {
    this.email = newEmail;
    console.log(`Uusi sähköposti: ${this.email}`);
  }
}

const user2 = new UserClass("Sara", "sara@oldmail.com");
user2.showInfo();
user2.changeEmail("sara@newmail.com");


/* -------------------------  Tehtävä 3  -------------------------
HTML:
<button id="themeBtn">Vaihda teema</button>
<p id="themeStatus"></p>
---------------------------------------------------------------*/
const theme = { name: "light", isActive: true };
const themeBtn = document.getElementById("themeBtn");
const themeStatus = document.getElementById("themeStatus");

if (themeBtn) {
  themeStatus.textContent = `Nykyinen teema: ${theme.name}`;
  themeBtn.addEventListener("click", () => {
    theme.name = theme.name === "light" ? "dark" : "light";
    theme.isActive = !theme.isActive;
    themeStatus.textContent = `Nykyinen teema: ${theme.name}`;
    document.body.style.backgroundColor =
      theme.name === "dark" ? "#222" : "#fff";
    document.body.style.color =
      theme.name === "dark" ? "#fff" : "#000";
  });
}


/* -------------------------  Tehtävä 4  -------------------------
HTML:
<button id="decrease">-</button>
<span id="counterValue">0</span>
<button id="increase">+</button>
---------------------------------------------------------------*/
const counter = { value: 0 };
const decreaseBtn = document.getElementById("decrease");
const increaseBtn = document.getElementById("increase");
const counterDisplay = document.getElementById("counterValue");

if (counterDisplay) {
  counterDisplay.textContent = counter.value;
  increaseBtn.addEventListener("click", () => {
    counter.value++;
    counterDisplay.textContent = counter.value;
  });
  decreaseBtn.addEventListener("click", () => {
    counter.value--;
    counterDisplay.textContent = counter.value;
  });
}


/* -------------------------  Tehtävä 5  -------------------------
HTML:
<p>Tuote: <span id="prodName">Maito</span>, hinta: <span id="prodPrice">2.5</span> €</p>
<input id="qtyInput" type="number" placeholder="Määrä" />
<p id="totalPrice"></p>
---------------------------------------------------------------*/
const product = { name: "Maito", price: 2.5, quantity: 0 };
const qtyInput = document.getElementById("qtyInput");
const totalPrice = document.getElementById("totalPrice");

if (qtyInput) {
  qtyInput.addEventListener("input", () => {
    product.quantity = Number(qtyInput.value);
    const total = (product.price * product.quantity).toFixed(2);
    totalPrice.textContent = `Kokonaishinta: ${total} €`;
  });
}


/* -------------------------  Tehtävä 6  -------------------------
HTML:
<input id="taskTitle" placeholder="Otsikko" />
<input id="taskDesc" placeholder="Kuvaus" />
<button id="addTask">Lisää tehtävä</button>
<ul id="taskList"></ul>
---------------------------------------------------------------*/
function Task(title, description, completed = false) {
  this.title = title;
  this.description = description;
  this.completed = completed;
}

const tasks = [];
const addTaskBtn = document.getElementById("addTask");
if (addTaskBtn) {
  addTaskBtn.addEventListener("click", () => {
    const title = document.getElementById("taskTitle").value;
    const desc = document.getElementById("taskDesc").value;
    const newTask = new Task(title, desc, false);
    tasks.push(newTask);
    const li = document.createElement("li");
    li.textContent = `${newTask.title} - ${newTask.description}`;
    document.getElementById("taskList").appendChild(li);
  });
}


/* -------------------------  Tehtävä 7  -------------------------
HTML:
<p id="carInfo"></p>
---------------------------------------------------------------*/
function Car(brand, model, year) {
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.age = function() {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  };
}

const car = new Car("Toyota", "Corolla", 2018);
const carInfo = document.getElementById("carInfo");
if (carInfo) {
  carInfo.textContent = `${car.brand} ${car.model} on ${car.age()} vuotta vanha.`;
}


/* -------------------------  Tehtävä 8  -------------------------
HTML:
<button id="sortUsers">Lajittele pisteet</button>
<ul id="userList"></ul>
---------------------------------------------------------------*/
let users = [
  { name: "Mikko", score: 55 },
  { name: "Anna", score: 95 },
  { name: "Pekka", score: 70 }
];

const userList = document.getElementById("userList");
const sortBtn = document.getElementById("sortUsers");

if (userList) {
  function displayUsers() {
    userList.innerHTML = "";
    users.forEach(u => {
      const li = document.createElement("li");
      li.textContent = `${u.name} - ${u.score}`;
      userList.appendChild(li);
    });
  }

  displayUsers();
  sortBtn.addEventListener("click", () => {
    users.sort((a, b) => b.score - a.score);
    displayUsers();
  });
}


/* -------------------------  Tehtävä 9  -------------------------
HTML:
<input id="itemInput" placeholder="Uusi tuote" />
<button id="addItem">Lisää</button>
<ul id="itemList"></ul>
---------------------------------------------------------------*/
const shoppingList = { items: [] };
const addItemBtn = document.getElementById("addItem");
const itemInput = document.getElementById("itemInput");
const itemList = document.getElementById("itemList");

if (addItemBtn) {
  addItemBtn.addEventListener("click", () => {
    const newItem = itemInput.value.trim();
    if (newItem) {
      shoppingList.items.push(newItem);
      const li = document.createElement("li");
      li.textContent = newItem;
      itemList.appendChild(li);
      itemInput.value = "";
    }
  });
}


/* -------------------------  Tehtävä 10  -------------------------
HTML:
<div id="posts"></div>
---------------------------------------------------------------*/
const posts = [
  { title: "Ensimmäinen postaus", content: "Hei maailma!", likes: 0 },
  { title: "Toinen postaus", content: "Pidätkö tästä?", likes: 2 }
];

const postsDiv = document.getElementById("posts");

if (postsDiv) {
  function renderPosts() {
    postsDiv.innerHTML = "";
    posts.forEach((post, index) => {
      const postEl = document.createElement("div");
      postEl.innerHTML = `<h3>${post.title}</h3>
        <p>${post.content}</p>
        <p>Tykkäyksiä: ${post.likes}</p>
        <button id="like${index}">Tykkää</button>`;
      postsDiv.appendChild(postEl);
      document
        .getElementById(`like${index}`)
        .addEventListener("click", () => {
          post.likes++;
          renderPosts();
        });
    });
  }
  renderPosts();
}


/* -------------------------  Tehtävä 11  ------------------------- */
function Employee(name, position, salary) {
  this.name = name;
  this.position = position;
  this.salary = salary;
  this.increaseSalary = function(percent) {
    this.salary += (this.salary * percent) / 100;
  };
}

const emp = new Employee("Leena", "Manager", 4000);
emp.increaseSalary(10);
console.log(`${emp.name}: ${emp.salary} €`);


/* -------------------------  Tehtävä 12  -------------------------
HTML:
<p id="timerDisplay">0</p>
---------------------------------------------------------------*/
const timer = {
  seconds: 0,
  start() {
    setInterval(() => {
      this.seconds++;
      const display = document.getElementById("timerDisplay");
      if (display) display.textContent = this.seconds;
    }, 1000);
  }
};
timer.start();


/* -------------------------  Tehtävä 13  -------------------------
HTML:
<input id="bookTitle" placeholder="Kirjan nimi" />
<input id="bookAuthor" placeholder="Kirjailija" />
<input id="bookPages" type="number" placeholder="Sivut" />
<button id="addBook">Lisää kirja</button>
<ul id="bookList"></ul>
---------------------------------------------------------------*/
function Book(title, author, pages) {
  this.title = title;
  this.author = author;
  this.pages = pages;
}

const library = [];
const addBookBtn = document.getElementById("addBook");
if (addBookBtn) {
  addBookBtn.addEventListener("click", () => {
    const title = document.getElementById("bookTitle").value;
    const author = document.getElementById("bookAuthor").value;
    const pages = document.getElementById("bookPages").value;
    const newBook = new Book(title, author, pages);
    library.push(newBook);
    const li = document.createElement("li");
    li.textContent = `${title} (${author}), ${pages} sivua`;
    document.getElementById("bookList").appendChild(li);
  });
}


/* -------------------------  Tehtävä 14  -------------------------
HTML:
<input id="foxName" placeholder="Kettunimi" />
<input id="foxLocation" placeholder="Sijainti" />
<button id="addFox">Lisää kettu</button>
<ul id="foxList"></ul>
---------------------------------------------------------------*/
const foxTracker = { foxes: [] };
const addFoxBtn = document.getElementById("addFox");

if (addFoxBtn) {
  addFoxBtn.addEventListener("click", () => {
    const name = document.getElementById("foxName").value;
    const location = document.getElementById("foxLocation").value;
    if (name && location) {
      foxTracker.foxes.push({ name, location });
      const li = document.createElement("li");
      li.textContent = `${name} - ${location}`;
      document.getElementById("foxList").appendChild(li);
    }
  });
}

