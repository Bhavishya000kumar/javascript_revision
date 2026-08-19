// Unit 7: Strings Practice Exercises

// 1. Reverse a String
console.log("--- 1. Reverse a String ---");
function reverseString(str) {
    return str.split("").reverse().join("");
}
console.log("Reverse of 'developer':", reverseString("developer")); // repoleved


// 2. Check Palindrome
console.log("\n--- 2. Check Palindrome ---");
function isPalindrome(str) {
    let clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    let rev = clean.split("").reverse().join("");
    return clean === rev;
}
console.log("Is 'radar' palindrome?", isPalindrome("radar")); // true
console.log("Is 'coder' palindrome?", isPalindrome("coder")); // false


// 3. Count Vowels & Consonants
console.log("\n--- 3. Count Vowels & Consonants ---");
function countVowelsConsonants(str) {
    let vowels = "aeiouAEIOU";
    let vCount = 0;
    let cCount = 0;
    for (let char of str) {
        if (/[a-zA-Z]/.test(char)) { // Check if alphabetical character
            if (vowels.includes(char)) {
                vCount++;
            } else {
                cCount++;
            }
        }
    }
    return { vowels: vCount, consonants: cCount };
}
console.log("Counts in 'Hello JS':", countVowelsConsonants("Hello JS")); // { vowels: 2, consonants: 5 }


// 4. Anagram Check
console.log("\n--- 4. Anagram Check ---");
function isAnagram(s1, s2) {
    let check1 = s1.toLowerCase().split("").sort().join("");
    let check2 = s2.toLowerCase().split("").sort().join("");
    return check1 === check2;
}
console.log("Are 'silent' and 'listen' anagrams?", isAnagram("silent", "listen")); // true


// 5. Swap Case
console.log("\n--- 5. Swap Case ---");
function swapCase(str) {
    let result = "";
    for (let char of str) {
        if (char === char.toUpperCase()) {
            result += char.toLowerCase();
        } else {
            result += char.toUpperCase();
        }
    }
    return result;
}
console.log("Swap case of 'CodePro':", swapCase("CodePro")); // cODEpRO


// 6. Remove Spaces
console.log("\n--- 6. Remove all spaces ---");
function removeSpaces(str) {
    return str.split(" ").join("");
}
console.log("Cleaned string:", removeSpaces("a b c d")); // "abcd"
