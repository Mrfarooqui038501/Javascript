// Objects  
/* Objects in JavaScript are fundamental data structures used to store collections of key-value pairs.
 They allow you to organize related data under a single entity, making your code more structured and easier to manage.*/
 
 // Symbol  
//  const mySym =  Symbol("key 1") // this how we initialize symbol
//  const firstObject = {
//     name: "Arman",
//     age: 23,
//     City:  "Delhi",
//     work: "engineer",
//     salary: 1000000,
//     off: "Sunday, Monday",
//     [mySym]: "Key 78" // key value can be different 
// }
//  console.log(firstObject) // output { name: 'Arman', age: 23, City: 'Delhi', work: 'engineer' }
//  console.log(firstObject.name) // Output Arman -- this  called Dot notaion 
//  console.log(firstObject["City"]) // output  Delhi -- this called Bracet nottion 
//  console.log(firstObject["age"]) // output 23
//  console.log(firstObject.work) // output engineer
//  console.log(firstObject.off) //Sunday, Monday
//  console.log(firstObject["salary"]) // 1000000
//console.log(firstObject) // output //  console.log(firstObject) // output { name: 'Arman', age: 23, City: 'Delhi', work: 'engineer', off: 'Sunday, Monday', [Symbol(key 1)]: 'Key 1}
//console.log(firstObject[mySym])  // output Key 78 

// How to make changes in the object elements 
// firstObject.name = "Ironman" // this is how we make the changes in objects
// console.log(firstObject["name"]) // Ironman

// firstObject.age =98
// console.log(firstObject["age"]) //98
// console.log(firstObject) // output { name: 'Ironman',age: 98, City: 'Delhi',work: 'engineer',salary: 1000000,off: 'Sunday, Monday',[Symbol(key 1)]: 'Key 78' }

//  How to freeze the objects
// Object.freeze(firstObject) // this how we freeze/lock the object 
// firstObject.name = "arman"
// console.log(firstObject["name"]) // output  --no changes done as we freeze/lock the our object

// Object.freeze(firstObject)
// firstObject.age = 897
// console.log(firstObject) // in output no changes will there 

// >>>>> Functions with object

// firstObject.greet = function(){ // here we are creating function with object
//     console.log("I am here")
// }
// console.log(firstObject.greet()) // output I am here

// firstObject.greeting = function(){
//     console.log(`Hi greeting from me ${this.name}`) // output Hi greeting from me Arman
// }
// console.log(firstObject.greeting())

// firstObject.greetings = function(){
//     console.log(`hey my age is ${this.age}`)
// }
// console.log(firstObject.greetings()) // output  hey my age is 23

// firstObject.greetings2 = function(){
//     console.log(`what you do, I am ${this.work}`)
// }
// console.log(firstObject.greetings2()) // output what you do, I am engineer
  
  
// ways to createObject 
//const  instauser = new Object()  // this singleton object 
//const instauser = {} // output {}  // this not singleton object 
//console.log(user,user1) // output {}
// const instauser = {}
// instauser.id = 12434
// instauser.name = "Arman"
// instauser.loggedin = true
// console.log(instauser) // output  { id: 12434, name: 'Arman', loggedin: true }

// const fbuser = new Object()
// fbuser.id = 12345
// fbuser.name = "Ironman"
// fbuser.Gender ="Male"
// fbuser.loggedin = false
// console.log(fbuser) // putput { id: 12345, name: 'Ironman', Gender: 'Male', loggedin: false }

//>>>>>> NESTED OBJECT 

// const dmuser = {
//    email: "iam@gmail.com",
//    fullname: {
//       username: {
//          singlename: {
//             name: {
//                firstName: "Arman",
//                Lastname: "Farooqui"
//             }
//          }

//       }
//    }
// }
// console.log(dmuser.fullname.username.singlename.name) // output { firstName: 'Arman', Lastname: 'Farooqui' }
// console.log(dmuser.email) // output iam@gmail.com
// console.log(dmuser.fullname)

// // How to merge two objects
//  const obj1 = {1:"one", 2:"two"}
//  const obj2 = {3:"three",4:"four"}
//  const obj3 = {5:"five", 6:"six"}
//  const mergeobject = Object.assign({},obj1,obj2,obj3) // this is how we merged two or more object.{}using this its good pratice
//  console.log(mergeobject) // output  {'1': 'one','2': 'two','3': 'three','4': 'four','5': 'five', '6': 'six' }

//  const obj ={1:"apple", 2:"mango"}
//  const obj4 =  {90:"green", 80:"arman"}
//  console.log(Object.assign({},obj,obj4)) // output { '1': 'apple', '2': 'mango', '80': 'arman', '90': 'green' }
//  console.log(Object.assign({},obj,obj1,obj4,obj2,obj3)) // output {'1': 'one', '2': 'two', '3': 'three', '4': 'four','5': 'five','6': 'six' } { '1': 'apple', '2': 'mango', '80': 'arman', '90': 'green' } { '1': 'one','2': 'two', '3': 'three', '4': 'four', '5': 'five','6': 'six','80': 'arman', '90': 'green' }

 // Spread method for Merging two objects and its trending in use and good pratice

//  const allobj = {...obj, ...obj2} // this spread method and widely use and GOOD PRatice to follow
//  console.log(allobj) // output { '1': 'apple', '2': 'mango', '3': 'three', '4': 'four' }
//  const mergeObj = {...obj4, ...obj1}
//  console.log(mergeObj) // output { '1': 'one', '2': 'two', '80': 'arman', '90': 'green' }
     
 
// const users = [
//    {
//       id: 1,
//       UserName: "Arman"
//    },
//    {
//       id:2,
//       userName: "Kashish"
//    },
//    {
//       id:3,
//       userName:"Shubham"
//    }
// ]
// const mySym =  Symbol("key 1") // this how we initialize symbol
//  const firstObject = {
//     name: "Arman",
//     age: 23,
//     City:  "Delhi",
//     work: "engineer",
//     salary: 1000000,
//     off: "Sunday, Monday",
//     [mySym]: "Key 78"
//  }

//console.log(users) // output [ { id: 1, userNmae: 'Arman' },{ id: 2, userNmae: 'Kashish' }, { id: 3, userNmae: 'Shubham' } ]
// console.log(users[0].id) // output 1
// console.log(users[2].userName) // oupput Shubham
//console.log(firstObject)
// console.log(Object.keys(firstObject)) // output [ 'name', 'age', 'City', 'work', 'salary', 'off' ] -- the Output will be in the Array form 
//  By using above  method we can access the Keys of any object 
// console.log(Object.keys(users)) // output [ '0', '1', '2' ]
// console.log(Object.values(firstObject)) // output [ 'Arman', 23, 'Delhi', 'engineer', 1000000, 'Sunday, Monday' ]
// By using above method we can access  the all value of  anyObject 
//console.log(Object.entries(firstObject)) //[ [ 'name', 'Arman' ],[ 'age', 23 ],[ 'City', 'Delhi' ],[ 'work', 'engineer' ],[ 'salary', 1000000 ], [ 'off', 'Sunday, Monday' ] ]
// By using above method we can access both the Keys and valye Together 
//console.log(Object.entries(users )) // Output [ [ '0', { id: 1, UserName: 'Arman' } ],[ '1', { id: 2, userName: 'Kashish' } ],[ '2', { id: 3, userName: 'Shubham' } ] ]
//console.log(firstObject.hasOwnProperty("City")) // output true
// From the above method we can if the value exist or not in the object 

//>>>>>>>>>>. How destruckture the Object 

const school = {
    className: "Ironman",
    capacity: 50,
    ageGroup: 12-18,
    location: "Delhi"
}
//console.log(school.className)//Ironman

//console.log(school)
// const{className} = school // this the easier way to call the object value where we dont need the write object name again 
//  console.log(className) // output Ironman
//  const {className:Class} = school // This  how we are changing the Classname to class 
//  console.log(Class) // output Ironman
//  const {capacity} = school
//  console.log(capacity) // 50
//  const {capacity: strength} = school
// console.log(strength) // 




