# Unit 22: JavaScript Interview Mastery

Welcome to Unit 22! Yeh aapka final interview-focused revision sheet hai jo complete syllabus ke crucial core concepts, comparisons aur output questions ko ek jagah summarize karta hai.


# PART 1: CORE CONCEPTS & COMPARISONS

## 1. var vs let vs const

| Feature | var | let | const |
| :--- | :--- | :--- | :--- |
| **Scope** | Function Scoped | Block Scoped | Block Scoped |
| **Hoisting** | Hoisted with `undefined` | Hoisted but in TDZ | Hoisted but in TDZ |
| **Re-declaration** | Allowed | Not Allowed | Not Allowed |
| **Re-assignment** | Allowed | Allowed | Not Allowed |

Hinglish explanation:
`var` purana scope system hai jo block `{}` ko follow nahi karta aur window pollute karta hai. `let` aur `const` modern, secure blocks scope rules follow karte hain.

Example:
```javascript
{
    var a = 1;
    let b = 2;
}
console.log(a); // 1
// console.log(b); // ReferenceError
```

Interview Point:
`const` is not fully immutable. If storing an object, you can mutate its properties inside it.

Common Mistake:
Trying to re-declare variables using `let` in the same scope block.


---


## 2. == vs ===

* **`==` (Abstract Equality):** Performs type coercion (converts types to match before comparing).
* **`===` (Strict Equality):** Compares both value AND type without coercion.

Hinglish explanation:
Double equals internally type casting run karta hai (jaise `"5" == 5` ko true check karega). Triple equals strictly type match check karta hai.

Example:
```javascript
console.log("5" == 5);  // true
console.log("5" === 5); // false
```

Interview Point:
Always default to `===` to prevent silent coercion bugs.

Common Mistake:
Using `==` when verifying input fields string values against numeric keys.


---


## 3. null vs undefined

* **`undefined`:** Variable declared but has not been assigned a value yet (default JS state).
* **`null`:** An intentional assignment representing the complete absence of value.

Hinglish explanation:
`undefined` matlab system placeholder variable empty chhod chuka hai; `null` matlab developer ne manually value empty mark ki hai.

Example:
```javascript
let x; // undefined
let y = null; // null
console.log(typeof x, typeof y); // undefined "object"
```

Interview Point:
`typeof null` returns `"object"` (historical JS bug).

Common Mistake:
Comparing `null === undefined` yields false due to strictly different types.


---


## 4. NaN (Not a Number)

What is it?
A special value representing an invalid numeric operation outcome (e.g. `"abc" * 5`).

Hinglish explanation:
Invalid mathematical operations ka outcome string check. `typeof NaN` returns `"number"`.

Example:
```javascript
console.log("abc" * 5); // NaN
console.log(isNaN("abc")); // true
```


---


## 5. Closure & Hoisting

* **Closure:** Functions retain access to their outer lexical scopes even after parent context pops off the execution stack.
* **Hoisting:** JS compiler moves variable/function declarations to the top of their scope memory before execution.

Example Closure:
```javascript
function multiplier(factor) {
    return (num) => num * factor;
}
const double = multiplier(2);
console.log(double(5)); // 10
```

Example Hoisting:
```javascript
console.log(hoistVar); // undefined
var hoistVar = 10;
```


---


## 6. TDZ (Temporal Dead Zone)

What is it?
The execution block duration from the start of the block scope until the variable declaration is initialized. Accessing `let`/`const` inside this zone throws a ReferenceError.

Example:
```javascript
// console.log(temp); // ReferenceError (Inside TDZ)
let temp = 5;
```


---


## 7. Scope & this

* **Scope:** The boundary context defining variable accessibility (Global, Block, Function scope).
* **`this`:** Dynamic execution pointer pointing to the current invocation owner object.

Example `this`:
```javascript
const userObj = {
    name: "Ravi",
    greet() { console.log(this.name); }
};
userObj.greet(); // Ravi
```


---


## 8. Regular vs Arrow Functions

| Feature | Regular Function | Arrow Function |
| :--- | :--- | :--- |
| **`this` Binding** | Dynamic (depends on call context) | Lexical (inherits from parent block) |
| **Constructor** | Can be called with `new` | Throws TypeError with `new` |
| **arguments object** | Available | Not available |

Hinglish explanation:
Regular functions dynamic bind parameters use karte hain. Arrow functions `this` bind nahi karte, parent lexical context use karte hain.

Example:
```javascript
const obj = {
    val: 99,
    regular() { console.log(this.val); },
    arrow: () => console.log(this.val)
};
obj.regular(); // 99
obj.arrow(); // undefined (or window global scope value)
```


---


## 9. Map, Filter & Reduce

* **`map`:** Creates new array by executing callback on every element.
* **`filter`:** Filters elements returning true for verification logic.
* **`reduce`:** Aggregates array elements to a single final value output.

Example:
```javascript
let nums = [1, 2, 3];
let doubled = nums.map(x => x * 2);
let filtered = nums.filter(x => x > 1);
let sum = nums.reduce((acc, curr) => acc + curr, 0);
```


---


## 10. Promises vs async/await

* **Promises:** Object mapping async operations status via `.then().catch()`.
* **async/await:** Flat syntax wrapper mapping promise chains as readable synchronous code lines using `try/catch`.


---


## 11. Debounce vs Throttle

* **Debounce:** Waits for user interaction pause (silence) before triggering the callback.
* **Throttle:** Restricts execution frequency to regular intervals during continuous interaction.


---


## 12. Shallow Copy vs Deep Copy

* **Shallow:** Copies first level key properties (spread `...` or `Object.assign()`).
* **Deep:** Recursively duplicates all nested levels completely (`structuredClone()` or `JSON.parse(JSON.stringify())`).


---


# PART 2: CORE MECHANISMS REVISION

## 1. Prototype & Inheritance

Example:
```javascript
function Dog(name) { this.name = name; }
Dog.prototype.bark = function() { return `${this.name} barks`; };

let d = new Dog("Husky");
console.log(d.bark()); // Husky barks
```


---


## 2. Event Bubbling & Delegation

Example:
```javascript
// Delegation: single listener on parent
document.getElementById("parent").addEventListener("click", (e) => {
    if (e.target.tagName === "LI") {
        console.log("Clicked:", e.target.textContent);
    }
});
```


---


# PART 3: 30 CORE INTERVIEW QUESTIONS & ANSWERS

### Q1. Difference between `var`, `let`, and `const`?
**Ans:** `var` is function-scoped, hoisted as `undefined`, and allows re-declaration. `let` and `const` are block-scoped, hoisted into the Temporal Dead Zone (TDZ), and reject re-declaration. `const` also rejects re-assignment.

### Q2. What is Temporal Dead Zone (TDZ)?
**Ans:** The period from the entry of a block scope until the point where a variable declared with `let` or `const` is initialized. Accessing variables in this zone throws a ReferenceError.

### Q3. How does `this` behave in arrow functions?
**Ans:** Arrow functions do not bind their own `this`. They resolve the `this` reference lexically by inheriting it from their enclosing parent context.

### Q4. Difference between `==` and `===`?
**Ans:** `==` compares values after performing implicit type conversion (coercion). `===` compares values and types directly without type coercion.

### Q5. Difference between `null` and `undefined`?
**Ans:** `undefined` is the default value assigned to variables that have been declared but not initialized. `null` is an intentional assignment representing an empty value reference.

### Q6. What is a Closure?
**Ans:** A function that retains access to its lexical parent scope variables even after the parent function has finished executing and popped off the call stack.

### Q7. Difference between map, filter, and reduce?
**Ans:** `map` transforms each array element to create a new array. `filter` creates a new array with elements that pass a boolean test. `reduce` aggregates all array elements into a single accumulator value.

### Q8. What is the difference between event bubbling and event capturing?
**Ans:** Event bubbling propagates the event upward from the target child to the parents (default). Event capturing trickles the event downward from the parent nodes to the target child.

### Q9. What is Event Delegation?
**Ans:** The performance pattern of placing a single event listener on a parent element to handle events for all children (existing and future dynamic ones) utilizing event bubbling.

### Q10. Predict output of the following hoisting code:
```javascript
console.log(x);
var x = 10;
```
**Ans:** `undefined`. The declaration `var x` is hoisted and initialized to `undefined`, while the value assignment `x = 10` remains at its original line.

### Q11. Predict output of the following TDZ code:
```javascript
console.log(y);
let y = 10;
```
**Ans:** `ReferenceError: Cannot access 'y' before initialization` (due to the Temporal Dead Zone).

### Q12. Predict output of the following Closure code:
```javascript
function create() {
    let list = [];
    for (var i = 0; i < 3; i++) {
        list.push(() => console.log(i));
    }
    return list;
}
create()[0]();
```
**Ans:** `3`. (Because `i` is declared with `var`, it is function-scoped and ends with value `3`. All closure references point to the same variable `i`).

### Q13. Predict output of the following `this` scope code:
```javascript
const profile = {
    username: "Rohan",
    show: () => console.log(this.username)
};
profile.show();
```
**Ans:** `undefined`. (Arrow function inherits lexical `this` from outer global window context).

### Q14. Predict output of the following Event Loop code:
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
(Because Promise microtask callbacks have higher execution priority than setTimeout macrotasks).

### Q15. Predict output:
```javascript
console.log(typeof NaN);
```
**Ans:** `"number"`.

### Q16. Difference between Shallow Copy and Deep Copy?
**Ans:** Shallow copy duplicates only the top-level property references. Deep copy duplicates all nested structural levels completely, creating independent memory structures.

### Q17. Difference between `event.target` and `event.currentTarget`?
**Ans:** `e.target` is the actual element that triggered the event (the click origin). `e.currentTarget` is the element to which the active event listener is attached.

### Q18. Predict output:
```javascript
let obj1 = { a: 1 };
let obj2 = { a: 1 };
console.log(obj1 === obj2);
```
**Ans:** `false`. (Objects are compared by their memory reference addresses, which are different for separate objects).

### Q19. Predict output:
```javascript
let x = [1, 2];
let y = [...x];
y.push(3);
console.log(x.length);
```
**Ans:** `2`. (Spread operator creates a shallow copy of the array; modifications on the copy do not affect the original).

### Q20. Explain `structuredClone()`.
**Ans:** A modern built-in browser API method used to create deep copies of object trees safely.

### Q21. Predict output:
```javascript
console.log(add(2, 3));
function add(a, b) { return a + b; }
```
**Ans:** `5`. (Standard function declarations are fully hoisted).

### Q22. Predict output:
```javascript
console.log(multiply(2, 3));
var multiply = function(a, b) { return a * b; }
```
**Ans:** `TypeError: multiply is not a function`. (The variable declaration is hoisted as `undefined`, and invoking `undefined` as a function throws TypeError).

### Q23. What is the default prototype link of standard objects?
**Ans:** `Object.prototype`, which eventually links to `null`.

### Q24. How do you create an object without a prototype?
**Ans:** By using `Object.create(null)`.

### Q25. Predict output:
```javascript
console.log([] == ![]);
```
**Ans:** `true`. (Boolean check conversions evaluate array reference comparison coercion to true).

### Q26. Predict output:
```javascript
console.log(1 + "2" + 3);
```
**Ans:** `"123"`. (Coerces additions to string concatenation).

### Q27. Predict output:
```javascript
console.log(1 + +"2" + 3);
```
**Ans:** `6`. (The unary plus `+"2"` converts the string to number `2`, resulting in `1 + 2 + 3 = 6`).

### Q28. What is the scope of variables declared inside loops using `let`?
**Ans:** A separate block scope is created for every loop iteration.

### Q29. Difference between Debouncing and Throttling?
**Ans:** Debouncing triggers the function only after a certain period of inactivity (silence delay). Throttling limits the execution frequency, running the function at most once every specified time interval.

### Q30. Why is `response.ok` used in Fetch API check?
**Ans:** Because `fetch()` does not automatically reject server status errors (404/500). `response.ok` checks if the status is within the success range (200-299).


---


# PART 4: FINAL INTERVIEW REVISION SHEET

## Core Execution Rules
* **Priority Rule:** Microtasks (Promises) > Macrotasks (setTimeout).
* **Hoisting Rule:** `var` is hoisted as `undefined`; `let`/`const` are hoisted in TDZ (throws ReferenceError); Functions are fully hoisted.
* **Equality Rule:** `==` performs type coercion; `===` compares values and types directly.
* **Arrow Rule:** Arrow functions lack their own `this` and inherit `this` lexically from their parent scope.
* **Object Copy Rule:** Spread creates shallow copies; Deep copy requires `JSON.stringify/parse` or `structuredClone()`.
* **DOM Rule:** `e.stopPropagation()` stops event bubbling upward; `e.preventDefault()` cancels browser default actions.
