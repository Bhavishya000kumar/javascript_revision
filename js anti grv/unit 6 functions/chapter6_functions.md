# Unit 6: Functions in JavaScript

Welcome to Unit 6! Iss guide mein hum functions ke concepts ko zero level se advanced level tak simple Hinglish mein padhenge. Har concept ko simple examples ke sath cover kiya gaya hai.


# PART 1: BASIC FUNCTIONS AND DECLARATION

Functions JavaScript ke building blocks hain jo code reuse karne ke kaam aate hain.


## 1. Function Kya Hai?

What is it?
Function code ka ek organized block hota hai jo ek specific task perform karta hai. 

Why functions are needed?
Agar humein ek hi task baar-baar alag-alag values ke sath chalana ho, toh hum use baar-baar nahi likhte. Ek function bana kar use re-use karte hain (DRY Principle - Don't Repeat Yourself). Isse code clean and readable rehta hai.

How does it work?
Hum function ke andar steps likh dete hain. Jab tak hum use target call nahi karenge, tab tak function ka code execute nahi hota.

Syntax of Function Declaration
```javascript
function functionName(parameters) {
    // code to run
}
```

Syntax of Function Calling (Invocation)
```javascript
functionName(arguments);
```

Simple example
```javascript
function sayHello() {
    console.log("Hello Friend!");
}

sayHello(); // Calling the function
```

Output
Hello Friend!

Step-by-step explanation
Pehle function compiler check syntax structure matching sayHello name. Phir calling statements `sayHello()` execution parameter triggers the console logs.


---


## 2. Parameters vs Arguments

What is it?
* **Parameters:** Variable list jo functions definitions create blocks standard placeholders ki tarah parameters handle karte hain.
* **Arguments:** Actual values jo hum function ko call karte waqt pass karte hain.

Why is it used?
Functions ko dynamic inputs pass karne ke liye parameters aur arguments ka setup rules apply hota hai.

Example
```javascript
function greetUser(name) { // 'name' here is a Parameter
    console.log("Welcome " + name);
}

greetUser("Rahul"); // '"Rahul"' here is an Argument
greetUser("Amit");  // '"Amit"' is another Argument
```

Output
Welcome Rahul
Welcome Amit


---


## 3. The return Keyword

What is it?
return keyword ka use function se dynamic calculations result data outputs return karne ke liye aur program controls back parent program settings pass karne ke liye hota hai.

Why is it needed?
Agar function sirf calculations values run processing screen displays, we can't save it. return outputs parameters variables checks.

How does it work?
Jab program execution line hits `return value;`, functions immediately exit halts and throws calculations outputs back to standard caller.

Simple example
```javascript
function getSum(a, b) {
    return a + b;
}

let result = getSum(10, 20);
console.log("The sum is: " + result);
```

Output
The sum is: 30

Common mistakes
Return keyword code lines ke niche additional variables code lines likhna.
```javascript
// Galti:
function add(a, b) {
    return a + b;
    console.log("This will never run!"); // Return ke baad ka code unreachable ho jata hai.
}
```


---


# PART 2: FUNCTION EXPRESSIONS & ANONYMOUS FUNCTIONS

## 1. Function Expressions

What is it?
Jab hum kisi function ko normal variable block expression assign declarations list coordinates variables, use function expression kehte hain.

Why is it needed?
Dynamic values functions, passing expressions modules code cleaner scopes.

Syntax
```javascript
let myVar = function() {
    // code
};
```

Simple example
```javascript
let multiply = function(a, b) {
    return a * b;
};

let output = multiply(4, 5);
console.log(output);
```

Output
20


---


## 2. Anonymous Functions

What is it?
Anonymous function ka matlab hai: **bina naam wala function** (A function without a name).

Why is it used?
Inka use function expressions, arrays operations, callback functions pass properties criteria inline setups check parameters list.

Difference between Function Declaration and Function Expression
* **Function Declaration:** program blocks runs checks parsing hoisting checks (means you can call them even before writing them).
* **Function Expression:** variables values initialization checks are strictly checked. Program cannot access expressions before declarations.


---


# PART 3: ARROW FUNCTIONS

## 1. Arrow Functions (`() => {}`)

What is it?
Arrow functions, modern JavaScript (ES6) ka feature hai jo functions ko chota syntax representation provide karta hai.

Why is it used?
Code clean, single line values evaluations shortcut templates mapping arrays expressions.

Normal Function vs Arrow Function
* **Normal Function syntax:**
  ```javascript
  function add(a, b) {
      return a + b;
  }
  ```
* **Arrow Function syntax:**
  ```javascript
  const add = (a, b) => a + b;
  ```

Basic syntax Rules
* Single parameter contains single variables: parentheses () can be omitted.
* Single return statements expression: curly braces {} and `return` keyword can be omitted.

Simple examples
```javascript
// Example 1: No arguments
const showGreeting = () => "Hello Guest!";

// Example 2: With parameters
const squareVal = x => x * x;

console.log(showGreeting());
console.log(squareVal(5));
```

Output
Hello Guest!
25


---


# PART 4: MODERN PARAMETER SETUPS

## 1. Default Parameters

What is it?
Jab arguments variables values pass calling states block misses, functions automatically assigns default parameter structures values.

Why is it needed?
Undefined logic behavior check control functions calculations safe format run calculations.

Example
```javascript
function calcArea(length, width = 10) {
    return length * width;
}

console.log(calcArea(5));     // uses width = 10
console.log(calcArea(5, 20)); // overrides width = 20
```

Output
50
100


---


## 2. Rest Parameters (`...args`)

What is it?
Rest parameter functions arguments list values ko **single array** parameter convert structures dynamic inputs values sets array mapping.

Why is it needed?
Variable arguments dynamic parameters list run conditions arrays handle check setups.

Syntax
```javascript
function showNumbers(...nums) {
    console.log(nums); // nums handles as a real array
}
```

Example
```javascript
function sumAll(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}

console.log(sumAll(1, 2, 3));
console.log(sumAll(10, 20, 30, 40));
```

Output
6
100


---


## 3. Spread Basics

What is it?
Spread operators variables values arrays checks data variables copy arrays lists.

Syntax
`...arrayName`

Example
```javascript
let arr1 = [1, 2];
let arr2 = [...arr1, 3, 4];
console.log(arr2);
```

Output
[1, 2, 3, 4]


---


# PART 5: SCOPES IN JAVASCRIPT

Scope humein batata hai ki humare variables code ke kis part mein accessible hain aur kahan nahi.


## 1. Scopes Types

* **Global Scope:** Jo variable function ke bahar bante hain. Unhe poore file mein kahin se bhi print use kiya ja sakta hai.
* **Function Scope:** Jo variables `var` or `let` se function ke andar bante hain. Unhe function ke bahar use nahi kiya ja sakta.
* **Block Scope:** Jo variables `let` or `const` block container curly brace `{}` loops coordinates nested checks limits. Unhe us curly brace block ke bahar access nahi kar sakte.

Example Scopes Check
```javascript
let globalVar = "Global";

function checkScopes() {
    let functionVar = "Function-Scope";
    if (true) {
        let blockVar = "Block-Scope";
        console.log(globalVar);   // OK
        console.log(functionVar); // OK
        console.log(blockVar);    // OK
    }
    // console.log(blockVar); // Error: Not defined (Block scope)
}
checkScopes();
```


---


# PART 6: ADVANCED FUNCTIONS MODULES

## 1. Nested Functions

What is it?
Ek function ke andar doosra function define karna.

Why is it needed?
Parent variables child functions access security functions calculations setups.

Example
```javascript
function outerFunc() {
    let msg = "Hello from Outer!";
    function innerFunc() {
        console.log(msg); // Inner function can read msg (lexical scope)
    }
    innerFunc();
}
outerFunc();
```

Output
Hello from Outer!


---


## 2. Higher-Order Functions & Callbacks

Definitions
* **Callback Function:** Woh function jo kisi doosre function mein **as an argument** pass kiya jata hai.
* **Higher-Order Function (HOF):** Woh function jo dynamic callback function accepts properties checks or returns function as results.

Example
```javascript
// Callback function definition
function greetingMessage(name) {
    console.log("Happy Day: " + name);
}

// Higher-order function definition
function processUser(callbackFunc) {
    let name = "Ravi";
    callbackFunc(name); // executes target callback
}

processUser(greetingMessage);
```

Output
Happy Day: Ravi


---


# PART 7: PRACTICAL INTERVIEW PROBLEMS

## 1. Reverse a String
```javascript
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log(reverseString("hello")); // Output: olleh
```

---

## 2. Palindrome Checker
```javascript
function isPalindrome(str) {
    let rev = str.split("").reverse().join("");
    return str === rev;
}
console.log(isPalindrome("racecar")); // Output: true
```

---

## 3. Count Characters
```javascript
function countChars(str) {
    let count = 0;
    for (let char of str) {
        if (char !== " ") count++;
    }
    return count;
}
console.log(countChars("hello test")); // Output: 9
```

---

## 4. Anagram Basics
```javascript
function isAnagram(str1, str2) {
    let clean1 = str1.split("").sort().join("");
    let clean2 = str2.split("").sort().join("");
    return clean1 === clean2;
}
console.log(isAnagram("listen", "silent")); // Output: true
```

---

## 5. Element Frequency Basics
```javascript
function getCharFrequency(str) {
    let freq = {};
    for (let char of str) {
        freq[char] = (freq[char] ?? 0) + 1;
    }
    return freq;
}
console.log(getCharFrequency("aba")); // Output: { a: 2, b: 1 }
```


---


# 🧠 QUICK REVISION SUMMARY

* **Functions basic:** Block of statements reusable calculations parameters inputs return calculations values.
* **Expression:** Assignment of functions logic inside standard variables structure lists.
* **Arrow Functions:** Short code expressions representations coordinates syntax setups.
* **Scopes:** Global can access everywhere, function variables can't cross functions boundaries, block parameters limits to curly braces checks levels.
* **Callbacks & HOF:** Callback pass as argument target variables, HOF takes function returns functions expressions.


---


# 📝 IMPORTANT DEFINITIONS (INTERVIEW-READY)

1. **DRY Principle:** "Don't Repeat Yourself" - Code structure management guideline recommending the elimination of redundant patterns by encapsulating them inside reusable functions.
2. **Function Hoisting:** The behavior where JavaScript engine moves function declarations to the top of their enclosing scope, allowing functions to be invoked before they are defined.
3. **Lexical Scope:** The environment design model where variable accessibility is determined by their physical location in the written source code.
4. **Callback Function:** A function passed into another function as an input parameter argument, to be executed later inside the wrapper block.
5. **Higher-Order Function:** A function that receives a callback function as an input parameter, or yields another function as an output.


---


# 💬 IMPORTANT INTERVIEW QUESTIONS & ANSWERS

### Q1. What is the difference between Function Declaration and Function Expression?
**Ans:** Function declarations are hoisted, meaning they can be called before they are declared in the code. Function expressions are treated as variable assignments and are not hoisted, so calling them before declaration throws a ReferenceError.

### Q2. What is an Anonymous Function and where is it useful?
**Ans:** A function without a name. It is commonly used as a callback inside arrays methods or passed as arguments to other functions directly.

### Q3. Explain Arrow Function basic differences from normal functions.
**Ans:** Arrow functions have a shorter syntax and do not have their own bindings to the `this` keyword. They also cannot be used as constructors.

### Q4. What is the output of `console.log(add(5, 5))` if `let add = (a,b) => a+b;`?
**Ans:** ReferenceError. Arrow functions behave like function expressions and cannot be accessed before initialization.

### Q5. What is parameter and argument differences?
**Ans:** Parameters are variable placeholders in the function definition (e.g. `function add(a, b)`). Arguments are the actual values passed during function invocation (e.g. `add(2, 3)`).

### Q6. How do Rest parameters work?
**Ans:** Rest parameter (`...args`) gathers multiple comma-separated arguments into a single array parameter, allowing functions to receive a variable number of parameters.

### Q7. Explain Default Parameters in functions.
**Ans:** Default parameters allow formal parameters to be initialized with default values if no value or `undefined` is passed during the function call.

### Q8. Predict the output:
```javascript
const greet = (name = "Guest") => "Hi " + name;
console.log(greet());
console.log(greet("Rahul"));
```
**Ans:**
"Hi Guest"
"Hi Rahul"

### Q9. What will happen if we return multiple values separated by commas in a function?
**Ans:** Only the last value will be returned due to the comma operator rules. To return multiple values, wrap them in an array or object.

### Q10. What is Scope Chain in JavaScript?
**Ans:** The mechanism by which JavaScript resolves variable names. If a variable is not found in the local scope, the engine checks the outer lexical environment, moving up until it reaches the global scope.

### Q11. Predict output:
```javascript
let x = 10;
function changeVal() {
    let x = 20;
}
changeVal();
// print x
```
**Ans:** `10`. The local variable `x = 20` is function-scoped inside `changeVal()` and does not modify the global variable `x`.

### Q12. Predict output:
```javascript
if (true) {
    var x = 10;
    let y = 20;
}
console.log(x);
console.log(y);
```
**Ans:**
10
ReferenceError: y is not defined. (Because `let` is block-scoped, whereas `var` ignores block boundaries).

### Q13. What is lexical scoping?
**Ans:** A scoping model where variable access is determined by the physical nesting of scopes in the source code. An inner function has access to variables defined in its outer scope.

### Q14. What are Higher-Order Functions?
**Ans:** Functions that accept callbacks as arguments or return functions as output.

### Q15. Predict output:
```javascript
const add = (a) => (b) => a + b;
console.log(add(2)(3));
```
**Ans:** `5`. This is currying, where `add(2)` returns a function `(b) => 2 + b`, which is then invoked with `3`.

### Q16. Can arrow functions use Rest parameters?
**Ans:** Yes. The syntax `const sum = (...args) => {}` is valid.

### Q17. Predict output:
```javascript
function test(x) {
    return x;
}
console.log(test());
```
**Ans:** `undefined`. Since no argument was passed, the parameter `x` defaults to `undefined`.

### Q18. Difference between Rest and Spread parameters syntax?
**Ans:** Rest operator gathers multiple parameters into an array. Spread operator unpacks elements of an array or object into individual elements.

### Q19. Predict output:
```javascript
function greet(a, a) {
    // strict mode test
}
```
**Ans:** Duplicate parameter names are allowed in non-strict mode, but throw a SyntaxError in strict mode.

### Q20. What is a Callback Function?
**Ans:** A function passed as an argument to another function, intended to be executed after some operation or event completes.


---


# 💻 PRACTICE EXERCISES

## Question 1: Check Palindrome
* **Question:** Write a function to check if a string is a palindrome.
* **Solution:**
  ```javascript
  function isPalindrome(str) {
      let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
      let reversed = cleaned.split("").reverse().join("");
      return cleaned === reversed;
  }
  console.log(isPalindrome("radar")); // Output: true
  ```
* **Explanation:** Reverses the string and compares it to the original input.

## Question 2: Find Maximum in Array using Rest/Spread
* **Question:** Find the largest number inside a dynamic set of inputs using Math.max and spread operators.
* **Solution:**
  ```javascript
  function findMaxNum(...nums) {
      return Math.max(...nums);
  }
  console.log(findMaxNum(10, 50, 30)); // Output: 50
  ```
* **Explanation:** Collects inputs as an array using rest parameters, then spreads them into Math.max.

## Question 3: Array Element Frequency Counter
* **Question:** Count how many times each element appears in a string.
* **Solution:**
  ```javascript
  function characterFrequency(str) {
      let counts = {};
      for (let char of str) {
          if (char !== " ") {
              counts[char] = (counts[char] ?? 0) + 1;
          }
      }
      return counts;
  }
  console.log(characterFrequency("test")); // Output: { t: 2, e: 1, s: 1 }
  ```
* **Explanation:** Traverses the string and builds a map of characters and their frequencies.
