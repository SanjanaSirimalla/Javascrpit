//for of loop
//["", "", ""]
//[{}, {}, {}]

const arr=[1,2,3,4,5]

for(const num of arr){ //for of loop
    console.log(num);
}

const greetings="Hello World!"
for(const greet in greetings){
    console.log(`each char is ${greet}`)
}

//MAPS

const map=new Map()
map.set('IN','India')
map.set('USA','United States of America')
map.set('UK','United Kingdom')
//map.set('IN','India') // even if we add this again, it will not be printed, coz map is used for unique items
console.log(map)

for(const key of map){
    console.log(key)
}
/*output:
[ 'IN', 'India' ]
[ 'USA', 'United States of America' ]
[ 'UK', 'United Kingdom' ]
*/

//to get each one separately
for(const [key, value] of map){
    console.log(key, ':' ,value)
}
/*output:
IN : India
USA : United States of America
UK : United Kingdom
 */

//map cant be iterated using for in loop

const obj={
    'name':'soni', //even if single quotes are removed and keys are used, then also its not iterable
    'id':'C3',
    'num':23
}
// for(const [key, value] of obj){
//     console.log(key, ':' ,value)
// }
//objects are not iterable in this way


//for in loop
const myObj={
    js:"javscript",
    cpp:"C++",
    rb:"ruby"
}
for(const key in myObj){
    console.log(`${key} shortcut is for ${myObj[key]}`)
}

const lang=['C','C++','python','js']
for(const la in lang){
    console.log(`${la}`) //this will give only keys  i.e., 0 1 2 3
    console.log(`${la} is ${lang[la]}`)
}

//*********************************Usage of forEach*********************************************
const langs=['C','C++','python','js']

langs.forEach(function (la){ //no need to name function(function stg(la){} in this way), coz we print it there itself
    console.log(la);
})

//using arrow function
langs.forEach((la) => { //no need to store function( stg=(la)=>{} in this way)
    console.log(la);
})

function printMe(item){
    console.log(item)
}
langs.forEach(printMe)

/* above 3 give same output:
C
C++
python
js
*/

//forEach can even access many other
langs.forEach( (item,index,arr) => {
    console.log(item,index,arr)
})

const coding=[
    {
        langName:"js",
        fullname:"Javascript"
    },
    {
        langName:"py",
        fullname:"Python"
    }
]
coding.forEach( (item) => {
    console.log(item.langName)
})




