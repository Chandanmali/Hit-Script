//normal form(primitive)
let num = 123;
console.log(num);

//object
let num1 = new Number(123);
console.log(num1)  //now num1 converted into object therefor there is an some prototype function for number (run this on browser console)

//some function for number
console.log(num1.toString());  //now 123 convert into string value
console.log(typeof(num1.toString()));  //now 123 convert into string value

let num2 = new Number(226.6);
console.log(num2.toFixed());  //convert into string and round fig decimal number

let num3 = new Number(91825);
console.log(num3.toLocaleString(`en-IN`)); //it is use for seperate the number into comaas
//basically it follow US System but we can custmise by indian(`en-IN`)


//In js there is some Range of value present in Number data type
console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);

/************ Maths in js *************/
console.log(`\nStart Math in js\n`)
console.log(Math);             //Math is a object in js there is many function of math
console.log(Math.abs(-4));     //turn only negative number to positive
console.log(Math.round(4.4))
console.log(Math.round(4.6))  // give the round fig value 4.4 = 4, 4.6 = 5

console.log(Math.ceil(4.6))  //ceiling = upper value if 4.2,4.5,4.6 all for 5 upper value
console.log(Math.floor(4.7))  //floor = lower value if 4.2,4.5,4.6 all for 4 lower value

console.log(Math.max(4, 1, 6, 10, 2)); // to find maximum number
console.log(Math.min(4, 1, 6, 10, 2)); // to find minimum number

console.log(`Most use in Math`)
console.log(Math.random());  //always give the random number between 0 to 1
console.log((Math.random() * 25) + 1); //if we *10 then value sift one position 
// 0.84554 *10 = 8.4554. 0.177895 *10 = 1.77895

console.log(Math.floor(Math.random() * 10)); //5.545 = 5, 7.236 = 7
console.log(Math.floor(Math.random() * 10) + 1); //if value is 0.123 = 0 but this is wrong we need a value from 1 to 10 there +1, 0.123 + 1 = 0 + 1 = 1

//if we need an game like dise game
let min = 3;
let max = 9;
console.log(Math.floor(Math.random() * (max - min + 1))  + min);  