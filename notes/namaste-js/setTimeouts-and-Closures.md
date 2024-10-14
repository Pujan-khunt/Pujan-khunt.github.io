# Set Timeouts and Closure Interview Questions

## Set Timeouts Example  

Internally:
- first the function containing the console log function forms a closure so it "remembers" the value of i
- the setTimeout takes the callback of the function and stores it somewhere else
- it attaches a timer of 2000 ms to it
- js proceeds to the next line and console.logs namaste - js
- As the timer expires it puts it again into the call stack and then runs it

```javascript
function x(){
    var i = 1;
    // js will reach here and then start a timer of 2s 
    // and will then proceed to the next line IT WILL NOT WAIT
    setTimeout(function () {
        console.log(i);
    }, 2000);
    console.log('namaste js');
}
```
```
The Output:
-----------------------------------
namaste js
1
```

<br/><br/>

## Problem Statement: print numbers from 1 to n where the ith number is printed on ith second

### Code Scenario 1: difference between let and var in set-timeouts (let)

```javascript
for(let i = 1; i <= 5; i++){
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}
console.log("Running Program...");
```
```
The Output
-----------------------------------
1
2
3
4
5
```

### Explanation: 
- let is block scoped so it will create a new copy of i is created every time the function forms a closure.
- so the 5 closures formed all will have a reference to different i's 
- read the explanation for code scenario 2 to understand this better
<br/><br/>

### Code Scenario 2: difference between let and var in set-timeouts (var   )

```javascript
for(var i = 1; i <= 5; i++){
    setTimeout(function () {
        console.log(i);
    }, i * 1000);
}
console.log("Running Program...");
```
```
The Output
-----------------------------------
6
6
6
6
6
```

### Explanation:
- as var is function scoped a new copy of i will NOT be created every time the loop runs so on i = 1 the function will form a closure which will contain the reference to the i (currently value is 1) and the settimeout will take that closure and attach a timer to it
- the loop will now proceed and to the next iteration and the value of i will be updated to 2.
- the closure which was defined in the previous line contains the reference to this i so the value of i inside that closure will also be updated to 2.
- inside the loop of i = 2 a new closure will be formed with i = 2 and sent to set-timeout function 
- i will be updated to value 3, then the above 2 closure which still holds the refernce to that variable will also have their i's updated to value 3.
- this process will go on and on until i = 5 and the closure is formed sent to timeout function and the value of i is updated to 6 and all closures will also have thier i's updated to 6.
- as the timer for the first closure expires it will print the value of i which is 6 and this will repeat for all the closures and 5 6's will be printed

<br/>

### Code Scenario 3: solving the problem using var :)

```javascript
for(var i = 1; i <= 5; i++){
    function close(x){
        setTimeout(function () {
            console.log(x);
        }, x * 1000);
    }
    close(i);
}
console.log("Running Program...");
```
```
The Output
-----------------------------------
1
2
3
4
5
```

### The Fix and its Explanation:
The Fix is just to capsule the setTimeout inside a function and call it every time inside the loop

Why this Works:
- understand the problem first: the problem was that every time the same reference was being passed to the set timeout function.
- to solve it we need to pass different references every time
- if we close the settimeout inside a function what will happen is  the function close will form a 