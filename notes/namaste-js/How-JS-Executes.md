# What happens when you run a JavaScript program

**Answer**:  A Execution Context is created.   

---  
**JavaScript Code is Executed in Two Phases**
1. Memory Allocation Phase
2. Code Execution Phase

## Step by Step Process of How JavaScript Works For This Code
```javascript
var n = 2;
function square(num) {
    var ans = num * num;
    return ans;
}
var square2 = square(n);
var square4 = square(4);
```

![](images/How-JS-Executes-Drawing-1.png)
> At the start of the program the Memory Allocation Phase begins and memory is allocated for every variable and container
1. memory allocated for n and value set as undefined. (n = undefined)
2. memory allocated for function and the ENTIRE content of the function is stored in memory.
3. memory allocated for square2 and value is set as undefined.(square2 = undefined)
4. memory allocated for square4 and value is set as undefined.(square3 = undefined)

> The Code Execution Phase begins right after the memory allocation phase ends. Now JS will once again go through the entire code line by line.
1. value 2 is attached to n.
2. now on the second line there is a function and JS ignores it.
> functions in JS are like mini programs, So every time a function is invoked, A new Execution Context will be created.
3. at line 6 there is an invocation of the function square, so a new Execution Context will be created for this function
    1. Memory Allocation phase begins for the execution context of square(n), so both num and ans will have memory allocated and the value for both the variables will be undefined.
    ![](images/How-JS-Executes-Drawing-2.png)
    2. In the code execution phase num will attach with the value 2.
    3. ans will attach to the value 2 * 2 = 4.
    > Upon Returning the value (exiting the function) the Execution Context for that function is completely deleted.
    4. ans will be returned. along with ans the Control of the execution context will be returned to the **Global Execution Context**.
    ![](images/How-JS-Executes-Drawing-3.png)
4. at line 7 there is another invocation of the function square, so again a new Execution Context will be created
    1. Memory Allocation phase begins for the execution context of square(4), so both num and ans will have memory allocated 
    ![](images/How-JS-Executes-Drawing-4.png)
    2. Code Execution phase begins and nums gets the value 4, ans gets the value 16.
    3. ans will be returned and the execution context for this function will be deleted
    ![](images/How-JS-Executes-Drawing-5.png)


<br/><br/><br/><br/>

# Call Stack in JavaScript
- JavaScript uses a call stack to manage this nested Execution Contexts.
- The Main Execution Context is known as the **Global Execution Context** which is always at the bottom of the stack.
- then when a function is called and a new execution context is created the new execution context will come at the top of the GEC(Global Execution Context).
![](images/How-JS-Executes-Drawing-6.png)
- The execution context will be deleted after the value is returned or the function is exited

> The Call Stack Maintains the order of execution of Execution Contexts
