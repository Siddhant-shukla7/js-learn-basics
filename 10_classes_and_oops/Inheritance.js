class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }
}

class Teacher extends User{
    constructor(username, email, password){
        super(username)// ye refer karega kon si class extend karenge 
        this.email = email
        this.password = password
    }

    addCourses(){
        console.log(`A new user was added by ${this.username}`);
    }
}

const chai = new Teacher("chai", "chai@teacher .com", "123")

chai.addCourses()

chai.logMe()

const masalaChai = new User("masalaChai")
masalaChai.logMe()

console.log(chai === masalaChai);// false

console.log(chai === Teacher);// false

console.log(chai instanceof Teacher);// true teacher is an instance of user 
console.log(chai === User);// true

