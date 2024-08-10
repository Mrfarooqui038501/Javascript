const user = {
    username: "Arman",
    price: 900,

    greetMsg: function(){
        console.log(`${this.username}, hey you have logged in successfully}`)
    }
}
//console.log(user) // ouptut  { username: 'Arman', price: 900, greetMsg: [Function: greetMsg] }
//user.greetMsg() // output Arman, hey you have logged in successfully} -- here we got this output because we called only our greet function
//user.username = "Ironman"  // here we changed the current context element so when we this method  output  will be change 
/*console.log(this) output // Arman, hey you have logged in successfully}
{}
Ironman, hey you have logged in successfully} 
in the above method we called the current context it will show the previous and current both*/
//user.greetMsg() // -- output Ironman, hey you have logged in successfully}

const book = {
    bookName: " the Tales",
    price: 999,

    sellmsg: function(){
        console.log(`hey you have bought the ${this.bookName} and the price is ${this.price}`)
    }
}
//console.log(book) //  output { bookName: ' the Tales', price: 999, sellmsg: [Function: sellmsg] }
//book.sellmsg() // output hey you have bought the  the Tales and the price is999
//book.bookName =  "Story of ironman"
//book.sellmsg() // output  hey you have bought the Story of ironman and the price is999


function paper(){
    let name =  "arman"
    //console.log(this.name) // output undefined in function this can't be use like this it can be done in objects
    // console.log(this) // this will nothing  but the value or elements which are present in empty functions
}
paper()

// how to describe a function using arrows function 
 //  name=  () =>{} this how we describe the arrow function 
const coffee = () => {
    const name = "arman"
    //console.log(this) // output {} -- in arrow function the output will be same empty {}
   // console.log(this.name) // output undefined -- the output will be same weahter its normal function or arrow function
} 
coffee()

 const add = (num,num2) => {  // this called implicit funtion and its basic 
    return num + num2
 }
 console.log(add(8,9)) // output  17 

 const sub = (num,num2) => (num - num2)  // this called explicit function and here we are () so we dont need to use return when we use {} the we have to use return
 console.log(sub(10,5)) // output 5

 const sub1 = (num, num2) => ({username:"arman"})
 console.log(sub1(5,4)) // output 5 { username: 'arman' } 
 

