# The Scope Chain

> Scope Chain is chain of all the Lexical Environments

### Q1. Predict the Output

```javascript
function func() {
  console.log(b);
}

var b = 10;
func();
```

<br/>

- Naturally it seems that the output would be: b is not defined. but looking at the output we see that it prints 10. HOW?

- The Reason is how the Scope Chain works in accessing memory using Lexical Environment.

<br/>

```
The Output
------------------------------
10
```

<br/><br/>

## What is a Lexical Environment?

> Lexical Environment of a Execution Context = Local Memory + Lexical Environment of its Parent

- The meaning of the word lexical is Hierarchy.

- the lexical environment is created when a execution is created.

- it defines whether a variable or function is present inside the scope.

- func() is lexically inside the global scope or GEC

- JavaScript will return the error not defined when it exhausts all its options. i.e. search through lexical environments of all the children and also null.

- the parent of the global execution context is null

- The Variable Environment consists of two things
	1. The Local Memory
	2. Reference to the Variable Environment of its Parent (Lexical Environment)


<br/><br/>

## Step by Step Explanation of the Process in Q1

1. JS File Executes
2. Global Execution Context is created
3. GEC placed on call stack
4. Memory Allocation Phase begins for the Global Execution Context
	1. Stores the reference to the function func(){...}
	2. Memory allocated for b.
	3. b = undefined.
5. Code Execution Phase begins for GEC
	1. b = 10
	2. function func() is invoked;
	3. Local Execution Context for func() is created.
	4. LEC is placed on the call stack.
	10. Memory Allocation phase begins for func().
		1. Nothing to allocate memory for
	11. Code Execution Phase begins for func().
		1. finds the value of b in the variable environment of func().
		2. fails to find it.
		3. searches in its lexical environment. i.e. the variable environment of its parent. i.e. GEC
		4. finds the value of b in GEC.
		5. console.log(b)

<br/><br/>

## Code Scenario 1:
```javascript
function func(){
	var b = 10;
	function func2(){
		var c = 1;
		console.log(c);
		console.log(b);
		console.log(a);
	}
	func2();
}
var a = 100;
func();
```
```
The Output
------------------------------
1
10
100
```

<br/><br/>

## Visual Representation of Lexical Environment For Code Scenario 1:
![](Images/scope-chain-drawing-1.png)



