// Unit 11: this, Objects & Prototypes Practice Exercises

// 1. Inheritance Classes
console.log("--- 1. Inheritance Classes ---");
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
console.log("Vehicle info:", myCar.showInfo()); // Ford Mustang


// 2. Prototype Method Sharing
console.log("\n--- 2. Prototype Method Sharing ---");
function Student(name) {
    this.name = name;
}
// Attach printName method to prototype to share it across instances
Student.prototype.printName = function() {
    return "Student name: " + this.name;
};
let st1 = new Student("Amit");
let st2 = new Student("Ravi");
console.log(st1.printName()); // Student name: Amit
console.log(st2.printName()); // Student name: Ravi


// 3. instanceof checking
console.log("\n--- 3. instanceof checking ---");
class Human {}
let person = new Human();
console.log("Is person instance of Human?", person instanceof Human); // true
console.log("Is person instance of Object?", person instanceof Object); // true
