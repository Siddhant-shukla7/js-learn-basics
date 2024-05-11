//---------- Objects Destructuring------------

const course = {
    courseName : "Js in hindi",
    price : "999",
    courseInstructor : "Hitesh"
}

console.log(course.courseInstructor);
const {courseInstructor} = course
console.log(courseInstructor);


//---------JSON API Intro -----------

// We can objects or arrays in the API 

// {
//     "name" : "Hitesh",
//     "coursename" : "js in hindi",
//     "price" : "free"
// }

// {
//     [],
//     [],
//     []
// }