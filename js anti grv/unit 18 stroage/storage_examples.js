// Unit 18: Browser Storage Code Examples
// Note: localStorage and sessionStorage are browser-specific APIs and will throw ReferenceError in bare Node.js.
// Run this code inside the browser's developer console (F12) to see it execute live.

// 1. localStorage basic methods
console.log("--- 1. localStorage Basics ---");
localStorage.setItem("username", "ravi_coder");
console.log("Retrieved Username:", localStorage.getItem("username"));

localStorage.removeItem("username");
console.log("Username after removal:", localStorage.getItem("username")); // null


// 2. sessionStorage basic methods
console.log("\n--- 2. sessionStorage Basics ---");
sessionStorage.setItem("tabID", "active_tab_99");
console.log("Retrieved TabID:", sessionStorage.getItem("tabID"));

sessionStorage.clear();
console.log("TabID after clear:", sessionStorage.getItem("tabID")); // null


// 3. Storing Objects & Arrays (using JSON.stringify and JSON.parse)
console.log("\n--- 3. Objects & Arrays Serialization ---");

// Storing an Object
let userProfile = { name: "Aman", premium: true };
// Save to storage
localStorage.setItem("userObj", JSON.stringify(userProfile));

// Read from storage
let rawUser = localStorage.getItem("userObj");
let parsedUser = JSON.parse(rawUser);
console.log("Parsed Object name property:", parsedUser.name); // Aman

// Storing an Array
let itemsList = ["laptop", "mouse", "keyboard"];
localStorage.setItem("cartItems", JSON.stringify(itemsList));

let rawCart = localStorage.getItem("cartItems");
let parsedCart = JSON.parse(rawCart);
console.log("Parsed Array items:", parsedCart); // ["laptop", "mouse", "keyboard"]


// 4. Practical task (Save, Read, Display, Remove)
console.log("\n--- 4. Practical task workflow ---");
// Step A: Save
let settings = { theme: "dark", language: "English" };
localStorage.setItem("appSettings", JSON.stringify(settings));

// Step B: Read & Parse
let savedSettings = JSON.parse(localStorage.getItem("appSettings"));

// Step C: Display
console.log("Saved Theme:", savedSettings.theme);

// Step D: Remove
localStorage.removeItem("appSettings");
console.log("Settings after delete:", localStorage.getItem("appSettings")); // null
