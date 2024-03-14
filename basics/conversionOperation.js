let num="33"
console.log(typeof num);
console.log(typeof(num));//another way of using typeof

let valueInNUm=Number(num)  //to convert into number
console.log(typeof valueInNUm);

let num1="33abc"
console.log(typeof num1);
let valueInNUm1=Number(num1)
console.log(valueInNUm1);
console.log(typeof valueInNUm1);

let num2=null
console.log(typeof num2);
let valueInNUm2=Number(num2)
console.log(valueInNUm2);
console.log(typeof valueInNUm2);

let num3=undefined
console.log(typeof num3);
let valueInNUm3=Number(num3)
console.log(valueInNUm3);
console.log(typeof valueInNUm3);

let num4=true
console.log(typeof num4);
let valueInNUm4=Number(num4)
console.log(valueInNUm4);
console.log(typeof valueInNUm4);


let isLoggedIn=1
let booleanIsLoggedIn=Boolean(isLoggedIn)//to convert into boolean
console.log(booleanIsLoggedIn)

//1 => true ; 0 => false
// "" => false
// "any_value" => true

let number=36
let stringNumber=String(number)//to convert into string
console.log(stringNumber);
console.log(typeof stringNumber);