// function addTwoNumbers(num1, num2){
//     console.log(num1 + num2);
// }

function addTwoNumbers(num1, num2){
    // let result = num1 + num2;
    // return result;
    return num1 + num2;
}


const result = addTwoNumbers(2, 3)

//console.log("Result :" , result);

function loginUser(userName){
    return `${userName} just logged in`
}

// loginUser("Siddhant") -- it will not give anything in o/p are we havent log, it has only returned the statement but not printed the statement.
//console.log(loginUser("Siddhant"));

// function calculateCartPrice(num1){
//     return num1     
// }
// console.log(calculateCartPrice(200));

// function calculateCartPrice(...num1){
//     return num1     
// }
// console.log(calculateCartPrice(200, 300, 400));

function calculateCartPrice(val1, val2, ...num1){
    return num1     
}
console.log(calculateCartPrice(200, 300, 400, 500));

//-----------Passing objects in functions-------

const user = {
    useName : "Siddhant",
    price : "1000"
}

function handleObject(anyobject){
    console.log(`Username is ${anyobject.useName} and its price is ${anyobject.price}`);
}
handleObject(user)