# Unit 20: Advanced JavaScript Concepts

Welcome to Unit 20! Iss chapter mein hum advanced JavaScript performance structures (Closures, Currying, Memoization, Debouncing, Throttling, Memory copying, Reference vs Value, Garbage Collection, Immutability, Pure Functions aur Functional Programming) ko detail mein simple Hinglish mein aur clean spacing ke sath cover karenge.


# PART 1: FUNCTIONAL UTILITIES & OPTIMIZATIONS

Functions ko optimize aur dynamically handle karne ke custom execution patterns.


## 1. Closures Revision

What is it?
Closure ek aisa mechanism hai jisme ek nested inner function, apne surrounding parent function ke variables ko, parent function ke execution stack se pop off hone ke baad bhi, **hamesha access aur read** kar sakta hai.

Why is it needed?
Variable values encapsulation, public/private properties abstraction set coordinate parameters safe structures code maps design loops.

Simple example
```javascript
function makeCounter() {
    let count = 0; // Local state variable
    return function() {
        count++;
        return count;
    };
}
const counter = makeCounter();
console.log(counter());
console.log(counter());
```

Output
1
2


---


## 2. Currying

What is it?
Currying ek design pattern hai jisme hum ek multi-argument function ko transform karke sequential nested functions ki chain mein split kar dete hain, jahan har nested function **sirf ek single argument** leta hai.

Why is it needed?
Functions variables settings presets structures, dynamic partially applied configuration parameters settings maps variables layout.

Simple example
```javascript
// Normal function: add(a, b)
// Curried version: add(a)(b)
function curryAdd(a) {
    return function(b) {
        return a + b;
    };
}
console.log(curryAdd(5)(10));
```

Output
15


---


## 3. Memoization

What is it?
Memoization ek execution optimization mechanism hai jo expensive calculation results ko temporary variables **cache object** mein store karta hai. Jab same calculations key inputs ke sath wapas call hoti hain, toh function result recalculate karne ki bajay directly cache table se data return kar deta hai.

Why is it needed?
Fibers/Recursive calculations performance optimizations boundaries, CPU usage reduction patterns execution limits.

Simple example
```javascript
function memoizedAdder() {
    let cache = {}; // local closure cache
    return function(num) {
        if (num in cache) {
            console.log("Returned from cache:");
            return cache[num];
        }
        console.log("Calculated:");
        let result = num + 10;
        cache[num] = result;
        return result;
    };
}
const addTen = memoizedAdder();
console.log(addTen(5)); // Calculated
console.log(addTen(5)); // From Cache
```

Output
Calculated:
15
Returned from cache:
15


---


## 4. Debouncing

What is it?
Debouncing ek performance execution wrapper hai jo ensure karta hai ki koi custom event function tabhi run hoga jab continuous triggers triggers triggers ke beech **ek specified delay check break pause** ho.

Why is it needed?
Search bar input keydown calls, window screen resizing callbacks, high frequency dynamic scroll API calls limit mappings.

Simple real-life example:
Elevator door logic: elevator tabhi chalna shuru karega jab continuous buttons switches click hona band ho jayein aur kuch seconds ka break (silence window) mile.

Simple example
```javascript
function debounce(func, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer); // clears previous scheduling
        timer = setTimeout(() => func(...args), delay);
    };
}
const searchApiCall = () => console.log("API Triggered");
const debouncedSearch = debounce(searchApiCall, 300);
```


---


## 5. Throttling

What is it?
Throttling ek performance pattern execution modifier hai jo function triggers check timing coordinate karta hai ki woh continuous rapid events triggers ke beech **sirf ek bar fixed interval delay cycle** par run ho.

Why is it needed?
Infinite scroll, tracking mouse move coordinates, window resize updates controls limits.

Difference: Debouncing vs Throttling
* **Debouncing:** Operations trigger parameters execute after user stops typing/interaction (Waits for silence).
* **Throttling:** Operations trigger at constant intervals repeatedly during continuous interaction (Runs at constant ticks).


---


# PART 2: MEMORY MANAGEMENT & IMAGES

## 1. Reference vs Value

What is it?
* **Primitives (Value):** Numbers, Strings, Booleans etc. are copied by value. Naya variable variables variables assignment copies values content directly.
* **Objects/Arrays (Reference):** Copied by pointer references location. Direct assignments pointing same memory address pointer. Modifying one updates target reference keys.

Simple example Value Copy:
```javascript
let a = 10;
let b = a;
b = 20;
console.log(a); // 10 (stays unaffected)
```

Simple example Reference Copy:
```javascript
let obj1 = { name: "Ravi" };
let obj2 = obj1;
obj2.name = "Amit";
console.log(obj1.name); // Amit (Original object is mutated!)
```

Output
10
Amit


---


## 2. Shallow Copy vs Deep Copy

How references are duplicated?
* **Shallow Copy:** Copies first level key properties. Nested properties are still shared via pointers reference. (Created using Spread `...` or `Object.assign()`).
* **Deep Copy:** Copies all nested levels deep memory allocations objects maps completely, creating a completely independent copy. (Created using `JSON.parse(JSON.stringify(obj))` or `structuredClone(obj)`).

Simple example Shallow copy:
```javascript
let original = { name: "Aman", address: { city: "Delhi" } };
let shallow = { ...original };
shallow.address.city = "Mumbai"; // Mutates original!
console.log(original.address.city);
```

Simple example Deep copy:
```javascript
let deepCopy = JSON.parse(JSON.stringify(original));
deepCopy.address.city = "Chennai"; // Original remains safe Delhi!
```

Output
Mumbai


---


## 3. Garbage Collection Basics

What is it?
Garbage Collection JavaScript engine ka automatic memory controller setup processor hai.
* **Unused Objects:** Jab kisi memory block variable coordinate reference mapping link scope boundary se free ho jata hai aur reference chain loop check trace disconnect ho jata hai, tab browser use **unused garbage memory** assume karta hai.
* **GC cycle:** Engine clean parameters loops running automatically free blocks.
* Developers manual memory clearance keywords (like C++ `delete`/`free`) JS memory space par manage nahi karte.


---


# PART 3: DECLARATIVE JS & IMAGES

## 1. Immutability

What is it?
Immutability ka matlab hai ki state/data ko in-place modify/mutate karne ki bajay, **hamesha naya object copy create karke update** kiya jaye.

Why is it needed?
State tracking patterns debugging tracking clean checks.

Simple example
```javascript
let list = [1, 2, 3];
// Bad: list.push(4) - Mutates original!
// Good: Immutability updates:
let newList = [...list, 4]; // returns fresh new array list
```


---


## 2. Pure Functions & Functional Programming Basics

What is it?
* **Pure Function:**
  1. Same inputs hamesha **same outputs** yield karte hain.
  2. Pure functions ke execution se program scope variables side-effects (like modifying global properties) perform nahi hote.
* **Functional Programming (FP):** Programming paradigm prioritizing declarative models utilizing pure functions, immutability, and higher-order functions (like `map`, `filter`, `reduce`) to construct software architectures.

Simple example
```javascript
// Pure Function
function multiply(a, b) {
    return a * b;
}

// Impure Function (mutates external value)
let tax = 5;
function calculateTax(val) {
    return val + tax; // depends on external mutable state tax
}
```


---


# 🧠 QUICK REVISION SUMMARY

* **Closures:** Nested inner function maintains access to outer parent scope variable frames.
* **Currying:** `f(a, b)` $\rightarrow$ `f(a)(b)` sequential single parameters execution model.
* **Memoization:** optimization caching expensive calculation results.
* **Debouncing vs Throttling:** Debouncing delays execution until a pause; Throttling runs periodically at constant interval cycles.
* **Copy Types:** Shallow duplicate top level properties; Deep duplicate all inner properties completely.
* **Value vs Reference:** Primitives copy by value; Objects/Arrays copy by memory location pointers.
* **FP basics:** Coding design prioritizing Pure functions and Immutability.


---


# 📝 IMPORTANT DEFINITIONS (INTERVIEW-READY)

1. **Closure Boundary:** Execution context scope link mapping active variables frames references inside parent functions memory blocks.
2. **Curried Execution:** Transform pipelines splitting multi-parameter calls to chained single-parameter callbacks.
3. **Structured Cache (Memoization):** High speed memory tables caching computed functions coordinates mapped to inputs parameters.
4. **Structured Clone:** Browser native deep copy constructor method (`structuredClone`) creating isolated duplicate objects.
5. **Garbage Reclamation (Mark-and-Sweep):** JS engine algorithms detecting inaccessible variables blocks references to free memory allocation slots.


---


# 💬 IMPORTANT INTERVIEW QUESTIONS & ANSWERS

### Q1. Difference between Debouncing and Throttling?
**Ans:** 
- Debouncing triggers the function only after a certain period of inactivity (silence delay). Useful for search auto-suggest.
- Throttling limits the execution frequency, running the function at most once every specified time interval during continuous trigger actions. Useful for page scroll tracking.

### Q2. Difference between Shallow Copy and Deep Copy?
**Ans:** 
- Shallow copy duplicates the top-level property references of an object; nested objects are still linked by reference.
- Deep copy duplicates all nested structural layers completely, creating a fully independent clone.

### Q3. What is a Pure Function?
**Ans:** A function that consistently returns the same output for the same arguments, and performs its operations without any side effects (like mutating global variables or logging to external APIs).

### Q4. Explain currying in JavaScript.
**Ans:** Currying is the design practice of transforming a function that takes multiple arguments into a sequence of nested functions, each accepting a single argument.

### Q5. Predict output:
```javascript
let arr1 = [1, 2];
let arr2 = arr1;
arr2.push(3);
console.log(arr1);
```
**Ans:** `[1, 2, 3]`. (Since arrays are copied by reference, both point to the same memory location).

### Q6. How do you implement a simple memoization function?
**Ans:** By using a closure where a local cache object persists and stores computation keys mapping inputs to output values.

### Q7. Predict output:
```javascript
let original = { a: 1, b: { c: 2 } };
let copy = { ...original };
copy.b.c = 99;
console.log(original.b.c);
```
**Ans:** `99`. (Spread operator creates a shallow copy, leaving nested object references linked).

### Q8. What is Immutability in functional programming?
**Ans:** The paradigm where data variables are never edited in-place; instead, updates create fresh copies, preserving original structures.

### Q9. How does Garbage Collection trace unreachable memory?
**Ans:** JS engine uses the "Mark-and-Sweep" algorithm. It starts from root contexts (like global scope) to tag reachable items. Untagged items are identified as unreachable garbage and deleted.

### Q10. Predict output:
```javascript
console.log(typeof structuredClone);
```
**Ans:** `"function"`. (In modern browsers/Node.js).

### Q11. Predict output:
```javascript
const add = a => b => c => a + b + c;
console.log(add(1)(2)(3));
```
**Ans:** `6`. (Curried function structure).

### Q12. What does `JSON.parse(JSON.stringify(obj))` do?
**Ans:** Creates a deep copy of `obj`. Note: It ignores methods (functions), undefined values, and Symbols.

### Q13. Predict output:
```javascript
let x = "Hello";
let y = x;
y = "World";
console.log(x);
```
**Ans:** `"Hello"`. (Strings are primitive types copied by value).

### Q14. What are side effects in function calls?
**Ans:** Changes a function makes outside its own scope, such as modifying global variables, DOM structures, writing files, or printing console logs.

### Q15. Predict output:
```javascript
let val = Object.freeze({ name: "Amit" });
val.name = "Ravi";
console.log(val.name);
```
**Ans:** `"Amit"`. (Object.freeze prevents property mutations).

### Q16. Can we invoke garbage collection manually in production JavaScript?
**Ans:** No. JavaScript engines manage memory allocation and garbage collection automatically.

### Q17. Why is currying useful?
**Ans:** It facilitates function composition, makes functions reusable through partial application, and helps in configuring base handler parameters.

### Q18. Predict output:
```javascript
let list = [10, 20];
let copy = Object.assign([], list);
copy[0] = 99;
console.log(list[0]);
```
**Ans:** `10`. (Object.assign creates a shallow copy of arrays; top-level changes do not mutate original).

### Q19. What is caching in Memoization?
**Ans:** An in-memory key-value dictionary that stores inputs and pre-computed outputs to avoid redundant CPU calculations.

### Q20. What is declarative programming style?
**Ans:** Focuses on "what to do" rather than "how to do it" (imperative style), utilizing higher-order collection functions like map, filter, and reduce.


---


# 💻 PRACTICE QUESTIONS

## Question 1: Simple Curried multiplier
* **Question:** Create a curried function multiplying three numbers: `mul(a)(b)(c)`.
* **Solution:**
  ```javascript
  const mul = a => b => c => a * b * c;
  console.log(mul(2)(3)(4)); // 24
  ```
* **Explanation:** Sequential arrow declarations construct chained single-argument evaluation scopes.

## Question 2: Custom Shallow vs Deep copy checks
* **Question:** Construct custom deep copy cloning helper for object `{ a: 1, info: { tag: "JS" } }`.
* **Solution:**
  ```javascript
  let data = { a: 1, info: { tag: "JS" } };
  let cloned = JSON.parse(JSON.stringify(data));
  cloned.info.tag = "Advanced";

  console.log("Original tag:", data.info.tag); // JS
  console.log("Cloned tag:", cloned.info.tag); // Advanced
  ```
* **Explanation:** Deep copy isolates nested objects, so modifying `cloned` does not mutate `data`.

## Question 3: Pure function checker
* **Question:** Turn the impure calculation function into a pure function.
* **Impure code:**
  ```javascript
  let discount = 10;
  function applyImpure(price) { return price - discount; }
  ```
* **Pure solution code:**
  ```javascript
  function applyPure(price, discountAmount) {
      return price - discountAmount;
  }
  console.log(applyPure(100, 10)); // 90
  ```
* **Explanation:** Passing all dependencies (discountAmount) explicitly as arguments ensures the function is pure, eliminating external mutable states.
