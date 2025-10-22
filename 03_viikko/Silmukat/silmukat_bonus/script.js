// Luo funktio nimeltä allTripsAverageSpeed
function allTripsAverageSpeed() {
  let totalDistance = 0; // Kokonaisetäisyys
  let totalTime = 0;     // Kokonausaika

  while (true) {
    // Pyydetään käyttäjältä etäisyys
    let distance = parseFloat(prompt("Anna etäisyys kilometreinä (0 lopettaa):"));

    // Jos syöte ei ole numero
    if (isNaN(distance) || distance < 0) {
      alert("Anna positiivinen numero tai 0 lopettaaksesi.");
      continue;
    }

    // Jos käyttäjä syöttää 0, lopetetaan
    if (distance === 0) {
      break;
    }

    // Pyydetään aika
    let time = parseFloat(prompt("Anna aika tunteina:"));

    // Tarkistetaan, että aika on kelvollinen
    if (isNaN(time) || time <= 0) {
      alert("Ajan täytyy olla positiivinen luku!");
      continue;
    }

    // Lisätään arvot kokonaissummaan
    totalDistance += distance;
    totalTime += time;
  }

  // Kun käyttäjä lopettaa, tarkistetaan onko tietoja annettu
  if (totalDistance > 0 && totalTime > 0) {
    let averageSpeed = totalDistance / totalTime;
    console.log(`Kaikkien matkojen keskinopeus on ${averageSpeed.toFixed(2)} km/h`);
    alert(`Kaikkien matkojen keskinopeus on ${averageSpeed.toFixed(2)} km/h`);
  } else {
    console.log("Et syöttänyt yhtään matkaa.");
    alert("Et syöttänyt yhtään matkaa.");
  }
}

// Kutsutaan funktiota
allTripsAverageSpeed();
