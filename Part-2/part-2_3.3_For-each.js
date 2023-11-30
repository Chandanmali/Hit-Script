//for each loop = best for all condition // writen like function
//Use in array
const arrayNew = ["ram", "lakki", "munna", "raju"];
arrayNew.forEach( function(val){
       console.log(val);
} )

//Now execute in arrow function
arrayNew.forEach( (val) => {
       console.log(val);
} )

//Now execute in normal function
function printMe(val1){
       console.log(val1);
}
arrayNew.forEach(printMe)

//We can pass 3 parameters in function
arrayNew.forEach(function(val, indexs, arr){
       console.log(val, indexs, arr);
})

//use in objects
const newObjects = [{      // if use for each in object then use [{}] before array bracket
       name: "chandan",
       price: 999,
       mail: "chandan@123"
}]
newObjects.forEach( function(objectValues){
       console.log(objectValues);
})

// we can take multiple objects in that array
//[{}, {}, {}, {}]


