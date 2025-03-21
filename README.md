
# JavaScript Concepts Explained

## 1. Promise
A **Promise** is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

**Example:**
```javascript
const fetchData = new Promise((resolve, reject) => {
    setTimeout(() => {
        let success = true;
        success ? resolve("Data fetched successfully!") : reject("Error fetching data.");
    }, 2000);
});

fetchData
    .then(data => console.log(data))  // Success
    .catch(error => console.error(error));  // Failure
```
---

## 2. Callback Function
A **callback function** is a function that is passed as an argument to another function and is executed after the completion of that function.

**Example:**
```javascript
function greet(name, callback) {
    console.log(`Hello, ${name}`);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("John", sayGoodbye);
```
---

## 3. Reduce
The `.reduce()` method applies a function against an accumulator and each element in the array to reduce it to a single value.

**Example:**
```javascript
const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, current) => acc + current, 0);
console.log(sum); // Output: 10
```
---

## 4. Map
The `.map()` method creates a **new array** by applying a given function to every element in the original array.

**Example:**
```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6]
```
---

## 5. Filter
The `.filter()` method creates a **new array** with elements that pass a specified condition.

**Example:**
```javascript
const numbers = [1, 2, 3, 4];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4]
```
---

## 6. First Order Function
A **first-order function** is a function that does not take other functions as arguments or return other functions.

**Example:**
```javascript
function add(a, b) {
    return a + b;
}
console.log(add(2, 3)); // Output: 5
```
---

## 7. Higher Order Function
A **higher-order function** is a function that takes another function as an argument or returns a function.

**Example:**
```javascript
function higherOrder(func) {
    return func(5);
}

function square(x) {
    return x * x;
}

console.log(higherOrder(square)); // Output: 25
```
---

## 8. Hoisting
**Hoisting** is JavaScript's behavior of moving variable and function declarations to the top of their scope before code execution.

**Example:**
```javascript
console.log(a); // Output: undefined
var a = 5;

greet(); // Function declarations are hoisted
function greet() {
    console.log("Hello!");
}
```
---

## 9. Async & Await
The `async` and `await` keywords are used to write asynchronous code in a cleaner way, improving readability.

**Example:**
```javascript
async function fetchData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error('Error:', error);
    }
}
fetchData();
```
---

## 10. Objects
An **object** is a collection of key-value pairs used to represent real-world entities.

**Example:**
```javascript
const person = {
    name: "John",
    age: 30,
    greet: function() {
        console.log(`Hello, my name is ${this.name}.`);
    }
};

person.greet(); // Output: Hello, my name is John.
```
---

## 11. DOM (Document Object Model)
The **DOM** is a programming interface for web documents. It represents the structure of an HTML document as a tree of objects.

**Example DOM Manipulation:**
```javascript
document.getElementById("demo").innerHTML = "Hello, World!";
```
---

## 12. IIFE (Immediately Invoked Function Expression)
An **IIFE** is a function that is executed immediately after it is defined.

**Example:**
```javascript
(function() {
    console.log("This is an IIFE!");
})();
```
---

## 13. Anonymous Function
An **anonymous function** is a function without a name. These are often used as arguments in higher-order functions.

**Example:**
```javascript
setTimeout(function() {
    console.log("Hello from an anonymous function!");
}, 1000);
```
---

## 14. Closures
A **closure** is a function that remembers and has access to variables in its outer scope even after the outer function has finished executing.

**Example:**
```javascript
function outer() {
    let count = 0;
    return function inner() {
        count++;
        console.log(count);
    };
}

const counter = outer();
counter(); // Output: 1
counter(); // Output: 2
```
