// call jo hai hamara current execution context kisi or function ko pass kar deta hai 
function setUserName(username){
    //complex DB calls
    this.username = username
    console.log("called");
    //now this will use this reference 
}

function createuser(username, email, password){
    setUserName.call(this, username) // ye apna this de rha hai
    //ye call ho hi nahi rha hai js gives a call method to call explicitly 
    //this.username hamne outsource kiya hai 
    this.email = email
    this.password = password
}

const chai = new createuser("Chai","chai@.com", "123")
console.log(chai);