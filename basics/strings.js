const name="sanjana"
const age=19
console.log(name+age+" years");//not preferable to use
//bactics needs to be used instead
console.log(`my name is ${name} and age is ${age}`);

const newName=new String("sahithii")//another way to declare strings

//string methods
console.log(newName[0]);
console.log(newName.length);
console.log(newName.toUpperCase());
console.log(newName.charAt(5));
console.log(newName.indexOf("h"));

const newString=newName.substring(0,4)
console.log(newString);

const anotherString=newName.slice(-5,6)
//in slice,we can also give negative numbers which takes string from backward direction
console.log(anotherString);

const string="    sonii    "
console.log(string);
console.log(string.trim());//to remove extra whitespaces

const url="https://sanju.com/sanjana%iuoyro"
console.log(url.replace('%i','/'));

//.includes tells whether a particular string or character is present or not
console.log(url.includes('soni'));//false
console.log(url.includes('sanju'));//true
console.log(url.includes('j'));//true
console.log(url.includes('w'));//false

//split based on any character
const name1=new String('Rajender-kavitha-soni-minnu')
const name2=new String('Rajender kavitha soni minnu')

console.log(name1.split('-'));//it splits based on where - is present
console.log(name2.split(' '));//it splits based on spaces

