// Unit 20: Advanced JS Code Examples

// 1. Closures Revision
console.log("--- 1. Closures ---");
function initSecureKey() {
    let key = "SECURE_KEY_123";
    return function() {
        return `Accessing: ${key}`; // key is remembered by closure scope
    };
}
let keyAccessor = initSecureKey();
console.log(keyAccessor());


// 2. Currying
console.log("\n--- 2. Currying ---");
// Normal: function volume(l, w, h) { return l * w * h; }
// Curried:
const volume = l => w => h => l * w * h;
console.log("Curried Volume output (2 * 3 * 4):", volume(2)(3)(4)); // 24


// 3. Memoization (Caching)
console.log("\n--- 3. Memoization ---");
function memoizeFactorial() {
    let cache = {}; // closures cache storage
    return function compute(n) {
        if (n in cache) {
            console.log("Cache Hit for inputs:", n);
            return cache[n];
        }
        console.log("Cache Miss - Calculating for:", n);
        let result = (n <= 1) ? 1 : n * compute(n - 1);
        cache[n] = result;
        return result;
    };
}
const fact = memoizeFactorial();
console.log(fact(5)); // First computation (Cache Miss)
console.log(fact(5)); // Second computation (Cache Hit)


// 4. Debouncing & Throttling (Prototypes)
console.log("\n--- 4. Debounce & Throttle Prototypes ---");
// Debouncing: delays calling search api until typing ceases
function debounce(func, delayMs) {
    let timeoutId;
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => func(...args), delayMs);
    };
}
const onSearchType = debounce((q) => console.log("Searching database for query:", q), 200);
onSearchType("J");
onSearchType("JS"); // Only "JS" triggers since it resets previous timeout


// 5. Shallow Copy vs Deep Copy
console.log("\n--- 5. Shallow vs Deep Copy ---");
let template = { id: 1, info: { tag: "JS" } };

// Shallow Copy using spread operator
let shallowObj = { ...template };
shallowObj.info.tag = "Advanced JS"; // Modifies original tag!
console.log("Shallow Copy effect: original tag is mutated:", template.info.tag);

// Resetting
template.info.tag = "JS";

// Deep Copy using JSON methods
let deepObj = JSON.parse(JSON.stringify(template));
deepObj.info.tag = "Advanced JS"; // Does NOT modify original
console.log("Deep Copy effect: original tag is unaffected:", template.info.tag);


// 6. Reference vs Value
console.log("\n--- 6. Value vs Reference ---");
// Primitive values copy value content
let num1 = 100;
let num2 = num1;
num2 = 200;
console.log("Primitive Copy: num1 is unchanged:", num1);

// Objects copy reference memory addresses
let user1 = { username: "ravi_dev" };
let user2 = user1;
user2.username = "amit_coder";
console.log("Reference Copy: user1 is mutated:", user1.username);


// 7. Pure Functions & Immutability
console.log("\n--- 7. Pure Functions & Immutability ---");
// Pure Function: same arguments give same output, no side effects
function squareValue(num) {
    return num * num;
}
console.log("Pure output:", squareValue(5));

// Immutability: do not edit arrays in place
let baseArray = [1, 2];
let immutableArray = [...baseArray, 3]; // creates new array copy
console.log("Original baseArray remains safe:", baseArray);
console.log("New immutableArray created:", immutableArray);
