/*

<button id="btn">Click Me</button>
<p id="output"></p>
*/

let btn = document.getElementById("btn");
let out = document.getElementById("output");

btn.addEventListener("click", function() {
  out.innerText = "Button was clicked!";
});
