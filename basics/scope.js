/*variables declared outside any block or loop or function have global scope.
globally declared can be accessed inside block,
but those declared inside block cant be accessed out of block
*/
let a=334
var c=300

//variables declared inside block has block scope
if(true){
    let a=10
    const b=20
    var c=30
    console.log("inner value of a :",a); //block scope output 10
}
console.log(a);//it says a is not defined,because a value is given inside block
console.log(b);//same with b
console.log(c);//but c value will be printed 30 instead of 300

//var is not preferred due to scope issues, it doesnt follow those scope rules


