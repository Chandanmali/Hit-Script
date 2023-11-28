//Understand Truthy and falsy value
const value = "0";

if (value) {
       console.log("Truthy present");
}
else{
       console.log("Falsy present");
}

// falsy values

// false, 0, -0, BigInt 0n, "", null, undefined, NaN

//truthy values
// "0", 'false', " ", [], {}, function(){}

//Now how to check truthy and falsy value in array and object

const array = [];

if (array.length === 0) {
       console.log("array is present");
}
else{
       console.log("Not present");
}

const objectcheck = {};

if (Object.keys(objectcheck).length === 0) {
       console.log("Object is present")
}
else{
       console.log("Not present");
}

// Now learn about // Nullish Coalescing Operator (??): null undefined
//when we take data from database they give us two value, so if we have to avoid error value, or avoid null and undefine then we use Nullish coalescing operator

const val1 = 10 ?? 20;
console.log(val1);

const val2 = null ?? 20;
console.log(val2);

const val3 = undefined ?? 20;
console.log(val3)

// Now learn about Ternary operator
// condition ? true : false

let public = 100;
public > 100 ? console.log("Welcome in wedding") : console.log("Fukat log aagye")




// Output
// Truthy present
// array is present
// Object is present
// 10
// 20
// 20
// Fukat log aagye