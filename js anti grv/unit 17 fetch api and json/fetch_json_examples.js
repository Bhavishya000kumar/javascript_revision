// Unit 17: Fetch API & JSON Code Examples

// 1. JSON Stringify and Parse
console.log("--- 1. JSON Conversion ---");
let profile = { name: "Aman", age: 22 };
let jsonText = JSON.stringify(profile); // Object to string
console.log("JSON String:", jsonText);

let parsedObj = JSON.parse(jsonText); // String to object
console.log("Parsed Object:", parsedObj);


// 2. Fetch GET Request (using both .then() and async/await)
console.log("\n--- 2. Fetch GET Request ---");
// Method A: then-catch chain
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(res => res.json()) // parses stream
    .then(data => console.log("Method A GET Title:", data.title))
    .catch(err => console.log("Method A Error:", err));

// Method B: async-await (recommended)
async function getPostData() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts/2");
        let data = await res.json();
        console.log("Method B GET Title:", data.title);
    } catch (err) {
        console.log("Method B Error:", err);
    }
}
getPostData();


// 3. Fetch POST Request (Method, Headers, Body)
console.log("\n--- 3. Fetch POST Request ---");
async function sendPostData() {
    let payload = { title: "Frontend Developer", category: "Jobs" };
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: {
                "Content-Type": "application/json" // Alerting server we send JSON text
            },
            body: JSON.stringify(payload) // serializing object payload
        });
        let outcome = await res.json();
        console.log("POST Success Response:", outcome);
    } catch (err) {
        console.log("POST Error:", err);
    }
}
sendPostData();


// 4. Safe Fetch Error Handling (checks response.ok)
console.log("\n--- 4. Safe Fetch Error Handling ---");
async function fetchSafeDemo() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/invalidpage");
        
        // fetch resolves on 404. We must check res.ok manually.
        if (!res.ok) {
            throw new Error(`HTTP Request Failed! Status: ${res.status}`);
        }
        let data = await res.json();
        console.log(data);
    } catch (err) {
        console.log("Error Caught (Safe):", err.message);
    }
}
fetchSafeDemo();


// 5. Loading States Illustration
console.log("\n--- 5. Loading States Logic ---");
let isLoading = false;
let apiData = null;

async function requestResource() {
    isLoading = true;
    console.log("Loader Status: Loading data from API...");
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts/3");
        apiData = await res.json();
        console.log("Loader Status: Success! Title is:", apiData.title);
    } catch (e) {
        console.log("Loader Status: Error loading resource:", e.message);
    } finally {
        isLoading = false;
        console.log("Loader Status: Finished loading.");
    }
}
requestResource();
