let name = "tiffy doris";
let positionOfSpace = name.indexOf(" ");
console.log(positionOfSpace);

let first = name.substring(0, positionOfSpace);
console.log(first);

let last = name.substring(positionOfSpace + 1);
console.log(last);

let message = `your first name $(first) and your last name (last)`;
