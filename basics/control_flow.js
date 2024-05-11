const userEmail="sanj@gmail.com" //output: hurrahh
// const userEmail=""  ////output: nah nah
// const userEmail=[] //output: hurrahh

/*if given empty string,it gives else block statement, and when empty array is given,it gives if blcok statement..
these are called truthy and falsy values
*/
if(userEmail){
    console.log("hurrahh")
}else{
    console.log("nah nah")
}

/*falsy values are
false, 0, -0, BigInt 0n, "", null, undefined, NaN -> all these are considered falsy values

truthy values
true, 1, "0", "false", " "(space between quotes), [], {}, function(){} (its called empty function)  -> all these are truthy values

 */

//to check whether its an empty array
const arr=[]
if(arr.length===0){
    console.log("empty array")
}

//to check if it is an empty object
const obj={}
if(Object.keys(obj).length===0){  //Object.keys() -> this will be converted into array of keys, later apply same length method
    console.log("Empty object")
}

console.log(false==0) //true
console.log(false=='') //true
console.log(0=='') //true


//Nullish Coalescing Operator(??) -> its story is all around null and undefined
//mostly used when dealing with databases when dont know which value to return
let val1;
val1=5 ?? 10
console.log(val1) //5

val2= null ?? 10
console.log(val2) //10

val3= undefined ?? 12
console.log(val3) //12

val4= null ?? 15 ?? 20
console.log(val4)

val5=null ?? undefined
console.log(val5) //undefined

val6=undefined ?? null
console.log(val6) //null


//ternary operator
//condition ? true : false

