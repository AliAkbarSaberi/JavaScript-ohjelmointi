// Haetaan tarvittavat elementit
const form = document.getElementById("orderForm");
const summary = document.getElementById("orderSummary");

// Tallennetaan valinnat taulukoihin
let toppings = []; // täytteet
let extras = [];   // lisukkeet

// Funktio hinnan laskemiseen
function calculateTotal() {
  // Aloitetaan pannukakun perushinnasta
  const pancake = form.querySelector('select[name="pancake"] option:checked');
  let total = Number(pancake.dataset.price);

  // Jokainen täyte lisää 1 €
  total += toppings.length * 1;

  // Lisukkeiden tarkat hinnat (haetaan data-price)
  extras.forEach(extra => {
    total += Number(extra.dataset.price);
  });

  // Tarkistetaan toimitusvaihtoehto
  const delivery = form.querySelector('input[name="delivery"]:checked');
  if (delivery && delivery.value === "toimitus") {
    total += Number(delivery.dataset.price);
  }

  return total.toFixed(2);
}

// Funktio tilauksen yhteenvetoon
function updateSummary() {
  const name = form.querySelector('input[name="customerName"]').value;
  const pancake = form.querySelector('select[name="pancake"] option:checked').textContent;
  const delivery = form.querySelector('input[name="delivery"]:checked')?.nextSibling.textContent.trim() || "Ei valittu";

  const toppingsList = toppings.map(t => t.nextSibling.textContent.trim()).join(", ") || "Ei täytteitä";
  const extrasList = extras.map(e => e.nextSibling.textContent.trim()).join(", ") || "Ei lisukkeita";

  const total = calculateTotal();

  summary.innerHTML = `
    <h3>Tilausyhteenveto</h3>
    <p><strong>Asiakas:</strong> ${name}</p>
    <p><strong>Pannukakku:</strong> ${pancake}</p>
    <p><strong>Täytteet:</strong> ${toppingsList}</p>
    <p><strong>Lisukkeet:</strong> ${extrasList}</p>
    <p><strong>Toimitustapa:</strong> ${delivery}</p>
    <p><strong>Yhteishinta:</strong> ${total} €</p>
  `;
}

// Tapahtumankuuntelija lomakkeelle (vain yksi!)
form.addEventListener("change", (event) => {
  const target = event.target;

  // Täytteiden käsittely
  if (target.name === "topping") {
    if (target.checked) {
      toppings.push(target);
    } else {
      toppings = toppings.filter(item => item !== target);
    }
  }

  // Lisukkeiden käsittely
  if (target.name === "extra") {
    if (target.checked) {
      extras.push(target);
    } else {
      extras = extras.filter(item => item !== target);
    }
  }

  // Päivitetään yhteenveto jokaisen muutoksen jälkeen
  updateSummary();
});

// "Näytä tilaus" -painike (HTML:ssä on esim. id="showOrder")
document.getElementById("showOrder").addEventListener("click", (e) => {
  e.preventDefault();
  updateSummary();
});
