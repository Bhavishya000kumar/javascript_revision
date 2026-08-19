# Unit 19: Modules in JavaScript

Welcome to Unit 19! Iss chapter mein hum JavaScript Modules (ES Modules), export, import, Named vs Default exports, HTML module registration aur module architecture ko detail mein simple Hinglish mein aur clean spacing ke sath cover karenge.


# PART 1: MODULES BASICS

Large JavaScript code bases ko clean, structured aur maintainable banana modules ke through possible hota hai.


## 1. Modules Kya Hote Hain?

What is it?
Module ek isolated JavaScript file hoti hai jiska code block default level par private rehta hai. Jab tak hum modules se functions/variables ko explicitly **export** na karein, aur doosri files mein use **import** na karein, tab tak doosri files use access nahi kar saktin.

Why JavaScript modules are needed?
Bina modules ke, agar hum 10 javascript files page par script tags se link karein, toh saare variables Global Scope mein aa jate hain, jisse name collisions (ek hi naam ke do variables crash) aur bugs bante hain. Modules har file ko apna local block scope dete hain.

Normal JS file vs Module file:
* **Normal JS File:** Variables are shared in global scope. Cannot use `import` / `export` keywords.
* **Module File:** Variables are strictly file-scoped. Can share code using `export` / `import`. Loaded using `type="module"` inside HTML.


---


## 2. Export & Import Types

Code share karne ke do tareeqe hote hain:

### **Named Export**
* **What is it:** Ek hi file se multiple variables ya functions ko unke **original names** ke sath export karna.
* **Syntax:** `export const myVar = 10;` or `export { func1, func2 };`
* **Importing syntax:** Named exports ko import karte waqt curly braces `{}` lagana zaroori hai aur exact name match hona chahiye: `import { myVar } from "./file.js";`.

### **Default Export**
* **What is it:** Ek file se **sirf ek main code block** (function, class ya object) ko fallback default export banana.
* **Syntax:** `export default function add() { }`
* **Importing syntax:** Default export ko bina curly braces `{}` ke import kiya ja sakta hai aur import karte waqt aap koi bhi random custom name de sakte hain: `import customAddName from "./file.js";`.


---


# PART 2: MULTI-FILE CODE SHARING EXAMPLES

Chaliye do files ke beech code share karne ka complete structure dekhte hain.

File 1: `math.js`
```javascript
// Named exports
export const PI = 3.14159;

export function add(a, b) {
    return a + b;
}

// Default export
export default function multiply(a, b) {
    return a * b;
}
```

File 2: `app.js`
```javascript
// Importing named exports and default export from math.js
import multiply, { PI, add } from "./math.js";

console.log("PI value:", PI);
console.log("Sum:", add(5, 10));
console.log("Product (default export):", multiply(4, 5));
```

Expected Output
PI value: 3.14159
Sum: 15
Product (default export): 20

Step-by-Step explanation:
1. `math.js` exports `PI` and `add` as named values, and `multiply` as the default value.
2. `app.js` loads these keys. Since `multiply` is default, it sits outside curly brackets `{}` in the import statement.
3. The browser engine links the references asynchronously during module parsing.


---


# PART 3: MODULE ARCHITECTURE & HTML SETUP

## 1. Module Architecture

What is it?
Module Architecture ek design pattern hai jisme codebase ko components aur specialized helper files mein divide kiya jata hai, jo aapas mein systematically import/export ke through link hoti hain.

Typical Project Structure:
```text
project/
  ├── index.html       (Loads main script entry point)
  └── src/
        ├── app.js     (Main entry point - imports from math and dom)
        ├── math.js    (Math helper module - exports functions)
        └── dom.js     (DOM rendering module - exports functions)
```


---


## 2. Using `type="module"` in HTML

What is it?
Browser ko batane ke liye ki import/export module rules process karne hain, HTML script tag mein attributes parameter `type="module"` lagana mandatory hota hai.

Example HTML File:
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>JS Modules</title>
</head>
<body>
    <!-- type="module" registration is required -->
    <script type="module" src="app.js"></script>
</body>
</html>
```

Important point
Modules automatically **strict mode** (`"use strict"`) follow karte hain, aur defer behavior (page parsing complete hone ke baad run hona) default show karte hain.


---


# 🧠 QUICK REVISION SUMMARY

* **Modules:** Isolated JS files preventing global scope pollution.
* **Named Export/Import:** Share multiple items from a file. Curly brackets `{}` are mandatory on import side. Names must match exactly.
* **Default Export/Import:** Share only 1 fallback item per file. Curly brackets `{}` are omitted. Imports can use custom aliases names.
* **HTML Setup:** Script loading requires the `type="module"` attribute.
* **Rules:** Modules run strictly in strict mode and support defer loading by default.


---


# 📝 IMPORTANT DEFINITIONS (INTERVIEW-READY)

1. **ES Modules (ESM):** The official standard module system native to JavaScript, using `import` and `export` statements.
2. **Global Scope Pollution:** Bugs arising when multiple script files share global variables names, leading to collisions.
3. **Default Export:** The fallback export interface of a module allowing singular custom-named imports.
4. **Named Export:** Specific module items exported under their original declaration names.
5. **Strict Scope Isolation:** The module safety feature where variables declared in a module file are inaccessible to other scripts unless exported.


---


# 💬 IMPORTANT INTERVIEW QUESTIONS & ANSWERS

### Q1. What is the difference between Named Export and Default Export?
**Ans:** 
- Named exports allow exporting multiple items from a file, require exact matching names during import, and must be wrapped in curly braces `{}`.
- Default export allows only one item per file, can be imported without curly braces `{}`, and can be assigned a custom name during import.

### Q2. Why do we need `type="module"` in HTML script tags?
**Ans:** Without `type="module"`, the browser parses the file as a normal script, where `import` and `export` statements trigger SyntaxErrors. Adding the attribute tells the browser to parse it as an ES Module.

### Q3. Do modules support hoisting?
**Ans:** Import statements are hoisted. JavaScript parses and resolves all imports at the top of the scope before executing any module code.

### Q4. Difference between normal script files and module files?
**Ans:** Normal script files share variables globally, pollute the scope, and do not support import/export. Module files have file-level scope, run in strict mode by default, and support modular import/export structures.

### Q5. Can we use multiple `export default` in a single file?
**Ans:** No. A module file can have at most one default export.

### Q6. Predict output:
```javascript
// Inside math.js
export default function test() { return 10; }

// Inside app.js
import myCustomName from "./math.js";
console.log(myCustomName());
```
**Ans:** `10`. (Default export can be imported using any custom name).

### Q7. How do you import all named exports from a file under a single namespace alias?
**Ans:** By using `import * as AliasName from "./file.js"`.

### Q8. Predict output:
```javascript
// Inside helper.js
export const val = 5;

// Inside app.js
import { val as myVal } from "./helper.js"; // aliasing named export
console.log(myVal);
```
**Ans:** `5`.

### Q9. Can we use `import` inside standard loops or if conditions?
**Ans:** Standard static `import` statements must be placed at the top level of the file and cannot reside inside blocks. Dynamic imports use `import("path")` returning promises.

### Q10. What does `"use strict"` do in modules?
**Ans:** Modules run in strict mode by default. It prevents mistakes like assigning values to undeclared variables.

### Q11. Predict output of importing a missing named export:
**Ans:** SyntaxError: The requested module does not provide an export named 'X'.

### Q12. Are modules deferred by default?
**Ans:** Yes. Modules are executed only after the HTML parser has completely parsed the document, equivalent to the `defer` attribute.

### Q13. Predict output:
```javascript
// Inside module.js
let x = 10; // no export

// Inside app.js
import "./module.js";
console.log(typeof x);
```
**Ans:** `"undefined"`. (Variables in modules are file-scoped and not globally shared unless exported).

### Q14. Can you export a variable after declaring it on a separate line?
**Ans:** Yes. E.g. `const x = 5; export { x };`.

### Q15. Can you mix named and default exports in a single file?
**Ans:** Yes. A module can have one default export along with multiple named exports.

### Q16. Predict output:
```javascript
import multiply, { PI } from "./math.js";
```
**Ans:** Loads default export as `multiply` and named export as `PI` successfully.

### Q17. What is CommonJS?
**Ans:** The module specification system historically used in Node.js utilizing `module.exports` and `require()`. Modern code bases prefer ES Modules.

### Q18. Predict output:
```javascript
// Inside app.js
this.name = "Test";
console.log(this); // inside a module file
```
**Ans:** `undefined`. (At the top level of a module, `this` is `undefined` instead of the global window object).

### Q19. What is the scope of variables declared inside an ES module?
**Ans:** Module scope. They are local to the file and invisible to other files unless exported.

### Q20. Can we run ES Modules directly from local file protocol (double click index.html)?
**Ans:** Browsers block local file protocol ES Module imports due to CORS security policies. You must run them using a local development server (like VS Code Live Server).


---


# 💻 PRACTICE QUESTIONS

## Question 1: Basic Named Export
* **Question:** Create a file exporting variable `const appVersion = "1.0.0"` as named export, and import it.
* **Solution:**
  ```javascript
  // config.js
  export const appVersion = "1.0.0";

  // app.js
  import { appVersion } from "./config.js";
  console.log("Version:", appVersion);
  ```
* **Explanation:** Named exports are written using `export` and imported using matching keys in curly braces `{}`.

## Question 2: Default exports setup
* **Question:** Export a utility class `Database` as default export and load it under a custom name.
* **Solution:**
  ```javascript
  // db.js
  export default class Database {
      connect() { return "Connected"; }
  }

  // app.js
  import DbConnection from "./db.js";
  let db = new DbConnection();
  console.log(db.connect());
  ```
* **Explanation:** Default exports are imported without curly braces and can be renamed freely.

## Question 3: Dynamic rename of Named Import
* **Question:** Import named function `fetchUser` and alias rename it to `getUserData` in import statement.
* **Solution:**
  ```javascript
  // api.js
  export function fetchUser() { return "userObj"; }

  // app.js
  import { fetchUser as getUserData } from "./api.js";
  console.log(getUserData());
  ```
* **Explanation:** Renames imports inline using `as` keyword to prevent local scope name collisions.
