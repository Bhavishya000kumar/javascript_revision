# JavaScript Complete Revision Notes (Unit 1 to 22)

Welcome to your ultimate JavaScript Revision sheet! Yeh notes aapko quick revision aur concepts refresh karne mein help karenge.


# SECTION 1: JAVASCRIPT BASICS & FUNDAMENTALS

## 1. Variables (var, let, const)
* **var:** Function scoped, hoisted to `undefined`, re-declaration allowed.
* **let:** Block scoped, hoisted to Temporal Dead Zone (TDZ), re-declaration not allowed.
* **const:** Block scoped, hoisted in TDZ, re-assignment not allowed.
```javascript
{
    var a = 10;
    let b = 20;
}
console.log(a); // 10
// console.log(b); // ReferenceError
```

## 2. Data Types
* **Primitives (Value):** Number, String, Boolean, null, undefined, Symbol, BigInt. (Stored in stack, copied by value).
* **Non-Primitives (Reference):** Objects, Arrays, Functions. (Stored in memory heap, copied by reference).

## 3. Type Conversion & Coercion
* **Explicit Conversion:** Manually converting type, e.g. `Number("5")`.
* **Type Coercion:** Implicit type conversion by JS engine, e.g. `5 + "5"` yields `"55"`.
```javascript
console.log(5 == "5"); // true (coercion)
console.log(5 === "5"); // false (strict check)
```

## 4. Operators
* **Arithmetic:** `+`, `-`, `*`, `/`, `%`, `**` (exponentiation).
* **Increment/Decrement:** Pre (`++a`) returns updated value; Post (`a++`) returns original value first.
* **Logical:** `&&` (AND), `||` (OR), `!` (NOT).

## 5. Conditions & Loops
* **Conditions:** `if`, `else if`, `else`, `switch`, Ternary (`condition ? val1 : val2`).
* **Loops:** `for`, `while`, `do...while`. `do...while` loop runs at least once even if the condition is false.
```javascript
let i = 0;
do {
    console.log(i); // 0
} while (i > 1);
```


---


# SECTION 2: STRINGS, ARRAYS & OBJECTS

## 1. Strings
Strings are immutable in JavaScript. Any changes create a new string.
* **Methods:** `slice(start, end)`, `substring(start, end)`, `indexOf()`, `trim()`, `replace(old, new)`.
```javascript
let text = " Hello ";
console.log(text.trim().toLowerCase()); // "hello"
```

## 2. Arrays
Arrays are dynamic reference structures in JavaScript.
* **Basics:** `push()` adds to end, `pop()` removes from end, `shift()` removes from start, `unshift()` adds to start.
* **Higher-Order Array Methods:**
  - `map()`: returns transformed array.
  - `filter()`: returns elements passing condition.
  - `reduce()`: aggregates array to a single value.
```javascript
let nums = [1, 2, 3];
let sum = nums.reduce((acc, c) => acc + c, 0); // 6
```

## 3. Objects
Objects are collections of key-value pairs.
* **Accessing:** Dot notation (`obj.key`) or Bracket notation (`obj["key"]` - mandatory for dynamic keys).
* **Helpers:** `Object.keys()`, `Object.values()`, `Object.entries()`.


---


# SECTION 3: ADVANCED FUNCTIONS & OOP

## 1. Scopes & Execution Context
* **Lexical Scope:** Nested functions can access variables from their outer parent environment.
* **Execution Context:** Logical context where code runs, created in two phases: Memory Creation (hoisting variables as undefined) and Code Execution.
* **Temporal Dead Zone (TDZ):** Block scope area where `let`/`const` variables cannot be accessed before initialization.

## 2. 'this' Keyword & Arrows
* **Regular Function:** `this` is dynamically bound based on how the function is called.
* **Arrow Function:** `this` is lexically resolved (inherits parent block context). Cannot be constructor.
```javascript
const obj = {
    x: 10,
    show() { console.log(this.x); }
};
obj.show(); // 10
```

## 3. Prototypes & Inheritance
* Every object has a `__proto__` pointing to its prototype parent.
* Classes are syntactic sugar over prototypes. `extends` inherits parent class and `super()` invokes parent constructor.


---


# SECTION 4: MODERN JAVASCRIPT & STORAGE

## 1. Destructuring & Rest/Spread
* **Destructuring:** Unpacking values from arrays or objects.
* **Spread (`...`):** Expands arrays or objects.
* **Rest (`...`):** Gathers multiple arguments into a single array.
```javascript
let [first, ...rest] = [1, 2, 3];
console.log(first, rest); // 1 [2, 3]
```

## 2. Optional Chaining & Nullish Coalescing
* **`?.`:** Safely reads nested properties. Returns `undefined` if intermediate reference fails.
* **`??`:** Returns fallback strictly if value is `null` or `undefined`.
```javascript
let name = null;
console.log(name ?? "Guest"); // "Guest"
```

## 3. Storage APIs
* **localStorage:** Persistent browser string storage (survives tab close).
* **sessionStorage:** Clears automatically when the tab is closed.
* **JSON methods:** `JSON.stringify()` (Object to string), `JSON.parse()` (String to Object).


---


# SECTION 5: ASYNCHRONOUS JAVASCRIPT & RUNTIME

## 1. Event Loop & Runtime Execution
* **Web APIs:** Browser processes async functions (setTimeout, fetch) in the background.
* **Microtask Queue:** Priority queue for Promises callbacks.
* **Macrotask Queue:** Callback queue for setTimeout, events.
* **Event Loop:** Shifts callbacks to Call Stack once the stack is empty. Microtasks always run before macrotasks.

## 2. Promises & async/await
* **States:** Pending $\rightarrow$ Resolved (Fulfilled) / Rejected.
* **async/await:** Clean flat syntax wrapper over Promises. `await` halts async block execution until the promise settles.
```javascript
async function fetchPost() {
    let res = await fetch("https://jsonplaceholder.typicode.com/posts/1");
    let data = await res.json();
    console.log(data.id);
}
fetchPost();
```


---


# SECTION 6: ADVANCED PATTERNS

## 1. Closures, Currying & Memoization
* **Closure:** Lexical memory access function wrapper.
* **Currying:** splitting `f(a, b)` into chained calls `f(a)(b)`.
* **Memoization:** Caching expensive calculations output.

## 2. Debouncing vs Throttling
* **Debouncing:** delays callback run until a certain period of inactivity (typing pause).
* **Throttling:** executes callback once per fixed time interval during continuous trigger actions.

## 3. Immutability & Pure Functions
* **Pure Function:** Same input $\rightarrow$ Same output, no side effects.
* **Immutability:** States are duplicated, never updated in-place.
