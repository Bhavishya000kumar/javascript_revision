// Unit 21: JS Runtime & Internal Working Code Examples

// 1. Memory Heap vs Call Stack representation
console.log("--- 1. Stack vs Heap Memory ---");
// Primitives are stored directly in Call Stack
let age = 22; 
let active = true;

// Objects are stored in Memory Heap, Call Stack holds the reference pointer address
let profile = { name: "Aman", city: "Delhi" };
let cart = ["laptop", "mouse"];

console.log("Primitive age:", age);
console.log("Object profile:", profile);


// 2. Execution Context Hoisting (Memory Creation Phase)
console.log("\n--- 2. Hoisting / Memory Phase ---");
console.log("Hoisted var value (GEC Creation Phase):", tempVar); // undefined (due to var hoisting)
// console.log(tempLet); // ReferenceError (Temporal Dead Zone for let)

var tempVar = 10;
let tempLet = 20;

console.log("Assigned values:", tempVar, "|", tempLet);


// 3. Microtask vs Macrotask Queue (Priority verification)
console.log("\n--- 3. Queue Priority Order ---");
console.log("A (Synchronous)");

// Macrotask
setTimeout(() => {
    console.log("B (Macrotask Callback - setTimeout)");
}, 0);

// Microtask
Promise.resolve().then(() => {
    console.log("C (Microtask Callback - Promise)");
});

console.log("D (Synchronous)");

// Expected Output Sequence:
// A (Synchronous) -> D (Synchronous) -> C (Microtask) -> B (Macrotask)
