//Immediately Invoked Function Expressions (IIFE) in JavaScript
//uses : 1) use for immediate Execution
//       2) use for avoid Global Pollution (if function call name is same, then its     create confusion )

function myFunction(){
       console.log("Hello bhai sahab1");
}
myFunction();   // Normal function form

(function myFunction(){               
       console.log("Hello bhai sahab2");
})();          //IIFE form use only()  use for immediate Execution

//Now use IIFE in arrow function
( () => {
       console.log("Hello punit superstar");
} )();       // here () is a function call

// if wanted to pass some parameter then
( (num1, num2) => {
       console.log(num1 + num2);

} )(5, 11);   // this function end with this ; semicolon

// (function chaiorcode(){   // chaiorcode = this is name IIFE
//    console.log("hello");
// })

// ( () => {                   // () = This is unnamed IIFE(no name)
    //console.log("hello")
// } )()



//Output

// Hello bhai sahab1
// Hello bhai sahab2
// Hello punit superstar
// 16