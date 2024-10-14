# Window in JavaScript
> Window in JavaScript is basically a **Global Object** created by JavaScript Engine in the Global Space with a lot of accessible variables and methods.

> JavaScript Engine also creates **"this"**. At the Global Level the "this" keyword points to the window object.

- JavaScript runs at various places, when run on browsers there must be an JavaScript Engine. The Engine differs from one browser to another.
    1. Chrome ---> V8 Engine
    2. FireFox ---> SpiderMonkey  

> When the Global Execution Context is created 2 more things are created along side it and they are **"Global Object"** and **"this"**.
    
> In Case of Browsers the Global Object is **"window"**.
- All These Engines have the responsibility of creating the global object. In Case of browsers the global object is it known as "window". In case of Node it is something else, it will depend on where JavaScript is running.

- The global object is always created even when the file is completely empty.

- In the Global Execution Context the "this" keyword points to the "window" object
![](Images/Window-and-This-Keyword-Image-1.png)

> Whenever the a Execution Context is created a "this" keyword is always created alongside it. This Applies for both the Global Execution Context and the Functional Execution Context.

<br/><br/>

## Visual Representation of what all is created
![](Images/Window-and-This-Keyword-Drawing-1-.png)

<br/><br/>

## What is the Global Space?
> Any Code which is not Written inside a function is inside the Global Space.

### Example 
```javascript
var a = 10;

function aaa(){
    var y = 4;
}
```

- In this Code the variable a and the function aaa are in the global space.

- As the variable y is created inside the function it is not inside the global space.

<br/>

> Important Point &#9733;: The Global Variables and Functions Get Attached to the Global Object which in the case of browsers is "window" 

![](Images/Window-and-This-Keyword-Image-2.png)

<br/><br/>

## Special JavaScript Feature

As we know that the variable a is in the global space hence it will attach itself to the global object (window) so it must be accessed through window.a.

But JavaScript has provided this feature that if there is nothing written behind the global variable or function it will automatically assume it to be a child of the global object and attach a "window. " behind it.

```javascript
var a = 10;

// accessing the variable through the global object (a.k.a window)
console.log(window.a);

// accessing the variable through the global object without specifying it.
console.log(a);

// the line below will also output 10 as in the global execution context the 
// this keyword points ot the window object so it will be same as replace the 
// this keyword with the window keyword
console.log(this.a);


// As nothing is mentioned before y, JS will assume it as a global variable
// and will try to find it in the window object in which it will fail as 
// y is not part of the global space but rather part of the local space of the function aaa
// Hence the error y is not defined
// the meaning of this error is that JS couldn't find this variable inside the window object
console.log(y);


function aaa(){
    var y = 4;
}
```
```
The Output
---------------------------------
10
10
10
Uncaught ReferenceError: y is not defined
```