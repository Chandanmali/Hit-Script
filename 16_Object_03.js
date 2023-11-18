//De-Structuring 
const course = {
       course: "js in hindi",
       price: 999,
       courseInstructor: "Hitesh chaudhary"
}

//console.log(courseInstructor)  // not valid give error because dont know which is an main object

//we have to use by this method 
console.log(course.price)

//use de-structure method
const {courseInstructor} = course
console.log(courseInstructor)     // Give output Hitesh chaudhary

//by name change or short name change
const {courseInstructor: Guide} = course  //courseInstructor -> Guide
console.log(Guide)

//De-sturcturing use in React
/*
const navbar = (props.company) => {   // for function call you have to pass the props

}

navbar(company = "Microsoft")
*/

// But by using de structuring method
const navbar = ({company}) => {   //use {company} without props word

}

navbar(company = "Microsoft")




