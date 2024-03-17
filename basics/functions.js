function name(){
    console.log("soni");
    console.log("minnu");
    console.log("laddu");
}
name() //functions's reference

function addTwo(num1,num2){ //num1,num2 are called parameters
    console.log(num1+num2);
}
//these values what we give are arguments
addTwo(2,5) //7
addTwo(3,'4') //34
addTwo(3,null) //3

const res=addTwo(3,8) //11
console.log("result:",res); //result: undefined
//what console prints,nd what function returns are not same

function addition(num1,num2){
    let ans=num1+num2
    return ans
    console.log("hello");//whatever is written after return,willnot be executed

    //other way
    ///return num1+num2
}
const res1=addition(3,8)
console.log("result:",res1); //result: 11


function userlogin(username){
    return `${username} just logged in`
}
userlogin("sanjana")//this doesnt prints any output,just returns the output
console.log(userlogin("sanjana")); //sanjana just logged in
console.log(userlogin("")); // just logged in
console.log(userlogin()); //undefined just logged in

function userLogin2(username){
    if(username===undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(userLogin2());

//if(username===undefined) this part can also be written as if(!username)


//pass default values
function userLogin(username='rocky'){
    if(username===undefined){
        console.log("please enter a username");
        return
    }
    return `${username} just logged in`
}
console.log(userLogin()); //rocky just logged in (due to default parameter)
//if given any argument, it will override
console.log(userLogin("hiee"));
