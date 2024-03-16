//object de-structuring

const course={
    coursename:"js",
    price:1000,
    teacher:'hitesh'
}
//course.teacher

const {teacher}=course//way of destructuring object(curly braces syntax)
console.log(teacher);

//if we feel the properties to be long,we can rename it and use
const {teacher:t}=course
console.log(t);



//API's
//randomuser.me api


