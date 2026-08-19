// Unit 4: Loops Practice Examples

// 1. Counting from 1 to 5 using different loops
console.log("--- 1. Counting 1 to 5 (For vs While vs Do-While) ---");
console.log("For loop:");
for (let i = 1; i <= 5; i++) {
    console.log(i);
}

console.log("While loop:");
let w = 1;
while (w <= 5) {
    console.log(w);
    w++;
}

console.log("Do-While loop:");
let dw = 1;
do {
    console.log(dw);
    dw++;
} while (dw <= 5);


// 2. Sum of First N Numbers
console.log("\n--- 2. Sum of first 5 numbers ---");
let limit = 5;
let sum = 0;
for (let i = 1; i <= limit; i++) {
    sum += i;
}
console.log("Sum: " + sum); // 15


// 3. Factorial of a Number
console.log("\n--- 3. Factorial of 5 ---");
let num = 5;
let factorial = 1;
for (let i = 1; i <= num; i++) {
    factorial *= i;
}
console.log("Factorial: " + factorial); // 120


// 4. Prime Number Checker
console.log("\n--- 4. Prime Checker (Checking 13) ---");
let primeCandidate = 13;
let isPrime = true;

if (primeCandidate <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < primeCandidate; i++) {
        if (primeCandidate % i === 0) {
            isPrime = false;
            break;
        }
    }
}
console.log("Is " + primeCandidate + " Prime? " + isPrime);


// 5. Reverse a Number
console.log("\n--- 5. Reverse number 9876 ---");
let valToReverse = 9876;
let reversed = 0;

while (valToReverse > 0) {
    let digit = valToReverse % 10;
    reversed = (reversed * 10) + digit;
    valToReverse = Math.floor(valToReverse / 10);
}
console.log("Reversed: " + reversed); // 6789


// 6. Draw Star Pattern (Right-angled Triangle)
console.log("\n--- 6. Star Pattern ---");
let rows = 4;
for (let i = 1; i <= rows; i++) {
    let line = "";
    for (let j = 1; j <= i; j++) {
        line += "* ";
    }
    console.log(line);
}
