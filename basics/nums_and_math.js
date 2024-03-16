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
console.log(Number.MAX_VALUE);//1.7976931348623157e+308
console.log(Number.MIN_VALUE);//5e-324

//*********************************MATH*************************************
console.log(Math.abs(-75));
console.log(Math.round(4.6));//5
console.log(Math.round(4.4));//4
console.log(Math.ceil(4.2));
console.log(Math.floor(4.2));
console.log(Math.min(346,67,4,264));
console.log(Math.max(4,47,1646,89,75));

console.log(Math.random());//gives random numbers between 0 and 1
console.log((Math.random()*10)+1);//to get random numbers between 1 and 10
//math.floor of 0.1 will give ),so to avoid that,1 is added
console.log(Math.floor(Math.random()*10)+1);//to get only integers

//to get random numbers between two limits
const min=10
const max=20
console.log(Math.floor(Math.random()*(max-min+1))+min);





