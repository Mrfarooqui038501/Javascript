// Inheritance in JavaScript is a mechanism that allows one object to inherit the properties and methods of another object. This promotes code reusability and helps in organizing code into hierarchical structures.

class user{
    constructor(username){
        this.username = username
    }
      loginMe(){
        return`I have logged you in ${this.username}`
      }

}
 
class Teacher extends user{
    constructor(username,subject,email){
        super(username)
        this.subject = subject
        this.email = email
    }
}

const teach = new Teacher ("Aleena","Scinece","all@com")
// console.log(teach) //output  Teacher { username: 'Aleena', subject: 'Scinece', email: 'all@com' }
// console.log(teach instanceof user) // true  // using "instanceOF" we can check  if  its inheritace of that class or 
// console.log(teach instanceof loginMe)
console.log(teach.loginMe()) // output I have logged you in Aleena
