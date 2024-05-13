//in Api Requests, old way of making requests was said

const promiseOne=new Promise(function(resolve,reject){
    //Do an async task like DB calls nd rest
    //DB calls, cryptograpy, network
    setTimeout(function(){
        console.log("async task is complete")
        resolve()  //this will connect with .then(runs promise consumed part)
    },1000)
})
//consuming promise
promiseOne.then(function(){
    console.log("Promise consumed")
})

//other way
new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2")
        resolve()  
    },1000)
}).then(function(){
    console.log("async 2 resolved")
})


const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username :"sanju",email:"wert@gmail.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user) //parameters given in resolve will be consumed here
})


const promiseFour=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=false  //error being true or false changes output
        if(!error){
            resolve({username:"asdf",password:"134"})
        }else{
            reject("ERROR:something went wrong")
        }
    },1000)
})
promiseFour
.then((user) => {
    console.log(user)
    return user.username
})
.then((username) => {
    console.log(username)
})
.catch(function(err){
    console.log(err)
})
.finally(() => {
    console.log("THe promise is either resolved or rejected")
})
/*
when error=true, output:
ERROR:something went wrong
THe promise is either resolved or rejected
when error=false, output:
{ username: 'asdf', password: '134' }
THe promise is either resolved or rejected
asdf
*/


const promiseFive=new Promise(function(resolve,reject){
    setTimeout(function(){
        let error=true
        if(!error){
            resolve({username:"Javascript",password:"qwertyu"})
        }else{
            reject("ERROR:Js went wrong")
        }
    },1000)
});
//async await is similar to then catch, which works like it waits for sometime foe work to happen then proceeds forward else gives error

async function consumePromiseFive(){
    //await promiseFive (generally promise is an object and it cant be consumed this way,so below is the correct syntax)
    /* const response=await promiseFive 
       console.log(response) 
       the above way gives error, coz errors are not handled properly(below is the proper way */
    try{
        const response=await promiseFive 
        console.log(response) 
    }catch(error){
        console.log(error)
    }
}
consumePromiseFive()


//handling API request
// async function getAllUsers(){
//     try{
//         const response=await fetch('https://jsonplaceholder.typicode.com/users')
//         const data=await response.json()
//         console.log(data)
//     }catch(error){
//         console.log("E:",error)
//     }
// }
// getAllUsers()

//the same above thing using then catch
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) => {
    return response.json()  //it return data from api in json format
})
.then((users) => {
    console.log(users) //it prints that data returned above
})
.catch((error) => console.log(error)) //when any error,error will be shown

//api data will be shwon first in terminal than the starting console statements

