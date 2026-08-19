// app.js - Main Application Entry Module
// This file imports elements from math.js.
// Run this file in an environment supporting ES Modules (e.g. Node.js with ESM, or via script type="module" in HTML).

// 1. Importing Default and Named Exports
// 'multiply' is the default export (no curly braces)
// 'PI', 'add', 'subtract' are named exports (enclosed in curly braces)
import multiply, { PI, add, subtract } from "./math.js";

console.log("--- ES Modules Import Output ---");
console.log("PI constant:", PI); // 3.14159
console.log("Sum:", add(10, 20)); // 30
console.log("Difference:", subtract(50, 15)); // 35
console.log("Product (Default Export):", multiply(5, 6)); // 30
