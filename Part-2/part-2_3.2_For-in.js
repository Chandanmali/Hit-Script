//for in loop
const newObject = {
       name: "chandan",
       price: 999,
       email: "chandanmali@gmail.com",
       boolval: true
}

for (const keyPrint in newObject) {
      // console.log(keyPrint);      // by this step we print only key not value
      // console.log(newObject[keyPrint]) // by this we got values not keys
      console.log(`${keyPrint} :-- ${newObject[keyPrint]}`);
}

// now use for in loop in array
const newArray = ["ram", "lakhan", "sita"];
for (const arrayPrint in newArray) {
    //   console.log(newArray)  // for this step we got only keys(0, 1, 2) indexs not actual values

    //actual value
       console.log(newArray[arrayPrint]);
}
