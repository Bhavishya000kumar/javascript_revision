// Unit 11: this, Objects & Prototypes Code Examples

// 1. the 'this' Keyword Behavior
console.log("--- 1. 'this' Keyword Behavior ---");
console.log("Global context 'this':", this); // window in browser, module.exports in Node

const personObj = {
    name: "Rohan",
    // Method context
    regularMethod: function() {
        console.log("Method 'this' context:", this.name); // Rohan
    },
    // Arrow function context
    arrowMethod: () => {
        console.log("Arrow 'this' context (inherited):", this.name); // undefined (resolves to parent scope)
    }
};
personObj.regularMethod();
personObj.arrowMethod();

// Regular function call this
function testThis() {
    console.log("Regular function 'this':", this); // window/global in non-strict, undefined in strict
}
testThis();


// 2. Constructor Functions & the 'new' Keyword
console.log("\n--- 2. Constructor Functions & new ---");
function User(username, role) {
    // 'new' keyword binds 'this' to an empty object {}
    this.username = username;
    this.role = role;
}
let user1 = new User("ravi_dev", "Admin");
console.log("Constructed object user1:", user1);


// 3. Prototypes & Prototype Chain
console.log("\n--- 3. Prototypes & Prototype Chain ---");
let parent = {
    heritage: "Royal"
};
// Object.create sets parent as the prototype of child
let child = Object.create(parent);
child.name = "Prince";

console.log("Child name (local property):", child.name);
console.log("Child heritage (inherited from prototype):", child.heritage); // Lookup climbs prototype chain
console.log("Child __proto__ matches parent:", child.__proto__ === parent);


// 4. Classes & Inheritance (extends, super)
console.log("\n--- 4. Classes & Inheritance ---");
class Animal {
    constructor(type) {
        this.type = type;
    }
    sound() {
        return `${this.type} makes sound`;
    }
}

class Dog extends Animal {
    constructor(type, breed) {
        super(type); // Call parent class constructor
        this.breed = breed;
    }
    sound() {
        return `${this.breed} barks (extends ${super.sound()})`;
    }
}

let myDog = new Dog("Mammal", "Husky");
console.log(myDog.sound());


// 5. instanceof & Static Properties
console.log("\n--- 5. instanceof & static ---");
console.log("Is myDog instance of Dog?", myDog instanceof Dog); // true
console.log("Is myDog instance of Animal?", myDog instanceof Animal); // true

class Calculator {
    static label = "Standard Calculator";
    static add(a, b) {
        return a + b;
    }
}
console.log("Static Property access:", Calculator.label);
console.log("Static Method call:", Calculator.add(10, 5));
