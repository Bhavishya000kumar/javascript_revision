// Lecture 6: Arithmetic & Assignment Operators in JavaScript

// --- 1. Basic Arithmetic Operators ---
console.log("--- 1. Basic Arithmetic ---");
let a = 10;
let b = 3;

console.log("Addition (10 + 3):", a + b); // 13
console.log("Subtraction (10 - 3):", a - b); // 7
console.log("Multiplication (10 * 3):", a * b); // 30
console.log("Division (10 / 3):", a / b); // 3.3333333333333335
console.log("Modulus (10 % 3):", a % b); // 1 (Remainder)
console.log("Exponentiation (10 ** 3):", a ** b); // 10^3 = 1000

// Even/Odd checking using Modulus (%)
let num = 15;
console.log(`Is ${num} even?`, num % 2 === 0); // false (since remainder is 1, it is odd)


// --- 2. Increment & Decrement Operators ---
console.log("\n--- 2. Increment & Decrement ---");
// Pre-Increment (++x): Pehle badhao, phir use karo
let x1 = 5;
let y1 = ++x1;
console.log("Pre-Increment: x1 =", x1, ", y1 =", y1); // 6, 6

// Post-Increment (x++): Pehle use karo, phir badhao
let x2 = 5;
let y2 = x2++;
console.log("Post-Increment: x2 =", x2, ", y2 =", y2); // 6, 5

// Tricky Increments Dry Run
let count = 10;
let result = count++ + ++count; 
// Step 1: count++ returns current count (10), then count in memory becomes 11.
// Step 2: ++count increments memory count (11 -> 12), then returns 12.
// Result: 10 + 12 = 22
console.log("Tricky increment result (count++ + ++count):", result); // 22
console.log("Final count value:", count); // 12


// --- 3. Assignment Operators ---
console.log("\n--- 3. Assignment Operators ---");
let score = 50;
console.log("Initial Score:", score);

score += 10; // score = score + 10 -> 60
console.log("score += 10 ->", score);

score -= 5;  // score = score - 5 -> 55
console.log("score -= 5  ->", score);

score *= 2;  // score = score * 2 -> 110
console.log("score *= 2  ->", score);

score /= 10; // score = score / 10 -> 11
console.log("score /= 10 ->", score);

score %= 4;  // score = score % 4 -> 3
console.log("score %= 4  ->", score);

score **= 3; // score = score ** 3 -> 3^3 = 27
console.log("score **= 3 ->", score);


// --- 4. Common Mistakes & Type Coercion with + ---
console.log("\n--- 4. Common Mistakes ---");
console.log("5 + 5:", 5 + 5);             // 10
console.log("'5' + 5:", "5" + 5);         // "55" (Concatenation)
console.log("5 + 5 + '5':", 5 + 5 + "5"); // "105"
console.log("'5' + 5 + 5:", "5" + 5 + 5); // "555"

console.log("'10' - 2:", "10" - 2);   // 8 (coerced to number)
console.log("'ten' - 2:", "ten" - 2);  // NaN (Not a Number)
