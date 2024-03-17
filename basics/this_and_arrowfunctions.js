const user={ //current context is for now what is present in btw these curly braces
    name:"sanju",
    price:999,
    welcomeMessage:function(){
        console.log(`${this.name}, Welcome to website`); //if we want to refer to current context(name or price),this keyword is used
        console.log(this);//once comment this statement to understand its working
        /*output of above line when 23,26,27 lines wala code is present
        sanju, Welcome to website
        {
            name: 'sanju',
            price: 999,
            welcomeMessage: [Function: welcomeMessage]
        }
        sahu, Welcome to website
        {
            name: 'sahu',
            price: 999,
            welcomeMessage: [Function: welcomeMessage]
        }
        */
    }
}
user.welcomeMessage() //sanju, Welcome to website

//when asked to print only what is in current context,then it shdnt work if name is changed, but it gives output
user.name="sahu"
user.welcomeMessage() //sahu, Welcome to website


//on commenting the above 3 lines and executing
console.log(this); //(empty object) {}


//this is used only inside objects but not in functions
function hello(){
    let name="minnu"
    console.log(this.name); //undefined
}
hello()


//declaring functions through arrow functions

const intro=function(){
    let name="kavi"
    console.log(this.name);
}
intro() //undefined

//now using arrow function,diff cases
const intro1=()=>{
    let name="kavi"
    console.log(this.name);//if only this is in console, it is printing {} empty object
}
intro1() //it is also giving undefined as answer


/*ARROW FUNCTION
what actually an arrow function is
basic syntax: () => {}
*/

//basic way
const addTwo=(num1,num2)=>{
    return num1+num2
}
console.log(addTwo(3,9));

//this way is called implicit return
const addTwo1=(num1,num2)=> num1+num2
console.log(addTwo1(3,36));

//if curly braces is used,there is a need to write return,
// but when paranthesis is used,no need of return keyword

const addTwo2=(num1,num2)=> (num1+num2)
console.log(addTwo2(3,6));

//to return object
const addTwo3=(num1,num2)=> ({username:"soni"}) //object is wrapped in paranthesis
console.log(addTwo3(3,6)); //{ username: 'soni' }



