// objects: store key-values pairs
//let task = {
//  title: "Finish homework",
 // completed: false
//};

//console.log(task.title);// Finish homework

/*
Array methods
map(): transforms each item
filter(): keeps items that match condition
forEach(): runs code for each items 
*/

let tasks = [
  {title: "study JS", completed: true},
  {title: "Learn React", completed: false},
  {title: "Walk dog", completed: true}
  
  ];
  // map -> return array of titles
  let titles = tasks.map(tasks => tasks.title); 
  console.log(titles); // ["Study JS", "Learn React", "Walk dog"]
  
  // filter -> only completed tasks
  let done = tasks.filter(tasks => tasks.completed);
  console.log(done); // [{titles: "Study JS"....},{titles "Walk dog"....}]
  
  // forEach -> Log each one 
  
  tasks.forEach(tasks => console.log(tasks.title)); 
  
  
  
  let numbers = [2, 5, 8, 10];

// Double each number using map
let doubled = numbers.map(n => n * 2);
console.log(doubled); // [4, 10, 16, 20]

// Keep only numbers > 5
let bigNumbers = numbers.filter(n => n > 5);
console.log(bigNumbers); // [8, 10]

/*
Filter completed tasks
Make an array of 4 task objects, each with a title and completed
properted. use. filter() to return only the tasks not completed
*/
let task = [
{title: "Do hair", completed: false},
{title: "Finish Pol quiz", completed: false},
{title: "Study for Math", completed: true},
{title: "Study JS", completed: true}
  
  ];
   let notDone = task.filter(task => !task.completed);
   console.log(notDone);

/*
transforms with map()
create an array of 5 numbers. use .map() to return a new array where
each number is squared(Multiplied by itself).
*/
let number = [2,4,6,8,10];
let squared= number.map(n => n ** 2);
console.log(squared);



