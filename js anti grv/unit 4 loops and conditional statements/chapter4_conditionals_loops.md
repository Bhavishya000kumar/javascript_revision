# Unit 4: Conditional Statements and Loops in JavaScript

Welcome to Unit 4! Iss complete guide mein hum Conditional Statements aur Loops dono ko basic level se interview level tak simple Hinglish mein samjhenge. Sabhi concepts ke real-world examples, step-by-step dry runs aur practical practice code files yahan cover honge.


# PART 1: CONDITIONAL STATEMENTS

Conditional statements humare code ko decide karne ki power dete hain. Jab humein alag-alag situations mein alag-alag kaam karna ho, tab conditionals ka use hota hai.


## 1. The if Statement

What is it?
if statement JavaScript ka sabse basic decision-making block hai. Yeh check karta hai ki koi condition sahi (true) hai ya galat (false).

Why is it needed?
Agar humein koi code tabhi chalana ho jab koi condition true ho, toh hum if statement use karte hain. Jaise agar account mein balance ho, tabhi money withdraw ho sake.

How does it work?
JavaScript condition ko evaluate karta hai. Agar condition truthy hoti hai, toh curly braces `{}` ke andar ka code chalta hai, nahi toh skip ho jata hai.

Syntax
```javascript
if (condition) {
    // yeh code tabhi chalega jab condition true hogi
}
```

Simple example
```javascript
let isPremium = true;

if (isPremium) {
    console.log("Welcome Premium User! You get 20% discount.");
}
```

Output
Welcome Premium User! You get 20% discount.

Step-by-step explanation
Yahan isPremium ki value true hai. if block check karta hai `if (isPremium)`. Condition match hone par console.log trigger ho jata hai.

Important points
Condition hamesha parenthesis `()` ke andar likhi jati hai. Agar condition body single line ki hai toh curly brackets optional hote hain, lekin unhe lagana good practice hai.

Common mistakes
Assigment operator `=` ko comparison operator `==` ki jagah if ke andar use kar dena.
```javascript
// Galti:
if (isPremium = false) { } // Yeh isPremium ko false assign kar dega aur if block nahi chalega.
```


## 2. The else Statement

What is it?
else statement if ke saath backup plan ki tarah kaam karta hai.

Why is it needed?
Jab condition false ho, aur hum chahte hain ki kuch doosra code chale, tab else ka use hota hai. Jaise: Agar input sahi hai toh login karo, NAI TOH error show karo.

How does it work?
Agar if ki condition false hoti hai, toh control automatically else block ke andar chale jata hai.

Syntax
```javascript
if (condition) {
    // code jab condition true ho
} else {
    // code jab condition false ho
}
```

Simple example
```javascript
let age = 15;

if (age >= 18) {
    console.log("You can vote!");
} else {
    console.log("Too young to vote.");
}
```

Output
Too young to vote.

Step-by-step explanation
age ki value 15 hai. `15 >= 18` false hai, isliye code if block ko chhodkar direct else block mein jata hai aur "Too young to vote" print karta hai.

Important points
else hamesha if ke turant baad hi likha ja sakta hai, else ko akele use nahi kiya ja sakta.

Common mistakes
else ke aage fir se condition likh dena bina `if` lagaye.
```javascript
// Galti:
else (age < 18) { } // correct syntax: else if (age < 18) ya fir simple else
```


## 3. The else if Statement

What is it?
else if multiple options mein se decision lene ke liye use hota hai.

Why is it needed?
Real life mein decisions sirf Yes/No (if-else) nahi hote. Kayi baar multiple conditions check karni padti hain, jaise Traffic signal: Red (Stop), Yellow (Wait), Green (Go).

How does it work?
JS pehle if condition check karega. Agar woh false hai, toh next else if check karega. Jis condition par use match milega, woh wahi block run karke bahar nikal jayega.

Syntax
```javascript
if (cond1) {
    // code 1
} else if (cond2) {
    // code 2
} else {
    // code 3
}
```

Simple example
```javascript
let signal = "yellow";

if (signal === "red") {
    console.log("Stop!");
} else if (signal === "yellow") {
    console.log("Wait/Slow down!");
} else if (signal === "green") {
    console.log("Go!");
} else {
    console.log("Invalid signal");
}
```

Output
Wait/Slow down!

Step-by-step explanation
Pehle checks `signal === "red"` (false). Fir checks else if `signal === "yellow"` (true). Yeh block run hota hai aur aage ke conditions check nahi hote.

Important points
else if hum kitne bhi laga sakte hain, aur aakhir mein ek optional else block rakh sakte hain default action ke liye.


## 4. Nested if

What is it?
Nested if ka matlab hai ek if block ke andar doosra if block banana.

Why is it needed?
Jab ek condition true hone ke baad, humein uske andar ek aur condition check karni ho. Jaise: Pehle check karo user logged in hai ya nahi, aur agar logged in hai toh check karo ki admin hai ya customer.

How does it work?
Outer if condition evaluate hoti hai. Agar true hai, toh program inner if condition ko check karta hai.

Syntax
```javascript
if (outerCondition) {
    if (innerCondition) {
        // code
    }
}
```

Simple example
```javascript
let isMember = true;
let accountBalance = 150;

if (isMember) {
    if (accountBalance >= 100) {
        console.log("Access VIP Area granted!");
    } else {
        console.log("Insufficient VIP balance.");
    }
}
```

Output
Access VIP Area granted!

Step-by-step explanation
Program outer block check karta hai `isMember` which is true. Control goes inside. Inner block checks `accountBalance >= 100` (150 >= 100) which is true. VIP access is granted.

Important points
Bohot zyada levels of nesting (deep nesting) code readability ko kharab karti hai. Aise cases mein Logical Operators (`&&`, `||`) use karke conditions ko combine kiya ja sakta hai.


## 5. Multiple Conditions (Logical Operators with Conditionals)

What is it?
if-else statements mein multiple rules check karne ke liye logic operators (`&&`, `||`) ko ek sath use karna.

Why is it needed?
Jab humein complex checks lagane hon, jaise ticket buy karne ke liye student status AND age limit dono dynamic criteria match hone chahiye.

How does it work?
Logical AND (`&&`) requires both conditions to be true. Logical OR (`||`) checks if at least one is true.

Simple example
```javascript
let student = true;
let age = 20;

if (student && age < 25) {
    console.log("Discount Applied!");
}
```

Output
Discount Applied!


## 6. The switch Statement

What is it?
switch statement ek efficient tareeqa hai multiple variable checks ko evaluate karne ka, khaaskar jab hum exact match check kar rahe hon.

Why is it needed?
Agar humein ek hi variable ko bohot saari single values se compare karna ho, toh if-else-if likhne ke bajay switch ka use karna code ko clean banata hai.

How does it work?
switch variable ko cases ke values se compare karta hai. Jo case match hota hai, wahan se code execution start hoti hai jab tak `break` keyword nahi mil jata.

Syntax
```javascript
switch (variable) {
    case value1:
        // code
        break;
    case value2:
        // code
        break;
    default:
        // default code
}
```

Simple example
```javascript
let dayNumber = 3;

switch (dayNumber) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}
```

Output
Wednesday

Step-by-step explanation
dayNumber ki value 3 hai. JS switches through cases: check case 1 (no match), case 2 (no match), case 3 (match). "Wednesday" print hota hai. `break` lagne se control switch block se turant bahar aa jata hai.

Important points
Hamesha har case ke end mein `break` lagana zaroori hai. switch equality checking ke liye strict comparison (`===`) ka use karta hai.

Common mistakes
`break` lagana bhool jana. Agar `break` nahi lagaya toh next cases bina condition match kiye execute hote chalenge (isse **Fall-through** kehte hain).


## 7. Ternary Operator

What is it?
if-else ka single line representation syntax.

Why is it needed?
Choti conditional assignments ko direct and cleanly check karne ke liye.

Syntax
`condition ? expressionIfTrue : expressionIfFalse;`

Simple example
```javascript
let score = 90;
let passStatus = score >= 50 ? "Passed" : "Failed";
console.log(passStatus);
```

Output
Passed


## 8. Practical Examples of Conditionals

Even or Odd Number
```javascript
let n = 22;
if (n % 2 === 0) {
    console.log(n + " is Even");
} else {
    console.log(n + " is Odd");
}
```

Positive, Negative or Zero
```javascript
let val = -5;
if (val > 0) {
    console.log("Positive");
} else if (val < 0) {
    console.log("Negative");
} else {
    console.log("Zero");
}
```

Largest of Three Numbers
```javascript
let num1 = 12;
let num2 = 45;
let num3 = 30;
let largest;

if (num1 >= num2 && num1 >= num3) {
    largest = num1;
} else if (num2 >= num1 && num2 >= num3) {
    largest = num2;
} else {
    largest = num3;
}
console.log("Largest number is: " + largest);
```

Grade Calculator
```javascript
let marks = 85;

if (marks >= 90) {
    console.log("Grade: A+");
} else if (marks >= 80) {
    console.log("Grade: A");
} else if (marks >= 70) {
    console.log("Grade: B");
} else {
    console.log("Grade: C/Fail");
}
```

Login Condition
```javascript
let username = "admin";
let password = "123";

if (username === "admin" && password === "123") {
    console.log("Login Successful!");
} else {
    console.log("Invalid credentials");
}
```


---


# PART 2: LOOPS IN JAVASCRIPT

Loops humein bina repetitive code likhe, ek hi task ko baar-baar repeat karne ki freedom dete hain.


## 1. The for Loop

What is it?
for loop ek control flow statement hai jisme loop running count predefined format mein structured hota hai.

Why is it needed?
Jab humein pehle se pata ho ki koi code kitni baar (exact number of times) repeat karna hai, tab for loop use karna best option hota hai.

How does it work?
for loop 3 steps pe kaam karta hai:
1. **Initialization:** Sabse pehle counter variable banta hai. (Sirf ek baar chalta hai).
2. **Condition:** Check hoti hai. Agar true hai, toh loop body chalegi. False hone par loop khatam.
3. **Update:** Loop body execute hone ke baad counter update (increment/decrement) hota hai, aur wapas Step 2 (Condition check) par control jata hai.

Syntax
```javascript
for (initialization; condition; update) {
    // loop body
}
```

Simple example
```javascript
for (let i = 1; i <= 3; i++) {
    console.log("Hello, i is: " + i);
}
```

Output
Hello, i is: 1
Hello, i is: 2
Hello, i is: 3

Dry Run Table
Let's see step-by-step what happens internally:

| Step | i value | Condition (i <= 3) | Console Output | Update step (i++) |
| :--- | :--- | :--- | :--- | :--- |
| 1 | 1 | 1 <= 3 (True) | Prints "Hello, i is: 1" | i becomes 2 |
| 2 | 2 | 2 <= 3 (True) | Prints "Hello, i is: 2" | i becomes 3 |
| 3 | 3 | 3 <= 3 (True) | Prints "Hello, i is: 3" | i becomes 4 |
| 4 | 4 | 4 <= 3 (False) | Loop breaks, stops here | - |

Important points
Counter variable ko block-scope dynamic let keyword ke sath declare karna standard modern JS code rules hain.

Common mistakes
Condition na likhna ya aisi condition likhna jo hamesha true ho. Isse loop kabhi end nahi hota aur browser hanging error trigger karta hai jise **Infinite Loop** kehte hain.
```javascript
// Galti (Infinite Loop):
for (let i = 1; i >= 1; i++) { } // i hamesha 1 se bada rahega!
```


## 2. The while Loop

What is it?
while loop check checks perform karta hai jab tak test condition true ho.

Why is it needed?
Jab humein pehle se exact numbers count pata na ho ki loop kitni baar chalana hai, balki loop chalne ki dependency condition par ho. E.g., User jab tak wrong credentials daale, tab tak input warning trigger karte raho.

How does it work?
Program pehle condition check karta hai. Agar true hai, toh control inner body run karta hai. Internal body execution ke baad fir se condition check hoti hai.

Syntax
```javascript
while (condition) {
    // code
    // variable update/change statement (warna infinite loop ban jayega)
}
```

Simple example
```javascript
let count = 1;

while (count <= 3) {
    console.log("Count is: " + count);
    count++; // dynamic increment
}
```

Output
Count is: 1
Count is: 2
Count is: 3

Step-by-step explanation
count variable initialize hua `count = 1`. condition check hui `1 <= 3` is true. System message print kiya aur variable update statements ne `count++` se value 2 kiya. Loop tab tak chalega jab tak `count = 4` ho kar condition state mismatch nahi ho jati.


## 3. The do...while Loop

What is it?
do...while loop while loop ka ek special variation hai, jo check condition check karne se pehle loop block ko kam-se-kam **ek baar zaroori chalta hai**.

Why is it needed?
Kuch scenarios mein humein pehle block run karna hota hai aur checking process baad mein execute karni hoti hai. Jaise game start menu display, ya interactive text prompts.

How does it work?
Pehle loop body bina condition check kiye direct execute hoti hai. Uske baad condition evaluate hoti hai. Agar true hai, toh dubara chalta hai, else stop ho jata hai.

Syntax
```javascript
do {
    // code block
    // update state
} while (condition);
```

Simple example
```javascript
let num = 10;

do {
    console.log("This will run at least once!");
    num++;
} while (num < 5);
```

Output
This will run at least once!

Step-by-step explanation
Hum dekh sakte hain ki `num = 10` hai aur condition `num < 5` false hai. Phir bhi, output print hua. Kyunki do...while pehle code run karta hai, uske baad condition check karta hai.


## Difference between while and do...while

* **while loop:**
  - Ise Entry-Controlled Loop kehte hain.
  - Condition check pehle hoti hai, loop body bad mein chalti hai.
  - Agar first time condition false ho, toh code ek baar bhi nahi chalega.

* **do...while loop:**
  - Ise Exit-Controlled Loop kehte hain.
  - Loop body pehle chalti hai, condition validation aakhir mein hoti hai.
  - Condition starting mein false ho toh bhi, code kam-se-kam **ek baar zaroori chalta hai**.


## 4. Loop Control Statements: break and continue

### **break**
* **What is it:** break keyword loop execution ko bich mein hi **forcefully stop** karke use poori tarah terminate kar deta hai.
* **Syntax:** `break;`
* **Example:**
  ```javascript
  for (let i = 1; i <= 5; i++) {
      if (i === 3) {
          break; // Stop immediately
      }
      console.log(i);
  }
  ```
* **Output:**
  1
  2

---

### **continue**
* **What is it:** continue keyword loop ke current iteration ko skip kar deta hai aur control direct next iteration update step par transfer kar deta hai.
* **Syntax:** `continue;`
* **Example:**
  ```javascript
  for (let i = 1; i <= 5; i++) {
      if (i === 3) {
          continue; // Skip 3
      }
      console.log(i);
  }
  ```
* **Output:**
  1
  2
  4
  5


## 5. Nested Loops

What is it?
Nested loops ka matlab hai ek loop block ke andar doosra loop define karna.

Why is it needed?
Multi-dimensional operations coordinate karne ke liye. Jaise Tables, Matrices coordinates, patterns print karna, grid structure data read karna.

Simple example
```javascript
for (let i = 1; i <= 2; i++) {
    for (let j = 1; j <= 2; j++) {
        console.log(`i is: ${i}, j is: ${j}`);
    }
}
```

Output
i is: 1, j is: 1
i is: 1, j is: 2
i is: 2, j is: 1
i is: 2, j is: 2

Dry run explanation
Outer loop sets `i = 1`. Control moves to inner loop. Inner loop starts and executes completely (`j = 1` then `j = 2`). Post completion of inner loops, outer loop increments to `i = 2` and restarts the inner loop sequence again.


---


# 💻 PRACTICAL LOOPS PRACTICE EXERCISES

## 1. Patterns Drawing

Star Pattern (Right Angle Triangle)
```javascript
// Drawing triangle pattern
let rows = 4;
for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += "* ";
    }
    console.log(line);
}
```
Output
* 
* * 
* * * 
* * * * 

---

## 2. Number Problems

Sum of First N Numbers
```javascript
let target = 5;
let totalSum = 0;
for (let i = 1; i <= target; i++) {
    totalSum += i;
}
console.log("Sum: " + totalSum);
```
Output
Sum: 15 (1+2+3+4+5)

---

Factorial of a Number
```javascript
let num = 5;
let result = 1;
for (let i = 1; i <= num; i++) {
    result *= i;
}
console.log("Factorial is: " + result);
```
Output
Factorial is: 120 (1*2*3*4*5)

---

Prime Number Checking
```javascript
let targetNumber = 17;
let isPrime = true;

if (targetNumber <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < targetNumber; i++) {
        if (targetNumber % i === 0) {
            isPrime = false;
            break;
        }
    }
}
console.log("Is prime?", isPrime);
```
Output
Is prime? true

---

Reverse a Number
```javascript
let original = 1234;
let reversed = 0;

while (original > 0) {
    let digit = original % 10;
    reversed = (reversed * 10) + digit;
    original = Math.floor(original / 10);
}
console.log("Reversed: " + reversed);
```
Output
Reversed: 4321

---

Counting Numbers (Even and Odd filter)
```javascript
let odds = 0;
let evens = 0;

for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        evens++;
    } else {
        odds++;
    }
}
console.log("Evens count: " + evens + ", Odds count: " + odds);
```
Output
Evens count: 5, Odds count: 5


---


# 🧠 QUICK REVISION SUMMARY

* **Conditionals:**
  - `if` triggers condition validation.
  - `else if` expands checking options logic.
  - `else` handles default condition failure.
  - `switch` evaluates matches cleanly using strict equivalence (`===`).
  - Ternary operator (`? :`) behaves as inline dynamic assignment shorthand.

* **Loops:**
  - `for` loop manages counter initialization, conditional constraint and update statement natively.
  - `while` loop checks condition first, and then executes (pre-tested).
  - `do...while` loop executes code first, then checks validation constraints (post-tested). Run at least once.
  - `break` stops loop operations; `continue` skips current cycle to trigger next.


---


# 📝 IMPORTANT DEFINITIONS (INTERVIEW-READY)

1. **Conditional Statements:** Blocks of code used to dictate the execution path of a program depending on whether custom test logic returns truthy or falsy.
2. **Infinite Loop:** A logical loop condition structure where the test parameter fails to reach its exit state, forcing the loop to run indefinitely and drain system performance.
3. **Switch Fall-through:** A scenario in switch statements where omitting a `break` keyword causes the execution flow to run consecutive cases regardless of match success.
4. **Loop Control Statements:** Specific instruction keys (`break` and `continue`) used to override default loop cycle flows.
5. **Nested Loop:** Creating a loop cycle inside another loop block, generating multi-dimensional calculation indexes (commonly $O(N^2)$ time complexity).


---


# 💬 IMPORTANT INTERVIEW QUESTIONS & ANSWERS

### Q1. What is the difference between `if-else` and `switch`?
**Ans:** 
`if-else` handles range conditions (e.g., `score > 80`) and checks complex boolean logic combined with operations. 
`switch` compares a variable to static constant case values using strict validation (`===`). It is generally cleaner for multiple exact checks.

### Q2. What is switch fall-through and how do we prevent it?
**Ans:** Fall-through happens when we omit the `break` keyword after a matching case block. The interpreter continues executing code of downstream cases. We prevent it by putting `break;` at the end of each case block.

### Q3. Why do we declare counters in loops using `let` instead of `var`?
**Ans:** `let` provides block scope. This ensures that the counter variable (like `i`) exists only inside the loop container. `var` creates function scope, which leaks the counter variable outside the loop block and can lead to bugs.

### Q4. What happens when a conditional check contains truthy values like `[]` or `{}`?
**Ans:** The conditional block evaluates to true because JavaScript registers arrays and objects as truthy elements.

### Q5. What is the difference between while and do-while loop?
**Ans:** while loop checks the condition before executing code. If the condition starts false, it runs 0 times. do-while executes the loop body once before checking the condition. Even if the condition is false, it runs at least 1 time.

### Q6. What is the difference between break and continue?
**Ans:** `break` instantly halts loop execution and exits the loop block completely. `continue` only interrupts the current iteration, skipping the rest of its code and jumping to the next cycle calculation block.

### Q7. Can we use multiple conditions inside a switch case statement?
**Ans:** Standard cases evaluate unique equality matches. However, we can group cases (multi-cases) together without break lines to apply the same operation for multiple conditions.
```javascript
switch (animal) {
    case "dog":
    case "cat":
        console.log("Pet animal");
        break;
}
```

### Q8. Predict the output of this code:
```javascript
let i = 0;
while (i < 3) {
    if (i === 1) {
        continue;
    }
    console.log(i);
    i++;
}
```
**Ans:** Infinite loop! When `i` is 1, the program hits `continue` which skips the increment code `i++`. The variable `i` remains 1 forever, leading to an infinite cycle.

### Q9. Predict output:
```javascript
if ("0") {
    console.log("True block");
} else {
    console.log("False block");
}
```
**Ans:** "True block". The string `"0"` is non-empty and evaluates to a truthy state.

### Q10. What is the difference between a loop condition returning `null` vs `false`?
**Ans:** Under boolean evaluation, both coerce to falsy states and terminate loop execution.

### Q11. Explain what is nesting limits and why we should avoid deep nesting.
**Ans:** Deep nesting is nesting code blocks multiple levels down. It degrades code readability and structure (often called the "pyramid of doom"). Developers resolve it by using logical checks or extracting helper functions.

### Q12. Predict output:
```javascript
for (let i = 0; i < 3; i++) {
    // no code
}
console.log(i);
```
**Ans:** ReferenceError: `i` is not defined. Since `i` was declared with block-scoped `let`, it is inaccessible outside the for loop block.

### Q13. Predict output:
```javascript
let i = 0;
for (; i < 2; ) {
    console.log(i);
    i++;
}
```
**Ans:** 
0
1
This code compiles successfully. Initialization and update statements in `for` loops are optional if managed elsewhere.

### Q14. What will happen if we don't write update statement in a while loop?
**Ans:** The loop condition remains unchanged, resulting in an infinite loop that can cause browser crashes.

### Q15. Predict output:
```javascript
let count = 0;
do {
    console.log("Inside");
    count++;
} while (count < 0);
```
**Ans:** "Inside" (Printed once). The do-while loop executes code block before checking if `count < 0`.

### Q16. Predict output:
```javascript
for (let i = 0; i < 5; i++) {
    if (i === 2) break;
    console.log(i);
}
```
**Ans:**
0
1
The loop exits as soon as `i === 2`.

### Q17. Predict output:
```javascript
for (let i = 0; i < 3; i++) {
    if (i === 1) continue;
    console.log(i);
}
```
**Ans:**
0
2
The program skips printing 1 due to the `continue` statement.

### Q18. How can we break out of nested loops in JavaScript?
**Ans:** By using **labeled statements**. We prefix the outer loop with a label and refer to that label in our break call.
```javascript
outerLoop: for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
        if (i === 1 && j === 1) {
            break outerLoop;
        }
    }
}
```

### Q19. Predict output:
```javascript
let x = 1;
switch (x) {
    case "1":
        console.log("String match");
        break;
    case 1:
        console.log("Number match");
        break;
}
```
**Ans:** "Number match". Switch uses strict validation (`===`), which prevents matching variable `1` (number) with case `"1"` (string).

### Q20. What is the output of `console.log(typeof switch)`?
**Ans:** SyntaxError. `switch` is a reserved JavaScript keyword and cannot be processed in expressions.


---


# 💻 PRACTICE QUESTIONS & PRACTICE CODE

## Question 1: Check Number Signs
* **Description:** Check whether an input integer is Positive, Negative, or Zero.
* **Solution:**
  ```javascript
  function checkSign(num) {
      if (num > 0) {
          return "Positive";
      } else if (num < 0) {
          return "Negative";
      } else {
          return "Zero";
      }
  }
  console.log(checkSign(45));  // Output: Positive
  console.log(checkSign(-12)); // Output: Negative
  console.log(checkSign(0));   // Output: Zero
  ```

## Question 2: Find Max of Three Numbers
* **Description:** Evaluate three numbers and output the largest.
* **Solution:**
  ```javascript
  function findMax(a, b, c) {
      if (a >= b && a >= c) {
          return a;
      } else if (b >= a && b >= c) {
          return b;
      } else {
          return c;
      }
  }
  console.log("Largest of 10, 40, 20 is: " + findMax(10, 40, 20)); // Output: 40
  ```

## Question 3: Simple Grading System
* **Description:** Print Grade relative to input scores (Grade A for score >= 80, Grade B for score >= 60, and Grade C otherwise).
* **Solution:**
  ```javascript
  function getGrade(score) {
      if (score >= 80) {
          return "Grade A";
      } else if (score >= 60) {
          return "Grade B";
      } else {
          return "Grade C";
      }
  }
  console.log("Score 75 grade is: " + getGrade(75)); // Output: Grade B
  ```

## Question 4: Factorial Calculation Loop
* **Description:** Calculate the factorial value of a number using a loop.
* **Solution:**
  ```javascript
  function getFactorial(num) {
      let fact = 1;
      for (let i = 1; i <= num; i++) {
          fact *= i;
      }
      return fact;
  }
  console.log("Factorial of 6 is: " + getFactorial(6)); // Output: 720
  ```

## Question 5: Sum of Odd Numbers in Range
* **Description:** Sum all odd integers from 1 to 15.
* **Solution:**
  ```javascript
  let sum = 0;
  for (let i = 1; i <= 15; i++) {
      if (i % 2 !== 0) {
          sum += i;
      }
  }
  console.log("Sum of odd numbers (1 to 15): " + sum); // Output: 64
  ```
