// Unit 10: Advanced Functions & Scope Practice Exercises

// 1. Scope Chain lookup
console.log("--- 1. Scope Chain ---");
let number = 50;
function printSum() {
    let internalNum = 20;
    function add() {
        return number + internalNum; // resolves variables via Scope Chain
    }
    console.log("Sum result:", add());
}
printSum(); // 70


// 2. Hoisting and Temporal Dead Zone
console.log("\n--- 2. Hoisting & TDZ ---");
function hoistingCheck() {
    console.log("Value of a (var):", a); // undefined due to hoisting
    var a = 10;
    
    try {
        console.log("Value of b (let):", b); // triggers error because of TDZ
    } catch (err) {
        console.log("Error accessing b in TDZ:", err.message);
    }
    let b = 20;
}
hoistingCheck();


// 3. Closures
console.log("\n--- 3. Closures ---");
function multiplierFactory(multiplier) {
    return function(num) {
        return num * multiplier; // multiplier resides in outer scope memory closure
    };
}
let double = multiplierFactory(2);
let triple = multiplierFactory(3);
console.log("Double of 8:", double(8)); // 16
console.log("Triple of 8:", triple(8)); // 24


// 4. Higher-Order Functions & Callbacks
console.log("\n--- 4. HOF & Callbacks ---");
function calculate(x, y, operationCallback) { // calculate is HOF, operationCallback is Callback
    return operationCallback(x, y);
}
const addCallback = (a, b) => a + b;
const multiplyCallback = (a, b) => a * b;

console.log("Sum via Callback:", calculate(5, 10, addCallback)); // 15
console.log("Product via Callback:", calculate(5, 10, multiplyCallback)); // 50


// 5. 'this' Keyword Context
console.log("\n--- 5. 'this' Scoping context ---");
const studentObj = {
    name: "Rohan",
    printName: function() {
        return this.name;
    }
};
console.log("Student Name:", studentObj.printName()); // Rohan
