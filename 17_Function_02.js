function addToCart(...num1){
       return num1;
}
console.log(addToCart(2));
console.log(addToCart(2, 5, 10));  //not valid for all values = use rest operator(...)

function addToCart2(val1, val2, ...num2){  // val1 = 2, val2 = 5
       return num2;
}

console.log(addToCart2(2, 5, 10, 200, 500));

//In object 
const user = {
       userName: "chandan",
       price: 999
}

function handleObject(anyobject){

       console.log(`Username is ${anyobject.userName} and Price is ${anyobject.price}`)

}

handleObject(user);

//another method to pass values
handleObject({                 //in function calling we can create output object
       userName: "Bhupinder jogi",
       price: 850
})

//Like object use for array
const myArray = [200, 400, 500, 700];
function takeArray(getArray){              // getArray === anyobject in object
       return getArray[1];
}
console.log(takeArray(myArray));

//Like object we can use an array in function(pass array in function)
console.log(takeArray([1000, 2000, 30000, 4000]));



//Output
// [ 2 ]
// [ 2, 5, 10 ]
// [ 10, 200, 500 ]
// Username is chandan and Price is 999
// Username is Bhupinder jogi and Price is 850
// 400
// 2000