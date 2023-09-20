//for Number Conversion
let score = true;
console.table([typeof(score), score]);

let score1 = "33";
console.table([typeof(score1), score1]);

let changeStringIntoNum = Number(score1);
console.table([typeof(changeStringIntoNum), changeStringIntoNum, score1, typeof(score1)]);

console.log("For score convert");
let checkForAllConditions = Number(score);
console.table([typeof(checkForAllConditions) , checkForAllConditions]);

//case study for Number Conversion
//"33" => 33
//"33abs" => NaN
//null = 0;
//undefine = NaN
//true = 1;


//for boolean conversion
let chechBool = "";
let convertValuetoBool = Boolean(chechBool);
console.table([typeof(chechBool), chechBool, typeof(convertValuetoBool), convertValuetoBool]);

//case study for Boolean Conversion
// 1 => true
// 0 => false
// "1a" => true
// "" => false

//for string
let checkString = 1;
let convertValutoString = String(checkString);
console.table([typeof(checkString), checkString, typeof(convertValutoString), convertValutoString]);
