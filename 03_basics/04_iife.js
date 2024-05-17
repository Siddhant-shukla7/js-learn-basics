// Immediately Invoked Function Expression(IIFE)
 //Global scope k pollution se problem hoti hai kai baar, yus global scope k jo bhi variables hai  usko hatane k liye hamne iife ka use kiya hai 

 // named iife
(function chai(){
    console.log(`DB Connected`);
})();

// ()()
//first patenthesis- definition of function
//2nd parenthesis - execution call

// ye iife jo hai wo invoke to ho gya hai lekin ise pta nahi hai ki ise rokna kha hai is liye semicolon lga k isko rokna compulsory hai

(function aurcode(){
    console.log(`DB connected two`);
})();

// unnamed iife 
((name) => {
    console.log(`DB connected two ${name}`);
})('Siddhant');