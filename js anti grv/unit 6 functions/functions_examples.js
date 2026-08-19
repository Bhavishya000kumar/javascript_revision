// Unit 6: Functions Code Examples

// 1. Basic Function Declaration & Call
console.log("--- 1. Basic Function ---");
function greet(username) { // username is a parameter
    return "Hello " + username; // return keyword
}
console.log(greet("Rahul")); // "Rahul" is an argument


// 2. Function Expression & Anonymous Functions
console.log("\n--- 2. Function Expressions ---");
const multiply = function(a, b) { // Anonymous function assigned to variable
    return a * b;
};
console.log("Result of multiplication:", multiply(4, 5));


// 3. Arrow Functions
console.log("\n--- 3. Arrow Functions ---");
const square = x => x * x; // Short syntax
const add = (a, b) => a + b;
console.log("Square of 5:", square(5));
console.log("Sum of 10 & 20:", add(10, 20));


// 4. Default Parameters
console.log("\n--- 4. Default Parameters ---");
function welcomeMessage(name = "Guest") {
    return "Welcome " + name;
}
console.log(welcomeMessage()); // uses "Guest"
console.log(welcomeMessage("Ravi")); // uses "Ravi"


// 5. Rest Parameters & Spread Basics
console.log("\n--- 5. Rest Parameters & Spread ---");
function sumAll(...numbers) { // Rest parameter packs arguments into an array
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}
console.log("Sum of multiple numbers:", sumAll(1, 2, 3, 4));

// Spread arrays basic
let list1 = [1, 2];
let list2 = [...list1, 3, 4]; // Spread expands list1 elements
console.log("Merged array:", list2);


// 6. Scopes Check
console.log("\n--- 6. Scopes ---");
let globalScope = "I am Global";

function testScopes() {
    let functionScope = "I am Function Scoped";
    if (true) {
        let blockScope = "I am Block Scoped";
        console.log(globalScope);    // OK
        console.log(functionScope);  // OK
        console.log(blockScope);     // OK
    }
    // console.log(blockScope); // ReferenceError: blockScope is not defined
}
testScopes();


// 7. Nested Functions & Callback/HOF
console.log("\n--- 7. Callbacks and Higher-Order Functions ---");
// Nested function
function outer() {
    let parentVar = "Parent data";
    function inner() {
        console.log("Inner accessing:", parentVar); // Lexical scoping
    }
    inner();
}
outer();

// Callback and HOF
function printResult(val) {
    console.log("Callback output value:", val);
}

function compute(a, b, callback) { // compute is HOF, callback is Callback
    let result = a + b;
    callback(result);
}
compute(100, 200, printResult);
