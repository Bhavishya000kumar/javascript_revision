# 50 JavaScript Coding Practice Questions

This document contains exactly 50 coding practice questions with clear approaches, code solutions, expected outputs, and explanations.


# SECTION 1: BASIC MATHEMATICS & CONDITIONS (EASY)

### 1. Even or Odd Check
* **Approach:** Use the modulus operator `% 2` to verify remainder.
* **Code:**
  ```javascript
  const isEven = num => num % 2 === 0;
  console.log(isEven(4));
  ```
* **Expected Output:** `true`
* **Explanation:** Checks if division remainder is 0.

### 2. Celsius to Fahrenheit
* **Approach:** Apply formula: `(c * 9/5) + 32`.
* **Code:**
  ```javascript
  const cToF = c => (c * 9/5) + 32;
  console.log(cToF(0));
  ```
* **Expected Output:** `32`
* **Explanation:** Standard arithmetic conversion.

### 3. Maximum of Three Numbers
* **Approach:** Use `Math.max()`.
* **Code:**
  ```javascript
  const getMax = (a, b, c) => Math.max(a, b, c);
  console.log(getMax(5, 12, 9));
  ```
* **Expected Output:** `12`

### 4. Leap Year Verification
* **Approach:** Division by 4, but not 100 unless divisible by 400.
* **Code:**
  ```javascript
  const isLeap = y => (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);
  console.log(isLeap(2024));
  ```
* **Expected Output:** `true`


---


# SECTION 2: LOOPS & MATHEMATICAL SERIES (EASY-MEDIUM)

### 5. Factorial of a Number
* **Approach:** Standard iterative loop multiplying down.
* **Code:**
  ```javascript
  function factorial(n) {
      let res = 1;
      for (let i = 2; i <= n; i++) res *= i;
      return res;
  }
  console.log(factorial(5));
  ```
* **Expected Output:** `120`

### 6. Fibonacci Series nth Number
* **Approach:** Iterative calculation summing previous two elements.
* **Code:**
  ```javascript
  function fib(n) {
      let arr = [0, 1];
      for (let i = 2; i <= n; i++) arr[i] = arr[i - 1] + arr[i - 2];
      return arr[n];
  }
  console.log(fib(6));
  ```
* **Expected Output:** `8`

### 7. Sum of Array Elements
* **Approach:** Use `reduce()`.
* **Code:**
  ```javascript
  const sum = arr => arr.reduce((acc, c) => acc + c, 0);
  console.log(sum([1, 2, 3, 4]));
  ```
* **Expected Output:** `10`

### 8. Find Minimum in Array
* **Approach:** Spread the array into `Math.min()`.
* **Code:**
  ```javascript
  const getMin = arr => Math.min(...arr);
  console.log(getMin([4, 2, 8, 1]));
  ```
* **Expected Output:** `1`


---


# SECTION 3: STRINGS OPERATIONS (EASY-MEDIUM)

### 9. Reverse a String
* **Approach:** Split characters, reverse array, and join.
* **Code:**
  ```javascript
  const reverseStr = str => str.split("").reverse().join("");
  console.log(reverseStr("hello"));
  ```
* **Expected Output:** `"olleh"`

### 10. Palindrome Check
* **Approach:** Compare string with its reversed representation.
* **Code:**
  ```javascript
  const isPalindrome = str => str === str.split("").reverse().join("");
  console.log(isPalindrome("racecar"));
  ```
* **Expected Output:** `true`

### 11. Count Vowels in String
* **Approach:** Match against a regex pattern.
* **Code:**
  ```javascript
  const countVowels = str => (str.match(/[aeiou]/gi) || []).length;
  console.log(countVowels("hello"));
  ```
* **Expected Output:** `2`

### 12. Truncate String
* **Approach:** Use `slice()` and append ellipsis.
* **Code:**
  ```javascript
  const truncate = (str, limit) => str.length > limit ? str.slice(0, limit) + "..." : str;
  console.log(truncate("JavaScript", 4));
  ```
* **Expected Output:** `"Java..."`


---


# SECTION 4: ARRAYS MANIPULATION (MEDIUM)

### 13. Remove Duplicates
* **Approach:** Convert array to a `Set` and spread back.
* **Code:**
  ```javascript
  const unique = arr => [...new Set(arr)];
  console.log(unique([1, 2, 2, 3]));
  ```
* **Expected Output:** `[1, 2, 3]`

### 14. Find Intersection of Two Arrays
* **Approach:** Filter elements of first array that exist in the second.
* **Code:**
  ```javascript
  const intersect = (a, b) => a.filter(x => b.includes(x));
  console.log(intersect([1, 2], [2, 3]));
  ```
* **Expected Output:** `[2]`

### 15. Chunk Array into Subarrays
* **Approach:** Use a loop with `slice()` step of specified size.
* **Code:**
  ```javascript
  function chunk(arr, size) {
      let res = [];
      for (let i = 0; i < arr.length; i += size) res.push(arr.slice(i, i + size));
      return res;
  }
  console.log(chunk([1, 2, 3, 4], 2));
  ```
* **Expected Output:** `[[1, 2], [3, 4]]`


---


# SECTION 5: OBJECTS & DESTRUCTURING (MEDIUM)

### 16. Swap Variables in One Line
* **Approach:** Use array destructuring.
* **Code:**
  ```javascript
  let a = 1, b = 2;
  [a, b] = [b, a];
  console.log(a, b);
  ```
* **Expected Output:** `2 1`

### 17. Count Properties inside Object
* **Approach:** Check `Object.keys().length`.
* **Code:**
  ```javascript
  const countKeys = obj => Object.keys(obj).length;
  console.log(countKeys({ a: 1, b: 2 }));
  ```
* **Expected Output:** `2`

### 18. Merge Two Objects
* **Approach:** Spread properties.
* **Code:**
  ```javascript
  const merge = (o1, o2) => ({ ...o1, ...o2 });
  console.log(merge({ a: 1 }, { b: 2 }));
  ```
* **Expected Output:** `{ a: 1, b: 2 }`


---


# SECTION 6: ADVANCED PATTERNS & CLOSURES (INTERVIEW-LEVEL)

### 19. Private State Counter via Closures
* **Approach:** Return an object that closes over a local variable.
* **Code:**
  ```javascript
  function makeCounter() {
      let val = 0;
      return () => ++val;
  }
  const count = makeCounter();
  console.log(count());
  ```
* **Expected Output:** `1`

### 20. Simple Currying
* **Approach:** Nested functions returning functions.
* **Code:**
  ```javascript
  const multiply = a => b => a * b;
  console.log(multiply(2)(5));
  ```
* **Expected Output:** `10`

### 21. Memoization Implementation
* **Approach:** Store pre-computed results in a closure cache.
* **Code:**
  ```javascript
  function memoize(fn) {
      let cache = {};
      return function(x) {
          if (x in cache) return cache[x];
          return cache[x] = fn(x);
      };
  }
  ```

### 22. Flatten Nested Array
* **Approach:** Use recursion or `flat(Infinity)`.
* **Code:**
  ```javascript
  const flatten = arr => arr.flat(Infinity);
  console.log(flatten([1, [2, [3]]]));
  ```
* **Expected Output:** `[1, 2, 3]`


---


# SECTION 7: DOM & EVENTS BASICS (INTERVIEW-LEVEL)

### 23. Change Text Content on Click
* **Approach:** Select element and update `.textContent` inside listener.
* **Code:**
  ```javascript
  // HTML: <button id="btn">Click</button>
  document.getElementById("btn")?.addEventListener("click", (e) => {
      e.target.textContent = "Clicked!";
  });
  ```

### 24. Event Delegation List Item Remove
* **Approach:** Attach event listener on parent list and verify click target matches LI tag.
* **Code:**
  ```javascript
  // HTML: <ul id="list"><li>Item</li></ul>
  document.getElementById("list")?.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") e.target.remove();
  });
  ```


---


# SECTION 8: ASYNCHRONOUS JS & STORAGE (INTERVIEW-LEVEL)

### 25. Simple Promise Delay
* **Approach:** Return Promise resolving inside a setTimeout timer.
* **Code:**
  ```javascript
  const delay = ms => new Promise(res => setTimeout(res, ms));
  delay(100).then(() => console.log("Done"));
  ```

### 26. Fetch data from endpoint and check status
* **Approach:** Async fetch, validation check for `response.ok`, and parse body JSON.
* **Code:**
  ```javascript
  async function loadData() {
      let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
      if (!res.ok) throw new Error();
      let data = await res.json();
      console.log(data.id);
  }
  loadData();
  ```
* **Expected Output:** `1`

### 27. Save and Retrieve Object in LocalStorage
* **Approach:** Stringify object to save, and parse string to read.
* **Code:**
  ```javascript
  let user = { name: "Ravi" };
  localStorage.setItem("user", JSON.stringify(user));
  let parsed = JSON.parse(localStorage.getItem("user"));
  console.log(parsed.name);
  ```
* **Expected Output:** `"Ravi"`


---


# SECTION 9: REPETITIVE TASKS & DEBUNCH / THROTTLE

### 28. Debounce Implementation
* **Approach:** Return function clearing previous timer.
* **Code:**
  ```javascript
  function debounce(fn, delay) {
      let timer;
      return function(...args) {
          clearTimeout(timer);
          timer = setTimeout(() => fn(...args), delay);
      };
  }
  ```

### 29. Throttle Implementation
* **Approach:** Return function limiting execution by time checks.
* **Code:**
  ```javascript
  function throttle(fn, limit) {
      let inThrottle;
      return function(...args) {
          if (!inThrottle) {
              fn(...args);
              inThrottle = true;
              setTimeout(() => inThrottle = false, limit);
          }
      };
  }
  ```


---


# SECTION 10: MORE PRACTICAL TASKS (30 - 50)

*Note: For the remaining questions, complete solutions are present in [50_javascript_coding_practice.js](file:///d:/bhavishya/dev/javascripts/js%20anti%20grv/final%20js/03%20-%2050%20Coding%20Practice/50_javascript_coding_practice.js).*

### 30. Check if number is Prime
* **Approach:** Loop from 2 to square root of number.
* **Code:**
  ```javascript
  const isPrime = n => {
      if (n <= 1) return false;
      for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
      return true;
  };
  console.log(isPrime(11));
  ```
* **Expected Output:** `true`

### 31. Get unique characters from String
* **Approach:** Spread string characters into a Set and join.

### 32. Merge two Arrays and remove duplicates
* **Approach:** Spread both arrays into Set, convert back to Array.

### 33. Title Case a String
* **Approach:** Split by space, map and capitalize first letter.

### 34. Check if two strings are Anagrams
* **Approach:** Sort characters of both strings and compare.

### 35. Deep Clone helper using structuredClone
* **Approach:** Return `structuredClone(obj)`.

### 36. Find Longest word in string
* **Approach:** Split by space, reduce comparing string lengths.

### 37. Sum of digits in a number
* **Approach:** Stringify, split digits, reduce summation.

### 38. Filter falsy values from array
* **Approach:** `arr.filter(Boolean)`.

### 39. Repeat string N times
* **Approach:** `str.repeat(n)`.

### 40. Group objects by property
* **Approach:** Use reduce aggregating keys array.

### 41. Generate random number in range
* **Approach:** `Math.floor(Math.random() * (max - min + 1)) + min`.

### 42. Get current URL in browser
* **Approach:** Read `window.location.href`.

### 43. Check if key exists in object
* **Approach:** `key in object` or `hasOwnProperty()`.

### 44. Find index of target in array
* **Approach:** `arr.indexOf(target)`.

### 45. Promise.all demo
* **Approach:** Resolve all promises in array.

### 46. Safe divide throwing Error
* **Approach:** Throw Error if denominator is 0.

### 47. Get difference between two dates in days
* **Approach:** Subtract timestamps and divide by ms in a day.

### 48. Check if array contains only numbers
* **Approach:** `arr.every(x => typeof x === 'number')`.

### 49. Run task after delay using async/await
* **Approach:** Await delay Promise.

### 50. Convert MAP collection to Object
* **Approach:** `Object.fromEntries(map)`.
