// Unit 21: JS Runtime & Internal Working Practice Exercises

// 1. Call Stack Trace Execution
console.log("--- 1. Call Stack Trace ---");
function step3() {
    console.log("Trace step 3");
}
function step2() {
    step3();
}
function step1() {
    step2();
}
step1();
// Call Stack lifecycle: GEC -> step1 -> step2 -> step3 -> pop sequentially


// 2. Microtask Nesting Priority Output Prediction
console.log("\n--- 2. Microtask Nesting ---");
setTimeout(() => console.log("Macrotask 1 (setTimeout)"), 0);

Promise.resolve()
    .then(() => {
        console.log("Microtask 1");
        return Promise.resolve();
    })
    .then(() => {
        console.log("Microtask 2 (chained)");
    });

console.log("Sync Main execution finished");
// Expected: Sync Main -> Microtask 1 -> Microtask 2 -> Macrotask 1


// 3. Execution Context Variable Shadowing
console.log("\n--- 3. Variable Scope Shadows ---");
let username = "Ravi";
function showProfile() {
    let username = "Amit"; // local FEC variable shadows GEC variable
    console.log("Local scope name:", username); // Amit
}
showProfile();
console.log("Global scope name:", username); // Ravi
