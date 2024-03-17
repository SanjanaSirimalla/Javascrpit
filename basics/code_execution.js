/*
Javascript Execution Context

when we give code to js,first Global execution context will be formed
Js is single threaded
other is Function Execution Context
3rd but not much imp is Eval execution context

js executes its program in 2 phases
first is memory creation phase or also called creation phase
nd second is execution phase

in memory creation phase,whatever variables we have used,memory will be allocated for them but not executed

*/

let val1=10
let val2=5
function addNum(num1,num2){
    let total=num1+num2
    return total
}
let result1=addNum(val1,val2)
let result2=addNum(10,2)
console.log(result1);
console.log(result2);
/*
step-1) global execution
whatever is the length of code, it will be run by global execution and stored inside "this"

step-2) memory phase
all the variables will be collected and stored
val1 -> undefined will be assigned first
val2 -> undefined
addNum -> function definition will go into this till line 22
result1,result2 -> undefined

step-3) execution phase
10 will go into val1
val2 <- 5 //5 will go into val2
line 19-22 ntg will happen, coz there is no execution part in it and function definition part is already done
result1 -> ??  in this line,a function is assigned to variable result1,so we came to addNum part

    any number of times function is executed,as many number of times a new execution context is created consisting of(new variable environment+execution thread)
    and after completion of work in it, it(new execution context) will be deleted too

    if function executes many times,then each time memory phase and execution phase also needs to be done
    memory phase
    val1 -> undefined
    val2 -> undefined
    total -> undefined

    execution phase
    num1 -> 10
    num2 -> 5
    total ->15
    this value of total will be returned in global execution context
result1 -> 15

result2 -> ?? in this line,a function is assigned to variable result2,so we came to addNum part
    again a new execution context is created consisting of(new variable environment+execution thread)
    as function eecuted again, memory ohase and execution phase should be done again
    memory phase
    val1 -> undefined
    val2 -> undefined
    total -> undefined

    execution phase
    num1 -> 10
    num2 -> 2
    total ->12
    this value of total will be returned in global execution context
result2 -> 12

*/

//call stack in vid
//LIFO technique