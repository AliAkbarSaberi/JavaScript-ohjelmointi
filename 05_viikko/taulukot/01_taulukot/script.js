// Alkuperäinen data
let teamMembers = ['Joni', 'Emilia', 'Mikko', 'Sade'];

console.log("1️⃣  Alkuperäiset jäsenet:");
teamMembers.forEach(member => console.log(member));

// 2️⃣ Poista taulukon ensimmäinen jäsen
teamMembers.shift();
console.log("\n2️⃣  Ensimmäinen jäsen poistettu:", teamMembers);

// 3️⃣ Poista taulukon viimeinen jäsen
teamMembers.pop();
console.log("\n3️⃣  Viimeinen jäsen poistettu:", teamMembers);

// 4️⃣ Lisää uusi jäsen "Alex" taulukon alkuun
teamMembers.unshift("Alex");
console.log("\n4️⃣  Lisätty 'Alex' alkuun:", teamMembers);

// 5️⃣ Lisää uusi jäsen "Linda" taulukon loppuun
teamMembers.push("Linda");
console.log("\n5️⃣  Lisätty 'Linda' loppuun:", teamMembers);

// 6️⃣ Luo uusi taulukko ilman kahta ensimmäistä jäsentä (alkuperäinen ei muutu)
let slicedMembers = teamMembers.slice(2);
console.log("\n6️⃣  Uusi taulukko ilman kahta ensimmäistä:", slicedMembers);
console.log("    Alkuperäinen säilyi:", teamMembers);

// 7️⃣ Etsi "Mikko":n indeksi
let mikkoIndex = teamMembers.indexOf("Mikko");
console.log("\n7️⃣  'Mikko' löytyy indeksistä:", mikkoIndex);

// 8️⃣ Etsi "Jake":n indeksi (ei löydy)
let jakeIndex = teamMembers.indexOf("Jake");
console.log("\n8️⃣  'Jake' löytyy indeksistä:", jakeIndex); // -1 = ei löydy

// 9️⃣ Korvaa "Mikko" kahdella uudella jäsenellä: "Maria" ja "Netta"
if (mikkoIndex !== -1) {
  teamMembers.splice(mikkoIndex, 1, "Maria", "Netta");
}
console.log("\n9️⃣  Korvattu 'Mikko' jäsenillä 'Maria' ja 'Netta':", teamMembers);

// 🔟 Liitä "Ahmad" taulukkoon (uuteen taulukkoon, alkuperäinen ei muutu)
let newTeamWithAhmad = [...teamMembers, "Ahmad"];
console.log("\n🔟  Uusi taulukko 'Ahmad' lisättynä:", newTeamWithAhmad);
console.log("    Alkuperäinen säilyi:", teamMembers);

// 11️⃣ Kopioi koko taulukko slice-metodilla
let teamCopy = teamMembers.slice();
console.log("\n11️⃣  Kopioitu taulukko:", teamCopy);

// 12️⃣ Luo uusi taulukko ja yhdistä se
let newMembers = ["Tiina", "Myrsky"];
let combinedTeam = teamMembers.concat(newMembers);
console.log("\n12️⃣  Yhdistetty taulukko:", combinedTeam);

// 13️⃣ Etsi kaikki "Joni"-esiintymät ja tallenna niiden indeksit
let joniIndexes = [];
teamMembers.forEach((member, index) => {
  if (member === "Joni") joniIndexes.push(index);
});
console.log("\n13️⃣  'Joni' esiintyy indekseissä:", joniIndexes);

// 14️⃣ Muunna kaikki nimet isoiksi kirjaimiksi (muuttamatta alkuperäistä)
let upperCaseMembers = teamMembers.map(member => member.toUpperCase());
console.log("\n14️⃣  Isoilla kirjaimilla:", upperCaseMembers);
console.log("    Alkuperäinen säilyi:", teamMembers);

// 15️⃣ Lajittele taulukko aakkosjärjestykseen
teamMembers.sort();
console.log("\n15️⃣  Aakkosjärjestyksessä:", teamMembers);

// 16️⃣ Käännä järjestys päinvastaiseksi
teamMembers.reverse();
console.log("\n16️⃣  Käännetty järjestys:", teamMembers);

// 17️⃣ Tarkista, onko ainakin yksi jäsen nimeltään "Joni"
let hasJoni = teamMembers.includes("Joni");
console.log("\n17️⃣  Onko joukossa 'Joni'? ->", hasJoni);

// 18️⃣ Tarkista, onko kaikilla nimillä yli 3 kirjainta
let allOver3 = teamMembers.every(name => name.length > 3);
console.log("\n18️⃣  Onko kaikilla nimillä yli 3 kirjainta? ->", allOver3);
