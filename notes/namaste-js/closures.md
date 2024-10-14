# Closures in JavaScript

> Function along with its lexical scope forms a closure

So the entire function y (enclosed) + its lexical environment(access to outer scope) formed a Closure.

```javascript
function x() {
  var a = 10;
  function y() {
    console.log(a);
  }
  y();
}
x();
```

```
The Output
----------------------------
10
```

<br/><br/>

## Weird Example to Explain Closures

> IMPORTANT POINT: **the execution context of a function is destroyed when they return a value but they maintain their lexical scope.** i.e. they remember where they were present in the scope chain.

```javascript
function x() {
  var a = 10;
  function y() {
    console.log(a);
  }
  return y;
}
var z = x();
z();
```

```
The Output
--------------------------
10
```

> Important Point: When a function is returned like on line 6, a function is not returned but a CLOSURE is returned and a CLOSURE contains the access to the local memory of the function + lexical environment of the function i.e. access to the function's outer scope.

### Explanation of what is happening in this code:

1. a variable z holds the function returned upon calling the function x.
2. function x() is invoked.
3. var a = 10;
4. another function y() is created with logging the value of a.
5. the function y is returned.
6. Now the variable z holds the **CLOSURE** which was returned on line 6. So basically z now not only holds the function y but also holds the lexical environment of y which is the outer scope of y.
7. as the CLOSURE is returned on line 6, the execution context of x is deleted, BUT the beauty of JavaScript is such that not the function but the closure was returned, and the closure contained the access to its lexical environment i.e. it still has access to the variable a which is present in the outer scope.
8. 10 is printed on console.

<br/><br/>

### Just a JavaScript thing - Both Mean the Same thing

```javascript
// Both Scenario 1 and 2 are exactly the same
// just differ by syntax

// Scenario 1
return function y() {
  console.log(10);
};

// Scenario 2
function y() {
  console.log(10);
}
return y;
```

<br/><br/>

## Another Weird Thing

```javascript
function x() {
  var a = 10;
  function y() {
    console.log(a);
  }
  a = 100;
  return y;
}
var z = x();
```

```
The Output
------------------------------
100
```

### Explanation:

> Important Point: Here when y is returned, i.e. the closure is returned and the execution context of x() is destroyed the references remain persistent and not the values. Hence 100 will be the output as the closure contains the reference to variable a and the value of a has been changed from 10 to 100 when calling the function x.

<br/><br/>

## Another Example of Closures

```javascript
function z(){
	var a = 10;
	function y(){
		var b = 99;
		function x(){
			console.log(a, b);
		}
		return x;
	}

	// P now holds the function x or more precisely the closure of x.
	var p = y();
	p();
}
z();
```
```
The Output
---------------------------
10 99
```

## Uses of Closures
- Module Design Patterns
- Currying
- Functions like once
- memoize
- maintaining the state of async world
- setTimeouts
- Iterators
- and many more
