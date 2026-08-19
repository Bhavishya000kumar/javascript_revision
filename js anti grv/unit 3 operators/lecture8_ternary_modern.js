// Lecture 8: Ternary & Modern Operators in JavaScript

// --- 1. Ternary Operator (? :) ---
console.log("--- 1. Ternary Operator ---");
let age = 16;
let access = age >= 18 ? "Access Granted" : "Access Denied";
console.log("Access status:", access); // "Access Denied"

// Equivalent to:
// let access;
// if (age >= 18) {
//     access = "Access Granted";
// } else {
//     access = "Access Denied";
// }


// --- 2. Truthy & Falsy Values ---
console.log("\n--- 2. Truthy & Falsy Values ---");
// Check boolean conversion of empty array vs empty string
console.log("Boolean([]) :", Boolean([])); // true (Array is truthy)
console.log("Boolean('') :", Boolean("")); // false (Empty string is falsy)
console.log("Boolean(0)  :", Boolean(0));  // false (Zero is falsy)


// --- 3. Nullish Coalescing (??) vs Logical OR (||) ---
console.log("\n--- 3. Nullish Coalescing (??) vs OR (||) ---");
let userScore = 0; // Value is legitimately 0

// Logical OR (||): Returns fallback for ANY falsy value (0, "", false, null, undefined)
let scoreWithOR = userScore || 100; 
console.log("Fallback with OR (||)     :", scoreWithOR); // 100 (Unwanted fallback!)

// Nullish Coalescing (??): Returns fallback ONLY for null and undefined
let scoreWithNullish = userScore ?? 100;
console.log("Fallback with Nullish (??):", scoreWithNullish); // 0 (Preserved valid 0!)


// --- 4. Optional Chaining (?.) ---
console.log("\n--- 4. Optional Chaining ---");
let user1 = {
    name: "Rahul",
    address: {
        city: "Delhi"
    }
};

let user2 = {
    name: "Amit"
    // No address property
};

// Safe access using ?.
console.log("User 1 city:", user1.address?.city); // "Delhi"
console.log("User 2 city:", user2.address?.city); // undefined (No crash!)

// If we did: user2.address.city, it would throw:
// TypeError: Cannot read properties of undefined (reading 'city') and crash the program.


// --- 5. Short-Circuit Evaluation ---
console.log("\n--- 5. Short-Circuit Evaluation ---");
// AND (&&) short-circuit: stops at first falsy, else returns last
console.log("false && 'hello' :", false && "hello"); // false
console.log("'apple' && 'pear':", "apple" && "pear"); // "pear" (returns last evaluated truthy)

// OR (||) short-circuit: stops at first truthy, else returns last
console.log("'apple' || 'pear':", "apple" || "pear"); // "apple"
console.log("'' || 'fallback' :", "" || "fallback"); // "fallback"
