// Lecture 7: Comparison & Logical Operators in JavaScript

// --- 1. Relational Comparison ---
console.log("--- 1. Relational Comparison ---");
console.log("10 > 5  :", 10 > 5);   // true
console.log("10 < 5  :", 10 < 5);   // false
console.log("10 >= 10:", 10 >= 10); // true
console.log("5 <= 3  :", 5 <= 3);    // false


// --- 2. Equality (== vs === and != vs !==) ---
console.log("\n--- 2. Equality Comparison (== vs ===) ---");
let num = 5;
let strNum = "5";

console.log("num == strNum (Value check only) :", num == strNum);  // true (Type coercion happens: "5" converts to 5)
console.log("num === strNum (Value & Type check):", num === strNum); // false (No type coercion)

console.log("num != strNum (Loose inequality)  :", num != strNum);  // false (Since values are equal after coercion)
console.log("num !== strNum (Strict inequality) :", num !== strNum); // true (Since types are different)

// Special cases
console.log("null == undefined :", null == undefined);   // true
console.log("null === undefined:", null === undefined);  // false


// --- 3. Logical Operators (&&, ||, !) ---
console.log("\n--- 3. Logical Operators ---");
let isAdult = true;
let hasId = false;

// Logical AND (&&): All conditions must be true
console.log("isAdult && hasId:", isAdult && hasId); // false

// Logical OR (||): At least one condition must be true
console.log("isAdult || hasId:", isAdult || hasId); // true

// Logical NOT (!): Inverts the boolean
console.log("!isAdult       :", !isAdult); // false


// --- 4. Combining Conditions (E-commerce Checkout) ---
console.log("\n--- 4. Real-world Checkout Example ---");
let isLoggedIn = true;
let isCardValid = true;
let isInStock = false;
let isPremiumUser = true;

// User can checkout if they are logged in AND card is valid AND (item is in stock OR user is Premium)
let canCheckout = isLoggedIn && isCardValid && (isInStock || isPremiumUser);
console.log("Can checkout?", canCheckout); // true
// Explanation: true && true && (false || true) -> true && true && true -> true
