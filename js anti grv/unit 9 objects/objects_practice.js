// Unit 9: Objects Practice Exercises

// 1. Create and Access Properties
console.log("--- 1. Create & Access ---");
let laptop = {
    brand: "Dell",
    ram: "16GB",
    ssd: "512GB"
};
console.log("Laptop brand:", laptop.brand);


// 2. Add / Update / Delete Properties
console.log("\n--- 2. Add / Update / Delete ---");
let user = {
    username: "john_doe",
    status: "active"
};
user.role = "member"; // add
user.status = "inactive"; // update
delete user.username; // delete
console.log("Updated user:", user);


// 3. Find a Property / Loop through keys
console.log("\n--- 3. Find & Loop keys ---");
let employee = { id: 101, department: "HR" };
let hasSalary = "salary" in employee; // checks if key exists
console.log("Has salary property?", hasSalary); // false

console.log("Looping through keys and values:");
Object.keys(employee).forEach(k => {
    console.log(k + " -> " + employee[k]);
});


// 4. Nested Object Access
console.log("\n--- 4. Nested Access ---");
let student = {
    personal: {
        firstName: "Aman",
        lastName: "Sharma"
    }
};
console.log("Full Name:", student.personal?.firstName + " " + student.personal?.lastName);


// 5. Objects inside Arrays
console.log("\n--- 5. Objects inside Arrays ---");
let books = [
    { title: "Book A", author: "Author X" },
    { title: "Book B", author: "Author Y" }
];
// Loop and print titles
books.forEach(b => console.log("Book Title:", b.title));


// 6. Destructuring & Spread Practice
console.log("\n--- 6. Destructuring & Spread ---");
let item = { itemName: "Table", itemPrice: 150 };
const { itemName, itemPrice } = item;
console.log("Item Details:", itemName, "-", itemPrice);

let merged = { ...item, discount: "10%" };
console.log("Merged with spread:", merged);
