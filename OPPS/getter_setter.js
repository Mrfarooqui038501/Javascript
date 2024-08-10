/* Getters and setters are special methods that provide a way to control how object properties are accessed and
 modified. They allow you to encapsulate the logic for retrieving or setting property values. */

 /* class user{
    constructor(email,password){
        this.email = email,
        this.password =  password
    }
    // here we are getting the value using get
    // IMPORTANT == as we use constructor value so it should be different from constructor just "_" or something elss to make  it different
       get password(){
        return this._password.toUpperCase();
        
       }

       get email(){
        return `This is worng email ${this._email.toUpperCase()}`
       }

       // and here we are setting the value using set  and we have to use 
       // and we dont return the setters

       set password(value){
         this._password = value
       }

       set email(value){
         this._email = value
       }
 }
 

 const userOne = new user ("Arman@gogle.com", "APPLE")
 // console.log(userOne) //  output user { email: 'Arman@gogle.com', password: 12343 }

// console.log(userOne.password); // output APPLE
 //console.log(userOne.email) //  output This is worng email ARMAN@GOGLE.COM  
  */

 // Another way to do above code using function based and this which variable we want to use the name shoulbe be same at everyplace 
 /* 
 function user(email,password){
    this._email = email,
    this._password = password

    Object.defineProperty(this,'email',{ 
    get: function(){
        return this._email.toUpperCase()
    },
    set: function(value){
        this._email = value
    }

    })
 }
 const newUser = new user("arman","kill")
  console.log(newUser.email) // output ARMAN


  function user2(email, password, username){
     this._email = email,
     this._password = password,
     this._username = username

     Object.defineProperty(this,'username',{
        get:function(){
            return `User name changed ${this._username.toUpperCase()}`
        },
        set:function(value){
            this._username = value

        }
     })
  }

  const user1 = new user2("apple@,conn",8799,"_apple_mango")
  console.log(user1.username) // User name changed _APPLE_MANGO    */


  // Now we will doing this using object based 
  const user = {
    _email: "ARAMN@SAF",
    _password: "apple",

    get email(){
        return this._email.toLowerCase()
    },

    set email(value){
        this._email = value
    }
  }

  const tea = Object.create(user)
  console.log(tea.email) // output aramn@saf