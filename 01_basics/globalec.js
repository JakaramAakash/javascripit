/*The global execution context(Placed in 'this') consists of two phases
 1.Memory creation phase
 2.execution phase
 1.it only creates memory by assigning 'undefined' value to variables,and the entire function definition is written in it
2.The execution of the code line by line takes place.Assigns.value to variables
  For functions--->New Execution context + Single Threading Takes place i.e Memory phase and Exection phase
    ---> and the value returned by function is sent to Global Execution context.Then after Returning Value,it gets deleted.
In this way a call stack is created for Each function ,which follows LIFO in execution and then Popping function from stack.*/