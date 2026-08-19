// Unit 7: Strings Code Examples

// 1. String Creation
console.log("--- 1. String Creation ---");
let single = 'Single quote';
let double = "Double quote";
let name = "Ravi";
let template = `Template literal: Hello ${name}`; // interpolation
console.log(single);
console.log(double);
console.log(template);


// 2. String Indexing & Length
console.log("\n--- 2. String Indexing & Length ---");
let str = "JavaScript";
console.log("Length of str:", str.length); // 10
console.log("Index 0:", str[0]); // 'J'
console.log("Index 4:", str[4]); // 'S'
console.log("Last Index character:", str[str.length - 1]); // 't'


// 3. charAt()
console.log("\n--- 3. charAt() ---");
console.log("charAt(4):", str.charAt(4)); // 'S'
console.log("Index [100] (bracket):", str[100]); // undefined
console.log("charAt(100):", str.charAt(100)); // "" (empty string)


// 4. includes()
console.log("\n--- 4. includes() ---");
let sentence = "I love Javascript";
console.log("Includes 'love':", sentence.includes("love")); // true
console.log("Includes 'Python':", sentence.includes("Python")); // false


// 5. indexOf() vs lastIndexOf()
console.log("\n--- 5. indexOf() vs lastIndexOf() ---");
let msg = "hello world, hello coder";
console.log("indexOf('hello'):", msg.indexOf("hello")); // 0
console.log("lastIndexOf('hello'):", msg.lastIndexOf("hello")); // 13
console.log("indexOf('python'):", msg.indexOf("python")); // -1


// 6. slice() vs substring()
console.log("\n--- 6. slice() vs substring() ---");
let language = "JavaScript";
// slice(start, end)
console.log("slice(0, 4):", language.slice(0, 4)); // "Java"
console.log("slice(-5):", language.slice(-5)); // "Script" (counts backwards)

// substring(start, end)
console.log("substring(0, 4):", language.substring(0, 4)); // "Java"
console.log("substring(-5):", language.substring(-5)); // "JavaScript" (negative treated as 0)


// 7. toUpperCase() & toLowerCase()
console.log("\n--- 7. UpperCase & LowerCase ---");
console.log("Upper:", language.toUpperCase());
console.log("Lower:", language.toLowerCase());


// 8. trim()
console.log("\n--- 8. trim() ---");
let paddedStr = "   hello JS   ";
console.log("Trimmed:", paddedStr.trim()); // "hello JS" (middle space remains)


// 9. replace() vs replaceAll()
console.log("\n--- 9. replace() vs replaceAll() ---");
let phrase = "black cat meets black dog";
console.log("replace():", phrase.replace("black", "white")); // replaces first match only
console.log("replaceAll():", phrase.replaceAll("black", "white")); // replaces all matches


// 10. split() vs join()
console.log("\n--- 10. split() vs join() ---");
let listStr = "apple,banana,cherry";
let arr = listStr.split(","); // Splits string into array
console.log("Split array:", arr);
let joinedStr = arr.join(" - "); // Joins array elements with delimiter
console.log("Joined string:", joinedStr);
