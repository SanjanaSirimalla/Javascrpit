//declaring using constructor(it is called singleton object)

//const user=new Object()//singleton object
const user={}

user.id="123wqretr"
user.name="sanj"
user.isThere=true
console.log(user);

const user1={
    email:'sanju@gmail.com',
    fullname:{
        userfullname:{
            firstname:'sanjana',
            lastname:'sirimalla'
        }
    },
    age:19
}
console.log(user1.fullname.userfullname.lastname);//to access nested objects

const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}
//************to combine 2 objects***************

//const obj3={obj1,obj2}//same problem,we get object inside object like arrays
const obj3=Object.assign(obj1,obj2)
console.log(obj3);

//giving that empty object is considered as target, and the rest sources that need to be merged are merged into empty array
//else they all will be merged into obj1 as it is being first
const obj4=Object.assign({},obj1,obj2)//other syntax
console.log(obj4);

const obj5={...obj1,...obj2}//using spread operator
console.log(obj5);

const users=[
    {
        id:1,
        name:'soni'
    },
    {
        id:2,
        name:'soniii'
    },
    {
        id:3,
        name:'soniiiii'
    },
]
console.log(users[1].name);//soniii

//these 2 outputs datatype will be array
console.log(Object.keys(user));//to get keys
console.log(Object.values(user));

//here each key value pair will turn as an object,and all such pairs inside another object
console.log(Object.entries(user));

//to check whether that property is available in the object
console.log(user.hasOwnProperty('isThere'));//true