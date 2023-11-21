let a = 500;
if(true){
      // let a = 10;
       console.log(a);
}
console.log(`my value is `,a);

//***By this example global variable can be use inside local scop but if variable present inside the local scop then we can not use it globally (chhote bachhe bado se ice cream le sakte hai but bade nhi le sakte )*/

//Take one more example by using function

function one(){       // in this program one() is global and two() is local
       const userName =  "harry bhai";

       function two(){
              const application = "Youtube";
              console.log(userName);        // But bachha bade se le sakta hai
       }
     //  console.log(application);   // bada bachhe se nahi le sakta

       two();
}

one();


// Now understand by if statement

if (true) {
       const myUtube = "chandan";
       if (true) {
              const broUtube = " smMusic";
              console.log(myUtube + broUtube)
       }
      // console.log(broUtube);  // bada bachhe se nhi le sakta
}
// console.log(myUtube);         This is out of scope 


addone(5);           //In normal function we can call function before declare
function addone(num){
       console.log(num + 1);

}


//In function Expression (Fuction expression means = Hold/store function by variable )

//addtwo(10);      //But in this function we store function in variable and we not declare function(holded by variable) before function call(variable) 
const addtwo = function(num){
       console.log(num + 1);

}
addtwo(20);


//Output
// 500
// my value is  500
// harry bhai
// chandan smMusic
// 6
// 21