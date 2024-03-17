//Immediately Invoked Function Expression (IIFE)
/*when we write a function,it shd be executed immediately 
for a function to execute immediately and not to be affected by global scope,we use IIFE
*/

(function one(){
    //it is called named IIFE,coz it has a name one
    console.log("DB connected");
})(); //this semicolon is mandatory
//output: DB connected

//the first paranthesis we used is for,function declaration and second is for execution

(function one(){
    console.log("DB connected");
})(); //even though the same above executed function is written again,it is throwing error,
//so we need to put semicolon at end of 2nd paranthesis to indicate end of its execution

//using arrow function
(() => {
    //it is called unnamed IIFE
    console.log("DB connected again");
})();

((name) => {
    //if we want to pass paramaters,this way
    console.log(`name is ${name}`);
})('sanjuu');
//name is taken as arguement, sanjuu is given as parameter

//if we want to write 'n' IIFE in single file,dont forget semicolon after execution wala paranthesis,which indicates end of execution


