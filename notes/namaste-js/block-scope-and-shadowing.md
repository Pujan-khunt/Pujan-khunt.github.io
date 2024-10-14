<style>
    p{
        font-size: 15px;
        line-height: 25px;
    }
</style>

# Block in JavaScript

```javascript
// this is a block
{

}
```
```
The Output
------------------------------

```


- block is also known as compound statement
- block is used to combine multiple js statements into a group


> **Usecase**: block is used to combine multiple js statements into a group and use that block where js demands only 1 statement

### Example
```javascript
// If statements only execute 1 line of code if the condition is true
// But if we want multiple statements to get executed we wrap them inside a block so that one line of code which will be executed will contain multiple lines of code

// This is an usecase of the block, where only 1 statement was expected by js we used block to wrap multiple statements into one and placed it where only 1 statement was expected
if(true) console.log("this code is running...");

```
```
The Output
------------------------------
this code is running...
```

<br/><br/><br/>


# Block Scope (Block Scope also follows Lexical Scope)
> IMPORTANT POINT: ALL THE SCOPE RULES WHICH WORK WITH NORMAL FUNCTION ALSO WORK WITH ARROW FUNCTIONS

> All the variables and functions accessible inside the block is the scope of the block.

```javascript
{
	var a = 10;
	let b = 20;
	const c = 30;
	console.log(a);
	console.log(b);
	console.log(c);
}
console.log(a);
// as b and c are let and const declared variables
// they cant be accessed out of the scope so js wont be able to find them in the global scope
console.log(b);
console.log(c);
```
```
The Output
---------------------------
10
20
30
10
Uncaught ReferenceError: b is not defined
```

> Let and Const declared Variables are Block Scoped()
![](Images/block-scope-and-shadowing-image-1.png)

- Now Let and Const declared variables cannot be accessed outside their block. that is known as let and const being block scoped

<br/><br/>

# Shadowing of Variable of Type - var (works same with blocks and functions)
> Shadowing a variable will modify the value of the previous variable
```javascript
var a = 10;
{
	console.log(a);
	var a = 5;
	console.log(a);
}
console.log(a);
```
```
The Output
---------------------------------
10
5
5
```

### Explanation
1. value of a set to 10.
2. logs the value 10 
3. **modifies the value of a in the global scope**, so now a = 5.
4. logs the value 5
5. again logs the value 5 as the value a of has been changed globally.

<br/><br/>

# Shadowing of Variables of Type - let and const (works same with blocks and functions)
```javascript
let a = 10;
const b = 99;
console.log(a);
console.log(b);
{
	let a = 5;
	const b = 99999;
	console.log(a);
	console.log(b);
}
console.log(a);
console.log(b);
```
```
The Output
---------------------------------
10
99
5
99999
10
99
```

### Explanation
> there is a special place where let and const variables reside which is the Script scope
1. a created in the Script scope and value set to 10.
2. b created in the Script scope and value set to 99.
3. logs the value of a from the script scope which is 10.
4. **creates a new variable in Block scope and doesn't modify the previous variable** new a in block scope = 5
5. **creates a new variable in Block scope and doesn't modify the previous variable** new b in block scope = 99999.
![](Images/block-scope-and-shadowing-image-2.png)
6. prints the a inside block scope which is 5.
7. prints the b inside block scope which is 99999.
8. outside the block, that a cannot be accesed(a = 5) as it is in block scope so the a from the Script scope will be accessed and logs the value of global a which is 10.
9. same as above step the b from block scope cannot be accessed so the b from the script scope will be printed

<br/><br/><br/>

# Illegal Shadowing

## Illegal - Code Scenario 1: Shadowing let by var (works same with const)
```javascript
let a = 10
{
	var a = 12;
	console.log(a);
}
console.log(a);
```
```
Uncaught SyntaxError: Identifier 'a' has already been declared
```

### Explanation:
1. a is declared in the global scope using let.
2. inside the block scope a is declared using var.
3. as we know that var is function scoped and this block is not a function so that a CAN be accessed outside the block.
4. so the code looks something like this
	```javascript
	// how the code looks from a scope perspective
	let a = 10;
	var a = 10;
	```
5. this is why js is saying that a has already been defined and cannot be redefined.

<br/><br/>

## Legal - Code Scenario 1.1: Shadowing let by var but inside a function (works same with const)
```javascript
let a = 10;
function x(){
	var a = 12;
	console.log(a);
}
console.log(a);
```
```
The Output
------------------------------
12
10
```

> This is legal and is allowed.
### Explanation:
1. a is declared in global scope using let keyword.
2. inside the function a is declared using var with the value 12.
3. a is printed with value 12. this a was accessed from the function's local memory.
4. **Outside the function var a = 12 is non-existent as var is function scoped.**

<br/><br/>

## Legal - Code Scenario 2: Shadowing var by let (works same with const)
```javascript
var a = 10;
{
	let a = 12;
	console.log(a);
}
console.log(a);
```
```
12
10
```

### Explanation:
1. a is declared in the global scope using var.
2. inside the block a is declared using let which is block scoped which means not accessible outside the block.
3. a is logged.
4. block exited.
5. logs a as 10 because the a declared using 12 is not visible as it is block scoped so the a declared using var is logged.


