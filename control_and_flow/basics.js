// const balance = 510

// if(balance < 500){
//     console.log(`less than 500`)
// }
// else if(balance < 750){
//     console.log(`less than 750`)
// } 
// else  if (balance < 900){
//     console.log(`less than 900`)
// }
// else {
//     console.log(`greater than 1000`)   
// }

//<<<<<<<, SWITCH >>>>>. WE use switch instead of if else it make easier to do. and after break its stop executing the code

/* Syntax  
switch (key) {
    case value:
        
        break;

    default:
        break;
}*/

// const name  = "Arman"

// switch (name) {
//     case "Arman":
//         console.log("arman")
//         break;

//     default:
//         console.log("wrong")
//         break;
// } // output arman

// const value = 100
// switch (value) {
//     case 95:
//         console.log(`less than 100`)
//         break;
//     case 98:
//         console.log(`less than 100`)
//         break;
//     case 100:
//         console.log(`yes equal 100`)
//         break;

//     default:
//         console.log(`default`)
//         break;
// } // output yes equal 100

// const month = 1
// switch (month) {
//     case 1:
//         console.log("Jan")
//         break;
//     case 2:
//         console.log("feb")
//         break;
//     case 4:
//         console.log("apr")
//         break;

//     default:
//         console.log("None")
//         break;
// } // output Jan


// truthy and falsy value 


 // Falsy Values: -- 0,-0,The empty string "", null, undefined,NaN (Not a Number)

 //truthy values:  Any non-zero number (including positive, negative, and decimals), " ",{},[], true, function (){} ,"0",'0', "false"

 //how to check if the array is empty or not 
//  const array = []
//   if(array.length === 0){
//     console.log("array is empty ")
//   } // output array is empty

  //how to check if the OBJECT is empty or not 
//   const emptyOBJ =  {}
//   if(Object.keys(emptyOBJ).length === 0){
//     console.log("Yes Object is empty ")
//   } // output Yes Object is empty

// Nullish Coalescing Operator (??): null undefined 
 //let val; 
 //val = 5 ?? undefined -- in output we will get first value always 
 //console.log(val) // output 5
 //val = null ?? undefined  -- in case of null it will 2 second value in output
// console.log(val) //undefined
//val = undefined ?? null
//console.log(val) // null
//val = 23 ?? 90
//console.log(val) // 23
//val = 90 ?? 24
// console.log(val) // 90

// Terniary Operator 
// syntax  condition ? true : false
 
let val = 10
// let score = "33"
// let score = "33"
// val <= 10 ?console.log("yes"): console.log("false") output yes

const name = "arman"
// let score = "33"
//name === "arman" ? console.log("Yes"): console.log("false") // output 

const price = 500
// price >= 500 ?console.log("Expensive"): console.log("Cheap") //output  Expensive

let ruppes = 1200
// ruppes <= 1000 ? console.log("Yes"): console.log("False") // output False




