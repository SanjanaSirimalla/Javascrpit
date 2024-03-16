//two ways to declare objects,literal and constructor
//if we declare using constructor,singleton is formed,whereas with literal,it is not singleton object

//declare symbol
const mySym=Symbol('key1')

//declaring object using literals

const jsUser={
    name:'sanjana',
    "full name":'sanjana sirimalla',//when key is given in form of multiple words,we cant access using dot
    //mySym:"mykeyyyy1",
    [mySym]:"mykeyyyy1",//correct syntax to refer symbols
    age:19,
    location:'hyd',
    email:'sanju@gmail.com',
    isLoggedIn:true,
    days:['mon','tue','wed']
}

//access objects
console.log(jsUser.email);//it is not preferred
console.log(jsUser['email']);
console.log(jsUser["full name"]);
//console.log(jsUser.mySym);
console.log(jsUser[mySym]);//correct symtax to access symbol

jsUser.email='snjaniu@uyskcjn'//to change/overide values
//to lock values so that cant be changed
//Object.freeze(jsUser)
jsUser.email='snjaniu@u23456789'//this value willnot be updated as object is freezed before
console.log(jsUser);

jsUser.greeting=function(){
    console.log("hellooo everyone");
}
//this is used to refer same object, i.e. what all are present inside object
jsUser.greeting1=function(){
    console.log(`hellooo everyone, ${this.name}`);
}
//for these below 22 to work, comment freeze object
console.log(jsUser.greeting);
console.log(jsUser.greeting());
console.log(jsUser.greeting1());
















