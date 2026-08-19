// Unit 15: Error Handling Practice Exercises

// 1. Basic try-catch with Name and Message
console.log("--- 1. Basic try-catch ---");
try {
    let result = JSON.parse("invalid-json"); // Syntactically incorrect JSON string
} catch (err) {
    console.log("Error Name:", err.name); // SyntaxError
    console.log("Error Message:", err.message); // Unexpected token i in JSON at position 0
}


// 2. finally execution verify
console.log("\n--- 2. finally execution ---");
function processFile() {
    try {
        console.log("Opening file database...");
        return "File Data Loaded";
    } catch (err) {
        return "Error loading file";
    } finally {
        console.log("Closing file database connection (finally block).");
    }
}
console.log("Function status:", processFile());


// 3. Input Validation using throw
console.log("\n--- 3. Input Validation ---");
function checkPasswordStrength(password) {
    if (password.length < 6) {
        throw new Error("Password too weak! Minimum 6 characters required.");
    }
    return "Strong password accepted.";
}

try {
    console.log(checkPasswordStrength("123")); // too short
} catch (err) {
    console.log("Validation Error caught:", err.message);
}


// 4. Custom Error Exception
console.log("\n--- 4. Custom Exception Class ---");
class NetworkError extends Error {
    constructor(message) {
        super(message);
        this.name = "NetworkError";
    }
}

function fetchUser() {
    let isConnected = false;
    if (!isConnected) {
        throw new NetworkError("Unable to reach user server.");
    }
    return { name: "Ravi" };
}

try {
    fetchUser();
} catch (err) {
    if (err instanceof NetworkError) {
        console.log("Special Handling for Network Issues: " + err.message);
    } else {
        console.log("General Error: " + err.message);
    }
}
