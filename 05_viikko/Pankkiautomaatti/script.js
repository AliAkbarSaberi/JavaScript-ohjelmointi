let balance = 0; // Käyttäjän alkusaldo

// Haetaan elementit
const balanceDisplay = document.getElementById("balance");
const depositInput = document.getElementById("depositAmount");
const withdrawInput = document.getElementById("withdrawAmount");
const message = document.getElementById("message");

// Päivittää saldon sivulla
function updateBalance() {
  balanceDisplay.textContent = `Saldo: ${balance.toFixed(2)} €`;
}

// Talleta rahaa
function deposit() {
  const amount = parseFloat(depositInput.value);
  if (isNaN(amount) || amount <= 0) {
    showMessage("Anna kelvollinen talletussumma.", true);
    return;
  }

  balance += amount;
  updateBalance();
  showMessage(`Talletettu ${amount.toFixed(2)} €.`, false);
  depositInput.value = "";
}

// Nosta rahaa
function withdraw() {
  const amount = parseFloat(withdrawInput.value);
  if (isNaN(amount) || amount <= 0) {
    showMessage("Anna kelvollinen nostosumma.", true);
    return;
  }

  if (amount > balance) {
    showMessage("Saldo ei riitä nostoon!", true);
    return;
  }

  balance -= amount;
  updateBalance();
  showMessage(`Nostettu ${amount.toFixed(2)} €.`, false);
  withdrawInput.value = "";
}

// Näytä viesti käyttäjälle
function showMessage(text, isError) {
  message.textContent = text;
  message.style.color = isError ? "#d32f2f" : "#1a7b35";
  setTimeout(() => message.textContent = "", 3000);
}

// Lisätään tapahtumankuuntelijat
document.getElementById("depositBtn").addEventListener("click", deposit);
document.getElementById("withdrawBtn").addEventListener("click", withdraw);

// Päivitetään saldo alussa
updateBalance();
