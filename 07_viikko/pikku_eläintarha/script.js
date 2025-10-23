
// Pikku Eläintarha 🦊🐻🦅
console.log("✅ Pikku Eläintarha käynnistyi onnistuneesti!");

// 1️⃣ Eläintaulukko
let animals = [
  { name: "Kettu", type: "Nisäkäs" },
  { name: "Karhu", type: "Nisäkäs" },
  { name: "Kotka", type: "Lintu" },
  { name: "Käärme", type: "Matelija" },
  { name: "Sammakko", type: "Sammakkoeläin" },
  { name: "Hauki", type: "Kala" }
];

// 2️⃣ Haetaan tarvittavat elementit
const animalList = document.getElementById("animalList");
const searchAnimal = document.getElementById("searchAnimal");
const filterType = document.getElementById("filterType");
const sortBtn = document.getElementById("sortAnimals");
const newAnimalName = document.getElementById("newAnimalName");
const newAnimalType = document.getElementById("newAnimalType");
const addAnimalBtn = document.getElementById("addAnimal");
const noResults = document.getElementById("noResults");

// 3️⃣ Näytä eläimet sivulla
function renderAnimals(list) {
  animalList.innerHTML = "";

  if (list.length === 0) {
    noResults.style.display = "block";
    return;
  }
  noResults.style.display = "none";

  list.forEach((animal, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span><strong>${animal.name}</strong> — ${animal.type}</span>
      <button class="delete-btn">Poista</button>
    `;

    li.querySelector(".delete-btn").addEventListener("click", () => {
      removeAnimal(index);
    });

    animalList.appendChild(li);
  });
}

renderAnimals(animals);

// 4️⃣ Lisää uusi eläin
addAnimalBtn.addEventListener("click", () => {
  const name = newAnimalName.value.trim();
  const type = newAnimalType.value;

  if (name === "") {
    alert("Anna eläimen nimi!");
    return;
  }

  animals.push({ name, type });
  newAnimalName.value = "";
  updateFilteredList();
});

// 5️⃣ Poista eläin listasta
function removeAnimal(index) {
  animals.splice(index, 1);
  updateFilteredList();
}

// 6️⃣ Haku ja suodatus
function updateFilteredList() {
  const search = searchAnimal.value.toLowerCase();
  const type = filterType.value;

  const filtered = animals.filter(animal =>
    (type === "Kaikki" || animal.type === type) &&
    animal.name.toLowerCase().includes(search)
  );

  renderAnimals(filtered);
}

searchAnimal.addEventListener("input", updateFilteredList);
filterType.addEventListener("change", updateFilteredList);

// 7️⃣ Lajittelu A–Ö
sortBtn.addEventListener("click", () => {
  animals.sort((a, b) => a.name.localeCompare(b.name, "fi"));
  updateFilteredList();
});
