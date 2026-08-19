# Unit 9: Objects in JavaScript

Welcome to Unit 9! Iss chapter mein hum JavaScript Objects ko standard zero level se interview/advanced level tak cover karenge. Sabhi object operations, nested structures, techniques aur standard methods ko simple Hinglish mein dry runs ke sath design kiya gaya hai.


# PART 1: OBJECT BASICS

Objects dynamic variables values collections hold criteria formats define key-value structures.


## 1. Object Kya Hai?

What is it?
Object ek non-primitive data type hota hai jo elements ko **key-value pair** format mein store karta hai. Key ko properties aur content data ko values kehte hain.

Why is it needed?
Real-world entities (jaise User Profile, Car details, E-commerce Product) ke pass multiple properties hoti hain. Unhe systematically single place mein maintain karne ke liye objects use kiye jate hain.

Syntax
```javascript
let objectName = {
    key1: value1,
    key2: value2
};
```

Simple example
```javascript
let student = {
    name: "Ravi",
    age: 20,
    course: "JS Pro"
};

console.log(student.name); // Accessing property
```

Output
Ravi

Step-by-step explanation
Program sets memory block student containing keys name, age, course. Accessing target name returns "Ravi".


---


## 2. Dot Notation vs Bracket Notation

What is it?
Object ke keys access, add, update karne ke liye do methods use hote hain:
* **Dot Notation (`object.key`):** Standard access method.
* **Bracket Notation (`object["key"]`):** String representation matching name format properties access checks.

When to use Bracket Notation?
1. Jab key string space contain karti ho: `user["full name"]`.
2. Jab key name variable mein store ho dynamically: `user[activeKey]`.

Simple example
```javascript
let user = {
    name: "Amit",
    "user age": 25
};

console.log(user.name); // Dot notation
console.log(user["user age"]); // Bracket notation (needed due to space)

let queryKey = "name";
console.log(user[queryKey]); // Dynamic query access
```

Output
Amit
25
Amit


---


## 3. Add, Update & Delete Property

What is it?
Objects elements values dynamically update and clean.
* **Add:** Assign value to new key.
* **Update:** Assign value to existing key.
* **Delete:** Use `delete` keyword.

Example
```javascript
let car = {
    brand: "Toyota",
    year: 2020
};

// Add property
car.color = "Red";

// Update property
car.year = 2022;

// Delete property
delete car.color;

console.log(car);
```

Output
`{ brand: "Toyota", year: 2022 }`


---


# PART 2: NESTED STRUCTURES

Complex APIs data systems handle complex layouts.


## 1. Nested Objects

What is it?
Object ke andar doosra object define karna.

Accessing step-by-step:
Object: `let company = { info: { address: "Delhi" } }`
* Step 1: `company.info` returns `{ address: "Delhi" }`.
* Step 2: `company.info.address` returns `"Delhi"`.

Example
```javascript
let company = {
    name: "TechCorp",
    info: {
        address: "Delhi",
        employees: 50
    }
};

console.log(company.info.address);
```

Output
Delhi


---


## 2. Objects inside Arrays & Arrays inside Objects

* **Arrays inside Objects:** Object property variable values holds array list.
* **Objects inside Arrays:** Array elements indices hold individual object records (E-commerce database lists).

Example
```javascript
// Array inside Object
let school = {
    classes: ["Class 10", "Class 12"]
};
console.log(school.classes[0]); // Class 10

// Objects inside Array
let usersList = [
    { id: 1, name: "Rahul" },
    { id: 2, name: "Amit" }
];
console.log(usersList[1].name); // Amit
```

Output
Class 10
Amit


---


# PART 3: OBJECT HELPER METHODS

JavaScript objects provide helper built-in functions values check lists.


## 1. Object.keys() & Object.values() & Object.entries()
* **Object.keys(obj):** Returns array containing all keys strings names.
* **Object.values(obj):** Returns array containing all property values data.
* **Object.entries(obj):** Returns array of `[key, value]` pairs arrays.

Example
```javascript
let item = { name: "Pen", price: 10 };

console.log(Object.keys(item));
console.log(Object.values(item));
console.log(Object.entries(item));
```

Output
`["name", "price"]`
`["Pen", 10]`
`[ ["name", "Pen"], ["price", 10] ]`


---


## 2. Object.assign()

What is it?
Sare enumerable properties ko target object mein merge copy perform karke output return.

Example
```javascript
let source = { a: 1 };
let dest = { b: 2 };
Object.assign(dest, source);
console.log(dest);
```

Output
`{ b: 2, a: 1 }`


---


# PART 4: MODERN DESTRUCTURING & COPY TECHNIQUES

## 1. Object Destructuring

What is it?
Object properties key variables ko directly pull output variables extract shorthand syntax check.

Syntax
`const { key1, key2 } = object;`

Example
```javascript
let user = { username: "ravi12", email: "ravi@mail.com" };

// Destructuring
const { username, email } = user;
console.log(username);
console.log(email);
```

Output
ravi12
ravi@mail.com


---


## 2. Object Spread (`...`) & Shallow Copy

* **Spread operator (`...`):** Object properties ko unpack copy perform karke duplicates objects sets.
* **Shallow Copy:** Jab object nested attributes property objects addresses copy, reference links duplicate points coordinate.

Example
```javascript
let original = { name: "Ravi", location: { city: "Mumbai" } };

// Shallow Copy using spread
let copyObj = { ...original };

copyObj.name = "Rahul"; // modifying primitive value
copyObj.location.city = "Pune"; // modifying nested object property

console.log("Original: ", original);
console.log("Copy: ", copyObj);
```

Output
Original: `{ name: "Ravi", location: { city: "Pune" } }`
Copy: `{ name: "Rahul", location: { city: "Pune" } }`

Step-by-step explanation
Primitive properties (name) value updates isolated. Nested objects values share same memory pointers reference coordinates inside shallow copies, isliye Pune change original object mein bhi reflect hua.


---


# 🧠 QUICK REVISION SUMMARY

* **Keys & Values:** Objects contain key-value pairs. Brackets indexing notation `[]` helps accessing dynamic string space keys.
* **Add/Update/Delete:** `obj.newKey = val` adds; `delete obj.key` cleans.
* **Helper APIs:** `Object.keys()` returns keys array; `Object.values()` returns values array; `Object.entries()` returns nested key-value pairs array.
* **Destructuring:** Quick shorthand to pull variables directly from object properties.
* **Shallow Copy:** copies base values properties, nested elements continue sharing inner object reference memory targets.


---


# 📝 IMPORTANT DEFINITIONS (INTERVIEW-READY)

1. **Object Literal:** The syntax declaration block defining objects using curly braces `{}`.
2. **Bracket Notation:** Method to query object fields using strings, enabling dynamic variable mapping key searches.
3. **Property Shadowing (Objects):** Nesting scope structures values overlay operations internally.
4. **Shallow Copy:** Duplicating root element variables while maintaining reference pointers to nested objects.
5. **Deep Copy:** Recursively duplicating all variable properties, creating completely independent object structures.


---


# 💬 IMPORTANT INTERVIEW QUESTIONS & ANSWERS

### Q1. Difference between Dot Notation and Bracket Notation?
**Ans:** Dot notation is simpler but cannot access keys containing spaces or special characters, nor can it map dynamic variable keys. Bracket notation resolves keys using string values, allowing dynamic variables and spaced keys.

### Q2. What is Shallow Copy vs Deep Copy?
**Ans:** Shallow copy copies root properties but maintains references to nested objects. Deep copy duplicates all levels of nesting, creating a completely independent copy.

### Q3. Predict output:
```javascript
let a = { name: "Pen" };
let b = a;
b.name = "Pencil";
console.log(a.name);
```
**Ans:** `"Pencil"`. Objects are copied by reference. Modifying `b` changes the shared object referenced by `a`.

### Q4. What does `Object.keys()` return?
**Ans:** An array of strings representing the keys of the object.

### Q5. Predict output:
```javascript
let user = { id: 1, age: 20 };
const { id, age } = user;
console.log(id);
```
**Ans:** `1`. (Standard Object Destructuring).

### Q6. How do you check if a key exists inside an object?
**Ans:** By using the `in` operator (e.g., `"age" in user`) or checking `user.age !== undefined`.

### Q7. What does `Object.entries()` return?
**Ans:** An array of key-value pair arrays. For example: `[ ["key", "value"] ]`.

### Q8. Predict output:
```javascript
let obj = { x: 10 };
delete obj.x;
console.log(obj.x);
```
**Ans:** `undefined`. The key was deleted.

### Q9. Predict output:
```javascript
const obj = { val: 5 };
obj.val = 10;
console.log(obj.val);
```
**Ans:** `10`. Declare with `const` prevents reassigning the variable pointer, but properties of the referenced object can still be updated.

### Q10. How do you merge two objects using spread operator?
**Ans:** `let merged = { ...obj1, ...obj2 };`.

### Q11. Predict output:
```javascript
let name = "Ravi";
let profile = { name };
console.log(profile);
```
**Ans:** `{ name: "Ravi" }`. (Object property shorthand).

### Q12. Predict output:
```javascript
let data = { vals: [1, 2] };
console.log(data.vals[0]);
```
**Ans:** `1`. Accessing array index inside object.

### Q13. Predict output:
```javascript
let list = [ { name: "Pen" } ];
console.log(list[0].name);
```
**Ans:** `"Pen"`. Accessing object properties inside array index.

### Q14. What does `Object.assign()` return?
**Ans:** It returns the target object with merged keys.

### Q15. Predict output:
```javascript
let a = { name: "Pen" };
let b = { ...a };
b.name = "Pencil";
console.log(a.name);
```
**Ans:** `"Pen"`. Spread creates a shallow copy, separating root property values.

### Q16. Can we use numbers as keys in JavaScript objects?
**Ans:** Yes. The JavaScript engine coerces numeric keys to strings internally.

### Q17. Predict output:
```javascript
let obj = { 1: "One" };
console.log(obj["1"]);
```
**Ans:** `"One"`.

### Q18. How do you copy an object into a completely independent Deep Copy in JS?
**Ans:** By using `JSON.parse(JSON.stringify(object))` or the modern native global method `structuredClone(object)`.

### Q19. Predict output:
```javascript
let key = "brand";
let car = { [key]: "Toyota" }; // computed property keys
console.log(car.brand);
```
**Ans:** `"Toyota"`.

### Q20. Predict output:
```javascript
console.log(typeof {});
```
**Ans:** `"object"`.


---


# 💻 PRACTICE QUESTIONS

## Question 1: Access Nested JSON Addresses
* **Question:** Extract `zip` code from object: `let user = { info: { address: { zip: 110001 } } }`.
* **Solution:**
  ```javascript
  let user = { info: { address: { zip: 110001 } } };
  let zipCode = user.info?.address?.zip;
  console.log("Zip Code:", zipCode); // 110001
  ```
* **Explanation:** Traverses layers sequentially: `user` $\rightarrow$ `info` $\rightarrow$ `address` $\rightarrow$ `zip`.

## Question 2: Object Keys and Values loops
* **Question:** Print keys and values of `{ name: "Ravi", age: 20 }` sequentially.
* **Solution:**
  ```javascript
  let profile = { name: "Ravi", age: 20 };
  Object.keys(profile).forEach(key => {
      console.log(key + ": " + profile[key]);
  });
  ```
* **Output:**
  name: Ravi
  age: 20
* **Explanation:** Loops through keys array, accesses properties using bracket notation.

## Question 3: Destructure and Spread
* **Question:** Merge `{ a: 1 }` with `{ b: 2 }` and destructure the resulting variable values.
* **Solution:**
  ```javascript
  let part1 = { a: 1 };
  let part2 = { b: 2 };
  let combined = { ...part1, ...part2 };
  const { a, b } = combined;
  console.log(`a is ${a}, b is ${b}`); // a is 1, b is 2
  ```
* **Explanation:** Spread combines parameters, destructure extracts variables.
