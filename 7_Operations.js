let value = 3;
let negativeValue = -value;
console.log(negativeValue);

let str1 = "chandan";
let str2 = " mali";
let concatinate = str1 + str2;
console.log(concatinate);

// Different behaviour of string operations
console.log("Different behaviour of string operations");
console.log( 1 + 2 );
console.log( "1" + 2 );
console.log( 1 + "2" );
console.log( "1" + "2" );
console.log( "In three case conditions" );
console.log( typeof("1" + 2 + 3) );
console.log( "1" + 2 + 3 );
console.log( 1 + 2 + "3" );  //in js operation done by left to right

//Typescript nothing but strict js operation like same data type, === 


//output
//-3
// chandan mali
// Different behaviour of string operations
// 3
// 12
// 12
// 12
// In three case conditions
// string
// 123
// 33


