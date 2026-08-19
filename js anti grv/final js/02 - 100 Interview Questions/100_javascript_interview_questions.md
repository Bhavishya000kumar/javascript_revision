# 100 JavaScript Interview Questions & Answers

Welcome to the ultimate JavaScript interview questions collection! This file contains exactly 100 hand-picked interview questions and answers.


# SECTION 1: VARIABLE SCOPES & PRIMITIVES

### Q1. Difference between var, let, and const?
* **Ans:** `var` is function-scoped and hoisted with `undefined`. `let` and `const` are block-scoped, hoisted in TDZ. `const` prevents re-assignment.

### Q2. What is Temporal Dead Zone (TDZ)?
* **Ans:** The scope period from the block start until variable declaration initialization. Accessing variables inside TDZ throws a ReferenceError.

### Q3. Explain Hosting in JavaScript.
* **Ans:** JS engine moves variables and functions declarations to the top of their enclosing scope before execution.

### Q4. Difference between undefined and null?
* **Ans:** `undefined` is the default value of uninitialized variables. `null` is a user-assigned value representing empty reference.

### Q5. What is typeof null?
* **Ans:** `"object"`. This is a legacy JS bug.

### Q6. Difference between == and ===?
* **Ans:** `==` compares values after performing implicit type coercion. `===` compares values and types directly.

### Q7. What is NaN and its type?
* **Ans:** Not-a-Number, representing invalid math operations. Its type is `"number"`.

### Q8. Predict output: `console.log(typeof NaN === "number")`?
* **Ans:** `true`.

### Q9. How to check if a value is NaN?
* **Ans:** Using `Number.isNaN()` or `isNaN()`.

### Q10. What are primitive data types in JS?
* **Ans:** Number, String, Boolean, null, undefined, Symbol, and BigInt.


---


# SECTION 2: VALUES, REFERENCES & COERCION

### Q11. Difference between value copy and reference copy?
* **Ans:** Primitives are copied by value (data duplicated in stack). Objects are copied by reference (pointer address copied).

### Q12. Predict output:
```javascript
let a = {};
let b = a;
console.log(a === b);
```
* **Ans:** `true`. Both variables point to the same memory reference.

### Q13. Predict output:
```javascript
console.log([] == ![]);
```
* **Ans:** `true`. The expression ![] becomes false, leading to conversion of array to primitive comparison which yields true.

### Q14. Predict output:
```javascript
console.log(1 + "2" + 3);
```
* **Ans:** `"123"`. The numbers are coerced to strings.

### Q15. Predict output:
```javascript
console.log(1 + +"2" + 3);
```
* **Ans:** `6`. Unary plus converts `"2"` to numeric 2, leading to sum 6.

### Q16. Predict output:
```javascript
console.log(typeof []);
```
* **Ans:** `"object"`.

### Q17. How to check if a variable is an array?
* **Ans:** Using `Array.isArray(variable)`.

### Q18. Predict output:
```javascript
console.log(false == 0);
console.log(false === 0);
```
* **Ans:** `true` then `false` (triple equals strictly checks type).

### Q19. Predict output:
```javascript
console.log(null == undefined);
console.log(null === undefined);
```
* **Ans:** `true` then `false`.

### Q20. Predict output:
```javascript
let str = "Hello";
str[0] = "M";
console.log(str);
```
* **Ans:** `"Hello"`. Strings are immutable in JavaScript.


---


# SECTION 3: FUNCTIONS, CLOSURES & SCOPES

### Q21. Difference between Function Declaration and Function Expression?
* **Ans:** Declarations are fully hoisted. Expressions are hoisted as variables (`undefined` if declared with `var`).

### Q22. What is a Closure?
* **Ans:** A function retaining access to its lexical parent scope variables even after the parent function has exited.

### Q23. Predict output:
```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 10);
}
```
* **Ans:** `3, 3, 3`. (Due to function-scoped `var i` sharing value across callbacks).

### Q24. How to fix the above loop to print 0, 1, 2?
* **Ans:** Declare the iterator with block-scoped `let`: `for (let i = 0; ...`.

### Q25. What is a Higher-Order Function?
* **Ans:** A function that accepts another function as an argument, or returns a function.

### Q26. What is a Callback function?
* **Ans:** A function passed as an argument to be executed after another function resolves.

### Q27. What is Callback Hell?
* **Ans:** Deeply nested callback structures expanding horizontally, making code unreadable.

### Q28. Difference between regular and arrow functions?
* **Ans:** Regular functions bind dynamic `this` context. Arrow functions resolve `this` lexically.

### Q29. Predict output:
```javascript
const obj = {
    x: 5,
    show: () => console.log(this.x)
};
obj.show();
```
* **Ans:** `undefined`. Lexical `this` points to the outer global environment scope.

### Q30. Can arrow functions act as Constructor functions?
* **Ans:** No. Calling them with `new` throws a TypeError because they lack a prototype object.


---


# SECTION 4: COLLECTIONS & MODERN JS

### Q31. Difference between `map()` and `forEach()`?
* **Ans:** `map()` returns a new transformed array. `forEach()` iterates over elements without returning a value.

### Q32. Difference between `slice()` and `splice()`?
* **Ans:** `slice()` returns a shallow copy section without mutating the original. `splice()` mutates the original array to insert/delete.

### Q33. What does `reduce()` do?
* **Ans:** Runs a reducer accumulator callback over elements, reducing the array to a single value.

### Q34. Predict output:
```javascript
let arr = [1, 2];
let copy = [...arr];
copy.push(3);
console.log(arr);
```
* **Ans:** `[1, 2]`. (Spread operator creates a new shallow copy of array).

### Q35. What is Destructuring?
* **Ans:** ES6 syntax unpacking array values or object properties directly into distinct variables.

### Q36. How do you rename keys during object destructuring?
* **Ans:** Using the colon mapping: `const { oldKey: newName } = object`.

### Q37. What is the Rest operator?
* **Ans:** Syntax `...` gathering remaining arguments into a single array parameter inside functions.

### Q38. What is the Spread operator?
* **Ans:** Syntax `...` expanding arrays or objects into individual elements.

### Q39. What is Optional Chaining `?.`?
* **Ans:** Safe operator returning `undefined` if intermediate property links are nullish, preventing program crashes.

### Q40. What is Nullish Coalescing `??`?
* **Ans:** Comparison operator returning fallback values strictly only when variable is `null` or `undefined`.


---


# SECTION 5: OOP, PROTOTYPES & CLASSES

### Q41. What is Prototype in JavaScript?
* **Ans:** A template object property present on objects from which they inherit methods and variables.

### Q42. Explain Prototype Chain.
* **Ans:** Sequential lookup path JS traverses to resolve properties, checking local object first, then its prototype parent, up to `null`.

### Q43. What is `__proto__`?
* **Ans:** The internal property pointer referencing an object instance direct parent prototype.

### Q44. Predict output:
```javascript
class Parent {}
class Child extends Parent {}
let c = new Child();
console.log(c instanceof Parent);
```
* **Ans:** `true`.

### Q45. Explain `super()` in classes.
* **Ans:** A function invoking the parent constructor inside subclass constructors, required before accessing `this`.

### Q46. Difference between Constructor Function and Class?
* **Ans:** Classes are syntactic sugar over prototype chains and cannot be invoked without the `new` keyword.

### Q47. What is `instanceof` check?
* **Ans:** Checks if a constructor's prototype exists inside an object's prototype chain.

### Q48. What are static methods in a class?
* **Ans:** Methods bound directly to the class itself, called using class name rather than instances.

### Q49. Predict output:
```javascript
class Tool {
    static run() { return 1; }
}
let t = new Tool();
console.log(t.run);
```
**Ans:** `undefined`. Static methods do not exist on object instances.

### Q50. How do you create an object with no prototype?
* **Ans:** Using `Object.create(null)`.


---


# SECTION 6: DOM & EVENTS

### Q51. What is the DOM?
* **Ans:** Document Object Model, an API tree representation of page HTML elements.

### Q52. Difference between Node and Element?
* **Ans:** Nodes represent any tree elements (comments, text). Elements represent actual HTML tags.

### Q53. Difference between `getElementById` and `querySelector`?
* **Ans:** `getElementById` matches elements strictly by ID name. `querySelector` matches elements using standard CSS selectors.

### Q54. What does `querySelectorAll` return?
* **Ans:** A static, array-like `NodeList` containing all matched elements.

### Q55. Difference between `textContent` and `innerHTML`?
* **Ans:** `textContent` reads/writes plain text content. `innerHTML` parses input string tags, rendering actual HTML formats.

### Q56. What is Event Bubbling?
* **Ans:** The default event flow propagating events from target child upward to parents.

### Q57. What is Event Capturing?
* **Ans:** The event flow propagating downwards from parent container elements to the target child.

### Q58. What is Event Delegation?
* **Ans:** Attaching a single listener to a parent to manage event callbacks for multiple children using event bubbling.

### Q59. What is the role of `e.stopPropagation()`?
* **Ans:** Halts event bubbling to parent containers in the DOM hierarchy.

### Q60. What is the role of `e.preventDefault()`?
* **Ans:** Cancels default browser behaviors (such as page reload on form submit).


---


# SECTION 7: ERROR HANDLING

### Q61. What are the three main types of errors?
* **Ans:** Syntax Error (grammar rules violate), Runtime Error (execution crashes), and Logical Error (incorrect outputs).

### Q62. What is try-catch block?
* **Ans:** Exception handling block. Code is tested inside `try`, and caught inside `catch` if a crash occurs.

### Q63. What are the primary properties of the Error object?
* **Ans:** `name` (the error type) and `message` (details of the error).

### Q64. When does the `finally` block execute?
* **Ans:** Unconditionally after try/catch exits, regardless of execution outcome.

### Q65. What does the `throw` statement do?
* **Ans:** Manually triggers user-defined custom exceptions in the execution thread.

### Q66. Predict output:
```javascript
try {
    throw "Error";
} catch(e) {
    console.log(typeof e);
}
```
* **Ans:** `"string"`. JS allows throwing any value type.

### Q67. How do you create custom errors?
* **Ans:** By creating a class extending the built-in `Error` class and setting a custom name.

### Q68. Does division by zero throw a runtime error in JavaScript?
* **Ans:** No, it returns `Infinity`.

### Q69. Predict output:
```javascript
try {
    console.log("try");
    throw new Error();
} finally {
    console.log("finally");
}
```
* **Ans:** Prints "try" then "finally", then throws the uncaught error.

### Q70. What is standard Error type for re-assignment to const?
* **Ans:** `TypeError`.


---


# SECTION 8: ASYNCHRONOUS JS & RUNTIME

### Q71. Is JavaScript multi-threaded?
* **Ans:** No, JS engine is strictly single-threaded, executing one instruction at a time on the Call Stack.

### Q72. How are asynchronous operations executed?
* **Ans:** Runtimes offload async calls to Web APIs, and the Event Loop pushes completed queue callbacks to the Call Stack.

### Q73. What is the Event Loop?
* **Ans:** Continuous runtime monitor checking if the Call Stack is empty to shift pending callback queue tasks.

### Q74. Difference between Microtask Queue and Macrotask Queue?
* **Ans:** Microtask Queue holds high-priority callbacks (Promises). Macrotask Queue holds lower priority callbacks (setTimeout).

### Q75. What is a Promise?
* **Ans:** An object representing the eventual completion status of asynchronous operations.

### Q76. What are the three states of a Promise?
* **Ans:** Pending, Fulfilled (Resolved), and Rejected.

### Q77. What does `async` keyword do?
* **Ans:** Forces a function to return a Promise.

### Q78. What does `await` keyword do?
* **Ans:** Pauses async function execution thread until target Promise resolves or rejects.

### Q79. Difference between `Promise.all` and `Promise.allSettled`?
* **Ans:** `Promise.all` fails fast on any single rejection. `Promise.allSettled` waits for all to settle and returns statuses.

### Q80. Difference between `Promise.race` and `Promise.any`?
* **Ans:** `Promise.race` yields the first settled promise. `Promise.any` yields the first successfully resolved promise.


---


# SECTION 9: FETCH API & JSON

### Q81. Why doesn't `fetch()` reject on 404 status?
* **Ans:** Because the network call completed. Fetch only rejects on network failures.

### Q82. How do you check for status errors in fetch?
* **Ans:** By checking if `response.ok` is false and throwing a manual error.

### Q83. What does `response.json()` return?
* **Ans:** A Promise that resolves to the parsed response body object.

### Q84. What is JSON?
* **Ans:** JavaScript Object Notation, a lightweight text-based data exchange format.

### Q85. Difference between `JSON.stringify()` and `JSON.parse()`?
* **Ans:** `stringify` converts objects to JSON strings; `parse` converts JSON strings back to objects.

### Q86. Predict output:
```javascript
console.log(JSON.parse("true"));
```
* **Ans:** `true` (boolean type).

### Q87. Predict output:
```javascript
let x = { a: undefined };
console.log(JSON.stringify(x));
```
* **Ans:** `"{}"`. Undefined variables are omitted.

### Q88. What is the default HTTP method of `fetch()`?
* **Ans:** `GET`.

### Q89. How do you pass headers in Fetch?
* **Ans:** Inside the configurations object: `headers: { "Content-Type": "application/json" }`.

### Q90. What is a request body payload?
* **Ans:** The primary JSON string data sent during POST requests to save resources.


---


# SECTION 10: ADVANCED JS & STORAGE

### Q91. Difference between `localStorage` and `sessionStorage`?
* **Ans:** `localStorage` persists indefinitely; `sessionStorage` clears when the browser tab is closed.

### Q92. What are Cookies?
* **Ans:** Small text files (max 4KB) sent automatically to the server with every HTTP network request.

### Q93. What is Currying?
* **Ans:** Splitting a multi-argument function `f(a, b)` to chained calls `f(a)(b)`.

### Q94. What is Memoization?
* **Ans:** Optimizing performance by caching computed outputs mapped to inputs.

### Q95. Difference between Debouncing and Throttling?
* **Ans:** Debouncing delays execution until a pause in inputs. Throttling limits calls to regular time intervals.

### Q96. What is a Pure Function?
* **Ans:** Same input always yields same output, and execution produces zero side effects.

### Q97. What is Immutability?
* **Ans:** Data states are never mutated in-place; modifications yield fresh copies.

### Q98. What is the Call Stack?
* **Ans:** Stack area managing execution contexts frames.

### Q99. What is the Memory Heap?
* **Ans:** Large unstructured memory allocation area for objects/arrays.

### Q100. How do ES Modules run in HTML script tags?
* **Ans:** By adding the attribute declaration `type="module"`.
