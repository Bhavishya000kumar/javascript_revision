// Unit 18: Browser Storage Practice Exercises
// Run this code inside the browser's developer console (F12).

// 1. Store and Read a name in localStorage
console.log("--- 1. Store & Read Name ---");
localStorage.setItem("studentName", "Ravi Kumar");
console.log("Name in storage:", localStorage.getItem("studentName"));


// 2. Remove & Clear localStorage
console.log("\n--- 2. Remove & Clear ---");
localStorage.setItem("tempKey", "123");
localStorage.removeItem("tempKey"); // Remove single key
console.log("tempKey after removal:", localStorage.getItem("tempKey")); // null

localStorage.setItem("keyA", "valA");
localStorage.setItem("keyB", "valB");
localStorage.clear(); // Clear all keys
console.log("keyA after clear:", localStorage.getItem("keyA")); // null


// 3. Storing and Reading Objects
console.log("\n--- 3. Store & Read Object ---");
let config = { serverUrl: "http://api.com", timeout: 5000 };
localStorage.setItem("appConfig", JSON.stringify(config));

let loadedConfig = JSON.parse(localStorage.getItem("appConfig"));
console.log("Loaded Server URL:", loadedConfig.serverUrl); // http://api.com


// 4. Storing and Reading Arrays
console.log("\n--- 4. Store & Read Array ---");
let userIds = [101, 102, 103];
localStorage.setItem("userIdsList", JSON.stringify(userIds));

let loadedUserIds = JSON.parse(localStorage.getItem("userIdsList"));
console.log("Loaded User IDs:", loadedUserIds); // [101, 102, 103]


// 5. Using sessionStorage
console.log("\n--- 5. sessionStorage Usage ---");
sessionStorage.setItem("sessionToken", "secretTokenXYZ");
console.log("sessionToken from SessionStorage:", sessionStorage.getItem("sessionToken"));
sessionStorage.removeItem("sessionToken");
