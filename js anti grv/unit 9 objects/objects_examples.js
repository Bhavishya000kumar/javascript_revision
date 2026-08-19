// Unit 9: Objects Code Examples

// 1. Object Basics (Creation & Access)
console.log("--- 1. Object Basics ---");
let user = {
    name: "Ravi",
    age: 20,
    course: "JS Pro"
};
console.log("Name:", user.name); // dot notation
console.log("Course:", user["course"]); // bracket notation


// 2. Add, Update, Delete (Dot vs Bracket Notation)
console.log("\n--- 2. Add, Update & Delete ---");
let car = {
    brand: "Honda"
};

// Add
car.color = "Black";
car["model name"] = "Civic"; // Bracket notation allows keys with spaces

// Update
car.brand = "Toyota";

// Delete
delete car.color;

console.log("Car Object:", car);


// 3. Nested Objects & Complex Layouts
console.log("\n--- 3. Nested Structures ---");
let company = {
    name: "CodersInc",
    details: {
        location: "Noida",
        size: 15
    },
    techStack: ["React", "Node", "MongoDB"] // Array inside object
};
console.log("Location:", company.details.location);
console.log("Tech Stack Item 1:", company.techStack[0]);

// Objects inside Array
let products = [
    { id: 1, name: "Laptop" },
    { id: 2, name: "Phone" }
];
console.log("Product 2 Name:", products[1].name);


// 4. Object Helper Methods (keys, values, entries, assign)
console.log("\n--- 4. Helper Methods ---");
let employee = { id: 101, role: "Developer" };

console.log("Keys array:", Object.keys(employee));
console.log("Values array:", Object.values(employee));
console.log("Entries array:", Object.entries(employee));

let target = { x: 1 };
let source = { y: 2 };
Object.assign(target, source); // Merges source into target
console.log("Assigned target:", target);


// 5. Destructuring, Spread, Shallow Copy
console.log("\n--- 5. Destructuring & Copying ---");
// Destructuring
let player = { playerName: "Virat", runScore: 18000 };
const { playerName, runScore } = player;
console.log("Player name:", playerName);

// Spread & Shallow Copy
let original = { name: "Aman", address: { city: "Delhi" } };
let copy = { ...original }; // Shallow copy

copy.name = "Ajay"; // Changing root primitive property
copy.address.city = "Mumbai"; // Changing nested object property

console.log("Original Obj (reflects nested change):", original);
console.log("Copy Obj:", copy);
