//in Api Requests, old way of making requests was said

const promiseOne=new Promise(function(resolve,reject){
    //Do an async task like DB calls nd rest
    //DB calls, cryptograpy, network
    setTimeout(function(){
        console.log("async task is complete")
    },1000)
})
promiseOne.then(function(){
    console.log("Promise consumed")
})






















