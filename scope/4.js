"use strict";
let a = 4;
function bubble() {
  a = 3;
  console.log("a = " + a);
}
function test3() {
  a = 3;
  console.log("a = " + a);
}
function test7() {
  a = 7;
  console.log("a = " + a);
}

test3();
test7();
console.log("a = " + a);
