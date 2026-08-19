// Unit 12: Modern JS Code Examples

// 1. Array Destructuring
console.log("--- 1. Array Destructuring ---");
let numbers = [10, 20, 30];
const [first, , third, fourth = 40] = numbers; // skip index 1, set default for fourth
console.log("First:", first); // 10
console.log("Third:", third); // 30
console.log("Fourth:", fourth); // 40


// 2. Object Destructuring
console.log("\n--- 2. Object Destructuring ---");
let employee = { id: 101, fullName: "Aman Sharma", role: "Developer" };
const { fullName: empName, role, salary = 50000 } = employee; // rename fullName, set default for salary
console.log("Name:", empName);
console.log("Role:", role);
console.log("Salary:", salary);


// 3. Destructuring with for...of
console.log("\n--- 3. Destructuring with for...of ---");
let users = [
    { name: "Rahul", city: "Delhi" },
    { name: "Amit", city: "Mumbai" }
];
for (let { name, city } of users) {
    console.log(`User ${name} resides in ${city}`);
}


// 4. Spread Operator
console.log("\n--- 4. Spread Operator ---");
// Merge arrays
let arrA = [1, 2];
let arrB = [3, 4];
let mergedArr = [...arrA, ...arrB];
console.log("Merged array:", mergedArr);

// Merge objects
let details1 = { brand: "Honda" };
let details2 = { ...details1, model: "Civic", color: "Red" };
console.log("Merged object:", details2);


// 5. Rest Operator
console.log("\n--- 5. Rest Operator ---");
function registerStudents(leader, ...followers) { // Rest parameter gathers elements
    console.log("Leader:", leader);
    console.log("Followers Array:", followers);
}
registerStudents("Ravi", "Amit", "Rahul", "Aman");


// 6. Template Literals & Default Parameters
console.log("\n--- 6. Template Literals & Default Params ---");
let product = "Mobile Phone";
let price = 15000;
console.log(`Product: ${product} | Cost: ${price} INR`); // Interpolation

function calculateBill(total, tax = 0.05) { // Default parameter
    return total + (total * tax);
}
console.log("Bill with default tax:", calculateBill(1000));
console.log("Bill with custom tax:", calculateBill(1000, 0.1));


// 7. Optional Chaining (?.) & Nullish Coalescing (??)
console.log("\n--- 7. Optional Chaining & Nullish Coalescing ---");
let serverResponse = { data: null };
// Safe access using ?.
console.log("City:", serverResponse.data?.address?.city); // undefined safely

// ?? vs || comparison
let userScore = 0;
let finalScoreOR = userScore || 50; // 50 (overrides valid 0 because it is falsy)
let finalScoreNullish = userScore ?? 50; // 0 (preserves valid 0)
console.log("OR result:", finalScoreOR);
console.log("Nullish result:", finalScoreNullish);
