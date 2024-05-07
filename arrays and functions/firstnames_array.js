"use strict";

let firstNames = ["Niyah", "Tia", "Tyisha", "Zareen", "Tiffany"];
// console.log(firstNames[1]); //Tiffany
// console.log(firstNames.length);

for (let index = 0; index < firstNames.length; index++) {
  console.log(firstNames[index]);
}

for (let firstName of firstNames) {
  console.log(firstName);
}
