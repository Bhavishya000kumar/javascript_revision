// Unit 17: Fetch API & JSON Practice Exercises

// 1. Fetch data using GET & Convert to JSON
console.log("--- 1. Fetch & Parse GET ---");
fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then(response => {
        if (!response.ok) throw new Error("HTTP error: " + response.status);
        return response.json(); // returns parse promise
    })
    .then(todo => console.log("Todo 1 Completed status:", todo.completed))
    .catch(err => console.log("Error in Todo 1:", err.message));


// 2. Fetch using async/await and try/catch error handling
console.log("\n--- 2. Async/Await and Error Handling ---");
async function getTodo(id) {
    try {
        let res = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
        if (!res.ok) throw new Error("Request failed with status " + res.status);
        let data = await res.json();
        console.log(`Todo ${id} Title:`, data.title);
    } catch (err) {
        console.log("Error caught in async getTodo:", err.message);
    }
}
getTodo(5);
getTodo(999); // Invalid ID checks status outputs


// 3. Send POST Request with Headers and Stringified JSON body
console.log("\n--- 3. Send POST Request ---");
async function addNewPost() {
    let payload = { title: "Study JS", completed: false };
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/todos", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        });
        let result = await res.json();
        console.log("POST Success. New ID:", result.id); // Expected: 201 (since 200 items exist)
    } catch (err) {
        console.log("POST request failed:", err.message);
    }
}
addNewPost();


// 4. Loading States Simulation
console.log("\n--- 4. Loading State Logic ---");
let state = { loading: false, data: null, error: null };

async function loadProfile() {
    state.loading = true;
    console.log("State: LOADING profile...");
    
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/users/1");
        if (!res.ok) throw new Error("Server error " + res.status);
        state.data = await res.json();
        console.log("State: SUCCESS! Profile Name is:", state.data.name);
    } catch (err) {
        state.error = err.message;
        console.log("State: ERROR! Message is:", state.error);
    } finally {
        state.loading = false;
        console.log("State: FINISHED loading.");
    }
}
loadProfile();
