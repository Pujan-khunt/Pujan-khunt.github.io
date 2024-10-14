<style>
    p{
        font-size: 15px;
        line-height: 25px;
    }
</style>

# Let and Const Keyword

## Common Misconception: Let and Const are not hoisted
```javascript
console.log(a);
console.log(b);
var a = 10;
let b = 100;
```
```
The Output
------------------------------
10
Uncaught ReferenceError: Cannot access 'b' before initialization
```

- From this Example it may seem that the misconception is true that let and const are not hoisted but that is not true.

- during the memory allocation phase for an execution context let and const also have memory allocated for them but they are not stored along with the variables where which are declared with var.

- so during the memory allocation phase all variables declared using let, const and var are set to undefined.

- The only difference is that let and const have a dedicated memory storage space

- let and const variables are stored in the **TDZ (Temporal Dead Zone)** until they are assigned a value.

> Temporal Dead Zone is the zone where let and const declared variables will stay(occupy memory) until they are assigned some value

- Variables cannot be accessed in from the TDZ.

- As they are not attached to the global space they cannot be accessed using the global object or using the this keyword as this points to the window object in the global space.

```javascript
let a = 10;
var b = 100;
```
```javascript
window.b
window.a
this.a
window.x
```
```
The Output
---------------------------------
100
undefined
undefined
undefined
```

<br/><br/>

# Strictness of Let and Const

> SyntaxError will completely reject the code and not run the file. so anything else will not be executed until the SyntaxError has been fixed.

## Code Scenario 1: let declared variables cannot be declared again
```javascript
let a = 10;
let a = 100;
```
```
Uncaught SyntaxError: Identfier 'a' has already been declared
```

<br/>

## Code Scenario 1.1: let declared variables cannot be declared again even with var
```javascript
let a = 10;
var a = 100;
```
```
Uncaught SyntaxError: Identfier 'a' has already been declared
```

<br/><br/>

## Code Scenario 2: Const variables need to initialized in the same line
```javascript
const a;
a = 100;
```
```
Uncaught SyntaxError: Missing Initalizer in const declaration
```

## Code Scenario 3: Const variables cannot be reinitialized
```javascript
const a = 100;
a = 1;
```
```
Uncaught TypeError: Assignment to constant variable.
```

<br/><br/>

# Difference between TypeError, ReferenceError and SyntaxError

### 1. TypeError: 
- Occurs when a value is of an unexpected type

#### Example: when the value of a const type variables was tried to change
```javascript
const a = 100;
a = 1;
```
```
Uncaught TypeError: Assignment to constant variable.
```

<br/>

### 2. ReferenceError: 
- Occurs when a variable or function is tried to access that hasn't been declared or initalized in the current scope.

#### Example:
```javascript
console.log(a);
```
```
Uncaught ReferenceError: a is not defined
```

### 3. SyntaxError: 
- Occurs when the the rules of the syntax are not followed:
    #### Examples
    1. Missing Parentheses
    2. not initializing const variables when declaring them.
    3. use of reserved keywords for naming variables or functions


<br/><br/>

# What to use Const or Let or Var: Priority List(top is highest priority bottom one is least priority)
1. const
2. let
3. var (avoid mostly)