// const userEmail = user.ai;
//  if(userEmail){
//     console.log("Got user email");
//  }
//  else{
//     console.log("Dont have user email");
//  }

//  falsy values: 

//  false, 0, -0, BigInt, 0n, "", null, undefined, NaN

//  Truthy values:

//  "0", 'false', " ", [], {}, function(){}, 

// const userArray = [];

// // if you want to check an array is empty or not
// if(userArray.length === 0){
//     console.log("Array is empty");
// }

// if you want to see whether an object is empty or not 

const emptyObj = {}
if(Object.keys(emptyObj).length === 0){
    console.log("Object is empty");
}

// Nullish Coalescing Operator (??): null / undefined

let val1;
val1 = 5 ?? 10 // 5
val1 = null ?? 10 // 10
val1 = undefined ?? 15 // 15

// Ternary operator 
condition ? true : false
const Price = 100;
Price >= 80 ? console.log("Lesss than 100") : console.log("more than 80");