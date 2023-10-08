let marvel_heros = ["thor", "spiderman", "batman", "hulk"];
let indian_heros = ["hanuman", "jaishreeram", "shanker", "vishnu"];
//marvel_heros.push(indian_heros); // push array indian inside marvel
//console.log(marvel_heros);
//console.log("array element ", marvel_heros[4]);

console.log("\nMerge both ")
let merge_both = marvel_heros.concat(indian_heros); 
console.log(merge_both); // both array merge in single new array

console.log("\nMerge easy way ")
let merge_easy_way = [...marvel_heros, ...indian_heros];
console.log(merge_easy_way);

console.log("\nmerge multiple array in single array ");
let multi_array = [4, 1, 3, [5, 4, 8, [12, 25]]];
console.log(multi_array.flat(Infinity));

console.log(Array.isArray("chandan"));  //check array or not
console.log(Array.from("chandan"));  // convert any data type thing in array 
console.log(Array.from({name: "chandan"})); // they do not define which convert name or chandan

console.log("\nCombine all the different value in single array ");
let score1 = 100;
let score2 = 200;
let score3 = 300;
console.log(Array.of(score1, score2, score3));


// Outputs
/*
Merge both
[
  'thor',
  'spiderman',
  'batman',
  'hulk',
  'hanuman',
  'jaishreeram',
  'shanker',
  'vishnu'
]

Merge easy way
[
  'thor',
  'spiderman',
  'batman',
  'hulk',
  'hanuman',
  'jaishreeram',
  'shanker',
  'vishnu'
]

merge multiple array in single array
[
  4, 1,  3,  5,
  4, 8, 12, 25
]
false
[
  'c', 'h', 'a',
  'n', 'd', 'a',
  'n'
]
[]

Combine all the different value in single array
[ 100, 200, 300 ]

*/
