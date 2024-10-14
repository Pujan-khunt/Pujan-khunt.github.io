# Hoisting
> Hoisting allows the access of variables and functions before they are explicitly written, but the initalization happens wherever it is written in the code.

<br/><br/>

## Code Scenario 1: The Code and the output seem normal here
```javascript
var x = 10;

function getName(){
    console.log("Namaste JavaScript");
}

getName();
console.log(x);
```

```
The Output
----------------------------------------------------------------------------------
Namaste JavaScript
10
```

<br/><br/><br/>

## Code Scenario 2: But Now It doesn't seem Natural of what will be the output
```javascript
getName();
console.log(x);

var x = 10;

function getName(){
    console.log("Namaste JavaScript");
}
```
```
The Output
----------------------------------------------------------------------------------
Namaste JavaScript
undefined
```

### Explanation of the Output:
- as we know that javascript runs in 2 phases, so when the memory allocation phase was executed it stored the entire content of the function.
- In the code execution phase, When the function is called it already has stored the contents of the function in memory so the function will be executed and Namaste JavaScript will be printed.
- the value of x is printed as undefined because in the memory allocation phase and in the code execution phase, x is printed before it was attached to the value 10 so it printed undefined.

<br/><br/><br/>

## Code Scenario 3: Difference between undefined and not defined
```javascript
getName();
console.log(x);

// NOTE: the variable x is never declared

function getName(){
    console.log("Namaste JavaScript");
}
```
```
The Output
----------------------------------------------------------------------------------
Namaste JavaScript
Uncaught ReferenceError: x is not defined
```

### Explanation of the Output:
- the function call explanation is same as above
- x is not defined because in the memory allocation phase js was unable to find the declaration of the variable and hence was unable to set its value as undefined
- Then when it was tried to print its value js didnt have it stored and hence gave the error 'x is not defined'.

<br/><br/>

>The Call Stack and the memory stored by JavaScript can be seen in the Dev tools. &#9733;

![](images/How-Hoisting-Works-Drawing-1.png)


<br/><br/>

## Code Scenario 4: Difference between normal functions and arrow functions
```javascript
getName();
console.log(x);

var x = 8;

var getName = () => {
    console.log("Namaste JavaScript");
}
```
```
The Output
----------------------------------------------------------------------------------
Uncaught TypeError: getName is not a function
```
### Explanation of the Output:
- As arrow functions returns a value which is stored in a variable getName, getName is not a function it is a variable.
- During the memory allocation phase, getName was assigned the value of undefined
- On the first line the getLine function was called which is not yet a function JUST a variable which stores the value undefined.

<br/>

## Code Scenario 4.1
```javascript
getName();
console.log(x);

var x = 8;

var getName = function functionName() {
    console.log("Namaste JavaScript");
}
```
```
The Output
----------------------------------------------------------------------------------
Uncaught TypeError: getName is not a function
```
### Explanation of the Output:
- Similar to the arrow function this method will also not work for the same reason

<br/>

## Code Scenario 4.2: 
```javascript
getName();
console.log(x);

var x = 8;

function getName() {
    console.log("Namaste JavaScript");
}
```
```
The Output
----------------------------------------------------------------------------------
Namaste JavaScript
8
```

### Explanation of the Output:
- As getName is a proper function and not a variable during the memory allocation phase the content will be stored in memory
- when accessed before the function declaration it will still be able to call and print the function as it was already stored in memory in the memory allocation phase.


