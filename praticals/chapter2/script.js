// Number
let age = 21;
console.log(age);
console.log(typeof age);


// String
let name = "Bhavishya";
console.log(name);
console.log(typeof name);


// Boolean
let isStudent = true;
console.log(isStudent);
console.log(typeof isStudent);


// Undefined
let city;
console.log(city);
console.log(typeof city);


// Null
let user = null;
console.log(user);
console.log(typeof user);


// BigInt
let bigNumber = 12345678901234567890n;
console.log(bigNumber);
console.log(typeof bigNumber);


// Symbol
let id = Symbol("id");
console.log(id);
console.log(typeof id);

// pratice of type conversion

console.log(Number("100"));
console.log(String(100));
console.log(Boolean(1));

console.log(Number("hello"));
console.log(Number(""));
console.log(Number(null));
console.log(Number(undefined));

console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean("hello"));


// Truthy/Falsy
console.log(Boolean(false));
console.log(Boolean(0));
console.log(Boolean(""));
console.log(Boolean(null));
console.log(Boolean(undefined));
console.log(Boolean(NaN));

console.log(Boolean(1));
console.log(Boolean("hello"));
console.log(Boolean("0"));
console.log(Boolean([]));
console.log(Boolean({}));

// type coercion
console.log("10" + 5);
console.log("10" - 5);
console.log("10" * 2);
console.log("10" / 2);

console.log(10 + "5");
console.log(10 - "5");