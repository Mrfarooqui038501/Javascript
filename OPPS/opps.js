// OBJECT lITERAL

const userDetails = {
    userName:"Arman",
    loginCount: 8,
    signedIn: true,

    fetchUserDetails: function(){
        //console.log(`username: ${this.userName}`) // output username: Arman
        console.log(this) // output { userName: 'Arman',  loginCount: 8,  signedIn: true,  fetchUserDetails: [Function: fetchUserDetails], fetchUserloginDetails: [Function: fetchUserloginDetails]
        // in the above this statment we got all  the information of our object     
        

    },
    
    fetchUserloginDetails : function(){
        //console.log(`LoginCount: ${this.loginCount}`) // LoginCount: 8
        //console.log(this)
    }
}

// console.log(user) // output { userName: 'Arman', loginCount: 8, signedIn: true }
// console.log(user.loginCount) // output 8
// console.log(user.signedIn) // output true
//user.fetchUserDetails()
// user.fetchUserloginDetails()
//console.log(this) // output {} in this we get only empty object but when we wil do 
// this "console.log(this)" in browser the output will diffrenet beacuse there are alredy global context is avaiable


// Constructor  Function 
// we called "new" as constructor function and it help us create mulitple instances in single object 
/*

Here's what happens behind the scenes when the new keyword is used:

A new object is created: The new keyword initiates the creation of a new JavaScript object.

A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

function User(userName,email,logginstatus){
    this.userName = userName,
    this.email= email,
    this.logginstatus = logginstatus
    return this
}

const userone = new User("Arman","amran@gmail" ,"yes")
const usertwo =  new  User("Rafik","rphit@gmail", "No" )
const userthree = new User("Safik","Safik@.com","No")
// console.log(userone) //User { userName: 'Arman', email: 'amran@gmail', logginstatus: 'yes' }
// console.log(usertwo) // User { userName: 'Rafik', email: 'rphit@gmail', logginstatus: 'No' }
// console.log(userthree) //User { userName: 'Safik', email: 'Safik@.com', logginstatus: 'No' }
console.log(userone.constructor) // output [Function: User]  it has been what are the thigs available in constructor 


  

