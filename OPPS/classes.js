// how to create class 

// here we have created a class
class user{
    constructor(username,email,password){   // here we are constructing the class using consturctor
        this.username =  username
        this.email = email
        this.password = password
    }
       
    // encyptpassword(){  // here we made a function to encrypt the passoword
    //     return`${this.password} Hi I am password`
    // }

    // userNameChange(){
    //     return`${this.username.toUpperCase()}`
    // }
}
 
// here we are creating a user and passing the details in that user "using "new"keyword"
const userone = new user("Arman","arman@.com","Pop")  
// console.log(userone) // output user { username: 'Arman', email: 'arman@.com', password: 'Pop' }
// console.log(userone.encyptpassword()) // ouptut Pop Hi I am password
// console.log(userone.userNameChange()) // ARMAN

class cars{
    constructor(name,model,year,details){
        this.name = name
        this.model = model
        this.year = year
        this.details = details
    }

     confidentaildetils(){
        return `this is so confendtial${this.details}`
     }
}

const carone = new cars ('Ferrari',2024,2025,"It is very imortant ", )
//console.log(carone) // output cars { name: 'Ferrari', model: 2024, year: 2025, details: 'It is very imortant }
//console.log(carone.confidentaildetils()) // output this is so confendtialIt is very imortant

 // how does the above things working behind  the scene 

 function users(name,email,passoword){
    this.user = user
    this.email = email
    this.passoword = passoword
 }
 user.prototype.userNameChange =function(){
    return`${this.username.toUpperCase()}`
 }

 
 const Used = new user("Arman","arman@hms","9087")

 //console.log(Used) // user { username: 'Arman', email: 'arman@hms', password: '9087' }
 //console.log(Used.userNameChange()) //ARMAN
