// Unit 8: Arrays Code Examples

// 1. Array Basics (Creation, Access & Update)
console.log("--- 1. Array Basics ---");
let fruits = ["Apple", "Banana", "Mango"];
console.log("First element:", fruits[0]); // Apple
console.log("Array length:", fruits.length); // 3
fruits[1] = "Orange"; // Updating element
console.log("Updated array:", fruits);


// 2. Stack/Queue Operations (push, pop, shift, unshift)
console.log("\n--- 2. Stack & Queue Methods ---");
let numbers = [10, 20];
numbers.push(30); // Adds to end
console.log("After push:", numbers);
let poppedValue = numbers.pop(); // Removes from end
console.log("Popped:", poppedValue, "Array:", numbers);

numbers.unshift(5); // Adds to start
console.log("After unshift:", numbers);
let shiftedValue = numbers.shift(); // Removes from start
console.log("Shifted:", shiftedValue, "Array:", numbers);


// 3. Extracting and Merging (slice, splice, concat)
console.log("\n--- 3. Extracting & Merging ---");
let colors = ["red", "green", "blue", "yellow"];

// slice(start, end) -> Non-mutating
let sliceCopy = colors.slice(1, 3);
console.log("Sliced (1, 3):", sliceCopy); // ["green", "blue"]
console.log("Original after slice:", colors); // Unchanged

// splice(start, deleteCount, itemsToAdd) -> Mutating
let spliceRemoved = colors.splice(1, 2, "purple");
console.log("Splice removed:", spliceRemoved); // ["green", "blue"]
console.log("Original after splice:", colors); // ["red", "purple", "yellow"]

// concat() -> Non-mutating
let extraColors = ["black", "white"];
let mergedColors = colors.concat(extraColors);
console.log("Concat result:", mergedColors);


// 4. Searching (indexOf, includes, find, findIndex)
console.log("\n--- 4. Search Methods ---");
let items = ["pen", "pencil", "eraser"];
console.log("indexOf('pencil'):", items.indexOf("pencil")); // 1
console.log("includes('eraser'):", items.includes("eraser")); // true

let scores = [15, 22, 9, 31];
// find first score > 20
let matchVal = scores.find(x => x > 20);
let matchIndex = scores.findIndex(x => x > 20);
console.log("find (>20):", matchVal); // 22
console.log("findIndex (>20):", matchIndex); // 1


// 5. Higher Order Methods (forEach, map, filter)
console.log("\n--- 5. Higher Order Methods ---");
let baseNums = [1, 2, 3, 4];

// forEach()
baseNums.forEach(n => console.log("forEach item:", n));

// map() -> Non-mutating
let squareNums = baseNums.map(n => n * n);
console.log("Map squared array:", squareNums);

// filter() -> Non-mutating
let evenNums = baseNums.filter(n => n % 2 === 0);
console.log("Filter even array:", evenNums);


// 6. advanced reduction & Verification (reduce, some, every)
console.log("\n--- 6. Advanced Reduction & Verification ---");
let dataVals = [5, 10, 15];

// reduce() -> sum calculation
let dataSum = dataVals.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);
console.log("Reduce Sum Total:", dataSum); // 30

// some() & every()
console.log("some > 12 :", dataVals.some(x => x > 12)); // true (15 is > 12)
console.log("every > 4  :", dataVals.every(x => x > 4));  // true (all items are > 4)


// 7. Lecture 30 — Array Interview + Problem Solving
console.log("\n--- 7. Lecture 30 - Problem Solving ---");

// Frequency of elements
function countFrequency(arr) {
    let freq = {};
    for (let num of arr) {
        freq[num] = (freq[num] ?? 0) + 1;
    }
    return freq;
}
console.log("Frequencies:", countFrequency([1, 2, 1, 3, 2, 1]));

// Min and Max
function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let val of arr) {
        if (val > max) max = val;
        if (val < min) min = val;
    }
    return { min, max };
}
console.log("Min and Max:", findMinMax([15, 42, 8, 91, 23]));

// Duplicate elements
function findDuplicates(arr) {
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
console.log("Duplicates:", findDuplicates([1, 2, 3, 2, 4, 1]));

// Transforming an Array (salary mapping)
let salaries = [1000, 2000, 3000];
let updatedSalaries = salaries.map(s => s + (s * 0.1));
console.log("Transformed Salaries:", updatedSalaries);

// Filtering an Array (passing scores)
let marks = [45, 78, 32, 90];
let passingMarks = marks.filter(m => m >= 50);
console.log("Filtered Passing Marks:", passingMarks);

// Aggregation (Total bill calculation)
let cartPrices = [120, 250, 80];
let totalBill = cartPrices.reduce((total, p) => total + p, 0);
console.log("Aggregated Total Bill:", totalBill);

