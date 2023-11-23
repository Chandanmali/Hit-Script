//use of this keyword in js
const myObject = {
       userName: "chandan",
       price: 999,

       welcomeMessage: function(){
              console.log(`Hey ${this.userName}, Welcome to my website`) // if we want to access current context value then we use this.currentcontext
              console.log(this)
       }
}
// myObject.welcomeMessage();
// myObject.userName = "sam";   //change in current context
// myObject.welcomeMessage();

console.log(this)  //{} = empty object (No context available in global)

//console.log(this)  // but when we use in browser then we got window object
// browser's global object = window object


//why we can't use this in function
//if we use in function
const newFunction = function(){
       let userName = "Rahul";
       console.log(this.userName);  // we can't use inside function
}
newFunction();

//Arrow function             // we can not use this keyword in any function format
const arrowFunction = () => {
       console.log("Hello i am chandan mali");
       let userName = "Rahul";
       console.log(this.userName);  // undefine
}
arrowFunction();

//Let's Talk about arrow function
const arrow = (num1, num2) =>{
       return num1 + num2;

}
console.log(arrow(5, 10));

//Now use arrow function as implicit return, dont use parentheses(use for one line of return)
const arrow2 = (num1, num2) => num1 + num2;
console.log(arrow2(10, 10));
//if we use return then we have to use {} = curly bracket

//if we not use curly braces{} then we have to use parentheses()
const arrow3 = (num1, num2) => (num1 + num2);
console.log(arrow3(10, 50));

//if we want to declare object in arrow function then 
//const arrow4 = (num1, num2) =>{userName: "chandan"}  //gives undefine
const arrow4 = (num1, num2) =>({userName: "chandan"})  
console.log(arrow4());

