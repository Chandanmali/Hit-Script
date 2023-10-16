//Singleton

// Object.create

// object literals

let newSymbol = Symbol("nayasymbol");
//Create object in js
let jsUser = {
       name: "chandan",  // name, age location all are string type
       age: 22,
       email: "chandanmali21117@gmail.com",
       [newSymbol]: "nayasymbol2",
       Boolean: true,
       location: "Thane",
       lastLoginDays: ["Monday", "Saturday"],
       "jila batao": "chandauly"
}

// Access the object elements
//Access by two ways
console.log(jsUser.name);      // Access by .
console.log(jsUser["name"]);   // Access by [""] this is most prefer

//console.log(jsUser.jila batao);    // not getting output in .
console.log(jsUser["jila batao"]);   // getting output in [""]

//Symbol data type in Object
console.log(typeof jsUser[newSymbol]);

//change value of object
console.log(jsUser.email);
jsUser.email = "chatgpt@openai.com";
console.log(jsUser.email);

//if you want to freez the value
//Object.freeze(jsUser)
jsUser.email = "bardgpt@openai.com";
console.log(jsUser)


//Function in objects
jsUser.greeting = function(){
       console.log("Hello js user");
}

jsUser.greetingTwo = function(){
       console.log(`Hello js user, ${this.name}`);  //this = target object key
}       // ` ` = object Manipulation

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());



/*******  OutPuts *********

chandan
chandan
chandauly
string
chandanmali21117@gmail.com
chatgpt@openai.com
{
  name: 'chandan',
  age: 22,
  email: 'bardgpt@openai.com',
  Boolean: true,
  location: 'Thane',
  lastLoginDays: [ 'Monday', 'Saturday' ],
  'jila batao': 'chandauly',
  [Symbol(nayasymbol)]: 'nayasymbol2'
}
Hello js user
undefined
Hello js user, chandan
undefined

*/