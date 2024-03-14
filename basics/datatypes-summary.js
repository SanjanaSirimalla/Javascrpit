/*
JavaScript is a dynamically typed language. This means that variable types are determined at runtime, 
and you do not need to explicitly declare the type of a variable before using it.
You can assign different types of values to a variable during its lifetime.

let x = 10; // x is now a number
x = "Hello"; // x is now a string
x = true; // x is now a boolean
On the other hand, statically typed languages require you to declare the variable's type explicitly, 
and the type checking is done at compile-time, before the code is executed.


based on how data is stpred in memory and how data is accessed
it is divided into primitive and non primitive

Primitive
7 types : 
1) String => (call by value)
when we copy it from somewhere, the exact reference is not given,instead a copy of it is created and given
any changes made also will be made on copy only

2)Number
Boolean
null
undefined
Symbol
BigInt => very huge values like scientific values


Reference type(Non primitive)
Arrays,Objects,Functions
*/

const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id === anotherId);//as we used,even though both are same,it returns false
//because Symbol is used to define uniqueness, even they are same

const bigNumber=938728932985932858985n //n is used to specify it as BigInt

//arrays
const fruits=['apple','banana','orange']//typeof gives object
console.log(fruits);

//object
let myObj={ //type is object
    name:'sanjana',
    age:19
}
console.log(myObj);

//function
const myFunction=function(){ //type is function i.e. object function
    console.log("hello world");
}

