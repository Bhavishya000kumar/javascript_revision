# Unit 16: Asynchronous JavaScript

Welcome to Unit 16! Iss chapter mein hum Asynchronous JavaScript (Event Loop, Callbacks, Promises, async/await, Promise Methods) ko standard zero level se interview/advanced level tak cover karenge.


# PART 1: ASYNCHRONOUS ENGINE MECHANICS

JavaScript single-threaded language hai, fir bhi yeh multi-tasking (asynchronous tasks) kaise perform karti hai? Iss section mein hum iska core mechanism samjhenge.


## 1. Synchronous vs Asynchronous

What is it?
* **Synchronous JavaScript:** Code execution sequentially ek line ke baad doosri line chalta hai. Agar line 2 par koi lamba kaam ho, toh aage ka code block ho jata hai (Blocking behavior).
* **Asynchronous JavaScript:** Lambe tasks (like API fetching, database load, timers) background mein trigger ho jate hain aur execute hone par callback run karte hain. Tab tak humara main program block nahi hota aur aage chalta rehta hai (Non-blocking behavior).

Real-life Example:
* **Synchronous:** Ek restaurant jahan counter par customer line mein khada hai. Pehle customer ka order complete hone ke baad hi agle customer ka order liya jata hai.
* **Asynchronous:** Restaurant mein waiter customer se order leta hai aur kitchen mein bhej deta hai. Waiter khada nahi rehta, balki tab tak doosre tables se order lena start kar deta hai.

Simple example
```javascript
// Synchronous
console.log("Start");
console.log("Process");
console.log("End");

// Asynchronous
console.log("Start Async");
setTimeout(() => {
    console.log("Process Async (after 2s)");
}, 2000);
console.log("End Async");
```

Output
Start Async
End Async
Process Async (after 2s)


---


## 2. Event Loop & Components

What is it?
Asynchronous code ko control karne ke liye JavaScript engine ke surrounding environments (Browser ya Node runtime) mein kuch major components hote hain:

* **Call Stack:** Main thread execution workspace. Yahan code lines push hoti hain aur chalne ke baad pop ho jati hain.
* **Web APIs:** Browser level features (like `setTimeout`, fetch APIs, DOM events). Jo tasks asynchoronous hote hain, unhe call stack yahan transfer kar deta hai.
* **Callback Queue:** Jab Web APIs ka task complete ho jata hai (jaise timer end ya fetch resolve), toh uska callback call queue mein line mein lag jata hai.
* **Event Loop:** Yeh continuous monitoring loop hai. Iska kaam hai check karna: **"Kya Call Stack khali hai?"** Agar call stack bilkul empty hai, toh yeh Callback Queue se callback ko uthakar execute karne ke liye Call Stack mein bhej deta hai.

The Flow Loop:
Call Stack $\rightarrow$ Web APIs $\rightarrow$ Callback Queue $\rightarrow$ Event Loop $\rightarrow$ Call Stack.

Dry Run Example:
```javascript
console.log("1");
setTimeout(() => console.log("2"), 0);
console.log("3");
```
Execution Step-by-Step:
1. `console.log("1")` pushes to Call Stack $\rightarrow$ Prints `"1"` $\rightarrow$ Pops off stack.
2. `setTimeout` pushes to Call Stack. Browser registers timer in Web APIs (duration 0ms) $\rightarrow$ Pops off stack.
3. Web API timer finishes instantly $\rightarrow$ Pushes callback `() => console.log("2")` to Callback Queue.
4. `console.log("3")` pushes to Call Stack $\rightarrow$ Prints `"3"` $\rightarrow$ Pops off stack.
5. Call Stack is now empty! Event Loop detects it $\rightarrow$ Shifts callback from Callback Queue to Call Stack $\rightarrow$ Prints `"2"` $\rightarrow$ Pops off stack.
Output: `1 3 2`.


---


# PART 2: CALLBACKS & PROMISES

## 1. Callback Functions & Callback Hell

What is it?
* **Callback Function:** Ek function jo doosre function ko argument pass kiya jata hai.
* **Callback Hell:** Jab bohot saare asynchronous tasks sequential run karne hon, toh nested callbacks bante chale jate hain. Code structure horizontal scale hone lagta hai (jise pyramid of doom kehte hain). Yeh readable aur maintainable nahi rehta.

Callback Hell Example:
```javascript
// Simulating step-by-step cooking
setTimeout(() => {
    console.log("Step 1: Prep Veggies");
    setTimeout(() => {
        console.log("Step 2: Add Spices");
        setTimeout(() => {
            console.log("Step 3: Serve Food");
        }, 1000);
    }, 1000);
}, 1000);
```
Solution: Promises and async/await help us write clean flat codes.


---


## 2. Promises & States

What is it?
Promise JavaScript ka ek built-in constructor object hai jo asynchronous operation ke final completion (success ya failure) ko represent karta hai.

Promise States (Only 3 states):
* **Pending:** Starting state. Operation abhi progress mein hai (na fulfill hua na reject).
* **Fulfilled (Resolved):** Operation completed successfully. `resolve()` callback runs.
* **Rejected:** Operation failed due to error. `reject()` callback runs.

Simple example
```javascript
let myPromise = new Promise((resolve, reject) => {
    let success = true;
    if (success) {
        resolve("Data Loaded!");
    } else {
        reject("Network Fail!");
    }
});
console.log(myPromise);
```

Output
Promise { <fulfilled>: "Data Loaded!" }


---


## 3. Handling Promises: .then(), .catch() & .finally()

What is it?
* **.then():** Fulfill state hone par data parse / read trigger.
* **.catch():** Reject state checks, catches error logs.
* **.finally():** Runs always after completion.

Simple example
```javascript
myPromise
    .then(data => console.log("Success: " + data))
    .catch(err => console.log("Error: " + err))
    .finally(() => console.log("Operation Complete."));
```


---


# PART 3: MODERN ASYNC/AWAIT & CHAINING

## 1. async & await

What is it?
* **async:** Keyword jo functions declaration ke pehle lagte hain. Iske lagte hi function **hamesha Promise return** karega.
* **await:** Keyword jo Promise execution call ke pehle likhte hain. Yeh function execution ko tab tak pause rakhta hai jab tak Promise settle (fulfill/reject) na ho jaye. (Note: `await` only works inside `async` functions).

Simple example
```javascript
function fetchData() {
    return new Promise(resolve => setTimeout(() => resolve("Loaded!"), 1000));
}

async function runTask() {
    console.log("Starting...");
    let data = await fetchData(); // waits 1s, flat syntax
    console.log(data);
    console.log("Done!");
}
runTask();
```

Output
Starting...
(waits 1 second)
Loaded!
Done!


---


## 2. Promise Chaining & Error Handling

What is it?
* **Promise Chaining:** Ek `.then()` block ke return value ko use karke doosra `.then()` return data chain control setups design block.
* **try-catch with async/await:** Errors are caught locally inside a standard try-catch block wrapping the await calls.

Chaining Example:
```javascript
function step1() { return Promise.resolve(10); }
function step2(val) { return Promise.resolve(val * 2); }

step1()
    .then(res => step2(res))
    .then(final => console.log("Chain Result:", final))
    .catch(err => console.log(err));
```

Output
Chain Result: 20


---


# PART 4: PROMISE COMBINATIONS API METHODS

Asynchronous promises collections control configurations.

| Method | Resolves when... | Rejects when... | Returns... |
| :--- | :--- | :--- | :--- |
| **Promise.all()** | All promises resolve. | **Any single** promise rejects. | Array of all resolved values, or first error. |
| **Promise.allSettled()** | All promises settle (resolve or reject). | **Never rejects**. | Array of status objects containing values/reasons. |
| **Promise.race()** | **Any first** promise settles (resolve or reject). | If the first settling promise rejects. | Value of the fastest promise. |
| **Promise.any()** | **First** promise resolves successfully. | **All** promises reject (AggregateError). | Value of the fastest resolved promise. |

Simple example Combinations
```javascript
let p1 = new Promise(resolve => setTimeout(() => resolve("P1 Fast"), 500));
let p2 = new Promise((resolve, reject) => setTimeout(() => reject("P2 Fail"), 1000));

Promise.allSettled([p1, p2])
    .then(results => console.log(results));
```

Output
`[ { status: "fulfilled", value: "P1 Fast" }, { status: "rejected", reason: "P2 Fail" } ]`


---


# 🧠 QUICK REVISION SUMMARY

* **Sync vs Async:** Synchronous is blocking; Asynchronous background tasks are handled using browser Web APIs.
* **Event Loop:** Continually monitors Call Stack emptiness and callback queue queue shifts.
* **Callback Hell:** Deep nested callback interfaces resolved cleanly via Promises.
* **Promises states:** Pending $\rightarrow$ Fulfilled (resolve) / Rejected (reject).
* **async/await:** Shorthand flat syntax wrapper mapping Promise logic cleanly.
* **Combinations APIs:** `Promise.all` runs in parallel but fails on any error; `allSettled` tracks all statuses; `race` outputs the quickest settler; `any` outputs the quickest resolved item.


---


# 📝 IMPORTANT DEFINITIONS (INTERVIEW-READY)

1. **Event Loop:** Runtime engine coordinator shifting pending queue callbacks to the empty call stack.
2. **Pyramid of Doom:** Callback nesting code pattern where control scaling expands horizontally, causing callback hell.
3. **Promise:** An object representation tracking completion states of asynchronous computations.
4. **Thread Blocks (Blocking):** Execution freezes when long-running task processes block other program tasks.
5. **Microtask Queue:** High-priority queue for Promise callbacks (`.then()`, async/await), which always executes before the standard Callback Queue (macrotasks like `setTimeout`).


---


# 💬 IMPORTANT INTERVIEW QUESTIONS & ANSWERS

### Q1. Difference between Synchronous and Asynchronous JavaScript?
**Ans:** Synchronous execution runs lines sequentially, blocking execution if a task takes too long. Asynchronous execution runs long-running tasks in the background, allowing the main program to continue running without freezing the user interface.

### Q2. Explain the Event Loop.
**Ans:** Event Loop is a monitoring loop that checks if the Call Stack is empty. If it is, it takes pending callbacks from the Callback Queue and pushes them to the Call Stack for execution.

### Q3. Predict output:
```javascript
console.log("Start");
setTimeout(() => console.log("Timeout"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
```
**Ans:**
"Start"
"End"
"Promise"
"Timeout"
(Because Promise callbacks enter the Microtask Queue, which has higher priority and executes before the Callback Queue).

### Q4. Difference between `Promise.all()` and `Promise.allSettled()`?
**Ans:** `Promise.all()` rejects immediately if any single promise fails. `Promise.allSettled()` waits for all promises to complete (regardless of success or failure) and returns an array showing each promise's status and value.

### Q5. What is Callback Hell?
**Ans:** The nested pyramid structure formed when writing multiple sequential asynchronous operations using nested callbacks, making the code hard to read and debug.

### Q6. What does `async` keyword do?
**Ans:** It forces a function to return a Promise. If the function returns a raw value, JavaScript wraps it in a resolved Promise automatically.

### Q7. What does `await` keyword do?
**Ans:** It pauses the execution of an async function until a Promise settles (resolves or rejects), yielding a cleaner, synchronous-like syntax.

### Q8. Predict output:
```javascript
async function test() {
    return 10;
}
test().then(val => console.log(val));
```
**Ans:** `10`. (The returned number is automatically wrapped in a resolved Promise).

### Q9. Difference between `Promise.race()` and `Promise.any()`?
**Ans:** `Promise.race()` returns the first promise that settles (whether it resolves or rejects). `Promise.any()` ignores rejections and returns the first promise that resolves successfully.

### Q10. What is an AggregateError in `Promise.any()`?
**Ans:** The error object thrown by `Promise.any()` when all input promises are rejected, containing an array of all individual rejections reasons.

### Q11. Predict output:
```javascript
let p = new Promise((res, rej) => {
    res("A");
    rej("B");
});
p.then(x => console.log(x)).catch(y => console.log(y));
```
**Ans:** `"A"`. Once a Promise is resolved or rejected, its state is locked. The subsequent `rej("B")` call is ignored.

### Q12. Predict output:
```javascript
async function run() {
    console.log("A");
    await Promise.resolve();
    console.log("B");
}
run();
console.log("C");
```
**Ans:**
"A"
"C"
"B"
(The `await` keyword pauses the local async function execution, letting the global thread print `"C"` first).

### Q13. Can `await` be used in global scope?
**Ans:** Only in modern environments supporting "Top-Level Await" in ES Modules; otherwise it throws a SyntaxError if used outside an `async` function.

### Q14. Predict output:
```javascript
Promise.resolve("Hello")
    .then(res => res + " World")
    .then(res => console.log(res));
```
**Ans:** `"Hello World"`. (Value from first then is forwarded to the next link).

### Q15. Does JavaScript support multi-threading natively?
**Ans:** JavaScript is strictly single-threaded. Asynchronous operations are managed by browser threads (via Web APIs) and coordinated by the Event Loop.

### Q16. Predict output:
```javascript
setTimeout(() => console.log("A"), 100);
setTimeout(() => console.log("B"), 50);
```
**Ans:**
"B"
"A"
(Since B has a shorter timer, its callback is queued and executed first).

### Q17. How do you handle errors inside async/await functions?
**Ans:** By wrapping the `await` expression in a standard `try-catch` block.

### Q18. What is the default initial state of a Promise?
**Ans:** `Pending`.

### Q19. Does `.finally()` receive data parameters from `.then()`?
**Ans:** No. The callback inside `.finally()` receives no arguments, as it is meant for general cleanup code.

### Q20. Predict output:
```javascript
Promise.reject("Error!")
    .then(res => console.log(res))
    .catch(err => console.log("Caught: " + err));
```
**Ans:** `"Caught: Error!"`. (Skips `.then()` and jumps to `.catch()`).


---


# 💻 PRACTICE QUESTIONS

## Question 1: Predict setTimeout order
* **Question:** Predict call stack sequence order logs for below setup.
* **Solution:**
  ```javascript
  console.log("A");
  setTimeout(() => console.log("B"), 0);
  console.log("C");
  ```
* **Output:**
  A
  C
  B
* **Explanation:** C log runs synchronously before B gets popped off the callback queue by the event loop.

## Question 2: Simple Promise Creation
* **Question:** Create a Promise that resolves after 500ms with message "Finished".
* **Solution:**
  ```javascript
  const delayPromise = new Promise((resolve) => {
      setTimeout(() => resolve("Finished"), 500);
  });
  delayPromise.then(msg => console.log(msg));
  ```
* **Output:** Finished (after 500ms)
* **Explanation:** Triggers `resolve()` callback inside a setTimeout timer, which is handled by `.then()`.

## Question 3: async/await Try-Catch Error Handler
* **Question:** Fetch data from failing promise and catch error locally using async/await try-catch.
* **Solution:**
  ```javascript
  const failingTask = () => Promise.reject("Fetch Timeout!");

  async function handleTask() {
      try {
          await failingTask();
      } catch (err) {
          console.log("Error Intercepted: " + err);
      }
  }
  handleTask();
  ```
* **Output:** Error Intercepted: Fetch Timeout!
* **Explanation:** The rejected promise propagates an exception caught cleanly by the local try-catch container.
