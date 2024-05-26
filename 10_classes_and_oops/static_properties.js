class User {
    constructor(username){
        this.username = username
    }

    logMe(){
        console.log(`USERNAME is ${this.username}`);
    }

    static createId(){ // is method ka access us object o nahi dena chahta hu jo is class se instatiate hua hai
        return `123`
    }
}

const Siddhant = new User("Siddhant")
//console.log(Siddhant.createId());

class Teacher extends User{
    constructor(username, email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher("iphone", "iphone@gmail.com")
iphone.logMe()