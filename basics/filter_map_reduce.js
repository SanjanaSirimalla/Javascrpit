const langs=['C','C++','python','js']

const eg=langs.forEach( (item) => {
    console.log(item)
    return item
})
console.log(eg)  //it gives undefined
//forEach doesnt return any values

const nums=[1,2,3,4,5,6,7,8,9]
nums.filter( (num) => num>4)  //doesnt print anything coz we didnt say anywhere to store them

//same can also be written in forEach but filter returns the nums and on storing and printing it gives vales
//whereas forEach doesnt return any values

const numbers=nums.filter( (num) => num>4)
console.log(numbers)

const numbers1=nums.filter( (num) => {
    return num>5 //if curly braces are used, it is necessary to use return keyword(explained in this_and_arrowfunction)
})
console.log(numbers1)

const nums1=[1,2,3,4,5,6,7,8,9]
const newNums=[]

nums.forEach( (num) => {
    if(num>6){
        newNums.push(num)
    }
})
console.log(newNums)

//check for video number 30 for some content


//map method
const nums2=[1,2,3,4,5,6,7,8,9]
const Numss=nums2.map((num) => {
    return num+10
})
console.log(Numss)

//multiple nums of times .map method can be used
const otherNums=nums2
    .map((num) => num*10) //first nums will be multiplied by 10
    .map((num) => num+1)  //then 1 will be added for multiplied numbers 
console.log(otherNums)

const otherNum=nums2
    .map((num) => num*10) 
    .map((num) => num+1)
    .filter((num) => num>=40)
console.log(otherNum)


//reduce method
const n=[1,2,3]
const total=n.reduce(function(accumulator,currentValue) {
    console.log(`accumulator : ${accumulator} and currentValue : ${currentValue}`) //this line for more understanding
    return accumulator + currentValue
},0) //this value given after comma is strat point of accumulator. i.e., from wehre accumulator value taking is started
console.log(total)

//same as above but writing in a smart way
const total1=n.reduce((acc,curr) => acc+curr ,0)
console.log(total1)


const cart=[
    {
        item:"brush",
        price:68
    },
    {
        item:"paste",
        price:45
    },
    {
        item:"bands",
        price:234
    },
    {
        item:"soaps",
        price:987
    },
]
const pay=cart.reduce((acc,item) => (acc + item.price) ,0)
console.log(pay)

//done