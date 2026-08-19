# Unit 12: Destructuring, Spread & Modern JS

Welcome to Unit 12! Iss chapter mein hum modern JavaScript ES6+ features ko detail mein simple Hinglish mein aur clean spacing ke sath cover karenge.


# PART 1: DESTRUCTURING TECHNIQUES

Destructuring humein arrays aur objects se data elements ko direct variables mein unpack karne ki convenience deti hai.


## 1. Array Destructuring

What is it?
Array ke indices elements ko clean variables representation blocks mein unpack karna.

How does it work?
We write variables inside brackets `[var1, var2]` on the left side of the assignment.
* **Skipping values:** Commas use karke spaces block variables ignore. E.g., `[first, , third]`.
* **Default values:** Assign placeholder values: `[a = 1, b = 2]`.

Simple example
```javascript
let colors = ["red", "green", "blue"];

// Extracting & skipping
const [firstColor, , thirdColor] = colors;

// Default values
const [a, b, c, d = "yellow"] = colors;

console.log(firstColor);
console.log(thirdColor);
console.log(d);
```

Output
red
blue
yellow


---


## 2. Object Destructuring

What is it?
Object properties key elements variables ko unpack pull karna keys match karke.

How does it work?
* **Renaming variables:** Use colon `key: newName` syntax.
* **Default values:** Set default placeholder settings: `key = defaultValue`.

Simple example
```javascript
let user = { username: "amit_99", age: 24 };

// Extract and rename, with default value
const { username: nickName, age, country = "India" } = user;

console.log(nickName);
console.log(age);
console.log(country);
```

Output
amit_99
24
India


---


## 3. Destructuring with for...of

What is it?
Objects inside array element loops run parsing maps destructuring destruct.

Simple example
```javascript
let list = [
    { name: "Rahul", score: 85 },
    { name: "Aman", score: 90 }
];

for (let { name, score } of list) {
    console.log(`${name} scored ${score}`);
}
```

Output
Rahul scored 85
Aman scored 90


---


# PART 2: ARRAYS/OBJECTS UNPACK & COLLECTION

## 1. Spread Operator (`...`)

What is it?
Spread operator array parameters ya object parameters items ko individual values mein **expand (open up)** karta hai.

Why is it needed?
Arrays/objects values copy merge actions safely create parameters.

Simple example
```javascript
// Spread with Arrays
let list1 = [1, 2];
let list2 = [...list1, 3, 4]; // Merges [1, 2] with [3, 4]
console.log(list2);

// Spread with Objects
let item1 = { brand: "Dell" };
let item2 = { ...item1, ram: "16GB" }; // Copies properties
console.log(item2);
```

Output
`[1, 2, 3, 4]`
`{ brand: "Dell", ram: "16GB" }`


---


## 2. Rest Operator (`...`)

What is it?
Rest operator arguments values ko single variable array parameter check mein **collect** karta hai.

Why is it needed?
Functions variables parameters length structures list variables mapping settings coordinate.

Simple example
```javascript
function sumAll(first, ...remaining) {
    console.log("First: " + first);
    console.log("Remaining array:", remaining);
}
sumAll(10, 20, 30, 40);
```

Output
First: 10
Remaining array: [20, 30, 40]


---


## 3. Rest vs Spread — Clear Difference

* **Spread Operator:** Unpacks/opens up values (e.g. converting `[1, 2]` to individual values `1, 2`). Used on execution/assignment side.
* **Rest Operator:** Collects multiple values into a single array container (e.g. converting `1, 2` to `[1, 2]`). Used in function parameter declarations side.


---


# PART 3: MODERN ES6 HELPER UTILITIES

## 1. Template Literals

What is it?
Backticks (`` ` ``) notation values expressions interpolation variables formats.

Simple example
```javascript
let product = "Laptop";
let price = 50000;
console.log(`The price of ${product} is ${price} INR.`);
```

Output
The price of Laptop is 50000 INR.


---


## 2. Default Parameters

What is it?
Missing variables calling parameters default values assignments checking.

Simple example
```javascript
function greet(user = "Guest") {
    return "Hello " + user;
}
console.log(greet());
```

Output
Hello Guest


---


## 3. Optional Chaining (`?.`)

What is it?
Deep nested object properties query check safe coordinates handles. Returns `undefined` if intermediate reference properties are missing, preventing program crashes.

Simple example
```javascript
let userProfile = { details: { city: "Delhi" } };
let userProfile2 = {};

console.log(userProfile.details?.city);
console.log(userProfile2.details?.city); // undefined safely
```

Output
Delhi
undefined


---


## 4. Nullish Coalescing (`??`)

What is it?
Checks target variables strictly only for **`null` and `undefined`** values.

Comparison: `??` vs `||`
`||` checks all falsy values (so values like `0` or `""` will trigger the fallback). `??` preserves `0` or `""` as valid inputs.

Simple example
```javascript
let score = 0;

let resultOR = score || 100;
let resultNullish = score ?? 100;

console.log("OR:", resultOR);
console.log("Nullish:", resultNullish);
```

Output
OR: 100
Nullish: 0


---


# 🧠 QUICK REVISION SUMMARY

* **Array destructuring:** `[a, , c]` extracts array indices values while commas skip elements.
* **Object destructuring:** `{ key: aliasName }` extracts object properties and renames them.
* **Spread vs Rest:** Spread opens and expands values; Rest gathers values into an array.
* **Modern ES6 utilities:**
  - Backticks define template strings.
  - `?.` prevents TypeError crash on querying missing nested properties.
  - `??` sets fallbacks checking strictly only `null` and `undefined`.


---


# 📝 IMPORTANT DEFINITIONS (INTERVIEW-READY)

1. **Spread Operator:** Operator used to unpack iterable elements into individual items.
2. **Rest Parameter:** Syntax gathering a variable number of arguments into a single array parameter.
3. **Template Literal:** String definition system utilizing backticks for string interpolation.
4. **Optional Chaining:** Safe property query operator (`?.`) returning `undefined` if reference links fail.
5. **Nullish Coalescing:** Logic check operator (`??`) verifying strictly against `null` or `undefined` states.


---


# 💬 IMPORTANT INTERVIEW QUESTIONS & ANSWERS

### Q1. Difference between Rest and Spread operators?
**Ans:** Spread operator expands iterables into separate values (used during assignments or array merges). Rest parameter collects multiple arguments into a single array variable (used in function definitions).

### Q2. How does `??` differ from `||` when checking falsy values?
**Ans:** `||` evaluates against all falsy values (like `0`, `""`, `false`), triggering fallback. `??` checks strictly only for `null` and `undefined`, preserving valid falsy values like `0` and `""`.

### Q3. Predict output:
```javascript
let [x, y = 5] = [10];
console.log(x, y);
```
**Ans:** `10 5`. `x` receives 10, while `y` defaults to 5.

### Q4. Predict output:
```javascript
const user = { name: "Ravi", role: "admin" };
const { name: userName } = user;
console.log(userName);
console.log(name);
```
**Ans:** 
"Ravi"
ReferenceError: name is not defined. (Because `name` was aliased to `userName`).

### Q5. What happens when you use optional chaining on a null reference?
**Ans:** It stops evaluation immediately and returns `undefined` instead of throwing a TypeError crash.

### Q6. How do you swap variables using array destructuring?
**Ans:** `[a, b] = [b, a];` swaps values without using a temporary variable.

### Q7. What does the Rest parameter inside a function argument list look like?
**Ans:** It looks like `function sum(...nums)`. It collects all extra inputs as an array.

### Q8. Predict output:
```javascript
let a = [1, 2];
let b = [3, 4];
console.log([...a, ...b]);
```
**Ans:** `[1, 2, 3, 4]`.

### Q9. Can we write Rest parameter at the beginning of function arguments?
**Ans:** No. Rest parameter must always be the last parameter in the function declaration.

### Q10. Predict output:
```javascript
let obj = { x: 1, y: 2 };
let { z = 10 } = obj;
console.log(z);
```
**Ans:** `10`.

### Q11. Predict output:
```javascript
console.log("" ?? "default");
```
**Ans:** `""` (empty string). Empty string is a valid falsy value, so `??` preserves it.

### Q12. Predict output:
```javascript
console.log("" || "default");
```
**Ans:** `"default"`. Empty string is falsy, triggering OR fallback.

### Q13. Predict output:
```javascript
let list = [1, 2, 3];
let [x, ...y] = list;
console.log(y);
```
**Ans:** `[2, 3]`. (Rest operator collects remaining items).

### Q14. What are backticks (`` ` ``) used for in JS?
**Ans:** Defining template literal strings that support multi-line strings and interpolation.

### Q15. Predict output:
```javascript
let price = 100;
console.log(`Price is: ${price + 10}`);
```
**Ans:** `"Price is: 110"`.

### Q16. Predict output:
```javascript
function test(x = 10) {
    return x;
}
console.log(test(undefined));
console.log(test(null));
```
**Ans:** 
`10` (undefined triggers default parameters).
`null` (null is passed as a valid value).

### Q17. Predict output:
```javascript
let user = { info: null };
console.log(user.info?.age);
```
**Ans:** `undefined`.

### Q18. How do you destructure properties in a for...of loop?
**Ans:** By defining the destructuring pattern directly inside the loop declaration: `for (let { name } of users)`.

### Q19. Predict output:
```javascript
let [,,z] = [1, 2, 3];
console.log(z);
```
**Ans:** `3`. Commas skip the first two elements.

### Q20. Predict output:
```javascript
let a = { a: 1 };
let b = { b: 2 };
console.log({ ...a, ...b });
```
**Ans:** `{ a: 1, b: 2 }`.


---


# 💻 PRACTICE QUESTIONS

## Question 1: Swap variables
* **Question:** Swap values of `a = 5` and `b = 10` using destructuring.
* **Solution:**
  ```javascript
  let a = 5;
  let b = 10;
  [a, b] = [b, a];
  console.log(`a: ${a}, b: ${b}`); // a: 10, b: 5
  ```
* **Explanation:** Swaps values in-place by unpacking values from a transient array.

## Question 2: Rename Destructured Keys
* **Question:** Extract `role` from object `{ name: "Ravi", role: "Dev" }` and rename it to `jobTitle`.
* **Solution:**
  ```javascript
  let profile = { name: "Ravi", role: "Dev" };
  const { role: jobTitle } = profile;
  console.log("Job Title:", jobTitle); // Dev
  ```
* **Explanation:** Uses renaming syntax `role: jobTitle` to map key value to a new variable.

## Question 3: Safely Access Nested Profile
* **Question:** Query `zip` from `{ settings: null }` using optional chaining and nullish coalescing to fall back to `"000000"`.
* **Solution:**
  ```javascript
  let data = { settings: null };
  let zipCode = data.settings?.address?.zip ?? "000000";
  console.log("Zip Code:", zipCode); // 000000
  ```
* **Explanation:** Optional chaining returns undefined safely, then nullish coalescing applies the default fallback.
