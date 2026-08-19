// Unit 16: Asynchronous JS Practice Exercises

// 1. setTimeout output prediction
console.log("--- 1. Order of Execution ---");
console.log("Apple");
setTimeout(() => console.log("Banana"), 0);
Promise.resolve().then(() => console.log("Cherry")); // Microtask queue
console.log("Date");
// Expected output order: Apple -> Date -> Cherry -> Banana


// 2. Promise Creation and State checks
console.log("\n--- 2. Promise Creation ---");
function checkInventory(itemCount) {
    return new Promise((resolve, reject) => {
        if (itemCount > 0) {
            resolve("In Stock");
        } else {
            reject("Out of Stock");
        }
    });
}
checkInventory(5)
    .then(status => console.log("Inventory status:", status))
    .catch(err => console.log("Inventory error:", err));


// 3. Promise Chaining & Math calculations
console.log("\n--- 3. Promise Chaining ---");
function initialVal() { return Promise.resolve(5); }
function square(n) { return Promise.resolve(n * n); }
function printResult(n) { console.log("Final computation outcome:", n); }

initialVal()
    .then(res => square(res))
    .then(squared => printResult(squared)) // Expected: 25
    .catch(e => console.log("Error in chain:", e));


// 4. async/await try-catch error handling
console.log("\n--- 4. async/await Error Handling ---");
const fetchUserDetail = () => Promise.reject("Unauthorized session!");

async function handleUserFetch() {
    try {
        await fetchUserDetail();
    } catch (err) {
        console.log("Async validation error caught:", err); // Unauthorized session!
    }
}
handleUserFetch();


// 5. Promise APIs (all vs race vs any)
console.log("\n--- 5. Promise APIs Combinations ---");
let task1 = new Promise(resolve => setTimeout(() => resolve("Task 1 resolved"), 100));
let task2 = new Promise((resolve, reject) => setTimeout(() => reject("Task 2 failed"), 50));

// Promise.race -> returns fastest settler (Task 2 fails at 50ms)
Promise.race([task1, task2])
    .then(val => console.log("Race winner resolved:", val))
    .catch(err => console.log("Race winner rejected:", err)); // Expected: Task 2 failed

// Promise.any -> returns fastest resolved (ignores Task 2 failure, returns Task 1 at 100ms)
Promise.any([task1, task2])
    .then(val => console.log("Any resolved winner:", val)) // Expected: Task 1 resolved
    .catch(err => console.log("Any errors:", err));
