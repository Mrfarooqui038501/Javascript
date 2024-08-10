//console.log(Math.PI)
const valuepi = Math.PI
//console.log(valuepi)
const newValue = Math.ceil(valuepi)
const val  = Math.round(Math.ceil(Math.PI))  // we can't change or write off the pi value due inbuild function of it as they don't allow us overwrite the value 
//console.log(val)



/*here in below codes we are able to change the PI value using round method
console.log(Math.round(Math.floor(Math.PI))) // output 3
console.log(Math.round(Math.ceil(Math.PI))) // output 4  */

const descriptor = Object.getOwnPropertyDescriptor(Math,"PI")
// console.log(descriptor) // output {  value: 3.141592653589793, writable: false, enumerable: false, configurable: false }

/* Object.defineProperties(Math,"PI", {
    writable:true,
    enumerable: true
})

console.log(Object.defineProperties(Math,"PI"))  
we can't change any property of PI */

const chai ={
    name: "Kadak chai",
    price: 2500,
    isAvailable:  true,

    statusChai: function(){
        
            console.log('Tea is not avilable')
       
        
    }
}

// console.log(chai) // output { name: 'Kadak chai', price: 2500, isAvailable: true }
// console.log(chai.statusChai()) // Tea is not avilable 

// console.log(Object.getOwnPropertyDescriptor(chai,"name"))

for (let [key, value] of Object.entries(chai)) {
    if (typeof value !== 'function') {
        console.log(`${key} : ${value}`);
    }
  }  // output name : Kadak chai price : 2500 isAvailable : true


