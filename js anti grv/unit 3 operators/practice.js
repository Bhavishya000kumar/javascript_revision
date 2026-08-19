// Practice Exercises - Chapter 3: Operators

// ==========================================
// Exercise 1: Even or Odd Checker
// ==========================================
console.log("--- Exercise 1: Even or Odd ---");
function checkEvenOdd(num) {
    return num % 2 === 0 ? "Even" : "Odd";
}
console.log("Is 24 even or odd?", checkEvenOdd(24)); // Expected: Even
console.log("Is 17 even or odd?", checkEvenOdd(17)); // Expected: Odd


// ==========================================
// Exercise 2: Tricky Calculations
// ==========================================
console.log("\n--- Exercise 2: Tricky Calculations ---");
let x = 10;
let y = x++ + ++x - --x + x--;
// Let's print them:
console.log("Value of x:", x); // Expected: 10
console.log("Value of y:", y); // Expected: 22


// ==========================================
// Exercise 3: User Access Gate
// ==========================================
console.log("\n--- Exercise 3: User Access Gate ---");
let age = 21;
let hasLicense = true;
let isSober = true;

let canBuy = (age >= 18) && hasLicense && isSober;
console.log("Can the customer buy alcohol?", canBuy ? "Yes" : "No"); // Expected: Yes


// ==========================================
// Exercise 4: Configuration Settings fallback
// ==========================================
console.log("\n--- Exercise 4: Configuration Settings ---");
function getSpeedLimit(userSpeed) {
    return userSpeed ?? 120; // Default limit is 120
}
console.log("User sets limit to 0:", getSpeedLimit(0));         // Expected: 0
console.log("User sets limit to null:", getSpeedLimit(null));      // Expected: 120
console.log("User sets limit to 80:", getSpeedLimit(80));        // Expected: 80
console.log("User sets limit to undefined:", getSpeedLimit(undefined)); // Expected: 120


// ==========================================
// Exercise 5: Reading Nested Profile Safely
// ==========================================
console.log("\n--- Exercise 5: Safe Nested Object Reading ---");
let response = { status: 200 };
let theme = response.data?.user?.settings?.theme ?? "light-theme";
console.log("Preferred Theme:", theme); // Expected: light-theme
