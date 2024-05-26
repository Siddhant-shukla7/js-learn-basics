// let myName = "Siddhant"

// console.log(myName.truelength);
//-----------Goal is to make a property that can return all the strings with the true value ---------

let myHeros = ["Thor", "spiderman"]

let heroPower = {
    thor: "hammer",
    spiderman:"sling",

    getSpiderPower: function(){
        console.log(`Spidy power is ${this.spiderman}`);
    }
}

Object.prototype.siddhant = function(){
    console.log(`Siddhant is present in all objects`);
}

Array.prototype.heySiddhant = function(){
    console.log("Siddhant says hello");
}

heroPower.siddhant()
myHeros.siddhant()
myHeros.heySiddhant()
//heroPower.heySiddhant() no access to heSiddhant

// Inheritance

const User = {
    name: "chai",
    email: "chai.com"
}

const teacher = {
    makeVideo: true
}

const teachingSupport = {
    isAvailable : false
}

const TASupport = {
    makeAssignment: 'JS Assignment',
    fulltime:true
   // __proto__: teachingSupport
}

teacher.__proto__ = User

//modern synatx
Object.setPrototypeOf(teachingSupport, teacher)

let anotherUserName = "chaiorcode  " 

String.prototype.trueLength = function(){
    console.log(`${this}`);
    //console.log(`${this.name}`);
    console.log(`True length is: ${this.trim().length}`);
}

anotherUserName.trueLength() //here anotherusername is calling i.e. chaiorcode 
"Siddhant".trueLength()
"Arnav ".trueLength() //here arnav is calling 