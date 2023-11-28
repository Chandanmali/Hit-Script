//for loop
for (let i = 1; i <= 10; i++) {
       if (i == 5) {
              console.log("5 is a best number");
       }
       console.log(i);  
}

// Now print the table 1 to 10
console.log("Print table");
for (let i = 2; i <= 10; i++) {
       for (let j = 1; j <= 10; j++) {
              console.log(`${i} * ${j} = ${i * j}`);
              
       }
       
}

//Now learn about break and continue 
console.log("Break and continue")
//break
for (let i = 1; i <= 10; i++) {
       if (i === 5) {
              console.log("5 detected");
              break;        
       }
       console.log(`value is ${i}`);  // stop printing on 5
       
}

//continue
console.log("for continue")
for (let i = 1; i <= 10; i++) {
       if (i === 5) {
              console.log("5 detected");
              continue;             // after 5 skip all the execution and run again
                                    // only one value skip
       }
       console.log(`value is ${i}`);
       
}