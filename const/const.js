const TAX_RATE = 0.675;
TAX_RATE = 8;

//use const when getting html elements into variables
const messageParagraph = document.getElementById("messageParagraph");
messageParagraph = document.getElementById("anotherParagraph"); //not allowed, can't overwrite element
// but it will allow you to change an element's properties
messageParagraph.innerText = "my message";
