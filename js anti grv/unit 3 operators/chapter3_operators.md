# Chapter 3: Operators in JavaScript (Zero to Hero Guide) 🚀

Hey! Welcome to Chapter 3 of your JavaScript journey. Iss guide mein hum JavaScript ke saare Operators ko ekdum zero level se interview/advanced level tak cover karenge. Har concept ko simple **Hinglish** mein samjhenge aur saath mein practical code examples aur dry runs bhi dekhenge.

---

## Index 📖
1. [Lecture 6 — Arithmetic & Assignment Operators](#lecture-6-arithmetic--assignment-operators)
2. [Lecture 7 — Comparison & Logical Operators](#lecture-7-comparison-logical-operators)
3. [Lecture 8 — Ternary & Modern Operators](#lecture-8-ternary--modern-operators)
4. [Chapter 3 Quick Revision Section](#chapter-3-quick-revision-section)
5. [Important Definitions (Interview-Ready)](#important-definitions-interview-ready)
6. [Interview Questions (Conceptual & Output-Based)](#interview-questions-conceptual--output-based)
7. [Practice Exercises & Solutions](#practice-exercises--solutions)

---

## Lecture 6 — Arithmetic & Assignment Operators

Arithmetic operators basic maths calculations ke liye hote hain, aur Assignment operators values store aur update karne ke liye hote hain.

---

### 1. Arithmetic Operators (`+`, `-`, `*`, `/`, `%`, `**`)

#### **Addition (`+`)**
* **What is it:** Do values ko add karne ke liye use hota hai. Agar strings hain, toh unhe concatenate (jodna) karta hai.
* **Why is it used:** Numbers ko add karne ya text ko jodne ke liye.
* **Syntax:** `a + b`
* **Example:**
  ```javascript
  let sum = 10 + 5;
  let name = "JS" + " Pro";
  console.log(sum); // 15
  console.log(name); // "JS Pro"
  ```

#### **Subtraction (`-`)**
* **What is it:** Ek number se dusra number subtract karta hai.
* **Why is it used:** Difference nikalne ke liye.
* **Syntax:** `a - b`
* **Example:**
  ```javascript
  let diff = 20 - 7;
  console.log(diff); // 13
  ```

#### **Multiplication (`*`)**
* **What is it:** Do numbers ko multiply karta hai.
* **Why is it used:** Product nikalne ke liye.
* **Syntax:** `a * b`
* **Example:**
  ```javascript
  let prod = 4 * 5;
  console.log(prod); // 20
  ```

#### **Division (`/`)**
* **What is it:** Ek number ko dusre se divide karta hai aur decimal value (quotient) deta hai.
* **Why is it used:** Division perform karne ke liye.
* **Syntax:** `a / b`
* **Example:**
  ```javascript
  let div = 10 / 4;
  console.log(div); // 2.5
  ```

#### **Modulus (`%`)**
* **What is it:** Division ke baad jo **Remainder (sheshfal)** bachta hai, yeh woh return karta hai.
* **Why is it used:** Yeh check karne ke liye ki koi number kisi dusre se perfectly divisible hai ya nahi (e.g., Even/Odd check).
* **Syntax:** `a % b`
* **Example:**
  ```javascript
  let rem1 = 10 % 3; // 3 * 3 = 9, remainder 1
  let rem2 = 12 % 2; // Perfectly divisible, remainder 0
  console.log(rem1); // 1
  console.log(rem2); // 0
  ```

> 💡 **Even/Odd Checking Logic:**
> Agar `number % 2 === 0` hai, toh number **Even** hai. Agar remainder `1` hai, toh number **Odd** hai.
> ```javascript
> let num = 15;
> if (num % 2 === 0) {
>     console.log("Even");
> } else {
>     console.log("Odd"); // Output: Odd (because 15 % 2 is 1)
> }
> ```

#### **Exponentiation (`**`)**
* **What is it:** Power (ghat) nikalne ke liye use hota hai. `a ** b` matlab $a^b$ ($a$ raised to the power $b$).
* **Why is it used:** `Math.pow(a, b)` ki jagah modern short syntax.
* **Syntax:** `base ** exponent`
* **Example:**
  ```javascript
  let power = 2 ** 3; // 2 * 2 * 2
  console.log(power); // 8
  ```

---

### 2. Increment & Decrement Operators (`++`, `--`)

Yeh operators variable ki value ko **1 se badhane** ya **1 se ghatane** ke liye use hote hain. Lekin inke position se inka behaviour badal jata hai.

#### **Increment (`++`)**
* **Pre-Increment (`++x`):** Pehle value ko 1 se badhao, phir updated value ko use karo.
* **Post-Increment (`x++`):** Pehle purani value ko expression mein use karo, uske baad memory mein value ko 1 se badhao.

#### **Dry Run (Increment Example):**
```javascript
let a = 5;
let b = ++a; // Pre-increment: a becomes 6, then 6 is assigned to b.
console.log(a, b); // Output: 6, 6

let x = 5;
let y = x++; // Post-increment: 5 is assigned to y, then x becomes 6.
console.log(x, y); // Output: 6, 5
```

Let's do a tricky expression dry run:
```javascript
let p = 10;
let result = p++ + ++p; 
// Dry Run Step-by-Step:
// 1. p++ check karega. Post-increment hai.
//    - Current expression value of p++ is 10.
//    - Memory mein p badh kar 11 ho gaya.
// 2. Phir '+' operate hoga next term ke saath: ++p.
//    - ++p is pre-increment.
//    - Memory mein current p 11 hai. ++p isse badha kar 12 kar dega.
//    - Expression value of ++p is 12.
// 3. result = 10 + 12 = 22.
// 4. Final value of p is 12.
console.log(result); // Output: 22
console.log(p);      // Output: 12
```

#### **Decrement (`--`)**
* **Pre-Decrement (`--x`):** Pehle value ko 1 se ghatao, phir use karo.
* **Post-Decrement (`x--`):** Pehle use karo, phir memory mein value ko 1 se ghatao.

#### **Dry Run (Decrement Example):**
```javascript
let a = 8;
let b = --a; // Pre-decrement: a becomes 7, then 7 is assigned to b.
console.log(a, b); // Output: 7, 7

let x = 8;
let y = x--; // Post-decrement: 8 is assigned to y, then x becomes 7.
console.log(x, y); // Output: 7, 8
```

---

### 3. Assignment Operators (`=`, `+=`, `-=`, `*=`, `/=`, `%=`, `**=`)

Yeh operators variable mein value assign karne aur short-hand calculation ke liye hote hain.

| Operator | Full Form | Equivalent To | Example | Result (if let x = 10) |
| :--- | :--- | :--- | :--- | :--- |
| `=` | Simple Assignment | `x = y` | `x = 5` | `x` becomes `5` |
| `+=` | Add & Assign | `x = x + y` | `x += 5` | `x = 10 + 5` $\rightarrow$ `15` |
| `-=` | Subtract & Assign | `x = x - y` | `x -= 3` | `x = 10 - 3` $\rightarrow$ `7` |
| `*=` | Multiply & Assign | `x = x * y` | `x *= 2` | `x = 10 * 2` $\rightarrow$ `20` |
| `/=` | Divide & Assign | `x = x / y` | `x /= 2` | `x = 10 / 2` $\rightarrow$ `5` |
| `%=` | Modulus & Assign | `x = x % y` | `x %= 3` | `x = 10 % 3` $\rightarrow$ `1` |
| `**=` | Exponent & Assign | `x = x ** y` | `x **= 2` | `x = 10 ** 2` $\rightarrow$ `100` |

---

### ⚠️ Important Point & Common Mistakes in Lecture 6

1. **String + Number (Concatenation):**
   JavaScript mein `+` operator double role play karta hai. Agar ek bhi operand String hai, toh JavaScript concatenation kar deta hai.
   ```javascript
   console.log(5 + 5);      // 10 (Arithmetic Addition)
   console.log("5" + 5);    // "55" (String Concatenation)
   console.log(5 + 5 + "5");// "105" (5+5 is 10, then 10 + "5" is "105")
   console.log("5" + 5 + 5);// "555" (string "5"+5 is "55", then "55"+5 is "555")
   ```
2. **Other Arithmetic with Strings (`-`, `*`, `/`):**
   Sirf `+` concat karta hai. Baaki saare operators string ko number mein coerce (convert) karne ki koshish karte hain!
   ```javascript
   console.log("10" - 2);   // 8 (string "10" is converted to number 10)
   console.log("10" * "2"); // 20
   console.log("ten" - 2);  // NaN (Not a Number - because "ten" cannot be converted to number)
   ```

---

## Lecture 7 — Comparison & Logical Operators

Comparison operators humein batate hain ki do values ke beech kya relation hai (True ya False). Logical operators multiple comparisons ko jodne ke kaam aate hain.

---

### 1. Comparison Operators (`>`, `<`, `>=`, `<=`, `==`, `===`, `!=`, `!==`)

Yeh hamesha **Boolean value** (`true` ya `false`) return karte hain.

#### **Relational Operators (`>`, `<`, `>=`, `<=`)**
* `>` (Greater Than): `a > b` check karta hai kya $a$, $b$ se bada hai.
* `<` (Less Than): `a < b` check karta hai kya $a$, $b$ se chhota hai.
* `>=` (Greater Than or Equal to): `a >= b` check karta hai kya $a$, $b$ se bada ya barabar hai.
* `<=` (Less Than or Equal to): `a <= b` check karta hai kya $a$, $b$ se chhota ya barabar hai.

**Example:**
```javascript
console.log(10 > 5);   // true
console.log(10 >= 10); // true
console.log(5 < 3);    // false
```

---

#### **Equality Operators (`==` vs `===` and `!=` vs `!==`)**

Yeh JavaScript interview ka sabse favorite topic hai!

| Operator | Name | What it checks | Does Type Coercion? | Example |
| :--- | :--- | :--- | :--- | :--- |
| `==` | Loose Equality | Sirf **Value** check karta hai, type nahi. | **Yes** (Pehle type same karega, phir value compare karega) | `5 == "5"` $\rightarrow$ `true` |
| `===` | Strict Equality | **Value** aur **Data Type** dono check karta hai. | **No** (Agar data type alag hai, toh direct `false`) | `5 === "5"` $\rightarrow$ `false` |
| `!=` | Loose Inequality | Kya values barabar nahi hain? (Type ignore karke) | **Yes** | `5 != "5"` $\rightarrow$ `false` (barabar hain) |
| `!==` | Strict Inequality | Kya value ya type dono mein se koi ek bhi alag hai? | **No** | `5 !== "5"` $\rightarrow$ `true` |

> 🌟 **Type Coercion:**
> Jab JavaScript internally variables ka type convert kar deta hai do alag-alag data types ko compare karne ke liye, use *Type Coercion* kehte hain.
> E.g., `5 == "5"` mein JavaScript ne string `"5"` ko number `5` mein convert kiya, isliye output `true` aaya.

**Examples:**
```javascript
let num = 10;
let strNum = "10";

console.log(num == strNum);  // true  (Loose Equality: String "10" converts to Number 10)
console.log(num === strNum); // false (Strict Equality: Number and String are different types)

console.log(null == undefined);  // true  (Special rule in JS)
console.log(null === undefined); // false (Types are different: object vs undefined)
```

---

### 2. Logical Operators (`&&`, `||`, `!`)

Multiple conditions ko combine karne ke liye inka use hota hai.

#### **Logical AND (`&&`)**
* **Rule:** Jab **saare conditions true** honge, tabhi final output `true` hoga. Agar ek bhi condition `false` hui, toh output `false`.
* **Syntax:** `condition1 && condition2`

#### **Logical OR (`||`)**
* **Rule:** Agar **koi ek bhi condition true** ho gayi, toh final output `true` hoga. Output `false` tabhi hoga jab saare conditions `false` honge.
* **Syntax:** `condition1 || condition2`

#### **Logical NOT (`!`)**
* **Rule:** Yeh input value ko **ulta** kar deta hai. `true` ko `false` banata hai aur `false` ko `true`.
* **Syntax:** `!value`

---

#### **Truth Tables:**

| A | B | A && B | A \|\| B | !A |
| :---: | :---: | :---: | :---: | :---: |
| `true` | `true` | **`true`** | **`true`** | `false` |
| `true` | `false` | `false` | **`true`** | `false` |
| `false` | `true` | `false` | **`true`** | `true` |
| `false` | `false` | `false` | `false` | `true` |

**Real-world Example of Combining Conditions:**
Imagine you are building a Checkout page for an E-commerce app:
* User can checkout only if they are **logged in AND card details are valid AND (item is in stock OR user is Premium)**.

```javascript
let isLoggedIn = true;
let isCardValid = true;
let isInStock = false;
let isPremiumUser = true;

let canCheckout = isLoggedIn && isCardValid && (isInStock || isPremiumUser);
console.log("Can user checkout?", canCheckout); 
// Expression breakdown:
// true && true && (false || true)
// true && true && true => true
// Output: true
```

---

## Lecture 8 — Ternary & Modern Operators

Modern frameworks (React, Next.js) aur everyday coding mein yeh operators bohot use hote hain code ko chhota aur robust banane ke liye.

---

### 1. Ternary Operator (`? :`)
* **What is it:** Yeh shorthand syntax hai `if-else` statement ka. Ise *ternary* isliye kehte hain kyunki yeh **3 operands** leta hai.
* **Why is it used:** Single-line conditions likhne ke liye, aur React ke JSX mein dynamic UI rendering ke liye.
* **Syntax:** `condition ? expressionIfTrue : expressionIfFalse;`
* **Example:**
  ```javascript
  let age = 20;
  let access = age >= 18 ? "Access Granted" : "Access Denied";
  console.log(access); // "Access Granted"
  ```

#### **Ternary vs Normal `if-else`:**
```javascript
// Normal If-Else:
let message;
if (isLoggedIn) {
    message = "Welcome Back!";
} else {
    message = "Please Log In";
}

// Ternary Operator equivalents:
let message2 = isLoggedIn ? "Welcome Back!" : "Please Log In";
```

---

### 2. Truthy & Falsy Values

Operators padhte waqt yeh samajhna zaroori hai ki JavaScript mein kaunsi values internally `true` aur kaunsi `false` treat hoti hain.

**Falsy Values (Strictly only 8 values):**
1. `false`
2. `0` (Zero number)
3. `-0` (Negative zero)
4. `0n` (BigInt zero)
5. `""` (Empty string)
6. `null`
7. `undefined`
8. `NaN` (Not a Number)

**Truthy Values:**
In 8 values ko chhodkar bachi hui saari values **Truthy** hoti hain! (E.g., `"0"`, `"false"`, `[]` empty array, `{}` empty object).

---

### 3. Nullish Coalescing Operator (`??`)
* **What is it:** Yeh operator tab kaam aata hai jab humein fallback (default) value provide karni ho, par sirf `null` ya `undefined` ke case mein.
* **Why is it used:** `||` operator logical default ke liye use hota tha, par woh `0` aur `""` (empty string) ko bhi falsy maan kar override kar deta tha. `??` sirf `null` aur `undefined` ke liye chalta hai.
* **Syntax:** `leftExpr ?? rightExpr`

#### **Comparison: `??` vs `||` (Very Important for React/Node API responses)**
```javascript
let userScore = 0; // Value is legitimately 0

// Using OR operator (||):
let finalScoreOR = userScore || 100; 
// 0 is falsy, so it takes 100! (Error: We wanted 0 to be the score)

// Using Nullish Coalescing (??):
let finalScoreNullish = userScore ?? 100;
// 0 is not null/undefined, so it preserves 0!

console.log(finalScoreOR);      // 100
console.log(finalScoreNullish); // 0
```

---

### 4. Optional Chaining Operator (`?.`)
* **What is it:** Kisi deeply nested object ki properties ko access karte waqt agar beech ki koi property `null` ya `undefined` ho, toh yeh code ko crash (Error throwing) se bachata hai aur silently `undefined` return kar deta hai.
* **Why is it used:** APIs se aane wale data ke structure ko safe handle karne ke liye.
* **Syntax:** `object?.property` or `object?.method()`

#### **Example:**
```javascript
let user = {
    name: "Rahul",
    address: {
        city: "Delhi"
    }
};

// Agar address missing ho:
let user2 = { name: "Amit" };

// Without Optional Chaining (Will crash if address is missing):
// console.log(user2.address.city); // TypeError: Cannot read properties of undefined (reading 'city')

// With Optional Chaining:
console.log(user.address?.city);  // "Delhi"
console.log(user2.address?.city); // undefined (No crash!)
```

---

### 5. Short-Circuit Evaluation (`&&` and `||` behaviour)

JavaScript mein Logical Operators (`&&`, `||`) boolean values return karne ke bajay **actual operands** return kar sakte hain. Is behaviour ko short-circuit evaluation kehte hain.

* **AND (`&&`) Short-Circuiting:**
  - Agar pehla operand **Falsy** hai, toh aage evaluate karne ki zaroorat nahi hai (short-circuit ho jata hai), aur pehla operand hi return ho jata hai.
  - Agar pehla operand **Truthy** hai, toh dusra operand check karna padega, isliye dusra operand return hota hai.
  - *React/Next.js dynamic rendering example:* `{isLoggedIn && <Dashboard />}`

* **OR (`||`) Short-Circuiting:**
  - Agar pehla operand **Truthy** hai, toh dynamic evaluation ruk jata hai (short-circuit), aur pehla operand hi return ho jata hai.
  - Agar pehla operand **Falsy** hai, toh dusra operand return hota hai.

**Examples:**
```javascript
console.log(false && "hello"); // false (First operand is falsy, short-circuit!)
console.log("apple" && "banana"); // "banana" (First is truthy, returns second)

console.log("apple" || "banana"); // "apple" (First is truthy, short-circuits and returns it)
console.log("" || "fallback"); // "fallback" (First is falsy, returns second)
```

---

### 6. Basic Operator Precedence & Associativity

Jab ek hi line mein multiple operators hote hain, toh JS unhe kis order mein solve karta hai? Ise *Operator Precedence* kehte hain.

1. **Parentheses `()`** has the highest precedence. (Hamesha pehle solve hoga).
2. **Exponentiation `**`** (Right-to-Left evaluation).
3. **Multiplication/Division/Modulus `*`, `/`, `%`** (Left-to-Right evaluation).
4. **Addition/Subtraction `+`, `-`** (Left-to-Right evaluation).
5. **Comparison operators `<`, `>`, `==`, `===`**.
6. **Logical Operators `&&` (higher) then `||`**.
7. **Assignment Operators `=`** (Lowest precedence, Right-to-Left).

**Example:**
```javascript
let val = 10 + 5 * 2; // Multiplication has higher priority than addition.
console.log(val); // 10 + 10 = 20

let val2 = (10 + 5) * 2; // Parentheses overrides precedence.
console.log(val2); // 15 * 2 = 30
```

---

## Chapter 3 Quick Revision Section 🧠

* **Arithmetic & Assignment:**
  - `+` string ke sath concatenate karega, baaki operators string ko number bana kar mathematics apply karenge.
  - `++x` (pre) pehle value badhata hai, `x++` (post) use karne ke baad badhata hai.
  - Modulus `%` ka application prime/even/odd checking mein basic logic create karta hai.
* **Equality & Comparison:**
  - `==` only checks values (coercion is done).
  - `===` checks value + type (No coercion, highly recommended).
* **Modern Operators:**
  - `? :` is short representation of `if-else`.
  - `??` provides default fallback only for `null` and `undefined`.
  - `?.` prevents application crash when reading deep properties from undefined/null variables.
  - `&&` and `||` short-circuit on finding the definitive outcome.

---

## Important Definitions (Interview-Ready) 📝

1. **Operator vs Operand:**
   - **Operator:** Ek special symbol jo calculations perform karta hai (e.g., `+`, `*`, `===`).
   - **Operand:** Woh values jinpe operators apply hote hain (e.g., in expression `5 + 10`, `5` and `10` are operands).
2. **Unary vs Binary vs Ternary Operators:**
   - **Unary:** Jisme sirf 1 operand chahiye (e.g., `++x`, `!y`).
   - **Binary:** Jisme 2 operands chahiye (e.g., `a + b`, `x === y`).
   - **Ternary:** Jisme 3 operands chahiye (e.g., `condition ? expr1 : expr2`).
3. **Type Coercion:**
   - Internal implicit process jisme JavaScript automatically ek data type ko dusre data type mein convert kar deta hai taaki comparison ya calculation successfully run ho sake.
4. **Short-Circuit Evaluation:**
   - Logical operators (`&&`, `||`) ka yeh behavior jahan second argument ko tabhi evaluate kiya jata hai jab first argument se overall result satisfy nahi hota.
5. **Nullish Coalescing:**
   - Ek modern comparison operator (`??`) jo default values assign karne ke kaam aata hai, strictly checking only for `null` and `undefined` to prevent unexpected falsy evaluation of `0` and `""`.

---

## Interview Questions (Conceptual & Output-Based) 💬

### Q1. What is the difference between `==` and `===`?
**Answer:**
`==` (Loose Equality) checks only values and performs implicit type conversion (type coercion) before comparison.
`===` (Strict Equality) checks both value and data type without any type conversion.
```javascript
5 == "5"  // true
5 === "5" // false
```

### Q2. Explain the difference between `++x` and `x++` with code.
**Answer:**
`++x` is pre-increment: Value is incremented by 1 first, and then returned or assigned.
`x++` is post-increment: Current value is returned or assigned first, and then it is incremented in memory.
```javascript
let a = 5;
let b = a++; // b gets 5, then a becomes 6
let c = ++a; // a becomes 7, then c gets 7
```

### Q3. What is the output of `console.log(1 < 2 < 3)` and `console.log(3 > 2 > 1)`?
**Answer:**
* `1 < 2 < 3` $\rightarrow$ `true`
  - Step 1: `1 < 2` evaluates to `true`.
  - Step 2: `true < 3` evaluates. `true` is coerced to `1`.
  - Step 3: `1 < 3` evaluates to `true`.
* `3 > 2 > 1` $\rightarrow$ `false`
  - Step 1: `3 > 2` evaluates to `true`.
  - Step 2: `true > 1` evaluates. `true` is coerced to `1`.
  - Step 3: `1 > 1` evaluates to `false`.

### Q4. How does `??` differ from `||` when setting default configurations?
**Answer:**
`||` evaluates based on falsy check. If a value is `0` or `""` (empty string), it will trigger the fallback.
`??` evaluates strictly based on nullish check (`null` or `undefined`). It preserves `0` or `""` as valid inputs.
```javascript
let speed = 0;
let currentSpeed1 = speed || 50; // 50
let currentSpeed2 = speed ?? 50; // 0
```

### Q5. What is Optional Chaining (`?.`) and how does it prevent errors in APIs?
**Answer:**
Optional chaining allows safe reading of deep property paths. If any item in the chain is nullish (`null` or `undefined`), it stops evaluating and returns `undefined` instead of throwing a `TypeError`.
```javascript
let response = {}; 
console.log(response.user?.profile?.avatar); // undefined (No crash!)
// Without ?. it would throw: Cannot read properties of undefined
```

### Q6. What is the output of `console.log(typeof NaN === "number")`?
**Answer:**
`true`. `NaN` stands for "Not a Number", but technically its data type in JavaScript is a numeric type.

### Q7. What will be the output of `console.log("5" - "2" + "3")`?
**Answer:**
`"33"`.
* Step 1: `"5" - "2"` $\rightarrow$ Subtraction cannot be applied to strings, so both are converted to numbers. $5 - 2 = 3$.
* Step 2: `3 + "3"` $\rightarrow$ One operand is a string, so addition acts as string concatenation: `3` combined with `"3"` becomes `"33"`.

### Q8. What is the result of `console.log(![])` and `console.log(!{})`?
**Answer:**
`false` and `false`.
Empty array `[]` and empty object `{}` are both **truthy** values. Applying the logical NOT operator (`!`) to a truthy value returns `false`.

### Q9. Explain how short-circuit evaluation works in `let user = isLoggedIn && userName`.
**Answer:**
If `isLoggedIn` is `false` (falsy), JavaScript immediately stops executing further (short-circuits) and returns `false`. `userName` is not read.
If `isLoggedIn` is `true` (truthy), it evaluates and returns the second expression `userName`.

### Q10. What is the output of the following code?
```javascript
let x = 5;
let y = "5";
console.log(x !== y);
```
**Answer:**
`true`.
`!==` is Strict Inequality. Since `x` is a number and `y` is a string, their types are different. Hence, they are strictly unequal, returning `true`.

### Q11. Predict the output: `console.log(0 && "Hello")` and `console.log(0 || "Hello")`.
**Answer:**
* `0 && "Hello"` $\rightarrow$ `0` (Since `0` is falsy, AND short-circuits and returns the first value).
* `0 || "Hello"` $\rightarrow$ `"Hello"` (Since `0` is falsy, OR moves to the next operand and returns it).

### Q12. Explain operator associativity.
**Answer:**
Associativity defines the order in which operators of the same precedence level are evaluated.
* **Left-to-Right:** (Most operators like `+`, `-`, `*`, `/`)
  - `a + b + c` is solved as `(a + b) + c`
* **Right-to-Right:** (Assignment and Exponentiation)
  - `a = b = c` is solved as `a = (b = c)`
  - `2 ** 3 ** 2` is solved as `2 ** (3 ** 2)` $\rightarrow$ `2 ** 9 = 512`.

### Q13. Predict output: `console.log("" ?? "Default")` and `console.log(undefined ?? "Default")`.
**Answer:**
* `"" ?? "Default"` $\rightarrow$ `""` (Empty string is a falsy value but NOT nullish, so it is preserved).
* `undefined ?? "Default"` $\rightarrow$ `"Default"` (Since the value is undefined, fallback is triggered).

### Q14. What does `+true` and `+false` evaluate to?
**Answer:**
`1` and `0`.
The unary plus operator (`+`) attempts to convert its operand to a number. `true` becomes `1` and `false` becomes `0`.

### Q15. Predict output: `console.log(10 + 20 + "30")`.
**Answer:**
`"3030"`.
First, `10 + 20` executes (both are numbers, so standard addition) $\rightarrow$ `30`.
Then, `30 + "30"` executes (one is string, so concatenation) $\rightarrow$ `"3030"`.

### Q16. Predict output: `console.log("30" + 10 + 20)`.
**Answer:**
`"301020"`.
First, `"30" + 10` executes $\rightarrow$ `"3010"` (concatenation).
Then, `"3010" + 20` executes $\rightarrow$ `"301020"` (concatenation).

### Q17. Predict output:
```javascript
let a = 1;
let b = 2;
let c = a > b ? ++a : b++;
console.log(a, b, c);
```
**Answer:**
`1, 3, 2`.
* Condition `a > b` ($1 > 2$) is `false`.
* Since it's false, the ternary operator executes the expression after the colon: `b++` (post-increment).
* The expression value returned is the current value of `b` (which is `2`), and then `b` increments in memory to `3`.
* Therefore, `c` gets the value `2`.
* `a` remains `1` (because `++a` was never executed).
* `b` is `3`.

### Q18. What is the output of `console.log("2" * "3" - 1)`?
**Answer:**
`5`.
Because multiplication `*` and subtraction `-` coerce strings to numbers. `"2" * "3"` becomes $2 \times 3 = 6$. Then $6 - 1 = 5$.

### Q19. What will happen here?
```javascript
let val = null;
console.log(val?.name ?? "No Name");
```
**Answer:**
`"No Name"`.
`val?.name` uses optional chaining. Since `val` is `null`, it returns `undefined` safely. Then `undefined ?? "No Name"` uses nullish coalescing to fall back to `"No Name"`.

### Q20. Predict the output of:
```javascript
let count = 0;
console.log(count++ + ++count);
```
**Answer:**
`2`.
* Step 1: `count++` (returns `0`, then `count` becomes `1` in memory).
* Step 2: `++count` (increments `count` from `1` to `2` in memory, then returns `2`).
* Expression: `0 + 2 = 2`.

---

## Practice Exercises & Solutions 💻

Create a file named `practice.js` and run these exercises to build confidence.

### Exercise 1: Even or Odd Checker
* **Question:** Write a function `checkEvenOdd(num)` that uses the Modulus operator to return `"Even"` or `"Odd"`.
* **Solution:**
  ```javascript
  function checkEvenOdd(num) {
      return num % 2 === 0 ? "Even" : "Odd";
  }
  console.log(checkEvenOdd(24)); // Output: Even
  console.log(checkEvenOdd(17)); // Output: Odd
  ```

### Exercise 2: Tricky Calculations
* **Question:** Calculate the final values of `x`, `y`, and `z` manually, then write code to verify.
  ```javascript
  let x = 10;
  let y = x++ + ++x - --x + x--;
  ```
* **Dry Run:**
  1. `x` starts at `10`.
  2. `x++` uses `10`, then `x` becomes `11`.
  3. `++x` increments `x` to `12`, then uses `12`.
  4. `--x` decrements `x` to `11`, then uses `11`.
  5. `x--` uses `11`, then `x` becomes `10`.
  6. Expression calculation: `10 + 12 - 11 + 11` $\rightarrow$ `22`.
* **Solution:**
  ```javascript
  let x = 10;
  let y = x++ + ++x - --x + x--;
  console.log("x:", x); // 10
  console.log("y:", y); // 22
  ```

### Exercise 3: User Access Gate
* **Question:** Write an expression to check if a user can buy alcohol. Requirements: User must be 18 or older, must have a driving license, and must not be intoxicated (so `isSober` must be `true`).
* **Solution:**
  ```javascript
  let age = 21;
  let hasLicense = true;
  let isSober = true;

  let canBuy = (age >= 18) && hasLicense && isSober;
  console.log("Can buy?", canBuy ? "Yes" : "No"); // Output: Yes
  ```

### Exercise 4: Configuration Settings fallback
* **Question:** Write code that checks configuration inputs from a user. If `maxSpeed` is provided (even if it is `0`), keep it. If it is null or undefined, fall back to `120`.
* **Solution:**
  ```javascript
  function getSpeedLimit(userSpeed) {
      return userSpeed ?? 120;
  }
  console.log(getSpeedLimit(0));         // Output: 0
  console.log(getSpeedLimit(null));      // Output: 120
  console.log(getSpeedLimit(80));        // Output: 80
  console.log(getSpeedLimit(undefined)); // Output: 120
  ```

### Exercise 5: Reading Nested Profile Safely
* **Question:** Given an object `let response = { status: 200 }`, fetch `response.data.user.settings.theme` using optional chaining so that the program doesn't throw an error if the object hierarchy is missing.
* **Solution:**
  ```javascript
  let response = { status: 200 };
  let theme = response.data?.user?.settings?.theme ?? "light-theme";
  console.log("Theme setting:", theme); // Output: light-theme
  ```

---

Good job! You have completed Chapter 3. Practice these questions and try changing the values to check how the expressions respond. Happy Coding! 💻🚀
