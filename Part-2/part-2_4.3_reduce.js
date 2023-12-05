//reduce method
let myArray = [1, 2, 3];
let storeValue = myArray.reduce( (acc, curval) => (acc + curval), 0 ) // used in arrow function acc = accumulator, curval = currentValue , acc start with  0, curval = 1,2,3
console.log(storeValue);

//check value present in acc and curval
let storeValue1 = myArray.reduce( (acc, curval) => {
       console.log(`${acc} and  ${curval}`) 
       return acc + curval + 1;
}, 0 )  
console.log(storeValue1);

// Now create a shopping product and add all value for counter
let monthRashan = [
       {
              productName: "Dal",
              price: 50
       },
       {
              productName: "Wheat",
              price: 150
       },
       {
              productName: "Sugar",
              price: 100
       },
       {
              productName: "Wash-Powder",
              price: 500
       },
       {
              productName: "Biscuit",
              price: 200
       }
]

let addAllValueForCounter = monthRashan.reduce( (acc, proPrice) => {
       return acc + proPrice.price;
} ,0)

console.log(addAllValueForCounter);
