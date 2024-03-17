//nested function

function one(){
    const name="sanju"

    function two(){
        const website="yt"
        console.log(name);
    }
    //console.log(website); //if we comment this line,we get output
    two()
}
one()
//output: sanju


if(true){
    const name="sanju"
    if(name==="sanju"){
        const website=" yt"
        console.log(name+website);
    }
    //console.log(website); 
    //this upper line needs to be removed in order to clear error,coz website is inside if block and cant be accessed
}
//console.log(name);
//this upper line needs to be removed in order to clear error,coz name is inside if block and cant be accessed

//output: sanju yt


function addOne(num){
    return num+1
}
addOne(3)//it will return but not print

//same function but writing console statement first
console.log(addOne(3));//it will give output 4
function addOne(num){
    return num+1
}

//function is declared in diff way
const addTwo=function(num){
    return num+2
}
addTwo(6)

//this way of function on writin console statement first
console.log(addTwo1(7)); //this gives error: Cannot access 'addTwo1' before initialization
const addTwo1=function(num){
    return num+2
}

//this is some case called hoisting,where we cant access before declaring
