/*for example,in making any ecommerce website, 
we dont know exactly how many users will be there,
i.e. how many exact no. of arguments needs to be passed 
*/
function calcCartPrice(num1){
    return num1
}
console.log(calcCartPrice(5));//eg., only 1 item in cart
//if 3 items in cart now, and further many more,how to know exact num and calculate
console.log(calcCartPrice(100,200,300));//takes only frst argument


//now (...) is called rest operator
function calcCartPrice1(...num1){
    return num1
}
console.log(calcCartPrice1(100,200,300)); //[ 100, 200, 300 ]


function calcCartPrice2(val1,val2,...num1){
    return num1
}
//val1 takes 100,nd val2 takes 200. as we returning only num1,we get rest of the values
console.log(calcCartPrice2(100,200,300,2000)); //[ 300, 2000 ]


//functions with objects
const user={
    name:"sanju",
    price:50
}
function handleObject(anyobject){
    console.log(`username is ${anyobject.name} and price is ${anyobject.price}`)
}
handleObject(user)

//passing an object
handleObject({
    name:"sonii",
    price:100
})

//passing an array
const newArray=[100,250,356,868]

function returnSecondValue(newArray){
    return newArray[1]
}
console.log(returnSecondValue(newArray));
