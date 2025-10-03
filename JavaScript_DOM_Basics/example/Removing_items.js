<ul id="list">
  <li>Item 1 <button class="remove">x</button></li>
</ul>


let buttons = document.querySelectorAll(".remove");
buttons.forEach(btn => {
  btn.addEventListener("click", function() {
    btn.parentElement.remove(); // remove that <li>
  });
});
