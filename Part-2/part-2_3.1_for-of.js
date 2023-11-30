//JavaScript for of statement iterates over the values of an iterable object (like Array, Map, Set, arguments object, …,etc), executing statements for each value of the object.

const array = [1, 2, 3, 4, 5];  // use for normal iteration

for (const value of array) {
       console.log(value);
}

// Now use for of loop to iterate string
console.log("use loop in string")
let name1 = "chandan-mali";
for (const namePrint of name1) {
       console.log(namePrint);
       if (namePrint == "n") {
              break;
       }
}

//Now use for of loop in Map
// Map = The Map object holds key-value pairs and remembers the original insertion order of the keys. Any value (both objects and primitive values) may be used as either a key or a value. In Map Object do not repeat the same value

const map = new Map;  // map created, Now set the key - values in map
map.set("IN", "India");
map.set("USA", "United states of america");
map.set("IN", "India");  // In map do not repeat the key value pair
map.set("RSA", "South Africa");

console.log(map);

//Now for of loop in map
console.log("Now for of loop in map");
// for (const mapPrint of map) {    //if use this then print whole map again so,
//        console.log(mapPrint);
// }

for (const [key, value] of map) {
       console.log(`${key} :-- ${value}`);
}

//Now use for of loop in Objects
console.log("Now use for of loop in Objects");
const newObject = {
       name: "chandan",
       price: 999,
       email: "chandanmali@gmail.com",
       boolval: true
}

for (const [key, value] of newObject) {
       console.log(`${key} :== ${value}`);
}

//Now the conclusion is for of loop work on string, array, map but not work on object there is an some different method to iterate object in for loop
