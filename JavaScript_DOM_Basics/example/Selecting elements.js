<p id="message">Hello!</p>


let msg = document.getElementById("message"); 
console.log(msg.innerText); // "Hello!"

// other selectors 
document.querySelector("p");        // first <p>
document.querySelectorAll("p");     // all <p>
