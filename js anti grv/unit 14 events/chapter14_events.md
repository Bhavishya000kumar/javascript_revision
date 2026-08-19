# Unit 14: Events in JavaScript

Welcome to Unit 14! Iss chapter mein hum JavaScript Events aur events propagation flow (Bubbling, Capturing, Delegation) ko simple Hinglish mein aur clean spacing ke sath details mein cover karenge.


# PART 1: EVENT BASICS & HANDLERS

Webpage par user ya browser dwara hone wali kisi bhi interaction ya activity ko event kehte hain.


## 1. Event Kya Hai?

What is it?
Events browser window ya HTML document elements par user dynamically clicking, typing, scrolling, loading methods coordinate activity indicators trigger systems hote hain.

Common Events types:
* **click:** Element par mouse click hone par trigger hota hai.
* **input:** Input tag mein change dynamic typing keystrokes check run target.
* **change:** Input field blur settings check select dropdown value change validation updates.
* **submit:** Form variables updates dynamic click buttons checks.
* **keydown / keyup:** Keyboard keys press/release signals trackers.

Why is it needed?
Bina events ke, webpage static aur unresponsive rahega. User clicks ya form submissions par page ko react karwane ke liye events zaroori hain.

How to register events:
addEventListener() uses event type and a callback function logic blocks.

Syntax
`element.addEventListener("eventType", callbackFunction);`

Simple example
```html
<button id="clickBtn">Click Me</button>
```

```javascript
const btn = document.getElementById("clickBtn");
btn.addEventListener("click", function() {
    console.log("Button clicked!");
});
```

Output / Expected behavior
Button clicked! inside console on mouse click.


---


## 2. Event Object (e)

What is it?
Jab koi event trigger hota hai, toh browser callback function mein ek parameters argument pass karta hai jise **Event Object** (`e` or `event`) bolte hain. Isme event se related saari metadata information hoti hai.

Important properties:
* **e.target:** Woh specific child element jispar actual click event trigger hua.
* **e.type:** Event ka name pattern (e.g. "click", "keydown").
* **e.key:** Keydown/keyup keys standard string values identifiers (e.g. "Enter").

Simple example
```javascript
const inputTag = document.querySelector("input");
inputTag.addEventListener("keydown", (e) => {
    console.log("Pressed key: " + e.key);
});
```

Output
Pressed key: Enter (when Enter is typed inside the input box)


---


# PART 2: EVENT FLOW SYSTEMS

Event propagation checks target actions bubble patterns limits.


## 1. Event Bubbling

What is it?
Event Bubbling mein, jab target child element par event trigger hota hai, toh woh event bubble ki tarah nested document structure mein upar ki taraf **child se parent** nodes tak bubble hota hai.

How does it work?
Click target child element $\rightarrow$ parent node element $\rightarrow$ grandparent element $\rightarrow$ body $\rightarrow$ document. (This is the default event flow in JS).

Simple example
```html
<div id="parent" style="padding: 20px; background: grey;">
    <button id="child">Click</button>
</div>
```

```javascript
document.getElementById("parent").addEventListener("click", () => console.log("Parent clicked!"));
document.getElementById("child").addEventListener("click", () => console.log("Child clicked!"));
```

Output
Child clicked!
Parent clicked!
(Because event bubbles up from child to parent).


---


## 2. Event Capturing

What is it?
Event capturing (Trickling) bubbling ka ulta check mechanisms hota hai. Event **parent level target se start** hokar target child element tak down structure travel karta hai.

How to activate capturing?
addEventListener() ke third optional argument settings check parameters `true` flag coordinate set karein.
`element.addEventListener("click", callback, true);`

Bubbling vs Capturing table:
* **Bubbling:** Child $\rightarrow$ Parent (Default inside addEventListener).
* **Capturing:** Parent $\rightarrow$ Child (Triggers only when `true` is passed as third parameter).


---


## 3. preventDefault() vs stopPropagation()

What is it?
* **preventDefault():** Browser ke default actions operations stop variables check. (Like halting page reload on form submits or link redirects).
* **stopPropagation():** Event bubbling flow block checks. Event ko immediate parent targets coordinates propagate hone se rokta hai.

Simple example preventDefault
```javascript
let link = document.querySelector("a");
link.addEventListener("click", (e) => {
    e.preventDefault(); // stops link navigation
    console.log("Navigation prevented!");
});
```

Simple example stopPropagation
```javascript
let child = document.getElementById("child");
child.addEventListener("click", (e) => {
    e.stopPropagation(); // stops bubbling to parent div
    console.log("Bubbling stopped!");
});
```


---


## 4. Event Delegation

What is it?
Multiple dynamic child elements coordinates targets list listeners separate targets variables lagane ke bajay, single parent element listener logic registers check event targets.

Why is it useful?
Performance optimize parameters limits. dynamically appended child items automatically parent listener controls triggers target checking e.target values matches checks.

Simple example
```html
<ul id="parentList">
    <li>Item 1</li>
    <li>Item 2</li>
</ul>
```

```javascript
let parent = document.getElementById("parentList");

parent.addEventListener("click", (e) => {
    // Check if clicked target is an LI element
    if (e.target.tagName === "LI") {
        console.log("Clicked: " + e.target.textContent);
    }
});
```


---


# 🧠 QUICK REVISION SUMMARY

* **Event Listeners:** `addEventListener()` registers events types.
* **Event Object:** Contains event metadata properties like `type`, `target`, `key`.
* **Bubbling vs Capturing:** Bubbling travels child to parent; Capturing goes parent to child.
* **preventDefault:** Cancels default browser handler operations.
* **stopPropagation:** Halts bubbling flow to upper layers.
* **Event delegation:** Single parent listener handles events for multiple present and future child elements.


---


# 📝 IMPORTANT DEFINITIONS (INTERVIEW-READY)

1. **Event Bubbling:** The default event propagation model where event bubbles upwards from child to parent nodes.
2. **Event Capturing:** The event trickling model propagating downwards from parent to target child.
3. **Event Delegation:** Efficient design pattern of using a single parent listener to handle events for multiple child elements.
4. **event.target vs event.currentTarget:**
   - `e.target` is the actual target element clicked.
   - `e.currentTarget` is the element to which the active event listener is attached.
5. **Default Prevention:** Halting browser defaults like form redirects using `e.preventDefault()`.


---


# 💬 IMPORTANT INTERVIEW QUESTIONS & ANSWERS

### Q1. Difference between `event.target` and `event.currentTarget`?
**Ans:** `e.target` is the actual element that triggered the event (the origin). `e.currentTarget` is the element to which the active event listener is attached.

### Q2. Explain Bubbling vs Capturing.
**Ans:** Bubbling triggers events from the child target element upward to the parent (default). Capturing triggers events from parent container downward to the child target element (enabled by passing `true` as the third argument in addEventListener).

### Q3. Difference between `preventDefault()` and `stopPropagation()`?
**Ans:** `preventDefault()` stops browser default behavior (like link redirects). `stopPropagation()` stops event bubbling upward through the parent element hierarchy.

### Q4. Predict output:
```javascript
document.addEventListener("click", (e) => {
    console.log(e.type);
});
```
**Ans:** `"click"`.

### Q5. What is Event Delegation and why use it?
**Ans:** Attaching a single event listener to a parent element to handle events for all children (existing and future dynamic ones), saving memory and processing resources.

### Q6. Predict output:
```html
<form>
  <button type="submit">Go</button>
</form>
```
```javascript
document.querySelector("form").addEventListener("submit", (e) => {
    // without preventDefault
});
```
**Ans:** Form submits and browser page reloads instantly, resetting the application state.

### Q7. How do you detect which key was pressed during keydown events?
**Ans:** By reading the `event.key` property inside the event callback function.

### Q8. What does `e.stopPropagation()` return?
**Ans:** It returns `undefined`.

### Q9. Can you register multiple event listeners on the same element?
**Ans:** Yes. E.g., adding both `"click"` and `"mouseover"` listeners to a single button.

### Q10. Predict output:
```javascript
let btn = document.querySelector("button");
btn.addEventListener("click", () => console.log("A"));
btn.addEventListener("click", () => console.log("B"));
```
**Ans:**
"A"
"B"
(Both callbacks run sequentially in order of registration).

### Q11. Predict output of input event type:
```javascript
input.addEventListener("input", () => console.log("typed"));
```
**Ans:** Prints "typed" on every single keystroke.

### Q12. What does change event type do?
**Ans:** Triggers only when input loses focus (blur) after its value changes, or when select dropdown items are selected.

### Q13. Predict output:
```javascript
document.body.addEventListener("click", (e) => {
    console.log(e.target);
});
// user clicks background body directly
```
**Ans:** Logs `<body>` element node representation.

### Q14. How to remove event listeners in JS?
**Ans:** By calling `element.removeEventListener("type", functionName)`. Note: Callback function must have a named reference.

### Q15. Does stopPropagation prevent other listeners on the same element?
**Ans:** No. It only prevents bubbling to parents. To stop other listeners on the same element, call `e.stopImmediatePropagation()`.

### Q16. Predict output:
```javascript
let tag = document.querySelector("input");
tag.addEventListener("change", (e) => {
    console.log(e.target.value);
});
```
**Ans:** Logs the updated input string values as soon as user types and focuses away (blur).

### Q17. What is default third parameter value in addEventListener?
**Ans:** `false` (meaning Bubbling is active by default).

### Q18. Predict output:
```javascript
document.addEventListener("click", (e) => {
    e.preventDefault();
});
// user clicks checkboxes
```
**Ans:** Checkboxes do not toggle state on clicking (default checked toggle is disabled).

### Q19. What is Event Bubbling origin path top target?
**Ans:** The window object.

### Q20. Predict output:
```javascript
let button = document.createElement("button");
button.click(); // programmatic click
```
**Ans:** Triggers any registered click event handlers programmatically.


---


# 💻 PRACTICE QUESTIONS

## Question 1: Click Event Logger
* **Question:** Alert button text values on click event.
* **HTML:** `<button class="alertBtn">Button A</button>`
* **JavaScript:**
  ```javascript
  const btn = document.querySelector(".alertBtn");
  btn.addEventListener("click", (e) => {
      console.log(e.target.textContent); // logs "Button A"
  });
  ```
* **Explanation:** Reads content from `e.target.textContent` on click event trigger.

## Question 2: Stop bubbling parent alert
* **Question:** Child click should not trigger parent click event logging.
* **JavaScript:**
  ```javascript
  const parent = document.getElementById("parent");
  const child = document.getElementById("child");

  parent.addEventListener("click", () => console.log("Parent block"));
  child.addEventListener("click", (e) => {
      e.stopPropagation(); // stops bubbling
      console.log("Child block");
  });
  ```
* **Explanation:** Calls `e.stopPropagation()` inside child click to prevent event bubbling to parent listener.

## Question 3: Dynamic elements delegation check
* **Question:** Create event delegation on a list to delete elements dynamically on click.
* **JavaScript:**
  ```javascript
  const list = document.getElementById("parentList");
  list.addEventListener("click", (e) => {
      if (e.target.tagName === "LI") {
          e.target.remove(); // removes clicked list item
      }
  });
  ```
* **Explanation:** Places a single listener on parent container, filters clicked tags by checking `tagName === "LI"`, and removes target elements dynamically.
