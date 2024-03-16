const num=51
console.log(num);//output: 51

const score=new Number(149)//output: [Number: 149]
console.log(score);

console.log(score.toString());//149
console.log(score.toString().length);//3
//adds specified number of decimal
console.log(score.toFixed(3));//149.000
console.log(score.toFixed(3).length)//7

const numb=54.8966
const numbb=157.465
const numbbb=124323.2345
//makes it precise to specified number of digits
console.log(numb.toPrecision(3));
console.log(numbb.toPrecision(3));
console.log(numbbb.toPrecision(3)); 

const zeroes=100008085
//for readability
console.log(zeroes.toLocaleString());//100,008,085
console.log(zeroes.toLocaleString('en-IN'));//10,00,08,085

console.log(Number.MAX_SAFE_INTEGER);//9007199254740991
console.log(Number.MIN_SAFE_INTEGER);//-9007199254740991
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);//5e-324