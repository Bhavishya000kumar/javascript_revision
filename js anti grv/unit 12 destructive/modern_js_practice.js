// Unit 12: Modern JS Practice Exercises

// 1. Swap two variables using destructuring
console.log("--- 1. Swap Variables ---");
let a = 5;
let b = 10;
[a, b] = [b, a]; // Swapping in one line
console.log(`Swapped: a = ${a}, b = ${b}`); // a = 10, b = 5


// 2. Extract values from array & object
console.log("\n--- 2. Extract Array & Object ---");
let dataArray = ["red", "blue", "green"];
const [primaryColor, , secondaryColor] = dataArray;
console.log("Colors extracted:", primaryColor, ",", secondaryColor);

let userProfile = { id: 101, username: "amit_99" };
const { id, username } = userProfile;
console.log("User details:", id, "-", username);


// 3. Rename destructured properties & default values
console.log("\n--- 3. Rename & Defaults ---");
let carObj = { brandName: "Hyundai" };
const { brandName: company, year = 2022 } = carObj;
console.log(`Car Company: ${company}, Year: ${year}`);


// 4. Merge arrays & objects
console.log("\n--- 4. Merge Arrays & Objects ---");
let list1 = [10, 20];
let list2 = [30, 40];
let combinedArray = [...list1, ...list2];
console.log("Combined Array:", combinedArray);

let attributes1 = { processor: "i7" };
let attributes2 = { ...attributes1, ram: "16GB" };
console.log("Combined Object:", attributes2);


// 5. Use rest parameters
console.log("\n--- 5. Rest Parameters ---");
function multiplyByFactor(factor, ...numbers) {
    return numbers.map(n => n * factor);
}
console.log("Multiplied list:", multiplyByFactor(2, 5, 10, 15)); // [10, 20, 30]


// 6. Function with default parameters
console.log("\n--- 6. Default parameters ---");
function calculateTax(amount, rate = 0.1) {
    return amount * rate;
}
console.log("Tax with default rate:", calculateTax(1000)); // 100
console.log("Tax with custom rate:", calculateTax(1000, 0.15)); // 150


// 7. Safely access nested object properties & nullish fallback
console.log("\n--- 7. Safe Chaining & Nullish Coalescing ---");
let response = { profile: null };
let zipCode = response.profile?.address?.zip ?? "000000";
console.log("Zip Code resolved:", zipCode); // "000000"
