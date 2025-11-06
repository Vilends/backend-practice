let name = "Bill";
let age = "28";
let isLearning = "true";
console.log ("Name:", name);
console.log ("Age:", age);
console.log ("Still Learning?", isLearning);
// ---Day 2: Arrays and Loops--- 
const courses = ["HTML", "CSS", "Javascript", "Node.js"];
for (let i = 0; i < courses.length; i++) {
    console.log("Course number", i + 1, courses[i]);
}
for (const course of courses) {
    console.log("Learning:", course);
}function greet(person) {
    return `Hello, ${person}! Welcome to backend practice.`;
}
console.log(greet("Bill"));
function square(num) {
    return num * num;
}
console.log("5 squared is", square(5));
const cube = (num) => num ** 3;
console.log("3 cubed is", cube (3));
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function getEvenNumbers(arr) {
  const evens = []; // start with an empty list
  for (let num of arr) {
    if (num % 2 === 0) {
      evens.push(num);
    }
  }
  return evens;
}

console.log(getEvenNumbers(numbers));
import https from "node:https";

https.get("https://jsonplaceholder.typicode.com/posts/1", (res) => {
  let data = "";
  res.on("data", (chunk) => {
    data += chunk;
  });
  res.on("end", () => {
    console.log("Response received:");
    console.log(JSON.parse(data));
  });
}).on("error", (err) => {
  console.log("Error:", err.message);
});
