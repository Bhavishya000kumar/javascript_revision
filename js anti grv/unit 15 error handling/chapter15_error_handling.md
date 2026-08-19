# Unit 15: Error Handling in JavaScript

Welcome to Unit 15! Iss chapter mein hum JavaScript Error Handling concepts (try, catch, finally, throw, Custom Errors) aur error types ko detail mein simple Hinglish mein aur clean spacing ke sath cover karenge.


# PART 1: ERROR CLASSIFICATION

Programming mein errors teen main categories mein divide hote hain.


## 1. Errors Types

What is it?
* **Syntax Error:** Jab hum code likhte waqt language rules grammar structure violate karte hain. Yeh code compile run hone se pehle hi block ho jata hai.
* **Runtime Error:** Code syntax bilkul correct hota hai lekin executing time variables issues (like accessing non-existing variables) ki wajah se application crash ho jati hai.
* **Logical Error:** Code successfully compiles aur runs hota hai, koi technical crash error nahi aata, lekin final outputs calculations parameters incorrect/mismatch hote hain.

Simple example Syntax Error
```javascript
// let a = ; // SyntaxError: Unexpected token ';'
```

Simple example Runtime Error
```javascript
// console.log(x); // ReferenceError: x is not defined (Runtime Error)
```

Simple example Logical Error (Calculating average, but using wrong formula)
```javascript
let score1 = 10;
let score2 = 20;
let avg = score1 + score2 / 2; // Galti: Division precedence higher, calculates 10 + 10 = 20 (should be (10+20)/2 = 15)
console.log(avg);
```

Output
20


---


# PART 2: THE TRY-CATCH-FINALLY SYSTEM

Errors exceptions handle coordinates settings.


## 1. try & catch Blocks

What is it?
* **try:** Jis code blocks statement par runtime crash chances lagte hain, use hum `try` block ke andar likhte hain.
* **catch:** Agar `try` block ke andar koi crash exception error aata hai, toh code direct control handles jump to `catch` block transfer karta hai, protecting page application from absolute crashes.

The Error Object properties:
Inside catch block callback argument gives access to Error Object:
* **name:** Error type label string (e.g. "ReferenceError").
* **message:** Technical description details of the error.

Simple example
```javascript
try {
    let result = 10 / y; // y is not defined
} catch (err) {
    console.log("Error Name: " + err.name);
    console.log("Error Message: " + err.message);
}
```

Output
Error Name: ReferenceError
Error Message: y is not defined


---


## 2. finally Block

What is it?
finally block humesha, **har haal mein execute** hota hai, chahe try block normal complete chale ya catch block exception trigger ho.

Why is it needed?
Connections cleanups, files closure targets parameters release systems coordinate karne ke liye.

Simple example
```javascript
try {
    console.log("Try starts");
    let x = y; // y undefined, error jumps to catch
} catch (err) {
    console.log("Catch runs");
} finally {
    console.log("Finally runs always!");
}
```

Output
Try starts
Catch runs
Finally runs always!


---


# PART 3: THROW & CUSTOM ERRORS

## 1. throw Statement

What is it?
Hum `throw` keyword use karke JavaScript runtime compiler mein **manually user-defined custom exceptions throw** execute kar sakte hain.

Why is it needed?
Input validations limits check filters parameters errors coordinate trigger properties (e.g. if age is negative, it is mathematically possible but logically wrong for voting checks).

Simple example
```javascript
function checkAge(age) {
    if (age < 0) {
        throw new Error("Age cannot be negative!");
    }
    return "Valid age";
}

try {
    checkAge(-5);
} catch (err) {
    console.log("Caught: " + err.message);
}
```

Output
Caught: Age cannot be negative!


---


## 2. Custom Errors

What is it?
Standard errors patterns structures ke aage custom classification types name sets define templates.

Simple example
```javascript
class ValidationError extends Error {
    constructor(message) {
        super(message);
        this.name = "ValidationError";
    }
}

try {
    throw new ValidationError("Invalid input format!");
} catch (err) {
    console.log(err.name); // ValidationError
    console.log(err.message); // Invalid input format!
}
```

Output
ValidationError
Invalid input format!


---


# 🧠 QUICK REVISION SUMMARY

* **Error Types:** Syntax (syntax rules break), Runtime (execution crash ReferenceError/TypeError), Logical (incorrect logic calculations output).
* **try-catch:** try monitors crashes, catch saves application from crashing.
* **finally:** executes always regardless of try success or catch handling failures.
* **throw:** manual exceptions triggers.
* **Custom Error:** class extends base Error prototype setting custom name labels properties.


---


# 📝 IMPORTANT DEFINITIONS (INTERVIEW-READY)

1. **Syntax Error:** Errors arising from violates of JavaScript grammatical rules.
2. **Runtime Error:** Executing phase crashes arising from invalid program actions like accessing missing scopes variables.
3. **Logical Error:** Mismatched final computation outputs arising from incorrect algorithm design.
4. **Exception Handling:** Programming framework (try-catch) ensuring system recovery when errors are encountered.
5. **Temporal Execution Finalizer (finally):** Code block that executes unconditionally after try/catch parsing loops exit.


---


# 💬 IMPORTANT INTERVIEW QUESTIONS & ANSWERS

### Q1. Difference between Syntax Error and Runtime Error?
**Ans:** Syntax Error violates language grammar rules and blocks the program from compiling. Runtime Error occurs during program execution due to invalid actions (like accessing an undefined variable), causing the application to crash.

### Q2. What is a Logical Error?
**Ans:** Logical Error happens when the code builds and executes without crashes, but yields incorrect outputs due to bad algorithms or formulas.

### Q3. Explain the flow of try-catch-finally.
**Ans:** The program executes the code in the `try` block. If an error occurs, execution jumps to the `catch` block. The `finally` block runs immediately after, regardless of whether an error occurred.

### Q4. Predict output:
```javascript
try {
    console.log("A");
    throw new Error("B");
    console.log("C");
} catch(err) {
    console.log(err.message);
}
```
**Ans:**
"A"
"B"
(Execution inside `try` halts and jumps to `catch` immediately after `throw`).

### Q5. What properties does the Error object have?
**Ans:** The standard properties are `name` (the type of error) and `message` (description of the error).

### Q6. Difference between throw and try-catch?
**Ans:** `throw` is used to trigger an error manually. `try-catch` is used to catch and handle errors so that the program does not crash.

### Q7. Why do we need the finally block?
**Ans:** To run cleanup code (like closing database connections or clearing resources) that must run whether the program succeeded or failed.

### Q8. Predict output:
```javascript
try {
    console.log(10 / 0);
} catch (err) {
    console.log("Error");
}
```
**Ans:** `Infinity`. Division by zero in JavaScript returns `Infinity` and does not throw a runtime error, so the `catch` block is not executed.

### Q9. How do you create a custom error class?
**Ans:** By extending the built-in `Error` class and calling `super(message)` in the constructor.

### Q10. Predict output:
```javascript
try {
    let x = 10;
} finally {
    console.log("Finally");
}
```
**Ans:** "Finally". (finally runs even if there is no catch block).

### Q11. Predict output:
```javascript
const name = "Ravi";
name = "Amit"; // TypeError inside try checks
```
**Ans:** TypeError (Cannot assign to read-only property).

### Q12. Predict output:
```javascript
try {
    let x = y;
} catch (e) {
    console.log(e instanceof ReferenceError);
}
```
**Ans:** `true`. Accessing an undefined variable throws a ReferenceError.

### Q13. Can you nest try-catch blocks?
**Ans:** Yes. A try-catch block can be placed inside another try block to handle nested operations.

### Q14. What does `throw "Error!"` do?
**Ans:** It throws a string exception. JavaScript allows throwing any type of value, but throwing an instance of `Error` is recommended for stack trace support.

### Q15. Predict output:
```javascript
function check(x) {
    if (!x) throw new Error("Missing");
}
try {
    check("");
} catch(e) {
    console.log(e.message);
}
```
**Ans:** "Missing". (An empty string is falsy, triggering the throw statement).

### Q16. Difference between `e.target` and error checking properties?
**Ans:** `e.target` is an event target reference. Error checking properties like `err.message` hold error metadata.

### Q17. Predict output:
```javascript
try {
    console.log("try");
} catch(err) {
    console.log("catch");
} finally {
    console.log("finally");
}
```
**Ans:**
"try"
"finally"

### Q18. What error is thrown when parsing invalid JSON?
**Ans:** SyntaxError. (e.g. `JSON.parse("{invalid}")` throws SyntaxError).

### Q19. Predict output:
```javascript
try {
    JSON.parse("abc");
} catch(err) {
    console.log(err.name);
}
```
**Ans:** "SyntaxError".

### Q20. Does finally execute if the catch block throws another error?
**Ans:** Yes. The finally block executes before the new error propagates up the call stack.


---


# 💻 PRACTICE QUESTIONS

## Question 1: Check runtime reference crash
* **Question:** Write a function checking if variables are defined using try-catch blocks.
* **Solution:**
  ```javascript
  function checkVar() {
      try {
          console.log(mySecretVar);
      } catch (err) {
          console.log("Captured reference exception: " + err.message);
      }
  }
  checkVar();
  ```
* **Output:** Captured reference exception: mySecretVar is not defined
* **Explanation:** Encapsulates the ReferenceError in try-catch to log a clean error message.

## Question 2: Input validator throwing errors
* **Question:** Create input length check. If input length is less than 3, throw custom error "Input too short".
* **Solution:**
  ```javascript
  function validateName(name) {
      if (name.trim().length < 3) {
          throw new Error("Input too short");
      }
      return "Valid Name";
  }

  try {
      validateName("Ed");
  } catch (err) {
      console.log("Failed validation: " + err.message);
  }
  ```
* **Output:** Failed validation: Input too short
* **Explanation:** Checks input length, throws error using `throw new Error()`, which is caught and logged.

## Question 3: finally execution verification
* **Question:** Verify finally executes even after function returns inside try block.
* **Solution:**
  ```javascript
  function testReturn() {
      try {
          return "Returned from try";
      } finally {
          console.log("Finally block executed!");
      }
  }
  console.log(testReturn());
  ```
* **Output:**
  Finally block executed!
  Returned from try
* **Explanation:** JavaScript guarantees that the finally block runs before control returns to the caller.
