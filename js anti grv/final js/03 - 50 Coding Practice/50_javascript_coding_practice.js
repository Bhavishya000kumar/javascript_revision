// JavaScript 50 Coding Practice Solutions

// 1. Even or Odd Check
// Approach: Modulus check.
const isEven = num => num % 2 === 0;

// 2. Celsius to Fahrenheit
const cToF = c => (c * 9/5) + 32;

// 3. Maximum of Three Numbers
const getMax = (a, b, c) => Math.max(a, b, c);

// 4. Leap Year Verification
const isLeap = y => (y % 4 === 0 && y % 100 !== 0) || (y % 400 === 0);

// 5. Factorial of a Number
function factorial(n) {
    let res = 1;
    for (let i = 2; i <= n; i++) res *= i;
    return res;
}

// 6. Fibonacci Series nth Number
function fib(n) {
    let arr = [0, 1];
    for (let i = 2; i <= n; i++) arr[i] = arr[i - 1] + arr[i - 2];
    return arr[n];
}

// 7. Sum of Array Elements
const sum = arr => arr.reduce((acc, c) => acc + c, 0);

// 8. Find Minimum in Array
const getMin = arr => Math.min(...arr);

// 9. Reverse a String
const reverseStr = str => str.split("").reverse().join("");

// 10. Palindrome Check
const isPalindrome = str => str === str.split("").reverse().join("");

// 11. Count Vowels in String
const countVowels = str => (str.match(/[aeiou]/gi) || []).length;

// 12. Truncate String
const truncate = (str, limit) => str.length > limit ? str.slice(0, limit) + "..." : str;

// 13. Remove Duplicates from Array
const unique = arr => [...new Set(arr)];

// 14. Find Intersection of Two Arrays
const intersect = (a, b) => a.filter(x => b.includes(x));

// 15. Chunk Array into Subarrays
function chunk(arr, size) {
    let res = [];
    for (let i = 0; i < arr.length; i += size) res.push(arr.slice(i, i + size));
    return res;
}

// 16. Swap Variables in One Line
// Let a = 1, b = 2;
// [a, b] = [b, a];

// 17. Count Properties inside Object
const countKeys = obj => Object.keys(obj).length;

// 18. Merge Two Objects
const merge = (o1, o2) => ({ ...o1, ...o2 });

// 19. Private State Counter via Closures
function makeCounter() {
    let val = 0;
    return () => ++val;
}

// 20. Simple Currying
const multiply = a => b => a * b;

// 21. Memoization Implementation
function memoize(fn) {
    let cache = {};
    return function(x) {
        if (x in cache) return cache[x];
        return cache[x] = fn(x);
    };
}

// 22. Flatten Nested Array
const flatten = arr => arr.flat(Infinity);

// 23. Change Text Content on Click
// button.addEventListener("click", (e) => e.target.textContent = "Clicked!");

// 24. Event Delegation List Item Remove
// list.addEventListener("click", (e) => { if (e.target.tagName === "LI") e.target.remove(); });

// 25. Simple Promise Delay
const delay = ms => new Promise(res => setTimeout(res, ms));

// 26. Fetch data from endpoint
async function loadData() {
    let res = await fetch("https://jsonplaceholder.typicode.com/todos/1");
    return await res.json();
}

// 27. Save and Retrieve Object in LocalStorage
// localStorage.setItem("user", JSON.stringify({name: "Ravi"}));
// let u = JSON.parse(localStorage.getItem("user"));

// 28. Debounce Implementation
function debounce(fn, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer);
        timer = setTimeout(() => fn(...args), delay);
    };
}

// 29. Throttle Implementation
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

// 30. Check if number is Prime
const isPrime = n => {
    if (n <= 1) return false;
    for (let i = 2; i <= Math.sqrt(n); i++) if (n % i === 0) return false;
    return true;
};

// 31. Get unique characters from String
const uniqueChars = str => [...new Set(str)].join("");

// 32. Merge two Arrays and remove duplicates
const mergeArrays = (a, b) => [...new Set([...a, ...b])];

// 33. Title Case a String
const titleCase = str => str.split(" ").map(w => w[0].toUpperCase() + w.slice(1)).join(" ");

// 34. Check if two strings are Anagrams
const isAnagram = (s1, s2) => s1.split("").sort().join("") === s2.split("").sort().join("");

// 35. Deep Clone helper using structuredClone
const deepClone = obj => structuredClone(obj);

// 36. Find Longest word in string
const longestWord = str => str.split(" ").reduce((l, c) => c.length > l.length ? c : l, "");

// 37. Sum of digits in a number
const sumDigits = n => String(n).split("").reduce((acc, c) => acc + Number(c), 0);

// 38. Filter falsy values from array
const compact = arr => arr.filter(Boolean);

// 39. Repeat string N times
const repeatStr = (str, n) => str.repeat(n);

// 40. Group objects by property
const groupBy = (arr, prop) => arr.reduce((acc, obj) => {
    let key = obj[prop];
    if (!acc[key]) acc[key] = [];
    acc[key].push(obj);
    return acc;
}, {});

// 41. Generate random number in range
const randomRange = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

// 42. Get current URL
// const getURL = () => window.location.href;

// 43. Check if key exists in object
const hasKey = (obj, key) => key in obj;

// 44. Find index of target in array
const findIndex = (arr, target) => arr.indexOf(target);

// 45. Promise.all demo
const runAll = promises => Promise.all(promises);

// 46. Safe divide throwing Error
const divide = (a, b) => {
    if (b === 0) throw new Error("Division by zero");
    return a / b;
};

// 47. Get difference between two dates in days
const diffDays = (d1, d2) => Math.ceil(Math.abs(d2 - d1) / (1000 * 60 * 60 * 24));

// 48. Check if array contains only numbers
const isNumArray = arr => arr.every(x => typeof x === "number");

// 49. Run task after delay using async/await
async function runWithDelay() {
    await delay(1000);
    console.log("Executed");
}

// 50. Convert MAP collection to Object
const mapToObj = map => Object.fromEntries(map);
