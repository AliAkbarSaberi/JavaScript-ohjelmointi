/* ✅ Tehtävä 1
Luo JavaScript-olio nimeltä student ja tulosta JSON-merkkijonona
*/
const student = {
  name: "Mikko",
  age: 17,
  grade: "A"
};

const studentJSON = JSON.stringify(student);
console.log("Tehtävä 1 – JSON-merkkijono:", studentJSON);


/* ✅ Tehtävä 2
Muunna JSON takaisin olioksi ja tulosta nimi
*/
const parsedStudent = JSON.parse(studentJSON);
console.log("Tehtävä 2 – Nimi:", parsedStudent.name);


/* ✅ Tehtävä 3
Luo taulukko opiskelijoista ja tulosta JSON-merkkijonona
*/
const classroom = [
  { name: "Anna", age: 18, grade: "B" },
  { name: "Ville", age: 19, grade: "A" },
  { name: "Liisa", age: 17, grade: "C" }
];

const classroomJSON = JSON.stringify(classroom);
console.log("Tehtävä 3 – Classroom JSON:", classroomJSON);


/* ✅ Tehtävä 4
Muunna takaisin taulukoksi ja tulosta kaikkien nimet
*/
const parsedClassroom = JSON.parse(classroomJSON);
console.log("Tehtävä 4 – Opiskelijoiden nimet:");
parsedClassroom.forEach(student => console.log(student.name));


/* ✅ Tehtävä 5
Luo sääraportti ja pura JSON takaisin
*/
const weatherReport = {
  temperature: 21,
  humidity: 55,
  conditions: "Sunny"
};

const weatherJSON = JSON.stringify(weatherReport);
console.log("Tehtävä 5 – Weather JSON:", weatherJSON);

const parsedWeather = JSON.parse(weatherJSON);
console.log("Tehtävä 5 – Säätila:", parsedWeather.conditions);


/* ✅ Tehtävä 6
Elokuvataulukko ja tulosta vain ne, joiden arvosana on yli 8
*/
const movies = [
  { title: "Inception", director: "Nolan", rating: 8.8 },
  { title: "Titanic", director: "Cameron", rating: 7.9 },
  { title: "The Dark Knight", director: "Nolan", rating: 9.0 }
];

const moviesJSON = JSON.stringify(movies);
const parsedMovies = JSON.parse(moviesJSON);

console.log("Tehtävä 6 – Elokuvat, arvosana yli 8:");
parsedMovies
  .filter(movie => movie.rating > 8)
  .forEach(movie => console.log(movie.title));


/* ✅ Tehtävä 7
Funktio, joka suodattaa korkeasti arvostellut elokuvat
*/
function filterHighRatedMovies(jsonString) {
  const movieArray = JSON.parse(jsonString);
  return movieArray.filter(movie => movie.rating > 8);
}

const highRated = filterHighRatedMovies(moviesJSON);
console.log("Tehtävä 7 – Suodatetut elokuvat:", highRated);


/* ✅ Tehtävä 8
Ostoskori JSON-muodossa
*/
const shoppingCart = {
  items: [
    { name: "Maito", price: 2.5 },
    { name: "Leipä", price: 3.0 },
    { name: "Juusto", price: 4.5 }
  ]
};

const cartJSON = JSON.stringify(shoppingCart);
console.log("Tehtävä 8 – Ostoskori JSON:", cartJSON);


/* ✅ Tehtävä 9
Funktio, joka laskee ostoskorin hinnan
*/
function totalCartValue(jsonString) {
  const cart = JSON.parse(jsonString);
  return cart.items.reduce((sum, item) => sum + item.price, 0);
}

console.log("Tehtävä 9 – Ostoskorin kokonaishinta:", totalCartValue(cartJSON), "€");


/* ✅ Tehtävä 10
Peliolio, JSON-muunnos ja pistepäivitys
*/
const gameProgress = {
  level: 3,
  score: 1500,
  livesRemaining: 2
};

const gameJSON = JSON.stringify(gameProgress);
console.log("Tehtävä 10 – Game JSON:", gameJSON);

const parsedGame = JSON.parse(gameJSON);
parsedGame.score += 100;

console.log("Tehtävä 10 – Päivitetty peliolio:", parsedGame);
