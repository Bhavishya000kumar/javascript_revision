# Unit 21: JS Runtime & Internal Working

Welcome to Unit 21! Iss chapter mein hum JavaScript Engine, V8 architecture, Parsing, Execution Context, Memory Heap, Call Stack, Web APIs, Event Loop, Microtask vs Macrotask queues, aur Garbage Collection ko detail mein simple Hinglish mein aur clean spacing ke sath cover karenge.


# PART 1: THE ENGINE ARCHITECTURE

JavaScript code text format se machine code compilation tak kaise pahunchta hai? Iss section mein hum iska full blueprint dekhenge.


## 1. Engine & V8 Flow

What is it?
JavaScript Engine ek program/virtual machine hai jo JavaScript code text ko computer ke understandable machine code instruction sets mein compile and execute karta hai. **V8** Google ka open-source superfast JS Engine hai, jo Chrome aur Node.js runtimes ko power karta hai.

The Basic Compilation Flow:
```text
JS Code (Text)
   ↓
Parsing (Creates AST - Abstract Syntax Tree)
   ↓
Compilation (JIT compiler: Ignition Interpreter + TurboFan Optimization Compiler)
   ↓
Execution (Runs bytecodes on Call Stack & Memory Heap)
```

Parsing & Execution Phases:
* **Parsing:** Code structure grammar checking. Syntax checks. Converts code text to a structural JSON tree called Abstract Syntax Tree (AST).
* **Execution:** AST is parsed by Ignition interpreter to generate bytecodes. Hot (frequently run) codes are optimized by TurboFan compiler directly to machine code for speed.


---


## 2. Memory Heap vs Call Stack

What is it?
JavaScript runtime memory space do areas mein split hota hai:
* **Call Stack:** execution stack workspace where functions call frames are pushed and popped off sequentially (FILO - First In Last Out). Stores local execution variables frames.
* **Memory Heap:** A large unstructured memory allocation space where JS allocates memory for variables objects (like Objects, Arrays, Functions references).

Memory allocation difference:
- Primitives (numbers, booleans) variables are placed directly in the Call Stack.
- Complex references (objects, arrays) are stored in the Memory Heap, while the Call Stack only holds a pointer reference addressing that heap location.


---


## 3. Execution Context

What is it?
Jab bhi JavaScript code run hota hai, toh woh ek logical environment ke andar chalta hai jise **Execution Context** kehte hain.

Two Execution Context Types:
1. **Global Execution Context (GEC):** Root default context created when the script starts running. (Only one GEC exists).
2. **Function Execution Context (FEC):** Created every time a function is invoked. (Each function call has its own FEC).

Execution Context Phases:
* **Memory Creation Phase:** Allocates memory for variables (initialized to `undefined`) and functions declarations (fully hoisted in scope).
* **Code Execution Phase:** Runs line-by-line assigning actual values to variables.


---


# PART 2: ASYNCHRONOUS COMPONENT CONSTELLATIONS

JavaScript runtime environment elements synchronous aur asynchronous codes ki execution ko coordinate karte hain.


## 1. Web APIs

What is it?
Web APIs browser dwara code engine ko provided helper features hain (like `setTimeout`, fetch APIs, DOM selectors events).

Why are they needed?
JavaScript engine single-threaded hai. Agar engine khud `setTimeout` delay runs handle kare, toh complete browser thread blocks halt. Isliye browser APIs handles these tasks asynchronously in background threads.


---


## 2. Event Loop & Queue Priorities

What is it?
Asynchronous logic execution coordinates:

```text
Call Stack
    ↑ (Event Loop shifts if Call Stack is empty)
[Microtask Queue / Macrotask Queue]
    ↑
Web APIs (Background Timers/Fetch complete)
```

Queue Priorities:
* **Microtask Queue:** High priority! Promises (`.then()`, `async/await`) and MutationObservers callbacks enter here.
* **Macrotask Queue (Callback Queue):** Standard priority. `setTimeout`, `setInterval`, UI events callbacks enter here.
**EVENT LOOP RULE:** Event loop tabhi macrotask queue elements stack memory push karega jab microtask queue complete empty ho chuki hogi.

Example: Console, Promise & Timeout:
```javascript
console.log("A");

setTimeout(() => {
    console.log("B");
}, 0);

Promise.resolve().then(() => {
    console.log("C");
});

console.log("D");
```

Step-by-Step execution order:
1. Synchronous commands run: `console.log("A")` prints `"A"`.
2. `setTimeout` schedules callback `B` in Web APIs $\rightarrow$ moves callback to Macrotask Queue.
3. `Promise` schedules callback `C` $\rightarrow$ moves callback to Microtask Queue.
4. Synchronous `console.log("D")` prints `"D"`.
5. Call Stack is empty! Event Loop first checks Microtask Queue $\rightarrow$ prints `"C"`.
6. Microtask Queue is now empty! Event Loop checks Macrotask Queue $\rightarrow$ prints `"B"`.
Output: `A D C B`.


---


# PART 3: MEMORY CLEANUP BASICS

## 1. Garbage Collection

What is it?
Garbage Collection browser engine ka automatic memory cleanup coordinator system hai.
* **Unreachable Objects:** Objects jinka scope chains ya global references mapping links block clear disconnect ho chuki hai (No pointer reference path remains from roots).
* **Automatic Sweep:** Engine automatically sweeps these variables to reclaim RAM. Developers do not write manual garbage free allocations.


---


# 🧠 QUICK REVISION SUMMARY

* **Compilation Flow:** Text Code $\rightarrow$ AST Parsing $\rightarrow$ JIT Compiler Bytecode $\rightarrow$ Stack/Heap Execution.
* **Storage Areas:** Call Stack manages active functions frames and primitives; Memory Heap holds complex objects/arrays referencing memory locations.
* **Execution Context:** Created in two phases: Memory Creation (variables are `undefined`, functions hoisted) and Code Execution.
* **Event Loop flow:** Microtask Queue (Promises callbacks) always takes priority and runs before Macrotask Queue (setTimeout callbacks).
* **GC:** Marks and sweeps unreachable elements in Memory Heap.


---


# 📝 IMPORTANT DEFINITIONS (INTERVIEW-READY)

1. **Abstract Syntax Tree (AST):** Tree representation of code structure used by engine parsers to generate bytecodes.
2. **JIT Compilation:** Just-In-Time compilation compilation model compiling code during runtime for speed optimizations.
3. **Execution Context:** The wrapper environment managing memory scope allocations and variable access execution blocks.
4. **Microtask Queue:** High-priority queue reserved exclusively for Promises callbacks.
5. **Call Stack Overflow:** Crashes occurring when call frames nested limit exceeds memory capacity (Recursion without exit).


---


# 💬 IMPORTANT INTERVIEW QUESTIONS & ANSWERS

### Q1. What is the difference between Call Stack and Memory Heap?
**Ans:** 
- Call Stack is a structured, fast memory space that manages execution frames, function calls, and primitive values.
- Memory Heap is a large, unstructured memory space used to allocate memory dynamically for objects, arrays, and functions.

### Q2. Explain JIT Compilation in V8.
**Ans:** Just-In-Time compilation compiles JavaScript code at runtime. Instead of interpreting line-by-line slowly, V8 compiles code to bytecode (via Ignition interpreter) and optimizes hot paths to native machine code (via TurboFan compiler) for execution.

### Q3. What are the two phases of Execution Context?
**Ans:** 
1. Memory Creation Phase: JS scans variables and functions, initializing variables to `undefined` and hoisting functions.
2. Code Execution Phase: JS executes code line-by-line, assigning actual values.

### Q4. Difference between Microtask Queue and Macrotask Queue?
**Ans:** Microtask Queue holds high-priority callbacks (Promises, async/await). Macrotask Queue holds lower priority callbacks (setTimeout, setInterval). The Event Loop executes all microtasks before processing the next macrotask.

### Q5. Predict output:
```javascript
console.log("Start");
setTimeout(() => console.log("Timer"), 0);
Promise.resolve().then(() => console.log("Promise"));
console.log("End");
```
**Ans:** 
"Start"
"End"
"Promise"
"Timer"

### Q6. What is a Memory Leak?
**Ans:** Occurs when variables or objects are no longer needed but are still kept in memory by mistake (like uncleared global variables or event listeners), preventing Garbage Collection.

### Q7. Explain how the Event Loop works.
**Ans:** The Event Loop monitors if the Call Stack is empty. If it is, it first checks the Microtask Queue and executes all available callbacks, then shifts the first callback from the Macrotask Queue to the Call Stack.

### Q8. Predict output:
```javascript
function foo() {
    return foo();
}
foo();
```
**Ans:** `RangeError: Maximum call stack size exceeded` (Stack overflow).

### Q9. Why are Web APIs handled outside the JS Engine?
**Ans:** Because the JS Engine is strictly single-threaded. Running non-blocking tasks like timers or network calls directly on the main thread would freeze the page.

### Q10. What does hoisting do during the creation phase of Execution Context?
**Ans:** It reserves memory space for variables and functions before code execution, setting variables to `undefined` and storing full function declarations.

### Q11. Predict output:
```javascript
console.log(myVar);
var myVar = 5;
```
**Ans:** `undefined` (due to hoisting in GEC creation phase).

### Q12. Predict output:
```javascript
console.log(myLet);
let myLet = 10;
```
**Ans:** `ReferenceError: Cannot access 'myLet' before initialization` (due to Temporal Dead Zone).

### Q13. How does the V8 engine optimize performance?
**Ans:** By using the TurboFan compiler to compile hot (frequently run) bytecodes directly into machine code.

### Q14. What does Global Execution Context create by default?
**Ans:** GEC creates the global object (`window` in browsers, `global` in Node.js) and the `this` binding context.

### Q15. Does setTimeout delay guarantee exact timer callback execution?
**Ans:** No. It specifies the minimum delay. The callback is placed in the Macrotask Queue and can only run after the Call Stack is empty.

### Q16. Predict output:
```javascript
setTimeout(() => console.log("A"), 0);
Promise.resolve().then(() => {
    Promise.resolve().then(() => console.log("B"));
});
```
**Ans:**
"B"
"A"
(Both microtasks run before the macrotask timeout is processed).

### Q17. How does Garbage Collection identify unused objects?
**Ans:** Using the "Mark-and-Sweep" algorithm. Objects that are unreachable from root nodes (like global scope) are marked as garbage and swept.

### Q18. What is the execution stack order of Function Contexts?
**Ans:** LIFO (Last In First Out). The latest function called is pushed to the top of the stack and executed first.

### Q19. Difference between JS Engine and JS Runtime?
**Ans:** JS Engine compiles and executes code (e.g. V8). JS Runtime wraps the engine and provides external APIs (like window, DOM, setTimeout) to make a complete execution environment (e.g. Chrome browser).

### Q20. Can we run code without GEC?
**Ans:** No. All JavaScript execution starts with a Global Execution Context.


---


# 💻 PRACTICE QUESTIONS

## Question 1: Call Stack Trace Execution
* **Question:** Draw the Call Stack state step-by-step for:
  ```javascript
  function first() { second(); }
  function second() { console.log("Run"); }
  first();
  ```
* **Solution:**
  1. GEC pushes to Stack.
  2. `first()` FEC pushes to Stack.
  3. `second()` FEC pushes to Stack.
  4. `console.log` pushes, prints `"Run"`, pops.
  5. `second()` pops off stack.
  6. `first()` pops off stack.
  7. GEC pops off when script terminates.

## Question 2: Microtask nesting priority
* **Question:** Predict output of:
  ```javascript
  setTimeout(() => console.log("Timeout"), 0);
  Promise.resolve().then(() => {
      console.log("Promise 1");
      Promise.resolve().then(() => console.log("Promise 2"));
  });
  ```
* **Output:**
  Promise 1
  Promise 2
  Timeout
* **Explanation:** Nesting Promises creates nested microtasks. Event loop processes all microtasks before shifting to the timeout macrotask.

## Question 3: Stack Overflow check
* **Question:** Predict stack output check:
  ```javascript
  let counter = 0;
  function recurse() {
      counter++;
      recurse();
  }
  try { recurse(); } catch(e) { console.log(e.name); }
  ```
* **Output:** RangeError
* **Explanation:** Recursive function calls without exit conditions exhaust Call Stack memory, throwing a RangeError exception.
