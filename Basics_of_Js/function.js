// Functions Function Definition: Functions are defined using the function keyword followed by a name (identifier), optional parameters within parentheses (), and the function body enclosed in curly braces {}.
 
// below we are initailing the functions
// function myName() {   
//     console.log("A")
//     console.log("r")
//     console.log("m")
//     console.log("A")
//     console.log("n")
// }
// myName() // output ArmAn  -- this is how call the functions
// myName // this will print nothing because this is just the reference of the function only we are not executing it 

// function add(number1, number2){
//     return number1 + number2
// }
// const result = add(4,9)
// console.log(result) // output 13
// function add(number1, number2){
//     console.log(number1 + number2)
// }
// add(9,0) // output  9

// function multiply(value1, value2){
//   console.log(value1 * value2)
// }
// multiply(2,5) // output 10

// function divide(digit1, digit2){
//     //console.log(Math.ceil(digit1/digit2))
//     return digit1 / digit2
// }
// console.log(Math.ceil(divide(20,3))) // output 7

// function divide2(value1, value2){
//     return value1 / value2
// }
// console.log(Math.floor(divide2(30,4))) // output 7

// function divide3(one, two){
//     return one / two

// }
// console.log(Math.floor(divide3(45,2))) // output 22

// function userLoggedIn(user){
//     return `Hey ${user} you logged in successfuly`
// }
// const result = userLoggedIn("Arman")
// console.log(result) // output  Hey Arman you logged in successfuly

// function failled(user){
//     return `Hey ${user} you are a cheater`
// }
// const ans = failled("rohit")
// console.log(ans) // output Hey rohit you are a cheater

// function snapchat(user){
//     return`empty user${user}`
// }
// console.log(snapchat()); // output empty userundefined -- as we doesn't  passed any aruguements while calling it she it will show undefined

// function snapchat1(user){
//     if(!user){
//         console.log("please enter username")
//         return
//     }
//     return`empty user${user}`
// }
// console.log(snapchat1()) // output please enter username undefined

// Rest operator ...name 

// function addCartValue(num){
//     return num
// }
// console.log(addCartValue(200,300,500)) // output 200-- in output we are getting only single value to overcome this we will  use rest operator 

// function addCartValue2(...num){
//     return num
// }
// console.log(addCartValue2(700,900,500,740)) // output [ 700, 900, 500, 740 ] -- in this the output is in array form so we can use loop to add all vlaues

// function addtoCart(...value){
    
//     return value
// }
// console.log(addtoCart(780,90,89,67)) // ouutput [ 780, 90, 89, 67 ]

// in below example we are using function and object togeter
const user = {
    name:"Arman",
    price: 100
}

function tackleObject(anyObject){
    console.log(`HI my name${anyObject.name} and I have ${anyObject.price} Rupees`)
}
tackleObject(user) // HI my nameArman and I have 100 Rupees

const pizza = {
    name: "capsicum",
    price: 900
}
function orderPizza(anyPizza){
console.log(`I want a ${anyPizza.name} and I have ${anyPizza.price}`)
}
orderPizza(pizza) // output I want a capsicum and I have 900

// in below example we are using function and arrays  togeter

const array = [23,78,90,81]
function getArray(gettinArrays){
    return gettinArrays[0]
}
console.log(getArray(array)); // ouput 23


