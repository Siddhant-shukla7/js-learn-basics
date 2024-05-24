const user = {
    username: "Siddhant",
    loginCount: 0,
    signedIn: true,

    getUserDetails: function(){
        console.log("Got user details from database");
        console.log(`Username: ${this.username}`);// Siddhant
        console.log(this);//{}
    }
}

// console.log(user.username);
// console.log(user.getUserDetails());
// console.log(this);

// Constructor function -- new 

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn;

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);
    }
}
 const userone = new User("Siddhant", 1, true)
 const usertwo = new User("Shubhi", 18, true)
 console.log(userone);
 console.log(usertwo);

