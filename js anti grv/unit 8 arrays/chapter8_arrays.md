# Unit 8: Arrays in JavaScript

Welcome to Unit 8! Iss chapter mein hum JavaScript Arrays ko standard zero level se interview/advanced level tak cover karenge. Sabhi concepts, methods aur algorithms ko simple Hinglish mein dry runs ke sath cover kiya gaya hai.


# PART 1: ARRAY BASICS

Arrays variables value arrays blocks multiple values single variable storage locations coordinate.


## 1. Array Kya Hai?

What is it?
Array ek special variables object block container hota hai, jo ek sath multiple values (elements) ko store kar sakta hai.

Why arrays are needed?
Agar humein 100 students ke roll numbers store karne hon, toh hum 100 alag-alag variables nahi banayenge. Ek array banakar un sabhi data items ko systematically save kar lete hain.

How to create arrays?
JavaScript arrays dynamic arrays creation values brackets block check lists:
`let arrayName = [value1, value2, value3];`

Accessing & Updating elements
Arrays coordinates positions indexing checks hamesha **0 se start** hoti hain.
* Access elements: `array[index]`
* Update elements: `array[index] = newValue`

Simple example
```javascript
let fruits = ["Apple", "Banana", "Mango"];
console.log(fruits[0]); // Accessing: Apple
console.log(fruits.length); // Total elements: 3

fruits[1] = "Orange"; // Updating element
console.log(fruits);
```

Output
Apple
3
["Apple", "Orange", "Mango"]


---


# PART 2: STACK/QUEUE METHODS

Stack operations push pop values arrays end checks, Queue unshift shift check.
Note: Yeh sabhi methods original array ko change (mutate) karte hain.


## 1. push() & pop()

What is it?
* **push():** Array ke **aakhir mein (end)** naye elements insert karta hai.
* **pop():** Array ke **aakhir (end)** se ek element remove karke use return karta hai.

Simple example
```javascript
let nums = [1, 2];
nums.push(3); // pushes 3
console.log(nums);

let popped = nums.pop(); // pops last element
console.log("Popped element: " + popped);
console.log(nums);
```

Output
[1, 2, 3]
Popped element: 3
[1, 2]


---


## 2. shift() & unshift()

What is it?
* **unshift():** Array ke **start (beginning)** mein naye elements insert karta hai.
* **shift():** Array ke **start (beginning)** se pehle element ko remove karke return karta hai.

Simple example
```javascript
let letters = ["b", "c"];
letters.unshift("a"); // inserts at start
console.log(letters);

let shifted = letters.shift(); // removes from start
console.log("Shifted element: " + shifted);
console.log(letters);
```

Output
["a", "b", "c"]
Shifted element: a
["b", "c"]


---


# PART 3: EXTRACTING & SPLITTING METHODS

## 1. slice() vs splice()

What is it?
* **slice():** Array ke kisi portion ko copy karke naya array return karta hai. (Original array safe rehta hai).
* **splice():** Array ke elements add or remove karne ke liye use hota hai. (Original array update ho jata hai).

Difference detail:
* **slice(start, end):** End index exclusive. Returns sliced section. Original unchanged.
* **splice(start, deleteCount, itemsToAdd):** Mutates array. Returns removed items array.

Dry run check:
Array: `let list = [10, 20, 30, 40, 50]`
* `list.slice(1, 4)` $\rightarrow$ Starts index 1 (20) to index 3 (40). Returns `[20, 30, 40]`. Original list remains `[10, 20, 30, 40, 50]`.
* `list.splice(1, 2, 99)` $\rightarrow$ Starts index 1 (20), deletes 2 elements (20, 30), and inserts 99. Returns `[20, 30]`. Original list modified to `[10, 99, 40, 50]`.

Example Code
```javascript
let data = [10, 20, 30, 40];

let slicedData = data.slice(1, 3);
console.log("Sliced: ", slicedData);
console.log("Original after slice: ", data);

let splicedData = data.splice(1, 2, 99);
console.log("Spliced out: ", splicedData);
console.log("Original after splice: ", data);
```

Output
Sliced: [20, 30]
Original after slice: [10, 20, 30, 40]
Spliced out: [20, 30]
Original after splice: [10, 99, 40]


---


## 2. concat()

What is it?
Do ya do se zyada arrays elements merge karke naya array output return karta hai. Original arrays ko modify nahi karta.

Example
```javascript
let a = [1, 2];
let b = [3, 4];
let c = a.concat(b);
console.log(c);
```

Output
[1, 2, 3, 4]


---


# PART 4: INDEX SEARCH METHODS

## 1. indexOf() & includes()
* **indexOf():** Target value ka pehla matching index return karta hai, nahi milne par `-1` return karta hai.
* **includes():** Array mein target item present hai ya nahi check karke boolean (`true`/`false`) value return karta hai.

Example
```javascript
let list = ["red", "green", "blue"];
console.log(list.indexOf("green"));
console.log(list.includes("blue"));
console.log(list.includes("black"));
```

Output
1
true
false


---


## 2. find() vs findIndex()
* **find():** Array mein function criteria validation condition pass karne wale **sabse pehle element ki value** return karta hai.
* **findIndex():** Sabse pehle condition check pass karne wale element ka **index position** return karta hai. Agar match nahi milta, toh find `undefined` deta hai aur findIndex `-1`.

Example
```javascript
let scores = [10, 25, 30, 45];
// Find first score greater than 20
let valueFound = scores.find(val => val > 20);
let indexFound = scores.findIndex(val => val > 20);

console.log(valueFound);
console.log(indexFound);
```

Output
25
1


---


# PART 5: HIGHER-ORDER ARRAY METHODS

Higher-Order Array Methods call callback functions dynamically mapping coordinates parameters loops filters.


## 1. forEach() vs map() vs filter()

* **forEach():** Har loop item element par callback function chalta hai, lekin **kuch return nahi karta** (returns `undefined`). Sirf actions print triggers database update operations ke liye use hota hai.
* **map():** Har element ko process karke ek **naya array of same length** transform return karta hai. (Original array unchanged).
* **filter():** Condition validation test lagata hai aur pass hone wale elements ka ek **naya matching elements array** return karta hai.

Dry run of map() & filter():
Source array: `[1, 2, 3, 4]`
* `map(x => x * 2)` $\rightarrow$ `[1*2, 2*2, 3*2, 4*2]` $\rightarrow$ Returns `[2, 4, 6, 8]`.
* `filter(x => x % 2 === 0)` $\rightarrow$ Checks each item logic rules $\rightarrow$ Returns `[2, 4]`.

Example Code
```javascript
let nums = [1, 2, 3, 4];

// forEach
nums.forEach(n => console.log("Item: " + n));

// map
let doubled = nums.map(n => n * 2);
console.log("Doubled array: ", doubled);

// filter
let evens = nums.filter(n => n % 2 === 0);
console.log("Evens array: ", evens);
```

Output
Item: 1
Item: 2
Item: 3
Item: 4
Doubled array: [2, 4, 6, 8]
Evens array: [2, 4]


---


# PART 6: ADVANCED ITERATIVE METHODS

## 1. reduce()

What is it?
Array ke sabhi values elements ko accumulate process karke end mein aakhir mein **single value output** (like sum, product, object) reduce data coordinates output set karta hai.

Key parameter terms
* **Accumulator:** Accumulated values variables total store values trackers (jo previous calculation loop results carry karta hai).
* **Current Value:** Loop processing run state item value coordinate.
* **Initial Value:** Accumulator start values settings definition parameters checks (like `0` or `1`).

Dry run table (Calculating sum of `[5, 10, 15]` using reduce with initial value 0):
Code: `[5, 10, 15].reduce((acc, curr) => acc + curr, 0)`

| Iteration | Accumulator (acc) | Current Value (curr) | Return (acc + curr) |
| :--- | :--- | :--- | :--- |
| Start | 0 | - | - |
| 1 | 0 | 5 | 5 (assigned to acc) |
| 2 | 5 | 10 | 15 (assigned to acc) |
| 3 | 15 | 15 | 30 (final return value) |

Example Code
```javascript
let items = [5, 10, 15];
let sumTotal = items.reduce((acc, curr) => {
    return acc + curr;
}, 0);
console.log("Total: " + sumTotal);
```

Output
Total: 30


---


## 2. some() vs every()
* **some():** Check karta hai kya array ka **kam-se-kam ek element (at least one)** condition pass karta hai. Returns boolean.
* **every():** Check karta hai kya array ke **saare elements (all items)** condition clear target rules follow karte hain.

Example Code
```javascript
let vals = [10, 5, 25, 40];

console.log(vals.some(x => x > 30));  // true (40 is > 30)
console.log(vals.every(x => x > 30)); // false (not all are > 30)
```

Output
true
false


---


# 🧠 QUICK REVISION SUMMARY

* **Push/Pop/Shift/Unshift:** Stack and queue mutations operations on original array.
* **slice vs splice:** slice copies array section; splice deletes/replaces in original array.
* **find vs findIndex:** find yields value of match; findIndex yields index value of match.
* **forEach vs map vs filter:** forEach prints actions; map transforms data into new array; filter outputs condition matching subset.
* **reduce:** Accumulates elements into single output variable parameters trackers.
* **some vs every:** some checks at least 1 match; every requires all elements to pass.


---


# 📝 IMPORTANT DEFINITIONS (INTERVIEW-READY)

1. **Array Mutability:** The capability of array elements to be updated directly in place (e.g. methods like `push` and `splice` mutate, while `slice` is non-mutating).
2. **Higher-Order Array Methods:** Methods that accept user callback functions as input arguments to process array items dynamically.
3. **Accumulator:** The parameter variable in `reduce()` that collects and aggregates calculation values through successive iterations.
4. **Out-of-Bounds Indexing:** Reading indices beyond array length bounds, returning `undefined` safely.
5. **Short-Circuit Verification:** Checking array boundaries in `some()` or `every()` where verification halts immediately on finding the first confirming or disconfirming item.


---


# 💬 IMPORTANT INTERVIEW QUESTIONS & ANSWERS

### Q1. Difference between `slice()` and `splice()`?
**Ans:** `slice()` extracts a portion of the array and returns a new copy without modifying the original. `splice()` deletes or adds items in place, modifying the original array.

### Q2. Difference between `forEach()` and `map()`?
**Ans:** `forEach()` executes operations on each item and returns `undefined`. `map()` transforms each item and returns a new array of the same length.

### Q3. Predict output:
```javascript
let a = [1, 2];
let b = a.push(3);
console.log(b);
```
**Ans:** `3`. The `push()` method returns the **new length** of the array after adding the element.

### Q4. Difference between `find()` and `filter()`?
**Ans:** `find()` returns only the first matching element value. `filter()` returns a new array containing all elements that match the criteria.

### Q5. What is the Accumulator in `reduce()`?
**Ans:** A state variable parameter that aggregates values across loop iterations, carrying the previous callback calculations into the next step.

### Q6. Predict output:
```javascript
let array = [1, 2, 3];
let res = array.map(x => { x * 2 });
console.log(res);
```
**Ans:** `[undefined, undefined, undefined]`. Since the callback uses curly braces but lacks the `return` keyword, no value is returned for each element.

### Q7. Explain `some()` vs `every()` method outputs.
**Ans:** `some()` returns `true` if at least one item passes the validation condition. `every()` returns `true` only if all items pass the condition.

### Q8. Predict output:
```javascript
let arr = [10, 20];
arr[5] = 99;
console.log(arr.length);
```
**Ans:** `6`. Index positions 2, 3, 4 remain empty (`undefined`), but length expands to 6.

### Q9. What does `pop()` return when called on an empty array?
**Ans:** It returns `undefined`.

### Q10. Does `concat()` mutate original input arrays?
**Ans:** No. It yields a new merged array copy.

### Q11. Predict output:
```javascript
let a = [1, 2];
let b = a;
b.push(3);
console.log(a);
```
**Ans:** `[1, 2, 3]`. Arrays are copied by reference. Modifying `b` affects the same object referenced by `a`.

### Q12. Predict output:
```javascript
console.log([1, 2, 3].indexOf(99));
```
**Ans:** `-1`. Since 99 is not in the array.

### Q13. Predict output:
```javascript
let result = [1, 2].filter(x => x > 5);
console.log(result);
```
**Ans:** `[]` (empty array). Since no element is greater than 5.

### Q14. What is default initial value in `reduce()` if not specified?
**Ans:** It defaults to the first element of the array, and the current value starts from the second element.

### Q15. Predict output:
```javascript
let text = "apple";
console.log(Array.isArray(text));
```
**Ans:** `false`. Since string is not an array.

### Q16. Predict output:
```javascript
let nums = [1, 2, 3];
nums.shift();
console.log(nums);
```
**Ans:** `[2, 3]`. Shift removes the first element.

### Q17. Predict output:
```javascript
let list = [10, 20];
list.unshift(5);
console.log(list);
```
**Ans:** `[5, 10, 20]`. Unshift adds element at the beginning.

### Q18. Predict output:
```javascript
console.log([1, 2].includes(1));
```
**Ans:** `true`.

### Q19. How do you duplicate an array safely without keeping reference connection?
**Ans:** By using the spread operator: `let newArr = [...oldArr];`.

### Q20. Predict output:
```javascript
let scoreList = [5, 12, 8];
console.log(scoreList.findIndex(x => x > 10));
```
**Ans:** `1`. The index of the first value greater than 10 (12) is 1.


---


# 💻 PRACTICE QUESTIONS

## Question 1: Find Largest element in Array
* **Question:** Create a loop to search the maximum value in an array.
* **Solution:**
  ```javascript
  function getMax(arr) {
      let max = arr[0];
      for (let i = 1; i < arr.length; i++) {
          if (arr[i] > max) {
              max = arr[i];
          }
      }
      return max;
  }
  console.log(getMax([10, 50, 30])); // 50
  ```
* **Explanation:** Checks each item against the current max and updates if a larger value is found.

## Question 2: Sum array values using reduce
* **Question:** Calculate array sum totals.
* **Solution:**
  ```javascript
  function totalArraySum(arr) {
      return arr.reduce((acc, curr) => acc + curr, 0);
  }
  console.log(totalArraySum([1, 2, 3, 4])); // 10
  ```
* **Explanation:** Combines array values iteratively starting from 0.

## Question 3: Remove duplicate array elements
* **Question:** Clean duplicates and return unique values array.
* **Solution:**
  ```javascript
  function clearDuplicates(arr) {
      let unique = [];
      for (let item of arr) {
          if (!unique.includes(item)) {
              unique.push(item);
          }
      }
      return unique;
  }
  console.log(clearDuplicates([1, 2, 2, 3, 1])); // [1, 2, 3]
  ```
* **Explanation:** Traverses values and pushes items only if they are not already in the unique array.
