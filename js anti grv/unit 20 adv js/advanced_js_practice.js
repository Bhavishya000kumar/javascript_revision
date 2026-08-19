// Unit 20: Advanced JS Practice Exercises

// 1. Closures Private Variable
console.log("--- 1. Closures Private Variable ---");
function employeeAccount() {
    let salary = 45000; // Private state
    return {
        getSalary: () => salary,
        increment: (amount) => { salary += amount; }
    };
}
let emp = employeeAccount();
console.log("Initial Salary:", emp.getSalary());
emp.increment(5000);
console.log("Incremented Salary:", emp.getSalary());


// 2. Currying Partial Application
console.log("\n--- 2. Curried Discount Calculator ---");
const discountCalculator = discountRate => originalPrice => originalPrice - (originalPrice * discountRate);
// Pre-configured calculators
const tenPercentDiscount = discountCalculator(0.10);
console.log("Discounted price (item A):", tenPercentDiscount(500)); // 450
console.log("Discounted price (item B):", tenPercentDiscount(1000)); // 900


// 3. Simple Memoized Squares
console.log("\n--- 3. Memoized Squares ---");
function squareCache() {
    let cache = {};
    return function(n) {
        if (n in cache) {
            console.log("Returning cached square value:");
            return cache[n];
        }
        console.log("Calculating square value:");
        let result = n * n;
        cache[n] = result;
        return result;
    };
}
const getSquare = squareCache();
console.log(getSquare(4));
console.log(getSquare(4)); // Cache hits!


// 4. Shallow Copy vs Deep Copy Arrays
console.log("\n--- 4. Array Copies ---");
let matrix = [[1, 2], [3, 4]];

// Shallow Copy using spread
let shallowMatrix = [...matrix];
shallowMatrix[0][0] = 99; // Mutates original!
console.log("Shallow matrix impact original:", matrix[0][0]); // 99

// Reset
matrix[0][0] = 1;

// Deep Copy using JSON
let deepMatrix = JSON.parse(JSON.stringify(matrix));
deepMatrix[0][0] = 99; // Safe!
console.log("Deep matrix original remains safe:", matrix[0][0]); // 1


// 5. Value vs Reference Output prediction
console.log("\n--- 5. Reference Checks ---");
let user1 = { id: 1 };
let user2 = { id: 1 };
console.log("Are user1 and user2 equal?", user1 === user2); // false (different memory reference)

let user3 = user1;
console.log("Are user1 and user3 equal?", user1 === user3); // true (same reference address)


// 6. Pure Functions
console.log("\n--- 6. Pure Functions ---");
// Pure: no external mutations, predictable outputs
const addMarkup = (price, markupPercent) => price + (price * markupPercent);
console.log("Calculated Pure Markup price:", addMarkup(100, 0.15)); // 115
