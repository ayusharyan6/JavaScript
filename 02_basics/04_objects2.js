const course = {
    courseName : "js in hindi",
    coursePrice : "999",
    courseInstructor: "Hitesh",
}
const {courseInstructor} = course
console.log(courseInstructor);

// also u can do this if variable name is too long
const {courseInstructor: instructor} = course