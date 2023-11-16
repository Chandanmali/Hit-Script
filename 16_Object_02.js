//Declare or use Object by Constructor method
const tinderUser = new Object();  // Declare object by constructor method
console.log(tinderUser);

const tinderUser2 = {};        // also declare by this method
console.log(tinderUser2);

//Object initialization
tinderUser2.id = "123abc",
tinderUser2.name = "new name",
tinderUser2.isLoggine = false,
console.log(tinderUser2)

//Nested Object
const newApplication = {
       email: "chandanmali2111@gmail.com",
       name: {
              fullName: {
                     firstName: "chandan",
                     lastName: "Mali",
              }
       }
}
console.log("\n",newApplication, "\n")
console.log(newApplication.name.fullName.firstName,"\n")


// Wanted to merge 2 or more object elements
const obj1 = {
       1: "a",
       2: "b",
}
const obj2 = {
       3: "a",
       4: "b",
}
const obj3 = {
       5: "a",
       6: "b",
}

const obj4 = {obj1, obj2}
console.log(obj4)  // Both the actual object merged not elements

//object assign
const obj5 = Object.assign({}, obj1, obj2)  // (terget, source) all elem add in source 
console.log(obj5)

// object spread (best way)
const obj6 = {...obj1, ...obj2}
console.log(obj6);

console.log(Object.keys(tinderUser2))  // find all keys return in array
console.log(Object.values(tinderUser2)) // find all values return in array
console.log(Object.entries(tinderUser2)) // separate key, value in array
console.log(tinderUser2.hasOwnProperty('isLoggine'))