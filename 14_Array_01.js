let arr = [0, 2, 4, "chandan", true, 14.5, 500]; // all datatype value allowed
for (let i = 0; i < arr.length; i++) {
       console.log(arr[i]);
       
}

console.log("\nThe way of declare array in js")
let arr1 = [0,1,2,3,4];
let arr2 = ["cm", "pm", "hm"];
let arr3 = new Array(1,2,3,4);
console.table([arr1, arr2, arr3]);

//******** Array Methods */
// 1) Array Push

let newArray = [1,2,3,4,5];
newArray.push(7);
console.log(newArray);

// 2) Array pop
newArray.pop();
console.log(newArray);

// 3) unshift
newArray.unshift(555);     // push elements in front side of array
console.log(newArray);

// 4) shift
newArray.shift();
console.log(newArray);     // pop elements from front side

// 5) include
console.log(newArray.includes(9));  //check value present or not(return inboolean: T or F)

// 6) indexof
console.log(newArray.indexOf(3))   //check the index
console.log(newArray.indexOf(133))

// 7) join
let join = newArray.join();  // join convert array into string and combine
console.log(newArray);
console.log(join);
console.log(typeof (join));


// slice and splice
console.log("slice")
let finalArray = [1,2,3,4,5,6];
console.log(finalArray);
console.log(finalArray.slice());  // No any changes
console.log(finalArray.slice(2));  // start with 2 index
console.log(finalArray.slice(2, 4));  // start with 2 index end with length - 1

console.log("splice")
let finalArray2 = [1,2,3,4,5,6];
console.log(finalArray2);
console.log(finalArray2.splice(1, 3));  // [ 2, 3, 4 ] start = 1, end = 3
console.log(finalArray2.splice(2)); // [ 6 ] remove 2,3,4 in original and find 2nd index

// This is important concepts learn from website/tutorials


// Outputs
/*
0
2
4
chandan
true
14.5
500

The way of declare array in js
┌─────────┬──────┬──────┬──────┬───┬───┐
│ (index) │  0   │  1   │  2   │ 3 │ 4 │
├─────────┼──────┼──────┼──────┼───┼───┤
│    0    │  0   │  1   │  2   │ 3 │ 4 │
│    1    │ 'cm' │ 'pm' │ 'hm' │   │   │
│    2    │  1   │  2   │  3   │ 4 │   │
└─────────┴──────┴──────┴──────┴───┴───┘
[ 1, 2, 3, 4, 5, 7 ]
[ 1, 2, 3, 4, 5 ]
[ 555, 1, 2, 3, 4, 5 ]
[ 1, 2, 3, 4, 5 ]
false
2
-1
[ 1, 2, 3, 4, 5 ]
1,2,3,4,5
string
slice
[ 1, 2, 3, 4, 5, 6 ]
[ 1, 2, 3, 4, 5, 6 ]
[ 3, 4, 5, 6 ]
[ 3, 4 ]
splice
[ 1, 2, 3, 4, 5, 6 ]
[ 2, 3, 4 ]
[ 6 ]
*/