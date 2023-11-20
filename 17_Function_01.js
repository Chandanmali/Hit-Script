//Function in js

function myFunction(){    //Function definition = define the function here
      console.log("C")
      console.log("H")
      console.log("A")
      console.log("N")
}

myFunction  //reference = not execution
myFunction(); // function call = function execution

//Write a function to add the two numbers in js
function addTwoNumbers(number1, number2){      //parameters
       console.log(number1 + number2);
}
addTwoNumbers(5, 8);                           // Arguments = actual value

//one more way to return output addtwonumber
function addTwoNumbers2(number1, number2){
       const ans = number1 + number2;
       return ans;
}
console.log(addTwoNumbers2(5, 9));
const sumbata = addTwoNumbers2(5, 9);
console.log(sumbata);

function loginUserMessage(username = "sam"){
       if(!username){
              console.log("Please enter a user name");
              return;
       }
       //console.log("This is an username");
       return `${username} just logged in`;
}
loginUserMessage();           //only console part return
console.log(loginUserMessage());
console.log(loginUserMessage("ch"));


//output
/*
C
H
A
N
13
14
14
sam just logged in
ch just logged in
*/