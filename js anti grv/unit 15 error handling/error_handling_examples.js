// Unit 15: Error Handling Code Examples

// 1. Error Types
console.log("--- 1. Error Types ---");

// A. Runtime Error Example
try {
    console.log(undefinedVar); // ReferenceError
} catch (err) {
    console.log("Captured Runtime Error:", err.name, "|", err.message);
}

// B. Logical Error Example
let discount = 10;
let price = 100;
let finalPrice = price - discount / 100; // Logical error (intended discount percentage deduction)
console.log("Logical Error calculation (should be 90):", finalPrice); // 99.9 (incorrect logic)


// 2. try-catch-finally block
console.log("\n--- 2. Try-Catch-Finally ---");
try {
    console.log("Entering try block");
    let division = 10 / y; // y is undefined
} catch (err) {
    console.log("Catch block ran. Error message:", err.message);
} finally {
    console.log("Finally block executed regardless of errors.");
}


// 3. Throwing Manual Errors
console.log("\n--- 3. Throwing Errors ---");
function checkRating(stars) {
    if (stars < 1 || stars > 5) {
        throw new Error("Invalid stars! Must be between 1 and 5.");
    }
    return `Rating is ${stars} stars.`;
}

try {
    console.log(checkRating(4)); // valid
    console.log(checkRating(10)); // invalid, throws error
} catch (err) {
    console.log("Throw Error intercepted:", err.message);
}


// 4. Custom Errors using class extends Error
console.log("\n--- 4. Custom Error Classes ---");
class DatabaseError extends Error {
    constructor(message) {
        super(message);
        this.name = "DatabaseError";
    }
}

try {
    console.log("Simulating database query...");
    throw new DatabaseError("Connection timed out!");
} catch (err) {
    console.log("Custom Error type:", err.name);
    console.log("Custom Error message:", err.message);
}
