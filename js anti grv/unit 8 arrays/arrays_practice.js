// Unit 8: Arrays Practice Exercises

// 1. Find Largest & Smallest Element
console.log("--- 1. Largest & Smallest Elements ---");
function findMinMax(arr) {
    let min = arr[0];
    let max = arr[0];
    for (let i = 1; i < arr.length; i++) {
        if (arr[i] > max) max = arr[i];
        if (arr[i] < min) min = arr[i];
    }
    return { min, max };
}
console.log("Min & Max of [15, 3, 22, 8]:", findMinMax([15, 3, 22, 8]));


// 2. Sum of Array & Count Elements
console.log("\n--- 2. Sum & Count ---");
let numbers = [5, 10, 15, 20];
let sum = numbers.reduce((acc, curr) => acc + curr, 0);
console.log("Sum of elements:", sum); // 50
console.log("Total element count:", numbers.length); // 4


// 3. Reverse Array & Search Element
console.log("\n--- 3. Reverse & Search ---");
let originalArray = [1, 2, 3, 4];
let reversedArray = [...originalArray].reverse(); // spread prevents mutating original
console.log("Reversed:", reversedArray);

function searchItem(arr, target) {
    let index = arr.indexOf(target);
    return index !== -1 ? `Found at index ${index}` : "Not Found";
}
console.log("Search 3:", searchItem(originalArray, 3)); // Found at index 2


// 4. Remove Duplicates & Count Frequency
console.log("\n--- 4. Remove Duplicates & Count Frequency ---");
function removeDuplicates(arr) {
    return [...new Set(arr)]; // modern quick way to remove duplicates
}
console.log("Unique elements:", removeDuplicates([1, 2, 2, 3, 1])); // [1, 2, 3]

function getFrequency(arr) {
    let freq = {};
    for (let val of arr) {
        freq[val] = (freq[val] ?? 0) + 1;
    }
    return freq;
}
console.log("Frequency map:", getFrequency(["apple", "banana", "apple"])); // { apple: 2, banana: 1 }


// 5. Filter Evens, Double Elements, Find numbers > Val
console.log("\n--- 5. Filter, Map & Find ---");
let data = [5, 12, 8, 21, 4];

let evens = data.filter(x => x % 2 === 0);
console.log("Filtered Evens:", evens); // [12, 8, 4]

let doubled = data.map(x => x * 2);
console.log("Doubled values:", doubled); // [10, 24, 16, 42, 8]

let greaterThanTen = data.filter(x => x > 10);
console.log("Numbers > 10:", greaterThanTen); // [12, 21]


// 6. Conditions checking using some() & every()
console.log("\n--- 6. Some & Every checks ---");
let scores = [65, 80, 45, 90];
let hasFailedStudent = scores.some(s => s < 50); // Checks if at least one failed
let allPassed = scores.every(s => s >= 50); // Checks if all passed

console.log("Has any failed student?", hasFailedStudent); // true (45 is < 50)
console.log("Did all students pass?", allPassed); // false
