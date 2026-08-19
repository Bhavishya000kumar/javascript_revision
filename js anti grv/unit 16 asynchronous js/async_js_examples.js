// Unit 16: Asynchronous JS Code Examples

// 1. Synchronous vs Asynchronous
console.log("--- 1. Sync vs Async ---");
console.log("Sync Start");
console.log("Sync Progress");
console.log("Sync End");

console.log("Async Start");
setTimeout(() => {
    console.log("Async Timeout callback ran (100ms)!");
}, 100);
console.log("Async End");


// 2. Callback Hell representation
console.log("\n--- 2. Callback Hell (Representation) ---");
function processOrder() {
    setTimeout(() => {
        console.log("Order Step 1: Cooked");
        setTimeout(() => {
            console.log("Order Step 2: Packed");
            setTimeout(() => {
                console.log("Order Step 3: Dispatched");
            }, 50);
        }, 50);
    }, 50);
}
processOrder();


// 3. Promise Creation and Handling
console.log("\n--- 3. Promise & State Handlers ---");
const taskPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Task Completed!");
    } else {
        reject("Task Errored!");
    }
});

taskPromise
    .then(data => console.log("Promise Resolved data:", data))
    .catch(err => console.log("Promise Rejected error:", err))
    .finally(() => console.log("Promise Finally handler ran."));


// 4. async/await Conversion
console.log("\n--- 4. async / await ---");
function loadDatabase() {
    return new Promise(resolve => setTimeout(() => resolve("Database Loaded"), 200));
}

async function startServer() {
    console.log("Booting server...");
    let dbStatus = await loadDatabase(); // Pauses until promise resolves
    console.log("Status:", dbStatus);
    console.log("Server active!");
}
startServer();


// 5. Promise Chaining & Error Handling
console.log("\n--- 5. Promise Chaining & try/catch ---");
// Promise Chaining
function addTen(val) { return Promise.resolve(val + 10); }
function doubleVal(val) { return Promise.resolve(val * 2); }

addTen(5)
    .then(res => doubleVal(res))
    .then(finalVal => console.log("Chaining Final Value:", finalVal)) // (5 + 10) * 2 = 30
    .catch(err => console.log("Chaining Error:", err));

// try/catch with async/await
async function runValidation() {
    try {
        let result = await Promise.reject("Invalid Account!");
    } catch (err) {
        console.log("Caught rejection in async/await try-catch:", err);
    }
}
runValidation();


// 6. Promise APIs Combinations (all, allSettled, race, any)
console.log("\n--- 6. Promise APIs ---");
let fast = new Promise(res => setTimeout(() => res("Fast Resolves"), 150));
let slow = new Promise(res => setTimeout(() => res("Slow Resolves"), 300));
let errPromise = new Promise((res, rej) => setTimeout(() => rej("Errored Out"), 200));

// Promise.allSettled() -> Resolves always, tracking all statuses
Promise.allSettled([fast, slow, errPromise])
    .then(results => console.log("Promise.allSettled results:", results));
