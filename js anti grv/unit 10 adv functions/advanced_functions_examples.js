// Unit 10: Advanced Functions & Scope Examples

// 1. Lexical Scope & Scope Chain
console.log("--- 1. Lexical Scope & Scope Chain ---");
let globalVar = "Global";

function outerScope() {
    let outerVar = "Outer";
    function innerScope() {
        let innerVar = "Inner";
        // Accessing variables via scope chain lookup
        console.log("Inner accessing:", innerVar);
        console.log("Inner accessing outer:", outerVar);
        console.log("Inner accessing global:", globalVar);
    }
    innerScope();
}
outerScope();


// 2. Hoisting Examples
console.log("\n--- 2. Hoisting ---");
console.log("var value before definition:", xVar); // undefined
var xVar = 100;
console.log("var value after definition:", xVar); // 100

// Function declaration hoisting
sayHello(); // Can be called before declaration line
function sayHello() {
    console.log("Hello from fully hoisted function declaration!");
}


// 3. Temporal Dead Zone (TDZ)
console.log("\n--- 3. Temporal Dead Zone ---");
try {
    console.log(yLet); // Triggers ReferenceError because of TDZ
} catch (err) {
    console.log("Error caught accessing let inside TDZ:", err.message);
}
let yLet = 200; // TDZ ends here
console.log("Accessing let after definition:", yLet);


// 4. Closures
console.log("\n--- 4. Closures ---");
// Example A: Counter factory
function createCounter() {
    let count = 0; // count is locked in lexical environment
    return function() {
        count++;
        return count;
    };
}
let counter = createCounter();
console.log("Counter call 1:", counter()); // 1
console.log("Counter call 2:", counter()); // 2

// Example B: Secure Wallet
function secureWallet(initialCash) {
    let cash = initialCash;
    return {
        checkBalance: () => cash,
        spendCash: (amount) => {
            if (amount <= cash) {
                cash -= amount;
                return `Spent $${amount}. Remaining: $${cash}`;
            }
            return "Insufficient funds!";
        }
    };
}
let wallet = secureWallet(500);
console.log("Wallet Balance:", wallet.checkBalance());
console.log(wallet.spendCash(150));


// 5. Higher-Order Functions & Callbacks
console.log("\n--- 5. HOF and Callbacks ---");
const numbers = [10, 20, 30];
const halfValue = x => x / 2; // Callback function
// map is the Higher-Order Function accepting halfValue callback
console.log("HOF map result:", numbers.map(halfValue));


// 6. the 'this' Keyword Scoping
console.log("\n--- 6. this keyword ---");
const userProfile = {
    username: "Aman",
    standardMethod: function() {
        console.log("Standard method 'this' context username:", this.username); // 'this' points to userProfile
    },
    arrowMethod: () => {
        console.log("Arrow method 'this' context username:", this.username); // 'this' inherited lexically (global)
    }
};
userProfile.standardMethod();
userProfile.arrowMethod();
