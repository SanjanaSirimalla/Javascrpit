//two ways to declare objects,literal and constructor
//if we declare using constructor,singleton is formed,whereas with literal,not formed
//singleton


//object literals


const jsUser={
    name:'sanjana',
    "full name":'sanjana sirimalla',//when key is given in form of multiple words,we cant access using dot
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



















