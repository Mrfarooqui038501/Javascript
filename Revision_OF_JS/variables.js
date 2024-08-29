//  const name = "Arman"
//  let id = 123
//  var password = 12367
 //city = jaipur

// name = "Rafik" // error - Assignment to constant variable  // here we can't reassign the const variable
//  id = 9897

 //console.log(id) // 9897// here we are getting 9897  beacause let can be reassign 


 //___________________________TYPES OF MEMORY ______________________________ 
/*  Types of memory = 1.Stack(Primitive data type stores in stack.  And gives copy 
                      2. heap(NON Primitive data type stores in Heap. And it gives reference  (we made changes in  original value)
*/

// ______________ THIS _________________
/* 
    THIS = this refer to the current context 
    --we do console.log(this) in node it will give "{}" object and in browser it will give window context
     -- we can't use this in function e.g. console.log(this.username) will "Undefined"  
     -- we use this in arrow function we will get "{}" empty object 
*/

//...........................   IFFI  IMMDIATELY INVOKED FUNCTION 
/* ro remove global conext varibles pollution we use iffi


 (()=>{     // simple iffi
    console.log("Arman")
 })(); // output Arman

 console.log(((num,num1)=>{
    return   num + num1 
 })(9,8)); //17 

 (function pop(name){   // its called named iffi
    console.log(`Hi from ${name}`)
 })("Arman");  */ // Hi from Arman 

 // .................. Execute code and call stack ......................
 /* Code execution context  types = 1. Global execution context. 2. functoin execution context
 */


 //_________ TRUTHY VALUES AND FALSY VALUES _____________
 /*  --  a truthy value is a value that is considered true in a boolean context 
    TRUTHY = "0","false"," ",[],{} ,function(){}(empty function)
     -- a falsy value is a value that is considered false in a boolean context.
    FALSY = false,0,-0,BigInt,0n,"",null,undefine,nan
 */


 //............... DOM     (Document object Model) .................
 /*  
  How get an element in dOm = document.getElementByID('idnem')
                              document.getElementClassName('idnem')  
                              document.getElementClassName('classname')
                              document.getElementsByTagName('tagname')
                              document.getElementsByName('name')
                              document.getElementById('title').getAttribute('value that you need)
                              document.getElementById('title').setAttribute('attiribute name','what you wnay set)


  how to get content =                                        

  Difference between in InnerText and textcontent 
     innertext = display the content that's aviable on HTML
     textContent = display all content including hidden (that's  hide using CSS property )
     innerHTML =  it gives content with tags 

   query selector = querySelector returns the first element that matches the specified selector or null if no matches are found. It takes a single argument, which is a string containing the CSS selector to match.
     document.querySelector('h2') -- this will give h2 tag first one
                        document.querySelector('#id')
                        document.querySelector('.class')
                        document.querySelector('input')
                        document.querySelector('tagname')
                       
    querySelectorall == querySelectorAll returns a NodeList of all elements that match the specified selector. It also takes a single argument, which is a string containing the CSS selector to match.
    document.querySelectorall('name')    
    
     Difference between HTML COLLECTION AND NODELIST 
     Key differences:

 --Node type: HTMLCollection only contains HTML elements, while NodeList can contain any type of node.
-- Indexing: HTMLCollection is indexed by name or ID, while NodeList is indexed by numerical index.
-- Browser support: HTMLCollection is supported by older browsers, while NodeList is supported by modern browsers.
-- Method support: NodeList supports more modern methods like forEach, map, and filter, while HTMLCollection does not.

Array.from(name) = convert anything in array 


 /*   

   */           

   //   new Promise(function(reslove,reject){
   //    console.log("Kashish")
   //    setTimeout(function(){
         
   //       console.log("Promise 1")
         
   //       reslove()
   //    },1000)
   //   }).then(function(){
   //    console.log("Promise 1 fullfilled")
   //   })

   //   console.log("Arman")

   //      console.log("One")
   //   const promiseone =  new Promise(function(reslove,reject){
   //    console.log("TWO")
   //        setTimeout(function(){
   //          console.log("three")
   //             console.log("I will come after 2 mintutes")
   //             console.log("Four")
   //             reslove()
   //        },2000)
   //   })

   //   console.log("five")
   //   promiseone.then(function(){
   //    console.log("I am consuming promiseone")
   //   })
   //    promiseone.catch(function(){
   //    console.log("I am rejecting promise")
   //   })


   //  const promiseone =  new Promise(function(reslove,reject){
   //    setTimeout(function(){
   //        reslove([90,87,8])
   //    },0)
   //  })
   //  promiseone.then(function(value){
   //        console.log(value)
   //  }) // output [ 90, 87, 8 ]

   //  const promiseTwo = new Promise(function(reslove,reject){
   //      setTimeout(function(){
   //              reslove({User:"Arman",Password:12345})
   //      },1000)
   //  })
   //  promiseTwo.then(function(info){
   //              console.log(info)
   //  })  // ouptut { User: 'Arman', Password: 12345 }

//    const promiseTwo = new Promise(function(reslove,reject){
//       setTimeout(function(){
//          let error = true
//          if(!error){
//             reslove({User:"Arman",Password:12345})
//          }else{
//             reject("Someting went wrong ")
//          }
              
//       },1000)
//   })
//   promiseTwo.then(function(info){
//               console.log(info)
//   }) 
//   .catch(function(error){
//    console.log(`OOPS${error}`)
//   })

// const promiseThree = new Promise(function(resolve,reject){
//    setTimeout(function(){
//        let error = true
//        if(!error){
//            resolve({userName:"Arman",password:"Main nhi btaung"})
//        }else{
//            reject('Error: please check network connectionn')
//        }
//    },1000)

// })

// promiseThree.then(function(user){
// console.log(user)
// return user.userName
// })
// .then(function(user){
//    console.log(user)
// })
// .catch(function(error){
//    console.log(error)
// })
// .finally(function(){
//    //console.log("Either the promise will be fullfill or rejected")
// })

// const promise = new Promise(function(reslove,reject){
//     setTimeout(function(){

//       let error = false

//       if(!error){
//          reslove({UserName:"Arman",Password:12345})
//       }else{
//          reject("Oh You miss something")
//       }
      

//     })
// }) 
// promise.then(function(user){
//    console.log(user)
//    return user.UserName
// })
// .then(function(userinfo){
//    console.log(userinfo)
// })
// .catch(function(error){
//    console.log(`Hey you missed ${error}`)
// })
// .finally(function(){
//    console.log("Finally promise done")
// })

// const onepromise  = new Promise(function(reslove,reject){
//    setTimeout(function(){
//      let error = true
//      if(!error){
//       reslove("Promise is resolved")
//      }else{
//       reject("Opps something is missing")
//      }
//    },1000)
// })

//  async function consuming() {
//    try {
//       const respone = await onepromise
//       console.log(respone)
//    } catch (error) {
//       console.log(error)
//    }
//  }
//  consuming()

// const pormiseTwo = new Promise(function(reslove,reject){
//     setTimeout(function(){

//       let a =9
//       if(a >= 10){
//          reslove({Name:'Arman',Email:'Arman@90.com'})
//       }else{
//          reject("OH! a is small then 10")
//       }
//     })
// })

// async function consumePromise(){
//       try {
//          const data = await pormiseTwo
//          console.log(data)
//       } catch (error) {
//          console.log(error)
         
//       }
// }
// consumePromise()

//  const ar =  [1,2,3,4,5,]
//  Array.prototype.extraPoperty =  "Arman"

// //  console.log(ar)
//  for( let i  in ar){
//    if(ar.hasOwnProperty(i))
//    console.log(i)
//  }
 