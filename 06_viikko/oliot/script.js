/* Tehtävä 1 */
let library = [
  { title: "Tuntematon sotilas", author: "Väinö Linna", yearPublished: 1954 },
  { title: "Sinuhe egyptiläinen", author: "Mika Waltari", yearPublished: 1945 }
];

/* Tehtävä 2 */
console.log("Ensimmäinen kirja:", library[0].title);
library[1].yearPublished = 1956;
console.log("Päivitetty toinen kirja:", library[1]);

/* Tehtävä 3 */
library[0].genres = ["historiallinen", "sota"];
library[0]["isAvailable"] = true;
console.log("Päivitetty ensimmäinen kirja:", library[0]);

/* Tehtävä 4 */
function Book(title, author, yearPublished, genres) {
  this.title = title;
  this.author = author;
  this.yearPublished = yearPublished;
  this.genres = genres;
}

let newBook = new Book("Seitsemän veljestä", "Aleksis Kivi", 1870, ["klassikko", "draama"]);
library.push(newBook);
console.log("Uusi kirja lisätty:", library[2]);

/* Tehtävä 7 */
let students = [
  { name: "Anna", age: 17, grade: 95 },
  { name: "Mikko", age: 16, grade: 88 },
  { name: "Laura", age: 18, grade: 91 }
];

console.log("Oppilaat, joiden arvosana yli 90:");
students.forEach(student => {
  if (student.grade > 90) {
    console.log(student.name);
  }
});

/* Tehtävä 8 */
let car = {
  brand: "Tesla",
  model: "Model 3",
  year: 2022,
  isElectric: true
};

function checkCarType(car) {
  if (car.isElectric) {
    console.log("This car is eco-friendly!");
  } else {
    console.log("This car runs on fuel.");
  }
}

checkCarType(car);

/* Tehtävä 9 */
let movies = [
  { title: "Inception", director: "Christopher Nolan", rating: 8.8 },
  { title: "Interstellar", director: "Christopher Nolan", rating: 8.6 },
  { title: "Frozen", director: "Chris Buck", rating: 7.5 }
];

console.log("Elokuvat, joiden arvio yli 8:");
for (let movie of movies) {
  if (movie.rating > 8) {
    console.log(movie.title);
  }
}

/* Tehtävä 10 */
function findOldestCar(cars) {
  let oldest = cars[0];
  for (let i = 1; i < cars.length; i++) {
    if (cars[i].year < oldest.year) {
      oldest = cars[i];
    }
  }
  return oldest;
}

let carList = [
  { brand: "Volvo", year: 2015 },
  { brand: "Audi", year: 2010 },
  { brand: "Toyota", year: 2018 }
];

console.log("Vanhin auto:", findOldestCar(carList));

/* Tehtävä 11 */
let userProfiles = [
  { username: "admin", email: "admin@example.com", isAdmin: true },
  { username: "user1", email: "user1@example.com", isAdmin: false },
  { username: "mod", email: "mod@example.com", isAdmin: true }
];

function getAdmins(users) {
  return users.filter(user => user.isAdmin);
}

console.log("Ylläpitäjät:", getAdmins(userProfiles));

/* Tehtävä 12 */
let orders = [
  { orderId: 1, customerName: "Ali", totalAmount: 45, status: "completed" },
  { orderId: 2, customerName: "Sara", totalAmount: 32, status: "pending" },
  { orderId: 3, customerName: "Leo", totalAmount: 50, status: "completed" }
];

function getCompletedOrders(orders) {
  return orders.filter(order => order.status === "completed");
}

console.log("Valmiit tilaukset:", getCompletedOrders(orders));

/* Tehtävä 13 */
let smartphone = {
  brand: "Samsung",
  model: "Galaxy S23",
  batteryLife: "20h",
  is5GEnabled: true
};

function check5G(phone) {
  if (phone.is5GEnabled) {
    console.log("This phone supports 5G!");
  } else {
    console.log("This phone does not support 5G.");
  }
}

check5G(smartphone);

/* Tehtävä 14 */
let fox = {
  name: "Redtail",
  age: 2,
  habitat: "forest"
};

function describeFox(fox) {
  if (fox.age < 3) {
    console.log("This fox is young");
  } else {
    console.log("This fox is an adult");
  }
}

describeFox(fox);

/* Tehtävä 15 */
let employees = [
  { name: "Emma", position: "Manager", salary: 4000 },
  { name: "Tom", position: "Developer", salary: 3500 },
  { name: "Sara", position: "Designer", salary: 3200 }
];

function calculateTotalSalary(employeeList) {
  let total = 0;
  for (let emp of employeeList) {
    total += emp.salary;
  }
  return total;
}

console.log("Kokonaispalkkasumma:", calculateTotalSalary(employees));
