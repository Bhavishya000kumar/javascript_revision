# Unit 17: Fetch API & JSON in JavaScript

Welcome to Unit 17! Iss chapter mein hum Fetch API, JSON format, HTTP requests (GET, POST), Headers, request bodies, response mappings, error handling aur loading states ko detail mein simple Hinglish mein aur clean spacing ke sath cover karenge.


# PART 1: API & JSON BASICS

APIs aur JSON client-server communication ki backbones hain.


## 1. API Kya Hai?

What is it?
API (Application Programming Interface) ek service pipeline communication code hai jo do software applications (like humari frontend website aur backend server) ko aapas mein data exchange karne ki authority deta hai.

The Basic Flow:
Client (Frontend Web Browser) $\rightarrow$ Sends API Request $\rightarrow$ API gateway / network $\rightarrow$ Server (Backend Database processing) $\rightarrow$ returns API Response back to Client.

Real-life Example:
Ek restaurant mein:
- Customer is the **Client**.
- Kitchen is the **Server**.
- Waiter is the **API**. Waiter customer se order (request) leta hai, use kitchen tak le jata hai, aur kitchen se tayar food lekar customer ko (response) serve karta hai.


---


## 2. JSON Kya Hai?

What is it?
JSON (JavaScript Object Notation) ek lightweight, text-based data format hai jo data ko key-value pairs mein hold karta hai. Yeh standard cross-platform data exchange format hai.

Why is JSON used?
Hum JavaScript objects ko network par binary format mein directly nahi bhej sakte. Isliye hum objects ko standard JSON text format mein convert karke bhejte hain, jise har language read kar sakti hai.

JSON object structure:
JSON mein keys humesha **double quotes** `""` mein likhi jati hain, aur values strings, numbers, arrays, booleans, ya null ho sakti hain.
```json
{
  "name": "Ravi",
  "age": 20,
  "isStudent": true
}
```

Helper Methods:
* **JSON.stringify(object):** JavaScript object ko standard JSON String text mein convert karta hai. (Sending side).
* **JSON.parse(string):** JSON String text ko wapas JavaScript Object mein convert karta hai. (Receiving side).

Simple example
```javascript
let userObj = { name: "Amit", age: 25 };

// Stringify to JSON
let jsonText = JSON.stringify(userObj);
console.log("JSON Text:", jsonText);

// Parse back to Object
let parsedObj = JSON.parse(jsonText);
console.log("Parsed Object name:", parsedObj.name);
```

Output
JSON Text: {"name":"Amit","age":25}
Parsed Object name: Amit


---


# PART 2: FETCH API (GET & POST REQUESTS)

## 1. Fetch API & GET Request

What is it?
`fetch()` ek built-in global JavaScript method hai jo HTTP networks par asynchronous API calls requests karne ke kaam aata hai. Yeh humesha ek **Promise return** karta hai.

Why is response.json() needed?
Jab `fetch()` humein response deta hai, toh woh ek raw HTTP response stream hota hai. Us stream ko actual parseable JSON format mein parse karne ke liye humein `response.json()` call karna padta hai, jo khud ek Promise return karta hai.

Simple GET Example (then-catch version):
```javascript
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then(response => response.json()) // parses raw response stream
    .then(data => console.log("Post Title:", data.title))
    .catch(err => console.log("Fetch failed: ", err));
```

The Same GET Example using async/await:
```javascript
async function getPost() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        let data = await response.json(); // wait parse completion
        console.log("Async Post Title:", data.title);
    } catch (err) {
        console.log("Async Fetch Error:", err);
    }
}
getPost();
```


---


## 2. POST Request, Headers & Request Body

What is it?
* **GET:** Server se data read / fetch karne ke liye. (No request body).
* **POST:** Server par naya data create / send karne ke liye. (Requires request body and configuration methods).
* **Headers:** Metadata parameters (like `Content-Type: application/json`) jo server ko batati hain ki request body kis format mein bheji ja rahi hai.
* **Request Body:** Actual payload data (JSON stringified) jo hum server par save hone ke liye bhejte hain.

POST Request Syntax:
```javascript
async function createPost() {
    let payload = { title: "New Job", body: "Backend Dev Developer" };
    
    let response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST", // HTTP Method
        headers: {
            "Content-Type": "application/json" // Header metadata
        },
        body: JSON.stringify(payload) // Request body payload stringified
    });
    
    let data = await response.json();
    console.log("Post Created output id:", data.id);
}
createPost();
```

Output
Post Created output id: 101


---


# PART 3: ADVANCED FETCH CONCEPTS

## 1. Response Properties & HTTP Status Codes

What is it?
Server response packet ke pass kuch zaroori properties hoti hain:
* **response.status:** HTTP Status code returns (e.g. `200` for OK, `404` for Not Found, `500` for Server Error).
* **response.ok:** Boolean checker status (`true` if status range is `200-299`, else `false`).

HTTP status codes basic categories:
- `200-299`: Success signals (e.g., `201` Created).
- `400-499`: Client Errors (e.g., `404` Page Not Found, `401` Unauthorized).
- `500-599`: Server Errors (e.g., `500` Internal Server Error).


---


## 2. Real-world Error Handling in Fetch

What is it?
**IMPORTANT POINT:** `fetch()` method network connection down hone par hi Promise reject karta hai. Agar server `404` ya `500` error return karega, toh `fetch()` reject **nahi** hota (resolve ho jata hai!). Isliye humein `response.ok` property manual check karni padti hai.

Proper Error Handling Example:
```javascript
async function fetchSafe() {
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/invalid-url");
        
        // Manual verification check for 404/500
        if (!res.ok) {
            throw new Error(`HTTP Error! Status: ${res.status}`);
        }
        
        let data = await res.json();
        console.log(data);
    } catch (err) {
        console.log("Safe Caught Error: " + err.message);
    }
}
fetchSafe();
```

Output
Safe Caught Error: HTTP Error! Status: 404


---


## 3. Loading States Logic

What is it?
API calls network response loading delays handle variables. Page loading start par spinner displays, success par data display, failure par error messages details set indicators.

Simple logic prototype:
```javascript
let isLoading = false;
let data = null;
let error = null;

async function loadData() {
    isLoading = true;
    console.log("Status: Loading... Please wait."); // Trigger loader spinner
    
    try {
        let res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
        if (!res.ok) throw new Error("Load failed");
        data = await res.json();
        console.log("Status: Loaded! Data is:", data.title); // Display data
    } catch (err) {
        error = err.message;
        console.log("Status: Error! Details:", error); // Display error
    } finally {
        isLoading = false;
    }
}
loadData();
```


---


# 🧠 QUICK REVISION SUMMARY

* **API & Flow:** Client $\rightarrow$ API Request $\rightarrow$ Server processing $\rightarrow$ Response.
* **JSON methods:** `JSON.stringify` converts JavaScript Object to JSON string; `JSON.parse` parses JSON string to Object.
* **Fetch GET vs POST:** GET fetches data; POST sends payload using `method: "POST"`, custom `headers` (`Content-Type: application/json`), and stringified `body`.
* **Error Handling:** `fetch()` does not reject on `404` / `500` errors. Manual verification via `response.ok` is required.
* **Response check parameters:** `response.status` (numeric status code) and `response.ok` (boolean indicator).


---


# 📝 IMPORTANT DEFINITIONS (INTERVIEW-READY)

1. **Content-Type Header:** Metadata parameter mapping the payload format of the request body (e.g. `application/json`).
2. **response.ok:** Boolean property of Fetch Response indicating if the HTTP status code falls in the successful `200-299` range.
3. **Payload / Request Body:** The primary data data package sent during POST/PUT operations to update database slots.
4. **JSON Serialization (stringify):** The process of turning a live memory object into a transportable JSON text string.
5. **API Endpoint:** A designated URL gateway where frontend applications query data from backend servers.


---


# 💬 IMPORTANT INTERVIEW QUESTIONS & ANSWERS

### Q1. Why doesn't `fetch()` reject on `404` or `500` status codes?
**Ans:** `fetch()` is designed to check if the network request completed successfully. An HTTP response from the server (even a 404 or 500 error) means the network call finished, so the Promise resolves. It only rejects if the request is blocked by a network outage or invalid DNS.

### Q2. Difference between `GET` and `POST` methods?
**Ans:** `GET` retrieves data from the server and does not accept a request body. `POST` sends new data payload inside the request body to create resources on the server.

### Q3. Why is `response.json()` a Promise?
**Ans:** Reading the body of a raw HTTP response is a stream-based asynchronous process. JavaScript returns a Promise that resolves once the entire stream has been processed and parsed as JSON.

### Q4. Difference between `JSON.stringify()` and `JSON.parse()`?
**Ans:** `JSON.stringify()` serializes a JavaScript object into a JSON string text. `JSON.parse()` deserializes a JSON string back into a JavaScript object.

### Q5. What is the use of `Content-Type: application/json` header?
**Ans:** It tells the backend server that the request body payload data is formatted as JSON text, so the server can parse it correctly.

### Q6. Predict output:
```javascript
let json = '{"name":"Aman"}';
let obj = JSON.parse(json);
console.log(typeof obj);
```
**Ans:** `"object"`.

### Q7. How do you handle network failure vs server error in `fetch()`?
**Ans:** Network failures are caught by `.catch()` or `try-catch` blocks automatically. Server errors (like 404/500) must be caught manually by evaluating `if (!response.ok)` and throwing a custom error.

### Q8. Predict output:
```javascript
let user = { id: 1 };
console.log(typeof JSON.stringify(user));
```
**Ans:** `"string"`.

### Q9. What does status code `201` mean?
**Ans:** Created. (Successful API POST request response).

### Q10. What does status code `401` mean?
**Ans:** Unauthorized. (Access credentials missing or invalid).

### Q11. Predict output:
```javascript
let text = "{name: 'Rahul'}";
try {
    JSON.parse(text);
} catch (e) {
    console.log(e.name);
}
```
**Ans:** `"SyntaxError"`. (JSON format keys and values must be enclosed in double quotes `""`).

### Q12. What does `response.ok` return if status code is `304` (Not Modified)?
**Ans:** `false`. (Success is strictly defined in range `200-299`).

### Q13. Can you send files inside a JSON request body?
**Ans:** No. JSON only supports textual values. Files are commonly sent using `Multipart FormData` formats.

### Q14. Predict output:
```javascript
fetch("https://invalid-host-test.com")
    .catch(err => console.log("A"));
```
**Ans:** `"A"`. (Domain lookup DNS failure triggers promise rejection).

### Q15. Why do we call `event.preventDefault()` inside form submit handlers before fetching?
**Ans:** To stop the default page reload, allowing us to send the fetch request asynchronously in the background.

### Q16. Predict output:
```javascript
let obj = { x: undefined };
console.log(JSON.stringify(obj));
```
**Ans:** `"{}"`. (Undefined properties are omitted during JSON stringify serialization).

### Q17. What is default HTTP method inside `fetch()` if none is specified?
**Ans:** `GET`.

### Q18. Predict output:
```javascript
console.log(JSON.parse("true"));
```
**Ans:** `true` (boolean true). (Valid JSON values are parsed to their corresponding JS primitive types).

### Q19. What does status code `403` represent?
**Ans:** Forbidden. (Authenticated client lacks permissions for the resource).

### Q20. Can we run a request body payload inside a GET request?
**Ans:** Standard specifications forbid request bodies in GET requests. If sent, most servers ignore it or reject the request.


---


# 💻 PRACTICE QUESTIONS

## Question 1: Fetch and Log Title
* **Question:** Fetch data from API `https://jsonplaceholder.typicode.com/posts/2` and log the `title`.
* **Solution:**
  ```javascript
  async function fetchPostTitle() {
      try {
          let res = await fetch("https://jsonplaceholder.typicode.com/posts/2");
          if (!res.ok) throw new Error("HTTP error: " + res.status);
          let data = await res.json();
          console.log("Title: " + data.title);
      } catch (err) {
          console.log("Fetch failed: " + err.message);
      }
  }
  fetchPostTitle();
  ```
* **Explanation:** Performs async GET, checks `res.ok`, parses to JSON, and logs the title field.

## Question 2: POST request dispatch validation
* **Question:** Send post request to server containing user properties: `{ name: "Ravi", job: "QA" }`.
* **Solution:**
  ```javascript
  async function registerUser() {
      let payload = { name: "Ravi", job: "QA" };
      try {
          let res = await fetch("https://reqres.in/api/users", {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(payload)
          });
          let outcome = await res.json();
          console.log("Registered ID:", outcome.id);
      } catch (e) {
          console.log("Error:", e.message);
      }
  }
  registerUser();
  ```
* **Explanation:** Sends stringified body with JSON content-type header using POST method.

## Question 3: Response status checks
* **Question:** Write a function checking if URL matches status code 404.
* **Solution:**
  ```javascript
  async function testNotFound() {
      try {
          let res = await fetch("https://jsonplaceholder.typicode.com/invalidpage");
          console.log("Status:", res.status); // 404
          console.log("Is OK?", res.ok); // false
      } catch (e) {
          console.log("Error: " + e.message);
      }
  }
  testNotFound();
  ```
* **Explanation:** Resolves URL and checks status properties.
