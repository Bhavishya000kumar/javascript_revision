# Unit 10: Advanced Functions & Scope in JavaScript

Welcome to Unit 10! Iss chapter mein hum JavaScript ke advanced concepts jaise Execution Context, Hoisting, TDZ, Closures, aur this context ko simple Hinglish mein dry runs ke sath cover karenge.


# PART 1: SCOPE & EXECUTION MECHANISM

JavaScript engines variable lookup aur instructions execution ko manage karne ke liye unique mechanisms use karte hain.


## 1. Lexical Scope

What is it?
Lexical Scope (Static Scope) ka matlab hai ki kisi variable ka access area code mein uski physical declaration position se decide hota hai. Inner functions apne surrounding parent scope ke variables ko access kar sakte hain.

Why is it important?
Yeh JS compiler ko execution se pehle variable locations map karne mein help karta hai, aur code encapsulation ensure karta hai.

How does it work?
Inner function creation state compiler parent reference maps register karta hai. Outer environment values inner body variables se accessible hoti hain.

Simple example
```javascript
let globalName = "Ravi";

function outer() {
    let outerVar = "Outer Data";
    function inner() {
        console.log(globalName); // Access global
        console.log(outerVar);   // Access lexical parent variable
    }
    inner();
}
outer();
```

Output
Ravi
Outer Data


---


## 2. Scope Chain

What is it?
Scope Chain lookup mechanism hai. Jab JavaScript ko local scope mein variable nahi milta, toh woh uske parent scope (lexical outer) mein jaata hai, aur check upar global scope tak chalta hai.

How does it work?
Local Scope $\rightarrow$ Parent Scope $\rightarrow$ Global Scope. Agar kahin nahi mila, toh `ReferenceError` exception milti hai.

Simple example
```javascript
let x = 10;

function parent() {
    let y = 20;
    function child() {
        let z = 30;
        console.log(x + y + z); // y starts scope lookup, matches parent
    }
    child();
}
parent();
```

Output
60


---


## 3. Execution Context & Call Stack

What is it?
* **Execution Context:** Yeh ek container hota hai jahan JavaScript code compile aur execute hota hai. (Pehle Global Execution Context banta hai, aur har function call par naya Function Execution Context banta hai).
* **Call Stack:** Ek storage structure (LIFO - Last In First Out) jo active execution contexts ke stack records aur process lines track karta hai.

How does it work?
1. Execution Context has 2 phases:
   - **Creation/Memory Allocation Phase:** Variables register `undefined` state, functions body definitions are stored.
   - **Execution Phase:** Code executes line by line, variables values are assigned.
2. Call Stack pops execution context as soon as functions hit return statement.

Dry run check:
```javascript
function one() {
    two();
}
function two() {
    console.log("Two");
}
one();
```
Call Stack stages:
- Global Execution Context pushed.
- one() called $\rightarrow$ one() context pushed.
- two() called $\rightarrow$ two() context pushed.
- two() ends $\rightarrow$ two() popped.
- one() ends $\rightarrow$ one() popped.
- Global execution complete.


---


# PART 2: HOISTING & TEMPORAL DEAD ZONE

## 1. Hoisting

What is it?
Hoisting JavaScript execution behavior hai jahan variables allocation aur functions declarations memory parameters phase mein physical placement line se pehle register ho jate hain.

How does it work for different types?
* **var:** Hoist hokar value default `undefined` register karta hai. (No error if accessed early).
* **let & const:** Hoist hote hain, lekin inki access line restricted rehti hai jise TDZ kehte hain. Accessing early throws ReferenceError.
* **Function Declarations:** Poori function body register ho jati hai. (Can be called before creation safely).

Simple example
```javascript
console.log(a); // var is hoisted as undefined
var a = 5;

// sayHi(); // function is fully hoisted, works
function sayHi() {
    console.log("Hi");
}
```

Output
undefined


---


## 2. Temporal Dead Zone (TDZ)

What is it?
let aur const variables ke declare hone se pehle ka physical area (dead zone) jisme unhe access nahi kiya ja sakta, use Temporal Dead Zone kehte hain.

Whylet/const behave differently from var?
`var` register hote hi default `undefined` initialize ho jata hai. `let` aur const memory allocate hone par uninitialized state mein rehte hain aur execution declarations parameters match lines ke baad hi active hoten hain.

Simple example
```javascript
// TDZ starts here
// console.log(b); // ReferenceError: Cannot access 'b' before initialization
let b = 10; // TDZ ends here
console.log(b);
```

Output
10


---


# PART 3: CLOSURES & THIS CONTEXT

## 1. Closures

What is it?
Closure function aur uske lexical environment ka combination hota hai. Jab inner function return ho jata hai, tab bhi woh apne outer parameters variable data parameters scope memory memory blocks lock values retain karta hai.

Simple concept example
```javascript
function makeCounter() {
    let count = 0;
    return function() {
        count++;
        return count;
    };
}
let counter = makeCounter();
console.log(counter());
console.log(counter());
```

Output
1
2

Practical Real-world Example (Secure Variable storage)
```javascript
function secureAccount(initialBal) {
    let balance = initialBal; // Hidden state variable
    return {
        deposit: function(amount) {
            balance += amount;
            return balance;
        },
        getBal: () => balance
    };
}
let myAcc = secureAccount(100);
console.log(myAcc.deposit(50));
console.log(myAcc.getBal());
```

Output
150
150


---


## 2. Higher-Order Functions & Callbacks

* **Callback Function:** Woh function jo doosre function ko input parameter pass coordinates.
* **Higher-Order Function:** Receiving wrapper function.

Simple example
```javascript
const numbers = [1, 2, 3];
const double = x => x * 2;
// map is HOF, double is Callback
console.log(numbers.map(double));
```

Output
`[2, 4, 6]`


---


## 3. The `this` Keyword

What is it?
`this` reference key pointer variable hota hai jo check target run contexts object pointers hold data parameter sets.

Basic Behavior
* **Global Scope:** global window/global node object reference hold variables.
* **Object Method context:** points to parent owner object context.
* **Arrow Functions:** arrow functions do not have their own `this`. They inherit this lexically from their parent scope.

Simple example
```javascript
let userProfile = {
    username: "Rahul",
    showName: function() {
        console.log(this.username); // points to userProfile object
    }
};
userProfile.showName();
```

Output
Rahul


---


# 🧠 QUICK REVISION SUMMARY

* **Lexical Scope & Chain:** Scope is physical location based, Scope chain checks outer environments up to global object.
* **Execution Context:** Memory phase (allocates, sets var as undefined, functions fully) $\rightarrow$ Exec phase (runs lines).
* **Hoisting:** var initialized as undefined; let/const uninitialized (causes TDZ); function declarations fully hoisted.
* **Closures:** Inner functions remember parent scope variables even after parent function has completed execution.
* **this keyword:** Points to owner objects inside standard functions, maps lexically in arrow functions.


---


# 📝 IMPORTANT DEFINITIONS (INTERVIEW-READY)

1. **Temporal Dead Zone:** The period between let/const variable binding allocation and actual physical code line initialization.
2. **Closure:** An inner function that retains lexical environment scope memory references even after outer parent block execution finishes.
3. **Execution Context:** Environment wrappers encapsulating memory allocation phases and execution evaluation steps for executing JavaScript code.
4. **Static Scoping:** Evaluating variable bindings using declaration coordinates in code structure files (Lexical scoping).
5. **HOF (Higher Order Function):** Functions designed to intake callback functions or output new dynamic functions.


---


# 💬 IMPORTANT INTERVIEW QUESTIONS & ANSWERS

### Q1. What is the difference between Scope and Scope Chain?
**Ans:** Scope defines variable visibility boundaries. Scope Chain is the link reference lookup paths linking nesting blocks up to the global scope.

### Q2. Explain Closures with a simple technical definition.
**Ans:** Closure is the reference lock matching inner functions to parent variables scope environments, allowing inner function to remember variable values even after parent scope closes.

### Q3. Predict output:
```javascript
console.log(val);
var val = 10;
```
**Ans:** `undefined`. Variable `val` is hoisted and initialized with default `undefined`.

### Q4. Predict output:
```javascript
console.log(num);
let num = 20;
```
**Ans:** ReferenceError. Early accesses to `let` variables trigger Temporal Dead Zone constraints.

### Q5. What is temporal dead zone (TDZ)?
**Ans:** The physical area in scope where let/const variables exist in memory but cannot be accessed before their declaration line is executed.

### Q6. Difference between var, let, and const in scoping?
**Ans:** `var` is function-scoped and hoisted with default `undefined`. `let` and `const` are block-scoped and hoisted without initialization (restricted by TDZ).

### Q7. What does the Call Stack track?
**Ans:** It tracks active execution contexts in a Last In First Out (LIFO) stack order to manage program execution threads.

### Q8. Predict output:
```javascript
let x = 10;
function test() {
    console.log(x);
}
test();
```
**Ans:** `10`. Lexical scope lookup links inner function to the outer variable `x`.

### Q9. What are Higher-Order Functions?
**Ans:** Functions that take another function as an argument, or return a function as a result.

### Q10. Predict output:
```javascript
const profile = {
    username: "Ravi",
    greet: () => {
        console.log(this.username);
    }
};
profile.greet();
```
**Ans:** `undefined`. Arrow functions inherit `this` lexically. Since `profile` object does not have its own execution scope, `this` refers to the global window context where `username` is undefined.

### Q11. Can we call function declarations before writing them in code?
**Ans:** Yes. Function declarations are hoisted completely with their function body.

### Q12. Predict output of function expressions accessed early.
**Ans:** TypeError (if declared with `var`, because it is hoisted as undefined) or ReferenceError (if declared with `let`/`const`, due to TDZ).

### Q13. How do closures prevent memory cleanups of scope variables?
**Ans:** Outer variables referenced by inner functions are locked in memory as long as the inner closure function exists.

### Q14. Predict output:
```javascript
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
```
**Ans:** `3 3 3`. `var` is function-scoped. By the time `setTimeout` callbacks run, loop execution has completed and the shared variable `i` is 3.

### Q15. Predict output of above loop using let instead of var:
**Ans:** `0 1 2`. `let` is block-scoped, creating a new variable binding for each loop iteration.

### Q16. Predict output:
```javascript
function parent() {
    let parentVar = 100;
    return () => parentVar;
}
let getVal = parent();
console.log(getVal());
```
**Ans:** `100`. Returns parentVar values via closure.

### Q17. What is lexical scoping?
**Ans:** Scoping mechanism where variable accessibility is determined by their physical location in the nested structure of written source code.

### Q18. Predict output:
```javascript
let x = 10;
function change() {
    x = 20;
}
change();
console.log(x);
```
**Ans:** `20`. The variable is updated globally since it was not re-declared in the local scope.

### Q19. Does arrow function bind its own execution context this?
**Ans:** No. It inherits `this` context from its enclosing lexical parent scope.

### Q20. What is global execution context default creation limit?
**Ans:** Only 1 Global Execution Context is created per script execution.


---


# 💻 PRACTICE QUESTIONS

## Question 1: Check Temporal Dead Zone
* **Question:** Write code demonstrating let/const behaviour inside TDZ.
* **Solution:**
  ```javascript
  function testTDZ() {
      try {
          console.log(x); // accessing inside TDZ
      } catch (err) {
          console.log("Error caught: " + err.message);
      }
      let x = 10;
  }
  testTDZ();
  ```
* **Output:** Error caught: Cannot access 'x' before initialization
* **Explanation:** Checks let variable before declaration line, throwing a ReferenceError caught by the try-catch block.

## Question 2: Closure counter factory
* **Question:** Create a counter helper function using closures to secure internal counter variables.
* **Solution:**
  ```javascript
  function createCounter() {
      let val = 0;
      return () => {
          val++;
          return val;
      };
  }
  let countAction = createCounter();
  console.log(countAction()); // 1
  console.log(countAction()); // 2
  ```
* **Explanation:** Internal count state is hidden from outside access but can be read/updated by the returned arrow function closure.

## Question 3: Dynamic this scoping context
* **Question:** Call normal object methods displaying this context.
* **Solution:**
  ```javascript
  const carObj = {
      brand: "Toyota",
      showBrand: function() {
          return this.brand;
      }
  };
  console.log(carObj.showBrand()); // Toyota
  ```
* **Explanation:** Since `showBrand` is invoked as a method of `carObj`, `this` binds to the owner object `carObj`.
