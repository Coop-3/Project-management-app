/*
<input id="nameInput" placeholder="Type your name" />
<p id="greeting"></p>
*/

let input = document.getElementById("nameInput");
let greet = document.getElementById("greeting");

input.addEventListener("input", function() {
  greet.innerText = "Hello, " + input.value;
});
