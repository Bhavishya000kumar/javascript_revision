// math.js - Math Module File
// This file acts as a module and exports helper constants/functions.

// 1. Named Exports
export const PI = 3.14159;

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

// 2. Default Export
// A module can have only one default export.
export default function multiply(a, b) {
    return a * b;
}
