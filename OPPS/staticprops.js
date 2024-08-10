// Static properties 
//In JavaScript, static properties are properties that belong to the class itself rather than individual instances of the class. They are declared using the static keyword within a class definition

class user{
    constructor(username){
        this.username = username
    }
    logme(){
        return`hey you have logged in${this.username}`
    }
     static createId(){
        return'123'
    }
}

const userOne =  new user("Arman")
// console.log(userOne) //user { username: 'Arman' }
console.log(user.createId()) // 123   // By using class name with static function we can access the static function 