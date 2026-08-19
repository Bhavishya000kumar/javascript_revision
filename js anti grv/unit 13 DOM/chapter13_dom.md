# Unit 13: Document Object Model (DOM) in JavaScript

Welcome to Unit 13! Iss chapter mein hum JavaScript DOM (Document Object Model) ko pure beginner level se standard project level tak cover karenge. Sabhi methods, manipulations aur events ko simple Hinglish mein aur details clean spacing ke sath cover kiya gaya hai.


# PART 1: DOM STRUCTURE & TREE

DOM humein JavaScript ke through page ke HTML structure ko dynamically control karne ki capability deta hai.


## 1. DOM Kya Hai?

What is it?
DOM (Document Object Model) ek API pipeline programming interface hai, jo HTML webpage document ko ek structured object tree mein convert karta hai jise JavaScript dynamic read aur edit kar sake.

How HTML becomes DOM?
Browser jab HTML document load karta hai, toh woh page ka structure parse karke ek memory model tree design karta hai. Is model ko `document` object represent karta hai.

DOM Tree Representation:
```html
Document
  └── <html> (Root)
        ├── <head>
        │     └── <title>
        └── <body>
              ├── <h1> (Heading)
              └── <p> (Paragraph)
```

Node vs Element Difference:
* **Node:** DOM tree ka har coordinate point ek Node hota hai (e.g. comment node, text node with spaces, attribute node, element node).
* **Element:** Yeh ek special node structure class hai jo specific tag parameters (`<h1>`, `<div>`) represent karti hai. (All Elements are Nodes, but all Nodes are not Elements).


---


## 2. DOM Selection methods

What is it?
HTML tags ko select karne ke tools.

Methods details:
* **getElementById("id"):** Selects single element by ID name. Returns single element target.
* **querySelector("selector"):** Selects first matching CSS selector. Returns single element target.
* **querySelectorAll("selector"):** Selects all matching CSS selectors. Returns a static list of elements (`NodeList`).

Simple example
```javascript
// HTML: <h1 id="title" class="header">Hello</h1>

let title1 = document.getElementById("title");
let title2 = document.querySelector(".header");
let allHeaders = document.querySelectorAll("h1"); // Returns NodeList
```


---


# PART 2: ELEMENT MANIPULATION

## 1. Text & HTML Changes

What is it?
HTML content texts aur internal inner structures templates changes update.

Difference: textContent vs innerHTML
* **textContent:** Sirf raw text read/write karta hai. Agar HTML tags write karein toh unhe plain text show kareya.
* **innerHTML:** Full HTML structure tags parser run karke layout formatting update karta hai.

Simple example
```javascript
// HTML: <div id="myBox"></div>

let box = document.getElementById("myBox");

// textContent writing
box.textContent = "<strong>Hello</strong>"; // Shows literally: <strong>Hello</strong>

// innerHTML writing
box.innerHTML = "<strong>Hello</strong>"; // Shows bold: Hello
```


---


## 2. Attributes Management

What is it?
HTML variables tags metadata attributes (like `src`, `href`, `id`) manage check templates.
* **getAttribute("name"):** Reads attribute value.
* **setAttribute("name", "value"):** Updates or adds attribute values.
* **removeAttribute("name"):** Clears attribute.

Simple example
```javascript
// HTML: <img id="pic" src="old.jpg">

let image = document.getElementById("pic");
console.log(image.getAttribute("src")); // old.jpg

image.setAttribute("src", "new.jpg"); // changes image source
image.removeAttribute("src"); // deletes source
```


---


## 3. ClassList Manipulation

What is it?
Dynamic CSS classes update mechanisms.
* **add("className"):** Class add karta hai.
* **remove("className"):** Class delete karta hai.
* **toggle("className"):** Class active hai toh remove karega, and dynamic missing ho toh append karega.
* **contains("className"):** Checks if class is active (returns true/false).

Simple example
```javascript
// HTML: <div id="card" class="box"></div>

let card = document.getElementById("card");
card.classList.add("highlight");
card.classList.remove("box");
card.classList.toggle("active");
```


---


## 4. Element CRUD (Create, Append, Delete)

What is it?
Page ke elements memory creation aur document updates.
* **createElement("tag"):** New tag variables creation.
* **append(node/string):** Appends multiple elements or text strings.
* **appendChild(node):** Only appends child node.
* **remove():** Instantly deletes active element.
* **replaceWith(node):** Replaces element.

Simple example
```javascript
// Creating and appending
let container = document.getElementById("main");
let newParagraph = document.createElement("p");
newParagraph.textContent = "New paragraph content";

container.append(newParagraph); // Appends at the end of container
newParagraph.remove(); // deletes paragraph
```


---


# PART 3: FORMS, STYLES & INTERACTION

## 1. Dynamic Styling via JS

What is it?
Inline styles values coordinates modifications.

Syntax
`element.style.propertyName = "value";` (uses camelCase for property names).

Simple example
```javascript
let heading = document.querySelector("h1");
heading.style.backgroundColor = "blue";
heading.style.color = "white";
```


---


## 2. Forms & Validation Basics

What is it?
Form submit parameters values reading coordinates verification processes.

Simple example
```html
<form id="loginForm">
    <input type="text" id="username" placeholder="Username">
    <button type="submit">Submit</button>
</form>
```

```javascript
let form = document.getElementById("loginForm");
let input = document.getElementById("username");

form.addEventListener("submit", function(event) {
    event.preventDefault(); // stops page reload
    let userVal = input.value.trim(); // read input values
    
    if (userVal === "") {
        console.log("Validation Failed: Empty Input!");
    } else {
        console.log("Success: Submitted username: " + userVal);
    }
});
```


---


# PART 4: DOM MINI PROJECT

Project Title: Task Checklist Builder
Create a file named `dom_project.html` inside the Unit 13 folder and copy the following complete runnable code to run it.

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Dynamic Task Builder</title>
    <style>
        body { font-family: sans-serif; background: #f4f4f4; padding: 20px; }
        .card { background: white; padding: 20px; border-radius: 8px; max-width: 400px; margin: auto; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
        .input-group { display: flex; margin-bottom: 10px; }
        input { flex: 1; padding: 8px; border: 1px solid #ccc; border-radius: 4px; }
        button { padding: 8px 12px; background: #007BFF; color: white; border: none; border-radius: 4px; cursor: pointer; margin-left: 5px; }
        .error { color: red; font-size: 13px; display: none; margin-bottom: 10px; }
        ul { list-style: none; padding: 0; }
        li { padding: 8px; border-bottom: 1px solid #eee; display: flex; justify-content: space-between; align-items: center; }
        .checked { text-decoration: line-through; color: gray; }
        .delete-btn { background: red; padding: 4px 8px; font-size: 12px; }
    </style>
</head>
<body>

<div class="card">
    <h2>Task Checklist</h2>
    <div class="error" id="errorDiv">Task cannot be empty!</div>
    <div class="input-group">
        <input type="text" id="taskInput" placeholder="Enter task name">
        <button id="addBtn">Add Task</button>
    </div>
    <ul id="taskList"></ul>
</div>

<script>
    const taskInput = document.getElementById("taskInput");
    const addBtn = document.getElementById("addBtn");
    const taskList = document.getElementById("taskList");
    const errorDiv = document.getElementById("errorDiv");

    addBtn.addEventListener("click", () => {
        let taskVal = taskInput.value.trim();

        // Validation
        if (taskVal === "") {
            errorDiv.style.display = "block";
            return;
        }
        errorDiv.style.display = "none";

        // Create Task Item LI
        let li = document.createElement("li");
        li.textContent = taskVal;

        // Toggle task status check
        li.addEventListener("click", () => {
            li.classList.toggle("checked");
        });

        // Delete Button
        let deleteBtn = document.createElement("button");
        deleteBtn.textContent = "X";
        deleteBtn.classList.add("delete-btn");
        deleteBtn.addEventListener("click", (e) => {
            e.stopPropagation(); // Prevents triggering LI toggle click
            li.remove();
        });

        li.append(deleteBtn);
        taskList.append(li);

        // Clear input field
        taskInput.value = "";
    });
</script>
</body>
</html>
```

Project Step-by-Step explanation:
1. User input parameters trigger validation constraints. Empty tasks trigger errorDiv layout.
2. Clicking button creates new elements `<li>` and `<button>`.
3. Event listeners handle: class toggling (`checked`), child removals (`li.remove()`), and event propagation limits (`stopPropagation()`).


---


# 🧠 QUICK REVISION SUMMARY

* **Basics & selectors:** getElementById queries ID, querySelector returns first match, querySelectorAll returns static NodeList.
* **Content:** textContent writes text string; innerHTML parses and renders complete HTML tags.
* **classList:** add() appends class; remove() deletes class; toggle() toggles presence; contains() checks.
* **Styling:** inline styling accessed via `element.style.propertyName` (camelCase).
* **Form & Validation:** `preventDefault()` stops dynamic page reloads; validation values checked using `.value.trim()`.


---


# 📝 IMPORTANT DEFINITIONS (INTERVIEW-READY)

1. **Document Object Model (DOM):** Interface representing HTML files as tree structure models accessible by scripting languages.
2. **Node vs Element:** Nodes represent any tree object coordinates (comments, texts); Elements strictly represent actual HTML tags.
3. **Event Propagation:** Bubbling process where child events bubble upwards to target parent nodes (prevented using `stopPropagation()`).
4. **NodeList:** Collection lists of nodes returned by select query methods (static array-like structure).
5. **Form Revalidation (preventDefault):** Standard action halting browser defaults like page refresh during submit event triggers.


---


# 💬 IMPORTANT INTERVIEW QUESTIONS & ANSWERS

### Q1. Difference between `textContent` and `innerHTML`?
**Ans:** `textContent` reads/writes content as plain text, escaping HTML characters. `innerHTML` parses input string tags, rendering actual HTML formats.

### Q2. Difference between `querySelector()` and `querySelectorAll()`?
**Ans:** `querySelector()` returns the first matching element object or `null`. `querySelectorAll()` yields a static array-like `NodeList` containing all matching element references.

### Q3. Explain Node vs Element.
**Ans:** Node is a generic base interface representing any node in the DOM tree (like text or comment). Element is a specific node interface representing HTML tags.

### Q4. What is `event.preventDefault()`?
**Ans:** It stops the browser's default action associated with the event (e.g. stops page reload on form submit).

### Q5. How does `classList.toggle()` work?
**Ans:** It adds the class if it does not exist on the element, and removes it if it does.

### Q6. Predict output:
```javascript
let container = document.createElement("div");
console.log(container.innerHTML);
```
**Ans:** `""` (empty string). Created in-memory elements start with empty content.

### Q7. How does event delegation work?
**Ans:** Attaching event listener to a parent node instead of separate listeners on multiple child elements, utilizing event bubbling.

### Q8. What does `element.style` modify?
**Ans:** It applies inline styles directly to the element, overriding values specified in CSS files.

### Q9. Predict output:
```javascript
let text = document.querySelector("#title");
// if ID title does not exist
console.log(text);
```
**Ans:** `null`.

### Q10. Difference between `append()` and `appendChild()`?
**Ans:** `append()` can attach multiple elements and plain text strings. `appendChild()` only accepts a single Node object.

### Q11. Predict output:
```javascript
let li = document.createElement("li");
li.innerText = "item";
console.log(li.parentNode);
```
**Ans:** `null`. Newly created elements do not have parent links until they are appended to the document.

### Q12. Predict output:
```javascript
let tag = document.querySelector("input");
// user types: "  Ravi  "
console.log(tag.value.trim().length);
```
**Ans:** `4`. Trim removes edge whitespace characters.

### Q13. How do you remove an attribute from an HTML element?
**Ans:** `element.removeAttribute("attributeName")`.

### Q14. What does `classList.contains()` return?
**Ans:** Boolean `true` or `false` indicating if the class is present on the element.

### Q15. Is `NodeList` a real Array?
**Ans:** No. It is an array-like object. It supports `forEach()` but lacks array methods like `map()` or `filter()`.

### Q16. Predict output:
```javascript
let heading = document.querySelector("h1");
heading.style.background = "red";
```
**Ans:** Sets inline style `background-color` equivalent to red on the page element.

### Q17. What is the root object of the DOM?
**Ans:** The `document` object.

### Q18. Predict output:
```javascript
let div = document.createElement("div");
div.classList.toggle("test");
console.log(div.classList.contains("test"));
```
**Ans:** `true`. Toggle adds the class since it was not present.

### Q19. How do you stop event bubbling?
**Ans:** By calling `event.stopPropagation()` inside the event listener.

### Q20. Predict output:
```javascript
let element = document.getElementById("nonExistant");
console.log(element);
```
**Ans:** `null`.


---


# 💻 PRACTICE QUESTIONS

## Question 1: Class Toggling Button
* **Question:** Write code that changes background color to yellow by toggling class on button click.
* **HTML:** `<div id="box">Content</div><button id="toggleBtn">Toggle</button>`
* **JavaScript:**
  ```javascript
  const box = document.getElementById("box");
  const toggleBtn = document.getElementById("toggleBtn");

  toggleBtn.addEventListener("click", () => {
      box.classList.toggle("highlight");
  });
  ```
* **Explanation:** Toggles class `highlight` (yellow background in CSS) on the target `box`.

## Question 2: Read Input and Update Heading text
* **Question:** Create input inputting name variables updates `h1` element tags text content.
* **HTML:** `<h1 id="title">User</h1><input id="nameInput"><button id="btn">Update</button>`
* **JavaScript:**
  ```javascript
  const title = document.getElementById("title");
  const nameInput = document.getElementById("nameInput");
  const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
      let cleanVal = nameInput.value.trim();
      title.textContent = cleanVal !== "" ? cleanVal : "User";
  });
  ```
* **Explanation:** Reads input value, trims whitespace, and updates textContent.

## Question 3: Form submission validation constraints
* **Question:** Stop form reloading and alert if input length is less than 3.
* **JavaScript:**
  ```javascript
  const form = document.querySelector("form");
  const input = document.querySelector("input");

  form.addEventListener("submit", (e) => {
      e.preventDefault();
      if (input.value.trim().length < 3) {
          console.log("Failed: Name too short!");
      }
  });
  ```
* **Explanation:** Calls `preventDefault()` to cancel page reload and applies condition checking to input length.
