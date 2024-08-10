// function one(){         // parent function 
//     const name  = "Arman"

//      function another(){    /// child function 
//         const work = "engineer"
//         const age = 20
//         console.log(name) // output Arman = because a child function can use parent function elements 
//      }
//      console.log(work) // output = error work not defined-- here we are getting error beacuse we printing child function value that's not accessable  outside the child function
//      another()
// }
// one()


// function parent(){
//     const parentName = "Dad"

//     function child(){
//         const childName =  "Child"
//         console.log(parentName) // output Dad

//         function grandChild(){
//             const grandChildName = "GrandChild"
//             console.log(childName)  /*output  Child -- here we able to access this beacause for this
//              grandchild function the parent function will be child function so that's why we are able
//               to access the value */
//         }
//         grandChild()
//     }
//     //console.log(grandChildName) // error - grandChildName is not defined
//      child()
// }
// parent()


// the below function will work smothly without any error
//  function add(number){
//     return number +1
//  }
//  console.log(add(5)) // output 6 

//  function addTwo(number){
//     return number + 2
//  }
//console.log(add(7)) // output 8

 // >>>>>>>> below one is important
//  console.log(addition(1)) // output 2 -- this will not give error as it's not in any variable 
//  function addition(number){
//     return number +1
//  }

 
//  console.log(addition2(6)) // output ReferenceError: Cannot access 'addition2' before initialization
//  // above console giving error because we made the function using the variable so that's why it not accessable 
//  const addition2 =function (value){
//     return value + 2
//  }
 

