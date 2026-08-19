# Unit 18: Storage in JavaScript

Welcome to Unit 18! Iss chapter mein hum browser storages (localStorage, sessionStorage, Cookies) aur JSON parsing APIs ko detail mein simple Hinglish mein aur clean spacing ke sath cover karenge.


# PART 1: BROWSER STORAGES BASICS

Web apps mein user session data aur configurations ko locally save karne ke liye browser storages use hoti hain.


## 1. localStorage

What is it?
localStorage browser ka ek built-in storage container hai jo data ko key-value string format mein user ke system par **hamesha ke liye (indefinitely)** store rakhta hai, jab tak use manually clear na kiya jaye.

Why is it needed?
Page reload hone par ya browser close karke wapas open karne par bhi user ki settings (jaise dark mode theme preference, saved settings) save rahein, isliye use hota hai.

Real-life Example:
Ek notebook jahan aap pen se likh kar save kar dete hain. Jab tak aap khud rubber se na mitayein ya notebook na fekein, likha hua wahi rehta hai.

Methods:
* **setItem("key", "value"):** Data save karta hai. (Note: Value hamesha String honi chahiye).
* **getItem("key"):** Data read karta hai. Agar key nahi milti toh `null` return karta hai.
* **removeItem("key"):** Specific key aur uski value ko delete karta hai.
* **clear():** localStorage se saara data delete kar deta hai.

Simple example
```javascript
// Saving data
localStorage.setItem("theme", "dark");

// Reading data
let activeTheme = localStorage.getItem("theme");
console.log("Active Theme:", activeTheme);

// Removing data
localStorage.removeItem("theme");

// Clearing all storage
localStorage.clear();
```

Output
Active Theme: dark


---


## 2. sessionStorage

What is it?
sessionStorage bhi localStorage ki tarah kaam karta hai, lekin isme data sirf tab tak rehta hai jab tak **active browser tab open** hai. Jaise hi user browser tab ko close karta hai, iska saara data automatically clear ho jata hai.

Why is it needed?
Temporary details (like current login session tokens, multi-step form data filling state) ko safe rakhne ke liye jo tab change/close hone par destroy ho jani chahiye.

Real-life Example:
Blackboard par chalk se likhna. Class khatam hone par board ko saaf kar diya jata hai.

Simple example
```javascript
// Saving session data
sessionStorage.setItem("sessionToken", "xyz123");

// Reading
let token = sessionStorage.getItem("sessionToken");
console.log("Token:", token);

// Cleaning
sessionStorage.clear();
```

Output
Token: xyz123


---


## 3. Difference: localStorage vs sessionStorage

| Feature | localStorage | sessionStorage |
| :--- | :--- | :--- |
| **Data Lifespan** | Hamesha rehta hai (indefinite), browser restart hone par bhi. | Tab close hote hi data delete ho jata hai. |
| **Scope** | Same origin (domain) ke saare tabs/windows mein share hota hai. | Sirf active current tab/window ke scope tak limit hota hai. |
| **Capacity** | Around 5MB - 10MB. | Around 5MB. |


---


## 4. Cookies (Basic Idea Only)

What is it?
Cookies small text files hoti hain jo browser mein store hoti hain aur frontend aur backend **har HTTP network request ke sath automatically server par send** hoti hain.

Why is it used?
Server-side identification, tracking user sessions aur authentication validation manage karne ke liye.

Key Differences from Local/SessionStorage:
* **Size:** Cookies ki size limit bohot kam hoti hai (around 4KB).
* **Network Send:** Storage (local/session) sirf browser mein rehti hai, network requests ke sath automatic server par nahi jaati. Cookies har single API call ke sath server par travel karti hain.
* **Expiry:** Cookies ke pass automatic expiry date/time set karne ka features hota hai.


---


# PART 2: STORING OBJECTS & ARRAYS (JSON CONVERSION)

## 1. Why JSON is needed in Storages?

**IMPORTANT POINT:** Browser storages (`localStorage`/`sessionStorage`) sirf **Strings** save kar sakti hain. Agar aap directly Object ya Array save karne ki koshish karenge, toh browser use internally coerce karke string representation `"[object Object]"` bana dega, jiski original values loss ho jayengi.

Example of the Problem:
```javascript
let userObj = { name: "Ravi" };
localStorage.setItem("user", userObj);
console.log(localStorage.getItem("user")); // Output: [object Object] (Original name "Ravi" is lost!)
```

Solution:
* **JSON.stringify(data):** Object/Array ko JSON String mein convert karta hai, taaki use safe save kiya ja sake.
* **JSON.parse(string):** Saved JSON string ko wapas real JavaScript Object/Array mein convert karta hai.


---


## 2. Practical Objects & Arrays Storage Example

Storing & Reading Object safely:
```javascript
let employee = { name: "Rahul", role: "Dev" };

// Stringify to save
localStorage.setItem("employeeData", JSON.stringify(employee));

// Read and parse
let rawData = localStorage.getItem("employeeData");
let parsedEmployee = JSON.parse(rawData);

console.log("Employee Name parsed:", parsedEmployee.name);
```

Storing & Reading Array safely:
```javascript
let scores = [90, 85, 95];

// Stringify to save
localStorage.setItem("scoreList", JSON.stringify(scores));

// Read and parse
let rawScores = localStorage.getItem("scoreList");
let parsedScores = JSON.parse(rawScores);

console.log("Scores parsed array:", parsedScores);
```

Output
Employee Name parsed: Rahul
Scores parsed array: [90, 85, 95]


---


# 🧠 QUICK REVISION SUMMARY

* **localStorage:** Persistent string storage. setItem to save, getItem to read, removeItem to delete key, clear to flush.
* **sessionStorage:** Lifespan limited to browser tab lifecycle. Data deletes on tab close.
* **Cookies:** Text storage size 4KB limit. Automatic network transmission to server.
* **JSON methods:** Storage requires string variables. Objects/Arrays must use `JSON.stringify()` to save and `JSON.parse()` to read.


---


# 📝 IMPORTANT DEFINITIONS (INTERVIEW-READY)

1. **Storage Serialization:** Converting live JS objects into transportable JSON string text to fit browser string-only storage models.
2. **Same-Origin Scope:** Security restriction ensuring stored keys are only accessible by pages on the exact same protocol, domain, and port.
3. **Session Lifespan:** Lifecycle limit constraint matching stored variables to the open duration of a single browser tab.
4. **Cookie (HTTP Cookie):** Small textual metadata packets automatically transported between client browser and server during network calls.
5. **Dunder Storage Limits:** Memory boundaries (approx 5MB for storage APIs) defined by browsers to prevent system memory hogging.


---


# 💬 IMPORTANT INTERVIEW QUESTIONS & ANSWERS

### Q1. Why does localStorage save objects as `[object Object]` and how to fix it?
**Ans:** localStorage only supports string values. When an object is passed, it is forced to string representation via `.toString()`, yielding `[object Object]`. We fix this by converting the object to a JSON string using `JSON.stringify(object)` before saving, and parsing it back with `JSON.parse(string)` when reading.

### Q2. Difference between `localStorage` and `sessionStorage`?
**Ans:** `localStorage` data persists indefinitely across restarts and tabs under the same origin. `sessionStorage` data exists only within the specific tab and is destroyed as soon as the tab is closed.

### Q3. Difference between `localStorage` and `Cookies`?
**Ans:** `localStorage` has a larger capacity (5-10MB), stores data strictly on the client side, and does not send data over network requests. `Cookies` have a tiny capacity (4KB), are sent automatically to the server with every HTTP request, and support expiration dates.

### Q4. What does `localStorage.getItem("missingKey")` return?
**Ans:** It returns `null`.

### Q5. Predict output:
```javascript
localStorage.setItem("score", 100);
let scoreVal = localStorage.getItem("score");
console.log(typeof scoreVal);
```
**Ans:** `"string"`. (localStorage converts numbers to strings automatically).

### Q6. How do you clear all keys stored in sessionStorage?
**Ans:** By calling `sessionStorage.clear()`.

### Q7. Can other websites access my localStorage keys?
**Ans:** No. Access is protected by the browser's Same-Origin Policy (SOP), which restricts access to pages with matching protocols, domains, and ports.

### Q8. Predict output:
```javascript
localStorage.setItem("flag", true);
let flag = localStorage.getItem("flag");
if (flag) {
    console.log("Truthy check");
}
```
**Ans:** `"Truthy check"`. (The string `"true"` is non-empty and behaves as a truthy value).

### Q9. Predict output:
```javascript
localStorage.clear();
localStorage.setItem("a", "1");
console.log(localStorage.length);
```
**Ans:** `1`. (length returns the number of keys currently stored).

### Q10. What does `JSON.parse("null")` return?
**Ans:** `null`.

### Q11. Predict output:
```javascript
let arr = [1, 2];
localStorage.setItem("arr", arr);
console.log(typeof localStorage.getItem("arr"));
```
**Ans:** `"string"`. (The array is coerced to string `"1,2"`).

### Q12. How do you remove a single specific key from localStorage?
**Ans:** `localStorage.removeItem("keyName")`.

### Q13. Can cookies be configured to delete automatically?
**Ans:** Yes. Cookies support `Max-Age` or `Expires` attributes that trigger automatic deletion at a specified time.

### Q14. What happens to sessionStorage data if the page is reloaded?
**Ans:** The data persists. sessionStorage survives page reloads and only clears when the tab is closed.

### Q15. Predict output:
```javascript
let str = "{'name': 'Ravi'}";
try {
    JSON.parse(str);
} catch(e) {
    console.log(e.name);
}
```
**Ans:** `"SyntaxError"`. (JSON requires key names to be wrapped in double quotes `""`, single quotes are invalid).

### Q16. What is the storage limit of Cookies?
**Ans:** Around 4KB per cookie.

### Q17. Predict output:
```javascript
localStorage.setItem("num", "5");
console.log(localStorage.getItem("num") + 5);
```
**Ans:** `"55"`. (Since value is retrieved as string `"5"`, addition acts as concatenation).

### Q18. How to fix the above summation computation?
**Ans:** Coerce the string using `Number()`: `Number(localStorage.getItem("num")) + 5`.

### Q19. Does `sessionStorage` share data across different browser windows of same origin?
**Ans:** No. sessionStorage is isolated to the specific window tab instance.

### Q20. Predict output:
```javascript
localStorage.setItem("val", "test");
localStorage.setItem("val", "newTest");
console.log(localStorage.getItem("val"));
```
**Ans:** `"newTest"`. (Re-assigning a key overrides the existing value).


---


# 💻 PRACTICE QUESTIONS

## Question 1: Save User Session details
* **Question:** Save a user profile object `{ name: "Ravi", premium: true }` in localStorage, read it, and print status message.
* **Solution:**
  ```javascript
  let user = { name: "Ravi", premium: true };
  localStorage.setItem("userProfile", JSON.stringify(user));

  let retrieved = JSON.parse(localStorage.getItem("userProfile"));
  console.log("Is Premium?", retrieved.premium); // true
  localStorage.removeItem("userProfile");
  ```
* **Explanation:** Serializes the object before storage, parses the JSON string back, and verifies the boolean flag.

## Question 2: Save and Filter saved array scores
* **Question:** Save array `[40, 70, 85]` to localStorage, read it, and print items greater than 50.
* **Solution:**
  ```javascript
  let marksList = [40, 70, 85];
  localStorage.setItem("marks", JSON.stringify(marksList));

  let parsedMarks = JSON.parse(localStorage.getItem("marks"));
  let highScores = parsedMarks.filter(m => m > 50);
  console.log("High Scores:", highScores); // [70, 85]
  localStorage.clear();
  ```
* **Explanation:** Restores the array structure from local storage using `JSON.parse()`, then filters items using `filter()`.

## Question 3: sessionStorage counter
* **Question:** Create a sessionStorage counter that increments count value.
* **Solution:**
  ```javascript
  let currentCount = Number(sessionStorage.getItem("clicks") ?? 0);
  currentCount++;
  sessionStorage.setItem("clicks", currentCount);
  console.log("Session Clicks:", sessionStorage.getItem("clicks"));
  ```
* **Explanation:** Retrieves count (defaulting to 0 if null), increments, and saves it back to sessionStorage.
