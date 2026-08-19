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


## Lecture 30 — Array Interview + Problem Solving

Problem-solving mein arrays ko manipulate aur check karne ke liye different strategies run ki jati hain. Chaliye unhe systematically cover karte hain.

### 1. Frequency of Elements
* **What does it mean:** Array ke andar kaunsa element kitni baar aaya hai, uski count list banana.
* **Why is it useful:** Analytics platforms, search engines, and interview problems.
* **How to approach:** Ek empty object/map le kar elements par loops run karenge. Jab bhi active item mile, map ke andar uski frequency tally increment kar denge.
* **Simple example:**
  ```javascript
  function countFreq(arr) {
      let freq = {};
      for (let num of arr) {
          freq[num] = (freq[num] ?? 0) + 1;
      }
      return freq;
  }
  console.log(countFreq([1, 2, 1, 3, 2, 1]));
  ```
* **Output:** `{ '1': 3, '2': 2, '3': 1 }`
* **Short explanation:** Har number search loop state check map variables value updates. Pehli baar elements counts setting trigger updates count parameter.

### 2. Finding Maximum and Minimum
* **What does it mean:** Sabse chhota (Min) aur sabse bada (Max) value index evaluate search.
* **Why is it useful:** Dynamic range values, boundary check filters, chart plots.
* **How to approach:** Initial variable numbers sets arrays values start boundary. Traverse all slots, update trackers dynamically if any values violate bounds.
* **Simple example:**
  ```javascript
  function findBounds(arr) {
      let min = arr[0];
      let max = arr[0];
      for (let val of arr) {
          if (val > max) max = val;
          if (val < min) min = val;
      }
      return { min, max };
  }
  console.log(findBounds([15, 42, 8, 91, 23]));
  ```
* **Output:** `{ min: 8, max: 91 }`
* **Short explanation:** Compare step updates bounds checks systematically when larger values or smaller values are found.

### 3. Finding Duplicate Elements
* **What does it mean:** Ek se zyada baar aane wale values detect check filter.
* **Why is it useful:** Database entries sanitization, array uniqueness checks.
* **How to approach:** Ek tracker list `seen` aur `duplicates` declare karein. Loop run constraints logic apply.
* **Simple example:**
  ```javascript
  function getDuplicates(arr) {
      let seen = [];
      let dupes = [];
      for (let x of arr) {
          if (seen.includes(x)) {
              if (!dupes.includes(x)) dupes.push(x);
          } else {
              seen.push(x);
          }
      }
      return dupes;
  }
  console.log(getDuplicates([1, 2, 3, 2, 4, 1]));
  ```
* **Output:** `[2, 1]`
* **Short explanation:** Since 2 and 1 appear more than once in evaluation, they are grouped in duplicate lists.

### 4. Transforming an Array
* **What does it mean:** Elements operations mappings convert data values format.
* **Why is it useful:** Discount price computations, object conversions.
* **How to approach:** `map()` HOF callback checks.
* **Simple example:**
  ```javascript
  let ratings = [1, 2, 3];
  let stars = ratings.map(r => r + " Stars");
  console.log(stars);
  ```
* **Output:** `["1 Stars", "2 Stars", "3 Stars"]`

### 5. Filtering an Array
* **What does it mean:** Condition validation mismatch items ignore keep matches.
* **Why is it used:** Removing falsy values, search category constraints.
* **How to approach:** `filter()` method validations.
* **Simple example:**
  ```javascript
  let ages = [12, 19, 15, 24];
  let adults = ages.filter(a => a >= 18);
  console.log(adults);
  ```
* **Output:** `[19, 24]`

### 6. Aggregation (Sum/Total)
* **What does it mean:** Dynamic variables calculations merge single results value.
* **How to approach:** `reduce()` operator accumulators updates.
* **Simple example:**
  ```javascript
  let items = [100, 200, 300];
  let bill = items.reduce((total, price) => total + price, 0);
  console.log(bill);
  ```
* **Output:** `600`


---


# 🧠 QUICK REVISION SUMMARY

* **Basics & Stack/Queue:** push adds to end; pop removes from end; unshift adds to start; shift removes from start. (All mutate).
* **slice vs splice:** slice copies array section without mutating; splice deletes/adds elements directly in place.
* **find vs findIndex:** find yields value; findIndex yields index.
* **forEach vs map vs filter:** forEach prints actions; map transforms array elements; filter extracts matching subsets.
* **reduce:** Aggregates values using an accumulator.
* **some vs every:** some checks at least 1 match; every requires all elements to pass.
* **Interview Solving (L30):** Uses key-value maps for frequencies, trackers for duplicates, bounds checks for min/max, and HOFs for transform, filter, and aggregation.


---


# 📝 IMPORTANT DEFINITIONS (INTERVIEW-READY)

1. **Array Mutability:** In-place modifications of array elements without copying array pointers.
2. **Callback Iterations:** Running callback code logic inside array loops.
3. **Accumulator:** Aggregation variable in reduce operations that preserves calculations across cycles.
4. **Out-of-Bounds evaluation:** Bracket indexing queries exceeding array limits, yielding undefined.
5. **Array Frequency Mapping:** Transforming array items to key-value objects representing occurrences.


---


# 💬 IMPORTANT INTERVIEW QUESTIONS & ANSWERS

### Q1. Difference between `slice()` and `splice()`?
**Ans:** `slice()` extracts elements and returns a copy (non-mutating). `splice()` adds/removes elements from the original array directly (mutating).

### Q2. Difference between `forEach()` and `map()`?
**Ans:** `forEach()` returns `undefined` and is used to trigger side effects. `map()` returns a new processed array of the same length.

### Q3. How do you find the frequency of elements in an array?
**Ans:** By using a tracker object/map. Loop through elements and increment the count key for each item.
```javascript
let freq = {};
arr.forEach(x => freq[x] = (freq[x] ?? 0) + 1);
```

### Q4. Difference between `find()` and `filter()`?
**Ans:** `find()` returns only the first matching element value. `filter()` returns a new array with all matching elements.

### Q5. What is the Accumulator in `reduce()`?
**Ans:** The first argument inside the `reduce()` callback that accumulates the returned value of the previous iteration.

### Q6. Predict output:
```javascript
let result = [1, 2, 3].map(x => x * 2);
console.log(result);
```
**Ans:** `[2, 4, 6]`.

### Q7. Explain `some()` vs `every()` method outputs.
**Ans:** `some()` returns `true` if at least one element matches the condition. `every()` returns `true` only if all elements match the condition.

### Q8. How do you search for duplicates in an array?
**Ans:** By keeping a `seen` list. If an item is processed that already exists in `seen`, it is flagged as a duplicate.

### Q9. What does `pop()` return when called on an empty array?
**Ans:** It returns `undefined`.

### Q10. Does `concat()` mutate the original arrays?
**Ans:** No. It returns a new merged array copy.

### Q11. Predict output:
```javascript
let x = [1, 2];
let y = x;
y.push(3);
console.log(x);
```
**Ans:** `[1, 2, 3]`. Arrays are copied by reference. Modifying variable `y` updates the same object referenced by `x`.

### Q12. Predict output:
```javascript
console.log([1, 2].indexOf(99));
```
**Ans:** `-1`.

### Q13. Predict output:
```javascript
let data = [1, 2].filter(x => x > 10);
console.log(data);
```
**Ans:** `[]` (empty array).

### Q14. What happens if no initial value is passed to `reduce()`?
**Ans:** The accumulator takes the first array element, and the current value starts processing from the second element.

### Q15. How do you find the minimum and maximum values in an array?
**Ans:** Set `min` and `max` to the first element of the array. Traverse the array and update `min` if an element is smaller, or `max` if an element is larger.

### Q16. Predict output:
```javascript
let data = [1, 2, 3];
data.shift();
console.log(data);
```
**Ans:** `[2, 3]`. Shift deletes the first element.

### Q17. Predict output:
```javascript
let data = [10, 20];
data.unshift(5);
console.log(data);
```
**Ans:** `[5, 10, 20]`. Unshift adds element at the beginning.

### Q18. Predict output:
```javascript
console.log([1, 2].includes(1));
```
**Ans:** `true`.

### Q19. How do you duplicate an array safely without keeping reference connection?
**Ans:** By using the spread operator: `let duplicate = [...original];`.

### Q20. Predict output:
```javascript
let test = [2, 5, 8];
console.log(test.findIndex(x => x > 4));
```
**Ans:** `1`. The index of the first value greater than 4 (5) is 1.


---


# 💻 PRACTICE QUESTIONS

## Question 1: Find Largest element
* **Question:** Find the maximum element inside the array using a loop.
* **Solution:**
  ```javascript
  function getMaxVal(arr) {
      let max = arr[0];
      for (let i = 1; i < arr.length; i++) {
          if (arr[i] > max) max = arr[i];
      }
      return max;
  }
  console.log(getMaxVal([12, 45, 8, 30])); // 45
  ```
* **Explanation:** Compares each item against max and updates the variable if a larger value is found.

## Question 2: Sum array elements using reduce
* **Question:** Calculate the sum of array values.
* **Solution:**
  ```javascript
  function sumArray(arr) {
      return arr.reduce((acc, curr) => acc + curr, 0);
  }
  console.log(sumArray([10, 20, 30])); // 60
  ```
* **Explanation:** Sums elements starting from an initial value of 0.

## Question 3: Remove duplicate array elements
* **Question:** Clean duplicates from array.
* **Solution:**
  ```javascript
  function removeDupes(arr) {
      let unique = [];
      for (let x of arr) {
          if (!unique.includes(x)) unique.push(x);
      }
      return unique;
  }
  console.log(removeDupes([1, 2, 2, 3])); // [1, 2, 3]
  ```
* **Explanation:** Traverses values and pushes to unique only if not already present.

