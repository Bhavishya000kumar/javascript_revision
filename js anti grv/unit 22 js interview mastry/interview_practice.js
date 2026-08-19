// Unit 22: JavaScript Interview Mastery Practice Exercises

// 1. Prototype property linking
console.log("--- 1. Prototype ---");
function Student(name) {
    this.name = name;
}
Student.prototype.study = function() {
    return `${this.name} is studying.`;
};
let st = new Student("Amit");
console.log(st.study()); // Amit is studying.


// 2. Inheritance extends & super
console.log("\n--- 2. Class Inheritance ---");
class ParentClass {
    constructor(role) {
        this.role = role;
    }
}
class ChildClass extends ParentClass {
    constructor(role, salary) {
        super(role);
        this.salary = salary;
    }
    showInfo() {
        return `Role: ${this.role} | Salary: ${this.salary}`;
    }
}
let childObj = new ChildClass("Lead Dev", 80000);
console.log(childObj.showInfo()); // Role: Lead Dev | Salary: 80000


// 3. String coercion comparisons
console.log("\n--- 3. Type Coercions ---");
console.log("5 == '5':", 5 == "5"); // true
console.log("5 === '5':", 5 === "5"); // false
console.log("1 + '2' + 3:", 1 + "2" + 3); // "123"
console.log("1 + +'2' + 3:", 1 + +"2" + 3); // 6
