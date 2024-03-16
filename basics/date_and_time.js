//date
let date=new Date()
console.log(date);//2024-03-16T07:10:15.735Z
console.log(date.toString());//Sat Mar 16 2024 07:10:15 GMT+0000 (Coordinated Universal Time)
console.log(date.toDateString());//Sat Mar 16 2024
console.log(date.toLocaleString());// 3/16/2024, 7:10:15 AM

console.log(typeof date);//object

let myCreateDate=new Date(2024,2,21)//year,month,date format(0-11 months)
console.log(myCreateDate.toDateString());

let myCreateDate1=new Date(2024,5,15,3,8)
console.log(myCreateDate1.toLocaleString());

let myCreateDate2=new Date("03-16-2024")//MM-DD-YYYY format
console.log(myCreateDate2.toLocaleString());



//time
let myTimeStamp=Date.now()
//it is no. ofmilliseconds from1st jan to current time
console.log(myTimeStamp);////1710574574603

console.log(myCreateDate2.getTime());//no. of millisec from 1st jan to specified date nf time

console.log(Math.floor(Date.now()/1000));//to convert current date from millisec to sec

let newDate=new Date()
console.log(newDate.getMonth()+1);//to get exact month as months will be from 0 to 11
console.log(newDate.getDay());//gives day as number

//to define everything what we need,can customize
newDate.toLocaleString('default',{
    weekday: "long", 
})//didnt cmplt 
