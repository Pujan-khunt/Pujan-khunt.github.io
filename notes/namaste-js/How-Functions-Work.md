# The Working of Functions will be explained by the following Example
```javascript
var x = 1;
a();
b();
console.log(x);

function a(){
    var x = 10;
    console.log(x);
}

function b(){
    var x = 100;
    console.log(x);
}
```
```
The Output
-------------------------------------
10
100
1
```

## The Step by Step Explanation: 
0. program starts :(
1. GEC is placed on top of the empty call stack.
2. The Memory Allocation phase for GEC(global execution context) begins> the local x and the x outside this execution context are independent of each other.
3. memory is allocated for x and value is set to undefined
4. memory is allocated to store the content of the function a();
5. memory is allocated to store the content of the function b();
6. code execution phase of GEC begins and the value 1 is set to x;
7. function a() is invoked.
    1. a() is placed on top of the call stack below the GEC.
    2. Memory Allocation phase for a() begins.
    3. memory is allocated for local x and value is set to undefined 
    > the local x and the x outside this execution context are independent of each other
    4. the local x = 10 is printed.
    5. function is exited the Execution Context of a() is deleted and popped from the call stack, also the control shifts to the GEC.
    > Once a Execution Context is deleted the memory which was occupied by it is freed.
8. function b() is invoked.
    1. b() is placed on top of the call stack below the GEC.
    2. Memory Allocation phase for b() begins.
    3. memory is allocated for local x and value is set to undefined 
    4. the local x = 100 is printed.
    5. function is exited the Execution Context of b() is deleted and popped from the call stack, also the control shifts to the GEC.
9. the local x = 1 is printed and as the function is over the GEC will be removed from the call stack and memory will be freed.
10. program over :)
