//In for each loop we can not got the return value and we can not execute any condition in array 
const array  = ["ram", "Lakka", "rohirat", "yuvi"];
const store = array.forEach( function(printArray){
       //console.log(printArray);
       //return printArray;            // No any return value
} )
console.log(store);            // Not return any value = undefined

//That why we are using filter method
console.log("use filter method ","\n")
const newArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const storeValue1 = newArray.filter( (num) => num  ) // if not use {} then write condition in one line
console.log(storeValue1);

const storeValue2 = newArray.filter((num) => {   // if use {} then return
       return num < 5;
})
console.log(storeValue2)

//If we have to execute condition and return the output in the for each loop then we can do it like that
const newArray1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const emptyArray = [];
newArray1.forEach((printValue) =>{
       if (printValue > 5) {
             // console.log(printValue);
             emptyArray.push(printValue);
       }

})
console.log(emptyArray);
// so the conclusion is we can not return value in for each loop
//we can print the value by console but for return value we vahe to use filter method


//Now access the value in objects and use filter in object
console.log("Now access the value in objects and use filter in object", "\n");
const books = [
       { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
       { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
       { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
       { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
       { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
       { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
       { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
       { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
       { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
     ];

    // let booksValue = books.filter( (bk) =>  {return bk.title === 'Book Six'});// return
     let booksValue = books.filter( (bk) => bk.title === 'Book Six'); 
     console.log(booksValue);
     booksValue = books.filter( (bk) => bk.publish >= 2000); //publish after 2000
     console.log(booksValue);

     //If wanted to print after 2000 and only History book
     console.log("If wanted to print after 2000 and only History book \n");
     booksValue = books.filter( (bk) =>{
       return bk.edition >= 2000 && bk.genre === 'History';

       // In return (these is an condition we are using )
     } )
     console.log(booksValue);
