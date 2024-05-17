// this refers to the current context 

const user = {
    username: "hitesh",
    price: 999,

    welcomwMessage: function(){
        console.log(`${this.username}, welcome to website`);
    }
}

user.welcomwMessage();

//const addtwo = (num1, num2) => num1 + num2 it will work known as implicit return

const addtwo = (num1, num2) => ( num1 + num2 )

// const addtwo = (num1, num2) => ( {username: "Hitesh"} ) 
// if you will not wrap the object within parentesis it wont return 
