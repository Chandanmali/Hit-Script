//Scop in JS
let a = 500;      // Now they are in global scop
const b = 400;
var c = 10000;

if(true){           // {} this is a scop in any program not an object
       let a = 10;         //all are inside a local scop
       const b = 20; 
       var c = 30;

}
console.log(a)  //local variable(block level) = let
console.log(b)  //local variable(block level) = const
console.log(c)  //global Function level       = var

//Interview IMP
//Crome browser scop is different and terminal node js scop is different



//Output
// 500
// 400
// 30
