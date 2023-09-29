//The way of writing string in js
let val1 = "chandan";
let val2 = 50;
console.log(val1.toUpperCase() + " has " + val2 + " Rupees of chocklate"); //old method

//The best way of writing string is
console.log(`${val1.toUpperCase()} has ${val2} Rupees of chocklate`); //new mwthod backtick(string interpulation)

//************ Declaration of a string *********
let gameName =new String(`chandan-mali`);
console.log(typeof(gameName));
console.log(gameName[7]);

console.log(gameName.__proto__);  //run on browser console == find all the methods

//******** String Methods ***********
console.log(gameName.length);                      //find length 
console.log(gameName.toUpperCase());               //convert all uppercase
console.log(gameName.toLowerCase());               //convert all lowercase
console.log(gameName.charAt(2));                   //Position of characters '0' base index
console.log(gameName.indexOf('m'));                //index value
console.log(gameName.substring(0, 4));             // Give substring 0-4 index

let anotherString = `   Newton   `;
console.log(anotherString.trim());                 //trim the white space and \n new line

console.log(gameName.replace(`chandan`, `suraj`)); //Replace the value 
console.log(gameName.includes(`mali`));
console.log(gameName.includes(`newton`));          // value present or not
console.log(gameName.split(`a`));                  //split from this word




//**********OUTPUT ******* */

/*
CHANDAN has 50 Rupees of chocklate
CHANDAN has 50 Rupees of chocklate
object
-
{}
12
CHANDAN-MALI
chandan-mali
a
8
chan
Newton
suraj-mali
true
false
[ 'ch', 'nd', 'n-m', 'li' ]
*/



