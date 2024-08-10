 /*  // SETTIMEOUT
setTimeout(function(){
    console.log("Arman HI")
},3000) // and this will print after 3mints

setTimeout(function(){
    console.log("hey you have to wait for 1 mint")
},1500) // so this will print after 1.5 mints

console.log("I will print instantly") // this will be printed instantly 
 
// in below examples we used function reference in settimeout 
const greet = function(){
    console.log("HI i am from greeting ")
}

setTimeout(greet,1000)  // here we can use it without function as well by using function reference  using their name 

const greetings = function(){
    console.log("I am here from greeting")
}
setTimeout(greetings,2000)

const greeting2 = function(){
    console.log("Hey IT's third time ")
}

setTimeout(greeting2,1000) */ 

/*// in the below  example we are using settimeout for changing tags name after some interval 
const changeName =  function(){
    document.querySelector('h1').innerHTML ="Hey you are learingn js"
}

setTimeout(changeName,2000) 

const tagChanger = function(){
    document.querySelector('h2').innerHTML = "it's going to change soon"
}
setTimeout(tagChanger,3000) 

const tagChanger2 = function(){
    document.querySelector('h3').innerHTML = "It will change rapidly"
}

setTimeout(tagChanger2,3000) */

      /* // CLEARTIMEOUT 
  // cleartimeout we use to stop timeinterval after specific time period  and moslty we use with some event(eventlistener )    

 const tagChanger = function(){
    document.querySelector('h1').innerHTML ="You have to did it"
 }
 const timeinterval  = setTimeout(tagChanger,2000)  
    clearTimeout(timeinterval) // so here we uset cleartimeout so it stop settimeout and no changes will be done 

const tagNameChanger = function(){
    document.querySelector('h2').innerHTML = "It's going to change"
}
const timeinterval = setTimeout(tagNameChanger,1000)
clearTimeout(timeinterval) // no changes will be done as we used cleartimeout 

// in bewlow example we use cleartimeout with eventlistener and button cleartimeout we work only when we will press the button
const tag = function(){
    document.querySelector('h1').innerHTML = "I will change it"
}
const settimeout = setTimeout(tag,2000)

document.querySelector('#stop').addEventListener("click",function(){
    clearTimeout(settimeout)
    console.log("I stopped it")
}) 

const tagChanger = function(){
    document.querySelector('h2').innerHTML ="krdo change"
}
const stops = setTimeout(tagChanger,2000)

document.querySelector('#stop').addEventListener('click',function(){
    clearTimeout(stops)
    console.log("YES we STOPPED it")
}) */

   /* // SETINTERVAL 
 // in setinerval the working will going continosly afer the time you set and it  can have 3 paramaters
    setInterval(function(){
        console.log("Arman", Date.now())
    },1000) */

     // in below example we add the function and we are 
    const saydate =  function(str){
        console.log(str,Date.now());
    }
     const stop = setInterval(saydate,2000,'Hey')   

    // CLEATINTERVAL   we use clear interval to stop the setInterval 

    clearInterval(stop)
