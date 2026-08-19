// Unit 22: JavaScript Interview Mastery Code Examples

// 1. Hoisting Output Example
console.log("--- 1. Hoisting ---");
console.log("var x hoisted:", x); // undefined
var x = 10;
// foo(); // TypeError: foo is not a function
var foo = function() { console.log("running"); };


// 2. Temporal Dead Zone (TDZ)
console.log("\n--- 2. Temporal Dead Zone ---");
try {
    console.log(tempLet); // ReferenceError (TDZ)
} catch (e) {
    console.log("TDZ Error caught:", e.message);
}
let tempLet = 5;


// 3. Closures loops var vs let
console.log("\n--- 3. Closure loop index ---");
function runVarLoop() {
    for (var i = 0; i < 3; i++) {
        setTimeout(() => console.log("var i:", i), 10); // prints 3, 3, 3
    }
}
runVarLoop();

function runLetLoop() {
    for (let j = 0; j < 3; j++) {
        setTimeout(() => console.log("let j:", j), 10); // prints 0, 1, 2
    }
}
runLetLoop();


// 4. dynamic 'this' inside object method and arrow function
console.log("\n--- 4. 'this' dynamic binding ---");
const user = {
    username: "Ravi",
    regular() {
        console.log("Regular this.username:", this.username); // Ravi
    },
    arrow: () => {
        console.log("Arrow this.username:", this?.username); // undefined (lexically global scope)
    }
};
user.regular();
user.arrow();


// 5. Event Loop & Microtask Queue vs Macrotask Queue
console.log("\n--- 5. Event Loop & Queues ---");
console.log("Sync A");

setTimeout(() => {
    console.log("Macrotask setTimeout");
}, 0);

Promise.resolve().then(() => {
    console.log("Microtask Promise");
});

console.log("Sync B");
// Output: Sync A -> Sync B -> Microtask Promise -> Macrotask setTimeout
