// Haetaan elementit
const fruitInput = document.getElementById("fruitInput");
const addFruitBtn = document.getElementById("addFruitBtn");
const fruitList = document.getElementById("fruitList");

// Kun nappia painetaan, lisätään uusi hedelmä listaan
addFruitBtn.addEventListener("click", function() {
  const fruit = fruitInput.value.trim();

  if (fruit !== "") {
    const li = document.createElement("li");
    li.textContent = fruit;
    fruitList.appendChild(li);
    fruitInput.value = ""; // Tyhjennetään syötekenttä
  } else {
    alert("Kirjoita hedelmä ennen lisäämistä!");
  }
});

