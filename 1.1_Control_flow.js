//In this lesson we learn about control flow = if-else, switch
// if(condition) = work on condition
// like <, >, <=, >=, !=, ==, ===

// Now see the difference between == and === strict equal
if (2 == "2") {  // print the different data type value
       console.log("In == Print different data type value which is not valid")
}

if (2 === "2") {  // === define correct type and differentiate
       console.log("In === Print different data type value which is not valid")
}


//Now lets see about scop
if (true) {
       let one = "parkison";
       console.log(`Hello ${one}, are you fine`);
}
//console.log(`Hello ${one}, are you fine`); bada bacche se nhi mang sakta and out of scop

// Now lets see difference between & | and && ||
// & is a bitwise and, | = bitwise or(use for bit calculation 1,0)
// && is a logic and , ||  = logic or (use for conditional statement, true, false)

let userName = true;
let password = true;
let emailLogin = true;
let googleLogin = false;

if(userName && password && 2 === 5){
       console.log("Login process complete")
}

if (emailLogin || googleLogin) {
       console.log("start your app")
}



//Output
// In == Print different data type value which is not valid
// Hello parkison, are you fine
// start your app