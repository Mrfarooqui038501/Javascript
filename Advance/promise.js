// Promise 

//  here in below code have made a promise using settimeout function 
const PromiseOne = new Promise(function(resolve,reduce ){
    setTimeout(function(){
       // console.log('Async taks is completed')
    },1000)
    resolve(); // resolve function here used to connect both the function together  
})
 

// in the below function we used ".then " it's call back funtion 
// here we are conuming the promise 
PromiseOne.then(function(){  
    //console.log('Promise fullfill')
})


// we can also create a promise like this as well without storing  it in any variable 
new Promise(function(resolve,reject){
setTimeout(function(){
 //console.log("Promise to completed")
 resolve();
},1000)
})

//. then means we are consuming the promise 
.then(function(){
    //console.log("promise 2 resolved")
})


// in  the below example we are passing some refrences in resolve and later we are cosuming it in .then
const promiseTwo = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({userName:"Arman", email:'Arman@gmail.com'}) // here we use username to give reference in .then we have to 
        // some similar value so it will know what we are refrencing
    },1000)
})

promiseTwo.then(function(user){ // here we are using it user beacuase we passed user in relove 
   // console.log(user)
});

// in the below  promise we are using array in resolve 
const promiseTwo2 = new Promise(function(resolve,reject){
    setTimeout(function(){
         resolve(["arman",90,"hi "])
    },1000)
})

promiseTwo2.then(function(Arman){
//console.log(Arman)
})

//  the bewlow exampe is for rejected promise using error
const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({userName:"Arman",password:"Main nhi btaung"})
        }else{
            reject('Error: please check network connectionn')
        }
    },1000)

})

promiseThree.then(function(user){
console.log(user)
return user.userName
})
.then(function(user){
    //console.log(user)
})
.catch(function(error){
    //console.log(error)
})
.finally(function(){
    //console.log("Either the promise will be fullfill or rejected")
})

const promiseThree3 = new Promise(function(resolve,reject){
    let error = false
    setTimeout(function(){
     if(!error){
        resolve(["Promise has been resolved"])
     }else{
        reject('Error: Your promise is rejected')
     }
    },1000)
})

promiseThree3.then(function(Promise){
   // console.log(Promise)
})
.catch(function(error){
    // console.log(error)
})
.finally(function(){
   // console.log("Bye bye ")
})

// in this example  we are using async to consume promise 
/*const promisefour = new Promise(function(resolve,reject){
  setTimeout(function(){
       const error = true
       if(!error){
        resolve({Name:"Arman",Age: 24})
       }else{
        reject('Opps Error')
       }
  },1000)
})

// here we made an async function and give it a  name 
 async function consumePromise(){
    // and here we are using try & catch try for reslove catch for reject 
    try {
        const response = await promisefour
       // console.log(response)
        
    } catch (error) {
       // console.log(error)
        }
}
//consumePromise() */  // here simply we are calling our async function 

const promisefour4 = new Promise(function(resolve,reject){
    
    setTimeout(function(){
        let error = false
       if(!error){
        resolve('Hey the promise has been resloved')
       }else{
        reject('Opps you got it wrong ')
       }
    },1000)
})

async function consumePromise(){
    try {
        const response = await promisefour4
       // console.log(response)
    } catch (error) {
        //console.log(error)
    }
}
consumePromise()

// in the below  exapmle we will learing API calling 

async function getUsers() {
    try {
       const getdetails =  await fetch('https://jsonplaceholder.typicode.com/users')  
       const details =  await getdetails.json() // while using async we have to use await as well 
       console.log(details)
    } catch (error) {
        console.log("Error: oops didn't get the response")
    }
    
}

//getUsers()


// here we are calling api using .then and .catch method 
fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
 return response.json()
}).then((data) =>{
    console.log(data)
}).catch(function(error){
    console.log(error)
})