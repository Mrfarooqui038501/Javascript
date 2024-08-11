// undefined
//let name;
//console.log(name) // output undefined  // here we haven't defined the name so that'why we are getting undefined

// null is reseverd keyword in js where we can use it to when we don't want to give any value to particular varaible
//let age = null
//console.log(age) // output null

// Bigint we use Bigint for large numbers
//let num = 784978594754789324787633638428878923
//console.log(num) //  output 7.849785947547893e+35  here we are not getting proper number so we will  use bigint 

//let num2 = BigInt(1233258734683073978340732047328)
//console.log(num2) // output 1233258734683073927341200637952n  // here we are getting full number 

// NOTE Everthing in js Behave like an object


//  >>>>>>>>>>>>>>>>>>>....... PRIMIIVE DATAYPE
 /*Primitive (are inbuild datatypes which already exist)data types are immutable, meaning their values cannot be changed after they are created. 
They are stored directly in memory.
Number,Srting,Boolean,null,undefined,Symbol,BigInt */


//>>>>........... NON-Primitive datatype
/*Non-primitive (which user create as per their wish)data types are mutable and complex data structures. 
They are reference types, meaning they are stored in memory locations and variables hold references to these locations.
OBJECTS,ARRAY, Function */

/* >>>>>>................  OBJECT = An object in JavaScript is a collection of key-value pairs
in key always will be in string type and value can be anytype
// how to create an Object

let person = {
    name:"Arman",
    age: 24,
    gender: "Male"
}
//console.log(person) // output { name: 'Arman', age: 24, gender: 'Male' } // in this way i can print my whole object
//console.log(person.age) // output 24 , here I am printing particul key  , this called dot notation
//console.log(person["gender"]) // output Male, this called bracket notation

person.age = 78; // here we are updating the object value using key 
console.log(person.age) // 78

person.profession = "engineer" // here we are creating new key value pair in object
console.log(person) // output { name: 'Arman', age: 78, gender: 'Male', profession: 'engineer' }

console.log(person.profession) // output engineer
console.log(person["name"]) // output Arman

person.hobby = "coding"
console.log(person.hobby) //output coding  

let user = {
    details: function(){
        return{
            name: "Arman",
        age: 29
}      } 
      }
 
user.details()
//console.log(user.details()) // output { name: 'Arman', age: 29 }
let info = user.details(); // so for accessing any particular value first we need to store it in variable  then we can access
console.log(info.age) //  output 29 
console.log(info.name) // Arman  */


 /* >>>>>>>>>>>>..........................       Arthimatic operators 
  let a = 9+4
  let b = 7-3
  let c = 8*2
  let d = 4/2
  let e = 10%5
  let f = 2**4
  console.log(a,b,c,d,e,f) // output 13 4 16 2 0 16  */


 /* >>>>>>>.....                  Assignmnet Operators   to assigning value 
 let x = 10
 x+3 =13 */

 /* >>>>>>>>>>>> ...............     Comparision operator   >>>>>>>>>>>>>>>>>.
//  console.log(3!=3)
//  console.log(3>3)
//  console.log(3<3)
//  console.log(3>=3)
//  console.log(3<=3)
//  console.log(3==3)
//  console.log(3===3)

  console.log(2 == '2') // output true,in "==" its for value only not datatype
  console.log(2==="2")  */ // output false, in "===" its stictly check for dataype as well that' why we are getting false

//>>>>>>>>>>>>> ............   logical operator  -- and &&,or || & not !=


/* >>>>>>>>..............CONVERSION TYPE..................<<<<<<<<<<<<<<<<<<<<<<
// Imlicit type conversion (type coercion) = implict conversion js does automaticlly we don't need to do 
console.log(typeof(334+"78"))// string // here js enging converting it in string doing imlicit conversion
console.log( 34 * "I am not a number") //NaN
console.log(56 =="56") // true , here we are getiing true because of implicit type conversion

// Explicit type conversion  (Type casting) = implict conversion user did by themselves 
let a = 78
let b = String(a) // here we explicit type  conversion 
console.log(typeof b) // output string  */


 // >>>>>>>>>>>>>.............conditional statments(loops)......>>>>>>>>>>>>>>>>>>>>>>>
    /* // IF ELSE 
  let spending = 100
   
   if(spending > 1000){
    let discount = (0.20 * spending).toFixed(2); // here I am using fixedto because after point i want to show 2 digit
    console.log(`Hey you got the 20% off ${discount}`)
   } else if( spending > 750){
    let discount = (0.20 * spending).toFixed(2);
    console.log(`Hey you got the 10% off ${discount}`)
   }else {
    console.log(`Hey you miss out offer`)
   } // output Hey you miss out offer
  

   let shopingValue = 14512

   if(shopingValue > 10000){
    let discount = (0.30 *shopingValue).toFixed(2)
    console.log(`Hey you got the 30% off ${discount}`)
   } else if(shopingValue >7000){
    let discount = (0.12 *shopingValue).toFixed(2)
    console.log(`Hey you got the 12% off ${discount}`)
    }else{
        console.log('No discount')
    }
    // output Hey you got the 30% off 4353.60   */


// Switch statment  -- we can use it on the place of if and else

 /*const delivery = 101

 switch (delivery) {
    case 'express':
        console.log(" your order will be deliver in 7-6 hours")
        
        break;
    case 'Prime':
        console.log(" your order will be deliver in 24 hours")
        
        break;
    case 'Standard':
        console.log(" your order will be deliver in 3-4 days")
        
        break;
 
    default:
        console.log("Please put valid credentials")
        // break;
 }    // Please put valid credentials

     let love = 750
      

     // in switch we can put >or< or = like  if else it will take only single value and will match with cases
      switch (love) {
        case  1000:
            console.log('you love me alot')
            break;
        case 500:
            console.log('you love me half')
            break;
        case 250:
            console.log('you love me a few')
            break;
        case 125:
            console.log('you love me little bit')
            break;
      
        default:
            console.log('you hate me')
            break;
      } // output you hate me */

   // CONTROLS  = LOOPS 
    // for loop  wokrs on 4 conditions 1,initilization, 2.condition check, 3.process/ execution  , 4 update
    /* 
    let sum = 0;
    let totalItems = [98,676,90,23,45]
    for(let i=0; i < totalItems.length; i++){
       sum = sum + totalItems[i];
    }

    //console.log(sum) // output 932

 //   Difference between for & while loop  for loop knows how manytime it  has to run but while loop will  run till the condition is satsfied

    let cardvalue = [89,89,12,89,7872]
    let checkout = 0;
     
    let i=0;
    while(i < cardvalue.length){
        checkout += cardvalue[i]
        i++
    }

    console.log(checkout) // output 8151 */

    // for in loop  we bascally use for in loop  mostly for object

    // let employees = {
    //     employee1: {name:"Arman",
    //     age:21,
    //     dep: "IT",
    //     edu:"Graduate"},
    
    //     employee2: {name:"Rafik",
    //     age:28,
    //     dep: "HR",
    //     edu:"Graduate"},
    
    //     details: function(){
    //         console.log("Get me the employeee details")
    //     },
    
    //     arr:[43,89,"amrman"]
    // }
// for (let val in employees) {
//     console.log(val + employees[val]) // in output we will get all details
// }

   
// >>>>>>>>>>>>>>>>>>>>>>>..............Functions.........<<<<<<<<<<<<<<<<<<<<< 
   /* function name(){
        console.log("Arman")
    }
    name()  // output Arman 

    function name(value){
        return value
    }
    let print = name("Arman")
    console.log(print)   // Arman

    function name(value){
        console.log(value)
    }
    name("Arman") */ // Arman

     /* // Scope Three types Global  scope , bracket scope , function scope
    // Globle scope = whatever you have initialize in global scope anyone can accces it 
    // Bracket scope = the value can be access witin bracket only 
    // function scope = the value can be access within  function only

     let a = 20
      
     function number(){
        let b = 50
        console.log(a) // ouptut 20 , as a is in global scope it will  be access to anywhere
        console.log(b)
     }
    
      //console.log(b) // b is not defined here - we will get error as b is initailize within function scope

     if(number){
          let c = 40
     }
     // console.log(c) // c is not defined - we will face this error as c is within bracket scope
     { let d = 10}
     console.log(d) // d is not defined -we will face this error as d is within bracket scope */

      //>>>>>>>/.......... LEXICAL SCOPE...............>>>>>>>>>>>>>>>>>>>>>>>
     // Lexical scope = chaining of function

        /* function parent(){
            let a = 10

            function child(){
                console.log(a)
                let b = 30
            }
             function grandchild(){
             console.log(b)  //b is not defined -- here we getting here beacause b it not in the scope of grandchild
             }
             child()
             grandchild()
        }
        parent() 

         function parent(){
            let a = 10; 

            function child(){
                console.log(a) // 10
                let b = 20
                function grandchild(){
                    console.log(b) // 20 here we are able to access b because it's  with in the function

                }
                grandchild()
            }
            
            child()
         }
         parent()   */





         // >>>>>>>>>>>>>>........ArraysArrays............>>>>>>>>>>>DATA Structure 



//  let players = [
//     {name:"Arman",age: 24},
//     {name:"Kashish",age: 23},
//     {name:"Shubham",age: 22},
//     {name:"Rafik",age: 26},
//     {name:"Rohit",age: 32},
//     {name:"Pankaj",age: 13},
//     {name:"Safik",age: 18}
//  ]
 // Array Methods
//  push  we use this to add value in the end of the array
   // players.push({name:"Juned",age:37})
   // console.log(players)

 //pop we use pop to delete an element from the end of the array
 //players.pop()   
 //console.log(players)

 // unshift we use it to add the element in starting of array
//  players.unshift({name:"Arish",age:21})
//  console.log(players)

 // shift we use shift to delete an element from the starting of the array
    //  players.shift()
    //  console.log(players) 

// Slice method  we use slice method when we need specific index values data and it return new array it didn't change the original array and it take 3 arguements
    // const sliceArr =players.slice(1,4)
    // console.log(sliceArr) // [ { name: 'Kashish', age: 23 }, { name: 'Shubham', age: 22 },  { name: 'Rafik', age: 26 }]
    // const newAR = players.slice(-3)  // after passing negative value it take values from last  three
    // console.log(newAR) // output [ { name: 'Rohit', age: 32 }, { name: 'Pankaj', age: 13 },  { name: 'Safik', age: 18 }  ] 

// Splice we use this method to delete elements from specific indexes and it take 3 arguements first two arguements from where to where we want to delete and third if we want to add something at the deleted elemnts place
//    const newAr = players.splice(1,3,{name:"Rakshita", age:25})  
//    console.log(newAr)
//    console.log(players)

  // Reverse 
  
 //   players.reverse()
 //   console.log(players)

 // how to sort the array 
//   let ARr = [5,89,11,1,4,6,100,98]
//   console.log(ARr.sort(function(a,b){
//     return b-a; // b-a this is for descending order and a-b is for ascending order
//   }))  // output [ 1,  4,  5,   6, 11, 89, 98, 100 ]
  
 // delete
//    delete players[3]
//    console.log(players) // ouput <1 empty item>, if we use then "<1 empty item>," this will be mention in our output
 
 /*console.log(players) // whole array will be printed
 console.log(players[3]) // output { name: 'Rafik', age: 26 } -- by giving index number we can access the info of that index number
 console.log(players.length) // output 7 */

 // >>>>>>>>>>...         STRING           >>>>>>>>>>>>>....................>>>>>.
 // Strings (256 Character are preseint in JS) string is a group of characters 
//   let s1 = "Arman";
//   let s2 = 'Hey I am from String';
//   let s3 = `I am a string`;
 
//   console.log(s1)
//   console.log(s2.length) // output 20 -- this is how we are accessing the string lenght
//   console.log(s2[4]) // output I -- here we are accessign the particular index
//   console.log(s2.charAt(12)) // output m -- here we are also accessing the particular index value
  
   /*for(let i = 0; i <s2.length; i++){
    // console.log(s2[i]) // whole  string will be printed 
   } */

   // How to create mutlithread String just put "\" after each line

//  const s4 = "my name is arman.\
//   what is your name.\
//   I want to go to  goa."
  //console.log(s4) // output my name is arman.  what is your name.  I want to go to  goa.

//   let s5 = 'Hey I am learing JS.\
//   do you want to  learn with me.\
//   Yes I can help you to learn'
  // console.log(s5) // output Hey I am learing JS.  do you want to  learn with me.  Yes I can help you to learn


  // Concatination 
//   let fname = 'Arman'
//   let lname = 'Farooqui'
  // let fullName = fname + lname // this is first way to do concatination 
  // below  method called template string
    // let fullName = `My full name is ${fname} ${lname}`// this is the standard way of doing concatination 
  // console.log(fullName) // output ArmanFarooqui

//   const str = "MY NAME IS "
//     console.log(str.toLowerCase()) // output my name is 
//   const str1 = 'hey i am going to goa'
//   console.log(str1.toUpperCase()) // ouptut HEY I AM GOING TO GOA


//  Search -- in this we will do searching in String
// let s5 = 'Hey I am learing JS.\
// do you want to  learn with me.\
// Yes I can help you to learn.\
// let see the World out there'

// let find = 'world'
//console.log(s5.search(find)) // output-1  // means that particular value is not present in our  database 
// let key = 'there'
//console.log(s5.search(key)) // ouptut 100 -- we got 100 as output and 100 is the staring index value "there" means at 100 number"T" is present
//console.log(s5.search('help')) // output 60
//const value = s5.search('out')
//console.log(value) // output 96

// Replace 

// let s5 = 'Hey I am learing JS.\
// do you want to  learn with me.\
// Yes I can help you to learn.\
// let see the World out there'


// let New = s5.replace('Hey','Hi')  // here we using replace method to replacign the values
// console.log((New)) // output Hi I am learing JS.do you want to  learn with me.Yes I can help you to learn.let see the World out there

// console.log(s5.replace('am','you')) // output Hey I you learing JS.do you want to  learn with me.Yes I can help you to learn.let see the World out there
 
 // substr, substring, slice
// let s5 = 'Hey I am learing JS.\
// do you want to  learn with me.\
// Yes I can help you to learn.\
// let see the World out there'

//let portionString = s5.slice(10,51) // so here we are using slice method  to cut some portion of string and as we need 0-50 so in ending index we need to pass 50+1
//console.log(portionString) // output earing JS.do you want to  learn with me.Y
//console.log(s5.slice(20,101)) // do you want to  learn with me.Yes I can help you to learn.let see the World out t

/* differnce between in slice and substring in slice we can pass the negative value but in substring we can't it will  print whole  string */
// SUBSTRING
// console.log(s5.substring(50,111)) // output Yes I can help you to learn.let see the World out there
// console.log(s5.substring(-21)) //  here we are getting whole string printed 

// SUBStr = in substr we need have to pass 2 values first from where we need and second how many characters are needed
//console.log(s5.substr(50,10)) //Yes I can 

// >>>>>>......                    OBJECT                   <<<<<<<<<<<<
     
// let employees = {
//     employee1: {name:"Arman",
//     age:21,
//     dep: "IT",
//     edu:"Graduate"},

//     employee2: {name:"Rafik",
//     age:28,
//     dep: "HR",
//     edu:"Graduate"},

//     details: function(){
//         console.log("Get me the employeee details")
//     },

//     arr:[43,89,"amrman"]
// }

// console.log(employees) // output { name: 'Arman', age: 21, dep: 'IT', edu: 'Graduate', details: [Function: details], arr: [ 43, 89, 'amrman' ] }
// console.log(employees.details()) // output Get me the employeee details
// console.log(employees.arr)// output [ 43, 89, 'amrman' ]
//console.log(employees.arr[2]) // output amrman

// employees.age = 29 // updating the object key's value
// console.log(employees.age) // output 29
  // employees = {name:"Rafik",age:20,dep:"Chor",edu:"Gawar"}
  // console.log(employees) // output { name: 'Rafik', age: 20, dep: 'Chor', edu: 'Gawar' }

  //console.log(employees.employee2) // output { name: 'Rafik', age: 28, dep: 'HR', edu: 'Graduate' }

//   employees.isMarried =  true  // here we are adding extra propery in our object
//   console.log(employees)
//   console.log(employees["employee1"]) // output { name: 'Arman', age: 21, dep: 'IT', edu: 'Graduate' }
//   console.log(employees.employee1["age"]) // output 21

  /*  differnce between dot notation and bracket notation we use dot noation  when we know the key and bracket notation we use when we don't know the key*/

  // delete we use delete method to deltete something from object

//   delete employees.arr;
//   console.log(employees) // in output array will not be there
//   delete employees.employee1.age
//   console.log(employees.employee1) // output { name: 'Arman', dep: 'IT', edu: 'Graduate' }  here we are able to delete age  from employee1 object
//   delete employees.employee2.edu
//   console.log(employees.employee2) // ouptut { name: 'Rafik', age: 28, dep: 'HR' }
//   console.log(employees.employee2.edu) // undefined  -- as already deleted the  edu from employee2

// how to iterate on object 

// for in loop
// for (let val in employees) {
//     console.log(val + employees[val]) // in output we will get all details
// }

//  let user={
//         userName: "Arman",
//         userID: 'NNNNNNN',
//         Password: 167437
//  }
// for(let i =0; i<Object.keys(user).length; i++){
//       let key = Object.keys(user)[i]
//       console.log(`${key}: ${user[key]}`) // ouput userName: Arman userID: NNNNNNN  Password: 167437
// }

/// Function and  its Execution context
 
// function cardvalue(product){
//     console.log(`added in your cart ${product}`)
//     // return `this is added in your cart ${product}`
// }
// cardvalue("Oneplus")
// cardvalue("Iphone")
// cardvalue("Realme") 
// cardvalue("Mi")
// console.log(cardvalue("Oneplus"))
// console.log(cardvalue("Iphone"))
// console.log(cardvalue("Realme"))
// console.log(cardvalue("Mi"))
/*   ouptput of above code 
   added in your cart Oneplus
added in your cart Iphone
added in your cart Realme
added in your cart Mi 

this output is for return statement
this is added in your cart Oneplus
this is added in your cart Iphone
this is added in your cart Realme
this is added in your cart Mi*/

  // >>>>>>>>>       types of functions in JS
// the below is example of simple function
//   function cardvalue(product){
//     console.log(`added in your cart ${product}`)
//     // return `this is added in your cart ${product}`
// }
// cardvalue("Oneplus")

// Anonymus function is when you don't give the name to the function 
//   let a = function(){
//        console.log(5+9)
//   }
//     a() // output 14

// Higher order Function 
// higher order function is function which take another function as arguement and return a new function


// function cardvalue(value){
//     value();
// }

//  cardvalue(function(){
//     console.log("sell")
//  }) // output sell

 
//  function capture(val){
//          val()
//  }
//    capture(function(){
//     console.log("Hey you called me")
//    }) // output Hey you called me

//    function sell(product){
//     product()
//    }
//    sell(function(){
//     console.log("Hey here are purchased items")
//    }) // Hey here are purchased items

 //HOD using return functon 
    
// function buy(){
//     return function(){
//          console.log("sold items")
//     }
// }

// // let a = buy(); // for calling this function we need first store it in a variable then called that variable
// // a() // output sold items
// buy()() // output sold items-- this another way to call both function together 

// function gf(){
//     return function(){
//         console.log("Hey I am his bf")
//     }
// }

// // let b = gf()
// // b() // putput Hey I am his bf
// gf()() // output Hey I am his bf --- this is second way to call both function at same timm

// function child(){
//     return function(){
//        console.log(`Hey I am his dad `)
//     }
// }
 
// // let c = child()
// // c()// output Hey I am his dad  
// child()() // output Hey I am his dad --- this is second way to call both function at same timm


// function calculator(functions,initialvalue,numbers){
//     let total = initialvalue;
//     for (const number of numbers) {
//         total = functions(total,number)
//     }
//     return total
// }
//  function add(num,num2){
//     return num + num2
//  }
  
//  function sub(val,val2){
//      return val -val2
//  }

//  let a = calculator(add,0,[1,2,3,])
// let b =  calculator(sub,0,[1,2,3,4])
// console.log(a) // output 6
// console.log(b) // output 10

// Arrow functions -- Arrow function are anonymus in nature 
 
// let hi = ()=>{
//     console.log('I am Arrow funcion')
// }

// console.log(hi); // output [Function: hi]
// hi();// output I am Arrow funcion

// let by =  (a,b)=>{
//     return a+b;
// }

// console.log(by(7,9)) // output 16

// let add =(a, b)=> a+b // here we doing rerturn as well using arrow function
// console.log(add(5,5)) // output 10


// IIFE imediately invoked functions  means we don't need to call them seprately like others 

//   (function() {
//     console.log(19+6);
//   })(); // output  25
   
//  (()=>{
//     console.log("Apple")
//  })(); // output  Apple

//  (function() {
//     console.log("Hello, World!");
//   })(); // output  Hello, World!

//   console.log(((a,b)=>{
//     return a+b
//   })(3,8)) // output 11

//   let a = 10; 
//   (function(a){
//     a = 50
//     console.log(a) // output 10
//   })(a);
//   console.log(a) // output 50

//>>>>>>>>>>>>>> Execution context  envirnment to run code 

///>........ for Each loop is part of functional programming it take 3 parameters current value, index,array (it works  with call bacl function)
/* forEach is a method that executes a provided function once for each element in the array. 
It's primarily used for iterating over an array and performing an action for each element,
 without returning a new array 
  
 Key characteristics:

  Returns undefined
   Does not create a new array
  Does not change the original array
   Iterates over the array in order
   Can be used to perform side effects, such as logging or modifying external state
 */

// let ar = [1,2,3]
// ar.forEach((ar,index,value) => {
//     //console.log(ar,index,value)
// }); /* output 1 0 [ 1, 2, 3 ]
//               2 1 [ 1, 2, 3 ]
//                3 2 [ 1, 2, 3 ] */
   
//   let numbers = [4,5,6]
//   numbers.forEach((numbers,index,value) => {
//     console.log(numbers,index,value)
    
//   }); /*output   4 0 [ 4, 5, 6 ]
//                  5 1 [ 4, 5, 6 ]
//                   6 2 [ 4, 5, 6 ]*/

// let ar = ["Arman","Kashish","Shubham"]

// ar.forEach((ar,index,value) => {
//     console.log(ar,index,value)
// }); /*output Arman 0 [ 'Arman', 'Kashish', 'Shubham' ]
//              Kashish 1 [ 'Arman', 'Kashish', 'Shubham' ]
//              Shubham 2 [ 'Arman', 'Kashish', 'Shubham' ]  */

// let items = [
//     {itemID:1,Name:"Phone",Price:1100},
//     {itemID:2,Name:"TV",Price:1230},
//     {itemID:3,Name:"laptop",Price:1347},
// ]

// items.forEach((vlaue)=>{
//    console.log(`Item Id= ${vlaue.itemID}`)
//    console.log(`Item Name= ${vlaue.Name}`)
//    console.log(`Item Amount= ${vlaue.Price}`)
// }) /* output   Item Id= 1
//       Item Name= Phone
//       Item Amount= 1100
//       Item Id= 2
//       Item Name= TV
//       Item Amount= 1230
//       Item Id= 3
//       Item Name= laptop
//       Item Amount= 1347
// */

// const cars = [
//     {Name:"Ferrari",Price:8973,Color:"Red"},
//     {Name:"Bucati",Price:6432,Color:"Black"},
//     {Name:"Porsche",Price:9876,Color:"White"},
// ]

// cars.forEach((product)=>{
//     console.log(`Car Name ${product.Name}`)
//     console.log(`Car Price ${product.Price}`)
//     console.log(`Car Color ${product.Color}`)
// }) /* output   Car Name Ferrari
//                Car Price 8973
//                Car Color Red
//                Car Name Bucati
//                Car Price 6432
//                Car Color Black
//                Car Name Porsche
//                Car Price 9876
//                 Car Color White     */

// >>>>... MAP    the map returns the new array 
/*  map is a method that creates a new array with the results of applying a provided function to each element in
 the original array. It's primarily used for transforming an array into a new array with the same length. 
 Key characteristics:

 Returns a new array with the same length as the original array
 Creates a new array with the transformed elements
 Does not change the original array
 Iterates over the array in order
 Can be used to transform the array, such as converting data types or performing calculations
*/

/*let items = [
        {itemID:1,Name:"Phone",Price:1100},
        {itemID:2,Name:"TV",Price:1230},
        {itemID:3,Name:"laptop",Price:1347},
    ]

    items.map((value)=>{
       console.log(`ID of the ITEM: ${value.itemID}`)
       console.log(`Nameof the ITEM: ${value.Name}`)
       console.log(`Price of the ITEM: ${value.Price}`)
    }) /* ouptut D of the ITEM: 1
          Nameof the ITEM: Phone
          Price of the ITEM: 1100
          ID of the ITEM: 2
          Nameof the ITEM: TV
          Price of the ITEM: 1230
          ID of the ITEM: 3
           Nameof the ITEM: laptop
          Price of the ITEM: 1347 */  

       /* let bikes = [
            {Name:"Hayabusha",Model: 2024,Price:89876,Color:"Red"},
            {Name:"Ninja",Model: 2021,Price:98765,Color:"black"},
            {Name:"Ducati",Model: 2023,Price:78908,Color:"Green"},
        ]

        bikes.map((item)=>{
            console.log(`Brand Name:${item.Name}`)
            console.log(`Product Year:${item.Model}`)
            console.log(`Procut Price:${item.Price}`)
            console.log(`Procut Color:${item.Color}`)
        }) /* output Brand Name:Hayabusha
                     Product Year:2024
                     Procut Price:89876
                     Procut Color:Red
                     Brand Name:Ninja
                     Product Year:2021
                     Procut Price:98765
                     Procut Color:black
                     Brand Name:Ducati
                     Product Year:2023
                     Procut Price:78908
                     Procut Color:Green */


/*let number = [1,2,3,4]

let mapdoubled = number.map((number)=>{
    return number *2;
})

console.log(mapdoubled) // output [ 2, 4, 6, 8 ] -- in this case we used map and we got new array with doubled  value 
console.log(number) *///  output [ 1, 2, 3, 4 ]  --- our original array remain same

//>>>>>>>.. FILTER 
/*  Filter = The filter() method is used to create a new array with all elements that pass the test implemented 
by the provided function.
Parameters:
--callbackFunction: A function to test each element of the array. It takes three arguments:
--element: The current element being processed in the array.
-- index: The index of the current element in the array.
array: The array itself. 
*/

 /*  let product = [
    {Name:"Phone",Price:1000},
    {Name:"Laptop",Price:1200},
    {Name:"TV",Price:1500},
    {Name:"AC",Price:900},
    {Name:"Coller",Price:890},
 ]

 const filterProuct = product.filter((item)=> {
    return  item.Price > 1000
 })
 //console.log(filterProuct) // output [ { Name: 'Laptop', Price: 1200 }, { Name: 'TV', Price: 1500 } ]

 const newProduct = product.filter((value)=>{
    return value.Name == "Laptop"
 })
 //console.log(newProduct) // ouptut [ { Name: 'Laptop', Price: 1200 } ]

 const checkProducts = product.filter((val)=>{
    return val.Name == "Phone"
 })
 console.log(checkProducts) */ // output [ { Name: 'Phone', Price: 1000 } ]

 // >>>>>>>>>>>......... REDUCE
 /*  Reduce = the reduce() method is used to reduce an array to a single value by applying a function to each element of the array.
 
   Parameters:
-- callbackFunction: A function to execute on each element of the array. It takes four arguments:
-- accumulator: The accumulated value returned in the previous iteration.
-- currentValue: The current element being processed in the array.
-- currentIndex: The index of the current element in the array.
array: The array itself.
-- initialValue: The initial value of the accumulator. If not provided, the first element of the array is used as the initial value

-- The reduce() method does not modify the original array.
--The reduce() method returns a single value, not an array.
--The reduce() method can be used to perform complex data -- transformations, such as aggregating data or flattening arrays.
 */  

 /* let product = [
    {Name:"Phone",Price:1000},
    {Name:"Laptop",Price:1200},
    {Name:"TV",Price:1500},
    {Name:"AC",Price:900},
    {Name:"Coller",Price:890},
 ] 

 let total = product.reduce((acc,currentvalue)=>{  // acc =  initial value, current value =  the value we want to access
    return acc + currentvalue.Price
 },0) // here we passed 0 because it will be out initial value 
 console.log(total) // output 5490

 let item = [
    {Pirce: 1000},
    {Pirce: 2000},
    {Pirce: 5000},
    {Pirce: 1300},
    {Pirce: 9000},
 ]

 const itemTotal = item.reduce((initailvalue,currentValue)=>{
   return initailvalue + currentValue.Pirce
 },0)

 console.log(itemTotal) */  // output 18300


 