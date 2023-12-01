// use Map method just like filter 

const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const useMap = array.map( (printElem) => printElem);
console.log(useMap);

// chaining in map function
const useMap2 = array.map( (printElem) =>  printElem * 10)
                     .map( (printElem) => printElem + 1 )
                     .filter( (printElem) => printElem >= 50 )
console.log(useMap2);