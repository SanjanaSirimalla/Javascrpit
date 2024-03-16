//js arrays are resizable

//ways to declare arrays
const myArr=[7,5,4,3,7,85,9]
console.log(myArr);
const arr=new Array(1,2,3,4,5)

console.log(myArr[1]);

//array methods
myArr.push(50)
myArr.pop()
myArr.unshift(0)//0 is added at start of array
myArr.shift()//removes the very first element of array
console.log(myArr.includes(5));//returns true or false based on given element present or not
//indexOf returns -1 if element isnt present
console.log(myArr.indexOf(85));
console.log(myArr);

const newArr=myArr.join()//returns comma separated elements of array
console.log(newArr);//7,5,4,3,7,85,9

//slice,splice
//slice doesnt include range,in splice range is also included
//slice doesnt manipulate original array,splice manipulates original array and makes changes on original array itself
console.log("A",myArr);

const arr1=myArr.slice(1,3)
console.log("B",myArr);//returns exact myArr
console.log(arr1);//returns sliced part
console.log("B",myArr);//again the original myArr

const arr2=myArr.splice(1,3)
console.log("C",myArr);//splice directly makes changes on original array and gives changed array after splicing
console.log(arr2);//return spliced part,here 3 elements including range
console.log("C",myArr);//again the same changed spliced array