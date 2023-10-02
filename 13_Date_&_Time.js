let date = new Date();
console.log(date);

//Date is an object over here and there are many function

console.log(date.toString());            // Mon Oct 02 2023 09:42:07 GMT+0530 (India Standard Time)
console.log(date.toLocaleString());      // 2/10/2023, 9:42:07 am
console.log(date.toLocaleDateString());  // 2/10/2023
console.log(date.toTimeString());       // 09:42:07 GMT+0530 (India Standard Time)
console.log(date.valueOf());            // 1696219927053 js give time to milisec from 1970 to now


// ***** If we want to create our own time then * ***

let myCreateTime = new Date(2023, 0, 15);  //because these is array therefore month = 0
console.log(myCreateTime.toLocaleString());

let myCreateTime2 = new Date(2023, 0, 15, 5, 3); //for specification of time
console.log(myCreateTime2.toLocaleString());

//if want date zone in india format(-)
let indiaTime = new Date("2023-02-25");
console.log(indiaTime.toLocaleString());

//for create games poll 
let newDate = Date.now();  //1696223442757 this value are from 1 jan 1970 to now date
console.log(newDate)

//if we have date but we need in time and compare then
let myDate = new Date("1-05-2023");
console.log(myDate.toLocaleDateString());
console.log(myDate.getTime());

//this Date.now() gives output in milisecond but we need in second then
console.log(Date.now() / 1000); // 1696223893.128 this give decimal nu then use math.floor
console.log(Math.floor(Date.now() / 1000));

//More function on date
let moreFun = new Date();
console.log(moreFun);
console.log(moreFun.getDate());
console.log(moreFun.getMonth()); // we got 9 but actully its 10 but getMonth start with 0 index
console.log(moreFun.getMinutes());
console.log(moreFun.getDay());