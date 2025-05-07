
# JavaScript Concepts Explained

## 1. Promise
A **Promise** is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value.

**Example:**
```javascript
let myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("Success!"), 2000);
});

myPromise.then(result => console.log(result))  // Output: "Success!"
           .catch(error => console.log(error));
```

## 2. Callback Function
A **callback function** is a function that is passed as an argument to another function and is executed later.

**Example:**
```javascript
function greet(name, callback) {
    console.log(`Hello ${name}`);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);  // Output: Hello Alice, Goodbye!
```

## 3. Reduce
**Reduce** executes a reducer function on each element of the array, returning a single value.

**Example:**
```javascript

array.reduce((accumulator, currentValue) => {
  // logic
}, initialValue);


const numbers = [1, 2, 3, 4];
const sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log(sum); // Output: 10
```

## 4. Map
**Map** creates a new array populated with the results of calling a provided function on every element in the calling array.

**Example:**
```javascript
const numbers = [1, 2, 3, 4];
const doubled = numbers.map(num => num * 2);
console.log(doubled); // Output: [2, 4, 6, 8]
```

## 5. Filter
**Filter** creates a new array with all elements that pass the provided condition.

**Example:**
```javascript
const numbers = [1, 2, 3, 4, 5];
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // Output: [2, 4]
```

## 6. First Order Function
A **first-order function** is a function that does not take other functions as arguments or return functions.

**Example:**
```javascript
function add(a, b) {
    return a + b;
}
```

## 7. Higher Order Function
A **higher-order function** is a function that accepts another function as an argument or returns a function.

**Example:**
```javascript
function multiplyBy(factor) {
    return function (num) {
        return num * factor;
    };
}

const triple = multiplyBy(3);
console.log(triple(5));  // Output: 15
```

## 8. Hoisting
**Hoisting** is JavaScript’s behavior where variable and function declarations are moved to the top of their scope before code execution.

**Example:**
```javascript
console.log(x);  // Output: undefined
var x = 5;
```

## 9. Async and Await
The **async/await** syntax allows writing asynchronous code in a cleaner, more readable way.

**Example:**
```javascript
async function fetchData() {
    try {
        let response = await fetch('https://jsonplaceholder.typicode.com/posts/1');
        let data = await response.json();
        console.log(data);
    } catch (error) {
        console.error("Error fetching data", error);
    }
}
fetchData();
```

## 10. Objects
An **object** is a collection of key-value pairs.

**Example:**
```javascript
const person = {
    name: "Alice",
    age: 30,
    greet() {
        console.log(`Hello, my name is ${this.name}`);
    }
};
```

## 11. DOM (Document Object Model)
The **DOM** represents the structure of a web page as a tree of objects.

**Example:**
```javascript
document.getElementById("myElement").innerText = "Hello World!";
```

## 12. IIFE (Immediately Invoked Function Expression)
**IIFE** is a function that runs immediately after its definition.

**Example:**
```javascript
(function () {
    console.log("I run immediately!");
})();
```

## 13. Anonymous Function
An **anonymous function** is a function without a name.

**Example:**
```javascript
function() {
    console.log("Hello!");
};
```

## 14. Closures
A **closure** is when an inner function remembers variables from its outer function.

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
counter(); // 1
counter(); // 2
```

## 15. Map vs forEach
- **`map()`** returns a new array.
- **`forEach()`** performs operations but does not return a new array.

**Example:**
```javascript
const numbers = [1, 2, 3];
const doubled = numbers.map(num => num * 2);  
numbers.forEach(num => console.log(num * 2));
```

## 16. Splice
**Splice** changes the contents of an array by removing or replacing elements.

**Example:**
```javascript
let fruits = ["apple", "banana", "cherry"];
fruits.splice(1, 1); 
console.log(fruits); // ["apple", "cherry"]
```

## 17. Slice
**Slice** returns a new array, extracting elements without modifying the original array.

**Example:**
```javascript
const numbers = [1, 2, 3, 4];
const sliced = numbers.slice(1, 3); 
console.log(sliced); // [2, 3]
```

## 18. Undefined
**`undefined`** is a value assigned to variables that have been declared but not initialized.

**Example:**
```javascript
let x;
console.log(x); // undefined
```

## 19. Var, Let, and Const
- **`var`**: Function-scoped
- **`let`**: Block-scoped
- **`const`**: Block-scoped, cannot be reassigned

## 20. Virtual DOM
The **Virtual DOM** is a lightweight JavaScript representation of the actual DOM, used by React to improve performance.
