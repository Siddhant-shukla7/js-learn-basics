function multipleBy5(num){
    return num*5
}
multipleBy5.power = 2

console.log(multipleBy5(5));
console.log(multipleBy5.power);
console.log(multipleBy5.prototype);

function createuser(username, score){
    this.username = username
    this.score = score
}

createuser.prototype.increment = function(){
    this.score++
}
createuser.prototype.printMe = function(){
    console.log(`Price is ${this.score}`);
}

const chai = new createuser("chai", 25)
const coffe = createuser("coffe", 50)

chai.printMe()

/* Behind the scenes of new keyword

A new object is created: new keyword initiates the creation of a new javascript object.

A prototyoe is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructors prototype.

The constructor is called: The  constructor function is called with the specific arguments and this is bound to the newly created objects. If no explicit return value is specified from the constructor Javascript assumes this, the newly created object, to be the intended return value.
*/