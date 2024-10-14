# Undefined
- Undefined is basically a placeholder which javascript uses to initialize variables.

### Example
```javascript
console.log(x);
var x = 10;
```
```
The Output
-------------------------------------------
undefined
```

**Common Misconception**: Undefined is empty and it does not occupy memory. 
- This is absolutely not true, undefined is a special keyword which takes up its own memory and is kept for the time being until the variable is assigned some other value.

<br/><br/>

# Not Defined
- Not Defined is the error displayed on the console when a variable is accessed for which the memory has not yet been allocated

### Example
```javascript
var x;
console.log(y);
```
```
The Output
-------------------------------------------
Uncaught ReferenceError: y is not defined
```

> JavaScript is a loosely typed language. That means that it does not assign any specific data type to a variable. This allows the variable to hold the value of a string in one line and hold the value of a number in the other line.
### Example
```javascript
var x;
console.log(x);
x = 'Hello World!';
console.log(x);
x = 10;
console.log(x);
x = true;
console.log(x);
```
```
The Output
---------------------------------
undefined
Hello World!
10
true
```

<br/><br/>

## A Bad Practice
```javascript
var x;
x = 10;
console.log(x);

// even though it wont give an error this shouln't be used
// the purpose of undefined is as a placeholder for variables which have
// not yet been assigned any value
x = undefined; // this is a bad practice
console.log(x);
```
```
The Output
-------------------------------
10
undefined
```