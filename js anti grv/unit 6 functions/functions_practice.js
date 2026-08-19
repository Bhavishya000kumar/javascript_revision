// Unit 6: Functions Practice Code

// 1. Reverse String
console.log("--- 1. Reverse String ---");
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
console.log("Reverse of 'javascript':", reverseString("javascript")); // tpircsavaj


// 2. Palindrome Checker
console.log("\n--- 2. Palindrome Checker ---");
function checkPalindrome(str) {
    let cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let reversed = cleaned.split("").reverse().join("");
    return cleaned === reversed;
}
console.log("Is 'Racecar' palindrome?", checkPalindrome("Racecar")); // true
console.log("Is 'hello' palindrome?", checkPalindrome("hello")); // false


// 3. Count Characters
console.log("\n--- 3. Count Characters (excluding spaces) ---");
function countChars(str) {
    let count = 0;
    for (let char of str) {
        if (char !== " ") {
            count++;
        }
    }
    return count;
}
console.log("Char count in 'JS Pro':", countChars("JS Pro")); // 5


// 4. Anagram Basics
console.log("\n--- 4. Anagram Basics ---");
function areAnagrams(word1, word2) {
    let sorted1 = word1.toLowerCase().split("").sort().join("");
    let sorted2 = word2.toLowerCase().split("").sort().join("");
    return sorted1 === sorted2;
}
console.log("Are 'listen' and 'silent' anagrams?", areAnagrams("listen", "silent")); // true


// 5. Frequency of Characters
console.log("\n--- 5. Character Frequency ---");
function getFrequency(str) {
    let freq = {};
    for (let char of str) {
        if (char !== " ") {
            freq[char] = (freq[char] ?? 0) + 1;
        }
    }
    return freq;
}
console.log("Frequency in 'bubble':", getFrequency("bubble")); // { b: 3, u: 1, l: 1, e: 1 }
