# Unit 11: this, Objects & Prototypes in JavaScript

Welcome to Unit 11! Iss chapter mein hum JavaScript ke crucial concepts jaise execution context bindings (this keyword), Prototypes, prototype inheritance chain, aur modern JavaScript Classes ko detail mein simple Hinglish mein dry runs ke sath cover karenge.


# PART 1: THE `this` KEYWORD & CONSTRUCTORS

JavaScript mein dynamic bindings coordinate karne ke liye `this` execution context rules use hote hain.


## 1. the `this` Keyword Behavior

What is it?
`this` keyword ek reference pointer variable hota hai jo check run context properties object values point karta hai. Iski value runtime execution context par depend karti hai (kaise aur kahan function call hua hai).

Behavior by Contexts:
* **Global Context:** standard browser environment windows object (`window`) target check nodes global object (`global`).
* **Object Method:** points owner/parent object context block properties.
* **Regular Function:** non-strict mode sets to global object context, strict mode sets to `undefined`.
* **Arrow Function:** standard arrow functions do not have their own `this`. They inherit this lexically from their enclosing parent scope.

Simple example
```javascript
// Global Context
console.log(this); // window object in browser

// Inside Object Method
const profileObj = {
    username: "Ravi",
    showName: function() {
        console.log(this.username); // 'this' points to profileObj
    }
};
profileObj.showName();
```

Output
Window (or global)
Ravi

Regular Function vs Arrow Function for `this`
* Regular function dynamic execution reference create karta hai.
* Arrow function lexical coordinates use karta hai (parent scoping context blocks).

Common mistakes
Arrow functions ko standard object method callback definition list check use karna:
```javascript
// Galti:
const user = {
    name: "Ravi",
    greet: () => {
        console.log(this.name); // returns undefined (inherits parent global context)
    }
};
user.greet();
```


---


## 2. Constructor Functions & the `new` Keyword

What is it?
* **Constructor Function:** Ek blueprint function hota hai jo objects templates creation manage checks (Capital letters starting name standard conventions).
* **new Keyword:** Ek operator jo constructor function coordinates call karke dynamic properties allocations new object create output return.

What `new` keyword does step-by-step:
1. Ek empty object `{}` create hota hai.
2. Constructor function context check binding `this` matches to new empty object.
3. Constructor execute parameters attributes allocations values set.
4. Function returning values logic, returns newly created object.

Simple example
```javascript
function Student(name, age) {
    this.name = name;
    this.age = age;
}

let student1 = new Student("Ravi", 20);
console.log(student1.name);
```

Output
Ravi


---


# PART 2: PROTOTYPES & PROTOTYPE CHAIN

## 1. Prototype & Prototype Chain

What is it?
* **Prototype:** JavaScript mein har object ke pass ek automatic secret template linkage object hota hai jise Prototype kehte hain. (Hum prototypes ke through generic features properties share karte hain).
* **Prototype Chain:** Jab we search property on objects, JS checks local properties. If not found, checks prototype block keys, matches parent prototype up to `null` value limit check. Is lookup linking chain sequence path ko prototype chain bolte hain.

How does it work?
Local Object Properties $\rightarrow$ Prototype Properties $\rightarrow$ Object Prototype properties $\rightarrow$ null.

Simple example
```javascript
let parentObj = {
    city: "Delhi"
};

let childObj = Object.create(parentObj); // childObj inherits parentObj prototype
console.log(childObj.city); // found in parent prototype
```

Output
Delhi


---


## 2. `__proto__` Concept

What is it?
`__proto__` (dunder proto) har object ki internal property key link pointers hoti hai jo directly check us object ke standard parent Prototype block reference address ko link karti hai.
Note: Modern code setups mein directly `__proto__` update avoid karke standard APIs `Object.getPrototypeOf()` aur `Object.setPrototypeOf()` use karte hain.

Simple example
```javascript
let cat = { meow: true };
let kitten = {};
kitten.__proto__ = cat; // child kitten linked to cat prototype

console.log(kitten.meow);
```

Output
true

Difference: prototype vs `__proto__`
* **prototype:** function declarations blueprint property checks coordinate (like `Student.prototype`).
* **`__proto__`:** individual active object instances linkage memory links coordinates pointer.


---


# PART 3: CLASSES & INHERITANCE

## 1. JavaScript Classes

What is it?
Modern syntax (ES6) sugar structures to write clean objects blueprint setups (underneath prototypes chains compile).

Syntax
```javascript
class Car {
    constructor(brand) {
        this.brand = brand;
    }
    show() {
        return "Car brand is " + this.brand;
    }
}
let myCar = new Car("Toyota");
console.log(myCar.show());
```

Output
Car brand is Toyota


---


## 2. Inheritance (`extends` and `super`)

What is it?
* **extends:** Parent class elements methods configurations child template inheritance structures mapping.
* **super:** Call variables constructors initializations logic inside parent class constructor environments.

Simple example
```javascript
class Parent {
    constructor(name) {
        this.name = name;
    }
}

class Child extends Parent {
    constructor(name, school) {
        super(name); // Call parent constructor
        this.school = school;
    }
}

let student = new Child("Rahul", "KV School");
console.log(student.name);
```

Output
Rahul


---


# PART 4: INTERVIEW KEYWORDS CODES

## 1. `instanceof` Operator

What is it?
Check elements instance matches prototype blueprint configurations.

Example
```javascript
class Animal {}
let dog = new Animal();
console.log(dog instanceof Animal); // true
```


---


## 2. Static Methods & Properties

What is it?
Static properties instances coordinate variable accesses ignore direct Class levels storage objects bounds. (Instances can't call static functions).

Example
```javascript
class Calc {
    static add(a, b) {
        return a + b;
    }
}
console.log(Calc.add(5, 5)); // Call directly from class name
```

Output
10


---


## 3. Constructor Function vs Class Differences

| Constructor Function | Class |
| :--- | :--- |
| Normal function syntax, requires `new` strictly by logic convention. | Standard class syntax wrappers, throws error if invoked without `new`. |
| Methods are attached to prototype explicitly (`Func.prototype.method`). | Methods are defined inside class container, automatically added to prototype. |


---


# 🧠 QUICK REVISION SUMMARY

* **this contexts bindings:** dynamic contexts inside standard calls; lexical values in arrow function patterns; maps constructor instances inside `new` operator loops.
* **Constructor functions:** functions blueprints, `new` allocates empty memory blocks, assigns binding pointers.
* **Prototypes:** parent template inheritance references, chains loops sequential lookup steps.
* **Classes:** sugar template structures, extends handles inheritance, super forwards constructor arguments.
* **Static:** class level static helper routines, hidden from instances.


---


# 📝 IMPORTANT DEFINITIONS (INTERVIEW-READY)

1. **Dunder Proto (`__proto__`):** The internal object reference link pointing to the direct prototype parent of an object instance.
2. **Prototype Chain:** The sequential reference lookup hierarchy traversing through an object's prototype links up to null.
3. **Execution Context Binding:** Binding mechanism defining the target value of the `this` keyword during execution calls.
4. **Instantiations (instanceof):** Logical check evaluating if an object inherits from a constructor's prototype chain.
5. **Base Class Constructor (`super`):** The function constructor call forwarding argument initialization parameters to parent class templates.


---


# 💬 IMPORTANT INTERVIEW QUESTIONS & ANSWERS

### Q1. What does `new` keyword do internally?
**Ans:** 
1. Creates an empty object `{}`.
2. Sets the prototype of the new object to match the constructor function's prototype.
3. Binds the `this` context to the newly created empty object.
4. Executes the constructor code and returns the object.

### Q2. Explain prototypes in JavaScript.
**Ans:** Prototypes are mechanism templates through which JavaScript objects inherit properties and methods from one another.

### Q3. Predict output:
```javascript
const user = {
    name: "Ravi",
    greet: () => {
        console.log(this.name);
    }
};
user.greet();
```
**Ans:** `undefined`. Arrow functions do not bind their own `this`. They resolve `this` lexically to their enclosing parent scope, which is the global context in this case.

### Q4. Difference between `prototype` and `__proto__`?
**Ans:** `prototype` is a property unique to constructor functions, defining the blueprint for future instances. `__proto__` is an internal reference property found on object instances, pointing to their parent prototype.

### Q5. What is Prototype Chain?
**Ans:** The lookup chain JavaScript uses to find properties. If a property is not found on the local object, JS searches its prototype link, continuing up the chain until it reaches `null`.

### Q6. Difference between Constructor Function and Class?
**Ans:** Classes are syntactic sugar over prototype-based inheritance. Calling a class without `new` throws an error, whereas constructor functions silently fail or create global variables in non-strict mode.

### Q7. What is `super()` used for?
**Ans:** To call the constructor of the parent class, ensuring base class properties are correctly initialized before child properties are set.

### Q8. Predict output:
```javascript
class Test {
    static show() {
        return "static";
    }
}
let t = new Test();
console.log(t.show);
```
**Ans:** `undefined`. Static methods belong to the class template, not to individual instances.

### Q9. Explain `instanceof` check.
**Ans:** It verifies if the constructor's prototype property exists anywhere within the prototype chain of the checked object.

### Q10. What is static method in class?
**Ans:** Methods defined on the class itself, which are called directly on the class and cannot be accessed through class instances.

### Q11. Predict output:
```javascript
function User() {}
let u = User();
console.log(u);
```
**Ans:** `undefined`. Since User function was called without the `new` keyword and lacks a explicit return statement.

### Q12. Predict output:
```javascript
let animal = { eat: true };
let dog = Object.create(animal);
console.log(dog.eat);
```
**Ans:** `true`. The `dog` object inherits the `eat` property from the `animal` prototype.

### Q13. What is the top of the prototype chain?
**Ans:** `Object.prototype`, which eventually points to `null`.

### Q14. Predict output:
```javascript
class Parent {}
class Child extends Parent {}
let c = new Child();
console.log(c instanceof Parent);
```
**Ans:** `true`. `Child` inherits from `Parent`, so the base class is in its prototype chain.

### Q15. Predict output:
```javascript
function Test() {
    this.val = 10;
}
let t = new Test();
console.log(t.val);
```
**Ans:** `10`.

### Q16. Can arrow functions be used as constructors?
**Ans:** No. Arrow functions lack a prototype property and do not bind their own `this` context, so calling them with `new` throws a TypeError.

### Q17. Predict output:
```javascript
console.log(this); // running inside NodeJS file
```
**Ans:** `module.exports` (empty object `{}`), which is the default global module context in Node.js.

### Q18. Predict output:
```javascript
function show() {
    console.log(this);
}
show(); // running in non-strict browser mode
```
**Ans:** The `window` object.

### Q19. Predict output of above function in strict mode:
**Ans:** `undefined`.

### Q20. What happens if child class constructor misses calling `super()`?
**Ans:** It throws a ReferenceError. The child class constructor must call `super()` before accessing `this`.


---


# 💻 PRACTICE QUESTIONS

## Question 1: Inheritance Setup Classes
* **Question:** Build a parent class `Vehicle` (brand) and child `Car` (brand, model).
* **Solution:**
  ```javascript
  class Vehicle {
      constructor(brand) {
          this.brand = brand;
      }
  }

  class Car extends Vehicle {
      constructor(brand, model) {
          super(brand);
          this.model = model;
      }
      showInfo() {
          return `${this.brand} ${this.model}`;
      }
  }

  let myCar = new Car("Ford", "Mustang");
  console.log(myCar.showInfo()); // Ford Mustang
  ```
* **Explanation:** Inherits parent properties using `extends` and forwards them using `super()`.

## Question 2: Prototype property sharing methods
* **Question:** Attach a method `greet` to a constructor function prototype.
* **Solution:**
  ```javascript
  function User(name) {
      this.name = name;
  }
  User.prototype.greet = function() {
      return "Hello " + this.name;
  };
  let user1 = new User("Rahul");
  console.log(user1.greet()); // Hello Rahul
  ```
* **Explanation:** Attaching the method to the prototype sharing it across all instances, saving memory.

## Question 3: Instance check validation instanceof
* **Question:** Create prototype objects and verify relationships using instanceof.
* **Solution:**
  ```javascript
  class Human {}
  let person = new Human();
  console.log("Is person Human?", person instanceof Human); // true
  ```
* **Explanation:** Checks if the constructor's prototype exists in the object's prototype chain.
