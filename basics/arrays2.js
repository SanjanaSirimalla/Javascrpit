const animals=['monkey','donkey','elephant','tiger']
const birds=['pigeon','parrot','crow']

// animals.push(birds)
// console.log(animals)
//by above method,array is inserted inside an array of elements as single elements

const beings=animals.concat(birds)//both arrays will be concatenated into beings array
console.log(beings);

//spread operator(...)used to concat arrays -> mostly preferable
const beings1=[...animals,...birds]
console.log(beings1);

const arr=[1,2,3,[4,5,6],7,[6,7,[8,9]]]
/*number specified in flat is used to remove array in array to that depth
as we used 1,array of depth 2 is solved only till one level,so we use infinity
*/
//const anotherArray=arr.flat(1)   //[ 1, 2, 3, 4, 5, 6, 7, 6, 7, [ 8, 9 ] ]
const anotherArray=arr.flat(Infinity)
console.log(anotherArray);


console.log(Array.isArray('sanjna'));//to check whether given one is array or not //gives false
console.log(Array.from('sanjana'));//to convert given parameters into array
//output: ['s','a','n','j','a','n','a']
console.log(Array.from({name:'sanju'}));//[]
//it returns empty array,coz we need to specify whether to make array of keys or values

let score1=100
let score2=200
let score3=300
console.log(Array.of(score1,score2,score3));//returns new array from set of elements