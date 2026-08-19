// Unit 4: Conditional Statements Practice Examples

// 1. Even/Odd Checking
console.log("--- 1. Even / Odd Checking ---");
let number = 27;
if (number % 2 === 0) {
    console.log(number + " is Even");
} else {
    console.log(number + " is Odd");
}

// 2. Positive/Negative/Zero
console.log("\n--- 2. Positive / Negative / Zero ---");
let val = -15;
if (val > 0) {
    console.log(val + " is Positive");
} else if (val < 0) {
    console.log(val + " is Negative");
} else {
    console.log("Value is Zero");
}

// 3. Largest of Three Numbers
console.log("\n--- 3. Largest of Three Numbers ---");
let num1 = 45;
let num2 = 89;
let num3 = 12;
let largest;

if (num1 >= num2 && num1 >= num3) {
    largest = num1;
} else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
} else {
    largest = num3;
}
console.log("The largest number is: " + largest);

// 4. Grade Calculator
console.log("\n--- 4. Grade Calculator ---");
let marks = 78;
let grade;

if (marks >= 90) {
    grade = "A+";
} else if (marks >= 80) {
    grade = "A";
} else if (marks >= 70) {
    grade = "B";
} else if (marks >= 60) {
    grade = "C";
} else {
    grade = "Fail";
}
console.log("Marks: " + marks + ", Grade assigned: " + grade);

// 5. Login Conditions (Multiple Check)
console.log("\n--- 5. Login System ---");
let inputUser = "admin";
let inputPass = "password123";

if (inputUser === "admin" && inputPass === "password123") {
    console.log("Access Granted: Welcome back Admin!");
} else {
    console.log("Access Denied: Invalid credentials.");
}
