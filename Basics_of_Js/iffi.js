/*what is IFFi(Immediately Invoked function) --  In JavaScript, an Immediately Invoked Function Expression (IIFE, pronounced "iffy") 
is a function that is defined and executed at the same time. It's a versatile pattern that allows you to
 control variable scope, prevent pollution of the global namespace, and encapsulate functionality within
  a self-contained unit.*/


//   (function chai (){     // its called named iffi functoin "chai" is the name of the function
//    console.log("I am chai")
//   }) (); // output I am chai // 

//   /* for  the above fucntionn for doing iffi the whole  function should be with in () and we must use ";"to stop it there only
//     after this ")}"  we use "()" to call the function and we can use any arguements in it.*/

//     (function greet (){
//         console.log("Hello how are you")
//     })(); // output  Hello how are you

//     (function greet2(name){
//         console.log(`Greeting from ${name}`);
//     })("Arman"); // output Greeting from Arman

//     (function coffee(name){
//         console.log(`I will go on coffee with ${name}`)
//     })("Arman"); // ouput I will go on coffee with Arman

   /* ( () => {                 // this is called unnammed function in iffi
    console.log("I am unnammed function")
  })();// output  I am unnammed function */

 console.log (((num,num2)=>{  // here i used console statement beause we need to print only then the output will come 
    return num + num2;
  })(9,8)); // output 17 

  console.log(( (value1, value2) =>{
    return value1 - value2;
  })(10,8)); // output 2

  console.log(((value,value2)=>{
    return value / value2
  })(100,20)); // output 5

  ((name)=> {
    console.log(`Money from ${name}`)
  })("Arman"); // output Money from Arman

  ((name)=>{
    console.log(`I am going to find the ${name}`)
  })("treasure") // I am going to find the treasure

  console.log(((num,num2) =>{
    return num / num2;
  })(10,3)) // output 3.3333333333333335


console.log(Math.floor(((num,num2) =>{
    return num / num2;
  })(10,3))) // output 3

 console.log(Math.ceil(((num, num2) =>{
    return num / num2;
 })(10,4))) // output 3
 