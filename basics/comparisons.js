//basic comparison operators >,<,>=,<=,!=,==

console.log("2">1);
console.log('02'>1);
//always try to compare same datatypes

console.log(null>0);//false
console.log(null==0);//false
console.log(null>=0);//true

//using any comparison operators with undefined and 0 always gives false

console.log("2"==2);
console.log("2"===2);
console.log(53===53);
console.log(53===433);
// === is strict check, it compares vales as well datatypes too