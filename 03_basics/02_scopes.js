function one(){
    const username = "Siddhant"
    function two(){
        const website = "Youtube"
        console.log(username);
    }
    //console.log(website);
    two();
}
one();

if(true){
    const username = "Siddhant"
    if(username === "Siddhant"){
        const website = " Youtube"
        console.log(username + website);
    }
    //console.log(website); error
}
//console.log(username); error

//------------- Intresting concept ----------------

console.log(addone(7));
function addone(num) {
    return num + 1;
}


// this will not work there is a concept behind web hoisting which teels about how to declaere variables or how to execute the functions where we keep the variables 
addtwo(7)
const addtwo = function(num){
    return num + 2;
}