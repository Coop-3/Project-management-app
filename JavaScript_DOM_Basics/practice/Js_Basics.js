 // variables
 // let is changeable
 // const is constant

//let name = "Makayla";
//const age = 22;
//console.log(name, age); // Makayla 22


// functions
// function are reusable blocks of code
function greet(person) {
  return "Hello, " + person + "!";
}

console.log(greet("Makayla")); // Hello, Makayla!

// Arrays
// hold multiple values

let fruits = ["apple", "banana", "orange"];

console.log(fruits[0]); // apple
console.log(fruits.length); // 3 

// practice
//let numbers = [1,2,3,4,5];

//function sumArray(arr){
  //let total =0;
  //for (let num of arr){
  //  total += num;
//  }
//  return total; 
//}

//console.log(sumArray(numbers)); // 15


// create an array of 5 numbers. Write a function
// that multiplies each number by 3, then returns the 
// the total sum. 

let numbers = [6,7,8,9,10];
function productArray(arr){
  let total = 0; // start at 0
  for (let num of arr){
    total += num * 3; // multiply by 3 and add to total
  }
  return total; 
}
console.log(productArray(numbers)); // 120

/*
Greeting function called greetUser that takes two
two parameters: name and age. it should return a 
string like " Hello Sarah, you are 25 years old."
*/

let name = "Sarah"; 
const age = 25; 
function greetUser(name, age) {
  return "Hello, " + name + " you are "+ age + " years old";
}


console.log(greetUser(name, age)); // "Hello Sarah, you are 25 years old."




