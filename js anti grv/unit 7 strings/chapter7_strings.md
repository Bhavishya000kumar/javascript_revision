# Unit 7: Strings in JavaScript

Welcome to Unit 7! Iss chapter mein hum JavaScript Strings ko zero level se interviewer/advanced level tak cover karenge. Sabhi string methods ko step-by-step simple Hinglish mein aur clean spacing ke sath design kiya gaya hai.


# PART 1: STRING BASICS

JavaScript mein characters ke combination ko handle karne ke liye strings use hote hain.


## 1. String Kya Hai?

What is it?
String characters (letters, numbers, spaces, symbols) ka ek collection block hota hai jo text representation ke liye use hota hai.

How strings are created?
JavaScript mein strings ko teen tarike se create kiya ja sakta hai:
* Single quotes: `'Hello'`
* Double quotes: `"Hello"`
* Template literals: `` `Hello` `` (backticks)

Example
```javascript
let str1 = 'Single quote string';
let str2 = "Double quote string";
let str3 = `Template literal string`;
```

Template Literals basics
Backticks (`` ` ``) humein strings ke andar variables dynamically insert karne ki convenience dete hain jise Interpolation (`${variable}`) kehte hain.
```javascript
let name = "Ravi";
let greet = `Hello ${name}!`; // Hello Ravi!
```

How JavaScript handles strings
JavaScript strings immutable hote hain. Iska matlab hai ki ek baar string banne ke baad, use modify ya change nahi kiya ja sakta. Agar hum string par koi manipulation operation lagate hain, toh humein ek naya string return hota hai, original string unchanged rehta hai.


---


## 2. String Indexing & Length

What is it?
* **String Indexing:** String ke har character ko ek position number milta hai jise index kehte hain. Indexing hamesha **0 se start** hoti hai.
* **Length Property:** String ke andar total kitne characters hain, yeh string length property batati hai.

Example Indexing dry run:
String: `"CODE"`

| Character | C | O | D | E |
| :--- | :--- | :--- | :--- | :--- |
| Index | 0 | 1 | 2 | 3 |

Example Code
```javascript
let myStr = "CODE";
console.log(myStr[0]); // 'C'
console.log(myStr[2]); // 'D'
console.log(myStr.length); // 4
```

Important point
String ka last index hamesha `length - 1` hota hai.

Common mistakes
String indexing se individual character values change karne ki koshish karna.
```javascript
// Galti:
let text = "Hello";
text[0] = "Y"; // original string edit nahi hoga (immutability rule).
console.log(text); // Hello
```


---


# PART 2: STRING METHODS Deep Dive

Har method ke specific behavior ko dynamic examples ke sath samajhte hain.


## 1. charAt()

What is it?
Diye gaye index (position) par jo character value present hai, use extract karke deta hai.

Syntax
`string.charAt(index)`

Simple example
```javascript
let text = "JavaScript";
console.log(text.charAt(4));
```

Output
S

Difference: charAt() vs normal indexing
* Normal indexing (`text[100]`) target value missing hone par `undefined` output deti hai.
* `charAt(100)` target value missing hone par ek **empty string** (`""`) return karta hai.


---


## 2. includes()

What is it?
Check karta hai ki koi specific keyword substring humare string ke andar present hai ya nahi.

Syntax
`string.includes(searchString)`

Simple example
```javascript
let phrase = "I love programming";
console.log(phrase.includes("love"));
console.log(phrase.includes("python"));
```

Output
true
false

Important point
includes() method case-sensitive hota hai. `"Love"` checking `"love"` se match nahi karegi.


---


## 3. indexOf() vs lastIndexOf()

What is it?
* **indexOf():** String ke andar sub-string ya character ke **sabse pehle matching position (first occurrence)** ka index deta hai.
* **lastIndexOf():** String ke **aakhiri matching position (last occurrence)** ka index return karta hai.

Syntax
`string.indexOf(searchValue)`

Simple example
```javascript
let phrase = "hello world, hello coder";
console.log(phrase.indexOf("hello"));
console.log(phrase.lastIndexOf("hello"));
console.log(phrase.indexOf("javascript")); // returns -1 if not found
```

Output
0
13
-1

Important point
Agar searched value string mein nahi milti, toh dono methods **-1** return karte hain.


---


## 4. slice() vs substring()

What is it?
Dono methods string ke ek part ko cut (extract) karke naya string return karte hain.

Syntax
`string.slice(startIndex, endIndex)` 
Note: End index dynamic check matching values exclusive hota hai (end position character yield nahi hota).

Difference table:
* **slice(start, end):** Negative index parameter features accept karta hai. Negative indices string ke end point backward parameters count match se traverse karte hain.
* **substring(start, end):** Negative parameters checks support nahi karta. Negative argument parameter evaluate hone par use standard zero `0` index consider kar leta hai.

Example
```javascript
let text = "JavaScript";

// slice using positive values
console.log(text.slice(0, 4));

// slice using negative values (last 5 characters)
console.log(text.slice(-5));

// substring behavior with negative argument (treated as 0)
console.log(text.substring(-3, 4)); // treated as substring(0, 4)
```

Output
Java
Script
Java


---


## 5. substr() concept

What is it?
substr() start index se lekar specific **character length count** tak text yield karta hai.
Note: Modern JS specifications mein substr() deprecated configuration methods list mein include ho chuka hai, isliye production code checks mein iski jagah slice() use karne ki recommendation di jati hai.

Syntax
`string.substr(startIndex, length)`

Example
```javascript
let text = "JavaScript";
console.log(text.substr(4, 3)); // starts at index 4, takes 3 characters
```

Output
Scr


---


## 6. toUpperCase() & toLowerCase()

What is it?
* **toUpperCase():** Poore string ko capital letters (uppercase) mein convert karta hai.
* **toLowerCase():** Poore string ko small letters (lowercase) mein convert karta hai.

Example
```javascript
let text = "Code Pro";
console.log(text.toUpperCase());
console.log(text.toLowerCase());
```

Output
CODE PRO
code pro


---


## 7. trim()

What is it?
String ke starting aur ending spaces ko clean character remove format sets mein convert karta hai.

Syntax
`string.trim()`

Important point
trim() humesha edge space characters clear filters run karta hai. Yeh string ke **bich ke space variables clean nahi karta**.

Example
```javascript
let str = "  hello world  ";
console.log(str.trim());
```

Output
hello world


---


## 8. replace() vs replaceAll()

What is it?
* **replace():** Sub-string ke **sirf pehle occurrence (first match)** ko replace karta hai.
* **replaceAll():** Sub-string ke **sare matching occurrences** ko check karke update karta hai.

Syntax
`string.replace(searchVal, newVal)`

Example
```javascript
let text = "dog meets dog";
console.log(text.replace("dog", "cat"));
console.log(text.replaceAll("dog", "cat"));
```

Output
cat meets dog
cat meets cat


---


## 9. split() vs join()

What is it?
* **split():** String ko defined separator ke basis par evaluate karke **Array of strings** mein convert karta hai.
* **join():** Array elements ko check karke **Single string representation** mein convert karta hai.

Example
```javascript
let text = "apple,banana,mango";
let arr = text.split(","); // splits string by comma
console.log(arr);

let newStr = arr.join(" - "); // joins array elements with ' - '
console.log(newStr);
```

Output
["apple", "banana", "mango"]
apple - banana - mango


---


# PART 3: PRACTICAL STRING PROBLEMS

## 1. Reverse a String
```javascript
function reverseStr(str) {
    return str.split("").reverse().join("");
}
console.log(reverseStr("coder")); // redoc
```

---

## 2. Check Palindrome
```javascript
function isPalindrome(str) {
    let clean = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return clean === clean.split("").reverse().join("");
}
console.log(isPalindrome("level")); // true
```

---

## 3. Count Vowels & Consonants
```javascript
function countVowelsConsonants(str) {
    let vowels = "aeiouAEIOU";
    let vCount = 0;
    let cCount = 0;
    for (let char of str) {
        if (/[a-zA-Z]/.test(char)) {
            if (vowels.includes(char)) {
                vCount++;
            } else {
                cCount++;
            }
        }
    }
    return { vowels: vCount, consonants: cCount };
}
console.log(countVowelsConsonants("hello world")); // { vowels: 3, consonants: 7 }
```

---

## 4. Anagram Check
```javascript
function isAnagram(s1, s2) {
    let check1 = s1.toLowerCase().split("").sort().join("");
    let check2 = s2.toLowerCase().split("").sort().join("");
    return check1 === check2;
}
console.log(isAnagram("silent", "listen")); // true
```


---


# 🧠 QUICK REVISION SUMMARY

* **Basics:** Strings are immutable sequences of character keys. Index starts at 0, last index is length - 1.
* **slice vs substring:** slice accepts negative index coordinates, substring converts negative argument inputs to 0.
* **replace vs replaceAll:** replace updates only the first matching item, replaceAll updates all matches.
* **indexOf vs lastIndexOf:** first match index vs last match index. Both yield -1 if value is not found.
* **split vs join:** split breaks string into array, join joins array back to string.


---


# 📝 IMPORTANT DEFINITIONS (INTERVIEW-READY)

1. **String Immutability:** The architectural characteristic of JavaScript strings where string values cannot be modified once instantiated.
2. **Template Interpolation:** Embedding variables directly within template literal backtick strings using `${expression}` syntax.
3. **Character Coercion (Indexing):** Accessing missing character indices using `[]` outputs `undefined`, while `charAt()` resolves safely to an empty string `""`.
4. **Tokenization (split):** Breaking down string blocks into array element tokens by using separators.
5. **Deprecated API (substr):** Substring extraction method using length parameters, marked for removal in future updates.


---


# 💬 IMPORTANT INTERVIEW QUESTIONS & ANSWERS

### Q1. Explain String Immutability.
**Ans:** JavaScript strings cannot be changed after creation. Any method like `replace()` or `toUpperCase()` does not edit the original string, but returns a new modified string.

### Q2. What is the difference between `slice()` and `substring()`?
**Ans:** `slice()` accepts negative parameters which count backward from the end of the string. `substring()` treats negative inputs as 0.

### Q3. Predict output of `"apple".charAt(100)` vs `"apple"[100]`.
**Ans:** `charAt(100)` returns an empty string `""`. Index bracket notation `[100]` returns `undefined`.

### Q4. Predict output:
```javascript
let str = "hello";
str[0] = "H";
console.log(str);
```
**Ans:** `"hello"`. String variables are immutable. Bracket assignment is ignored.

### Q5. What does the `indexOf()` method return if the element is not found?
**Ans:** It returns `-1`.

### Q6. Difference between `replace()` and `replaceAll()`?
**Ans:** `replace()` modifies only the first matching instance of the pattern. `replaceAll()` changes all matching occurrences.

### Q7. How do you convert an array of letters into a single string?
**Ans:** By calling the `join()` array method. E.g., `["a", "b"].join("")` becomes `"ab"`.

### Q8. Predict output:
```javascript
console.log("  hello  ".trim());
```
**Ans:** `"hello"`. Trim removes space characters from the beginning and end of the string.

### Q9. Predict output:
```javascript
let str = "JavaScript";
console.log(str.slice(-5));
```
**Ans:** `"cript"`. Negative index starts counting backward from the end of the string.

### Q10. What is Template Literal interpolation?
**Ans:** The mechanism to write multi-line strings and embed variable expressions inside backtick strings using `${expression}` syntax.

### Q11. Predict output:
```javascript
console.log("cat".includes("C"));
```
**Ans:** `false`. `includes()` check is case-sensitive.

### Q12. Predict output:
```javascript
let s = "abab";
console.log(s.replace("a", "x"));
```
**Ans:** `"xbab"`. Only the first match of `"a"` is replaced.

### Q13. Predict output:
```javascript
let s = "a,b,c";
console.log(s.split(",").length);
```
**Ans:** `3`. String is split into three array elements: `["a", "b", "c"]`.

### Q14. Predict output:
```javascript
console.log("test".toUpperCase().toLowerCase());
```
**Ans:** `"test"`. The string is converted to uppercase `"TEST"`, and then back to lowercase.

### Q15. Can you use `indexOf()` on string data type?
**Ans:** Yes. It locates the index of the first occurrence of a substring.

### Q16. Predict output:
```javascript
let x = "Code";
let y = x.slice(1, 3);
console.log(y);
```
**Ans:** `"od"`. The end index `3` is exclusive.

### Q17. Predict output:
```javascript
let word = "abc";
console.log(word.lastIndexOf("z"));
```
**Ans:** `-1`. Since `"z"` does not exist in `"abc"`.

### Q18. What is the length of `" "` (space character string)?
**Ans:** `1`. Space characters are counted as valid string elements.

### Q19. Predict output:
```javascript
console.log("10" + 20);
```
**Ans:** `"1020"`. The number 20 is coerced into a string, and concatenation occurs.

### Q20. Predict output:
```javascript
console.log("10" - 5);
```
**Ans:** `5`. Subtraction forces string coercion to a number.


---


# 💻 PRACTICE QUESTIONS

## Question 1: Count Vowels
* **Question:** Create a function to count all vowels inside a given word.
* **Solution:**
  ```javascript
  function countVowels(word) {
      let vowels = "aeiouAEIOU";
      let count = 0;
      for (let char of word) {
          if (vowels.includes(char)) {
              count++;
          }
      }
      return count;
  }
  console.log(countVowels("javascript")); // 3
  ```
* **Explanation:** Checks if character exists in vowels set and increments counter.

## Question 2: Convert Case Shifting
* **Question:** Shift lower to uppercase and vice-versa.
* **Solution:**
  ```javascript
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
  console.log(swapCase("CodePro")); // cODEpRO
  ```
* **Explanation:** Compares letter to its upper representation and swaps case accordingly.

## Question 3: Remove Whitespace
* **Question:** Remove all white spaces inside a string (not just edge spaces).
* **Solution:**
  ```javascript
  function removeSpaces(str) {
      return str.split(" ").join("");
  }
  console.log(removeSpaces("a b c")); // abc
  ```
* **Explanation:** Splits string by spaces to get an array of words, then joins them with an empty string.
