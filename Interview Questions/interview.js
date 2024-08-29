// q1 -so in this question we added a extra property by own so to confuse candidate and in this question candidate need to print  the array
/*const ar =  [1,2,3,4,5,]   
 Array.prototype.extraPoperty =  "Arman"  // here we added extra property using prototype

//  console.log(ar)
 for( let i  in ar){
   if(ar.hasOwnProperty(i))    // and here we add check if it has an extra property that won' be added in array 
   console.log(i)
 } */

// Q2-   imlement custom for each loop  -- in this the interviwer wants  you too add customer prperty in array using protoype 
  

//  const numbers = [1, 2, 3, 4, 5];

/* the below approach is begginer level approach 
Array.prototype.customForEachOne = function(callback){
    for(let i=0; i <this.length; i++){
        callback(this[i],i,this)
    }
} */

/* the below is our second approach and its advacne lelve for  SDE2 and SDE3
Array.prototype.forEachTwo = function(callback,thiscontext){
    if(typeof callback !="function"){
        throw `Callback isn't a function please check`
    }
    const length = this.length
    let i =0;
    while( i < length){
               if(this.hasOwnProperty){
                callback.call(this.context, this[i], i, this);
               }
               i++
    }
} */ 
// numbers.customForEachOne((element, index, array) => {
//     console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
//   }); /* output Element: 1, Index: 0, Array: 1,2,3,4,5
//                 Element: 2, Index: 1, Array: 1,2,3,4,5
//                 Element: 3, Index: 2, Array: 1,2,3,4,5
//                 Element: 4, Index: 3, Array: 1,2,3,4,5
//                 Element: 5, Index: 4, Array: 1,2,3,4,5 */

//  numbers.forEachTwo((element, index, array) => {
//   console.log(`Element: ${element}, Index: ${index}, Array: ${array}`);
//  });  

// Q3 = ) What is the difference between deep copy and shallow copy?
/* a. Shallow Cop
--Creates a new object but copies only the references to the original object's properties.   
-- Changes to the original object will also reflect in the copied object.   
-- Faster than deep copy.   

b. Deep Copy
- Creates a new object and recursively copies all nested objects and values.   
- Changes to the original object do not affect the copied object.
- Slower than shallow copy.

When to use which:
-- Shallow copy: When you want to create a new object quickly and don't mind changes reflecting in both objects.
-- Deep copy: When you need an independent copy of an object and want to avoid unintended modifications. 


                 Key Differences:

Feature	                                          Shallow Copy                     Deep Copy
Copies                               References to original objects        Copies all nested objects and values
Performance	                                        Faster                                Slower             
Changes to original object                   Reflect in copy                       No effect on copy  


const obj = {
    newObj: {
    obj2: {
    obj5: {
    one: 1,
    },
    },
    },
    obj3: {
    obj4: {
    two: 2
    },
    },
   };
    
   function flattenObject(obj, prefix = '') {  
    return Object.keys(obj).reduce((acc, cur) => {
      const value = obj[cur];
      const newKey = prefix ? `${prefix}.${cur}` : cur;
  
      if (typeof value === 'object' && value !== null) {
        return { ...acc, ...flattenObject(value, newKey) };
      } else {
        return { ...acc, [newKey]: value };
      }
    }, {});
  }

   const result = flattenObject(obj)
   console.log(result) // output { 'newObj.obj2.obj5.one': 1, 'obj3.obj4.two': 2 }  */


// Q4 = ) What will be the output of this code? Also explain why
/* let a = 10;
      console.log("line number 2", a);

     function fn() {
         console.log("line number 4", a);  // beacuse  of this line it will show is the Reference error TDZ 
             let a = 20;
               a++;   // as here we are incrementing the a
                console.log("line number 7", a);  // here the output will be 21 
                if (a) {
                  let a = 30;
                        a++;
                     console.log("line number 11", a); // here a will  be 31 
 }
                       console.log("line number 13", a);   // here a will be 21 
}
               fn();
                     console.log("line number 16", a); // error Cannot access 'a' before initialization // reference error
                     
                     
    // let b = 30 
    // function fn(){
    //     console.log(b)
    //     const b =  20
    // }
    // fn(); // output  ReferenceError: Cannot access 'b' before initialization */


// Q5 = What's the difference between a variable that is: `null`and`undefined`     
   
/* UNDEFINED
 - A variable that has been declared but not assigned a value is undefined.
 - It also occurs when you try to access a property that doesn't exist on an object.
  
 NULL
 -A  value that explicitly represents the absence of any object value. 
 - It is an assignment value that can be assigned to a variable.
  

  let a; //undefined
  console.log(a)  // undefined

  const b = "null"
  console.log(b) // output null   */

  // Q6 =   Implement polyfill for Array.reduce
 /*polyfill = A polyfill is a piece of code that provides a feature in older browsers or environments that do 
 not natively support it.   */

/* if(!Array.prototype.reduce){
     Array.prototype.reduce =  function(callback, initialvalue){
        if(this === null || this === undefined){
         throw new TypeError("Array.prototype.reduce called on undefined or null")
        }
        if(typeof callback !== 'function'){
            throw new TypeError(" callback is not function ")
        }
        const length = this.length;
        let index = 0;
        let  accumulator;
        if(arguments.length >= 2){
            accumulator = initialvalue;
        }else{
            if(length === 0){
                throw new TypeError("reduce")
            }
        } 
        accumulator =  this[0];
        index =1;
        while(index < length){
            accumulator = callback.call(undefined,accumulator,this[index,index,  this])
            index++;
        }
       return accumulator;
     };
 } 
 const numbers = [1, 2, 3, 4, 5];
 const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
 console.log(sum); // Output: 15   */
 
 
 // Q7 =  What do you understand by the term closure ??
 /* A closure is a combination of a function and the lexical environment in which that function was declared. */
  
 /*function outer() {
    let count = 0;
    return function inner() {
      count++;
      return count;
    };
  }
  
  let counter = outer();
  console.log(counter()); // 1
  console.log(counter()); // 2
  console.log(counter()); // 3  */

  /* function parent(){
    let b ="Arman"
    return function child(){
        console.log(b)
        return;
    }
    
 
  }
  console.log(parent()()) // Arman -- Ffirst  way to call  a this function 
   const child  =  parent()
  child() // ouptut Arman  -- second way   */

 //  function multiplier(value){
  //   return function(num){
  //      return num * value
  //   }
  //  }
    
  //  const result = (multiplier(2))
  //  console.log(result(5)) // 10


  // function makeMultiplier(multiplier) {
  //   return function(number) {
  //     return number * multiplier;
  //   };
  // }
  
  // const multiplyByTwo = makeMultiplier(2);
  // const multiplyByThree = makeMultiplier(3);
  
  // console.log(multiplyByTwo(5)); // Output: 10
  // console.log(multiplyByThree(4)); // Output: 12

  // Q8  What will be the output of this code? Also explain why

 /* function outer() {
 let arrFn = [];
 let i;
 for (i = 0; i < 3; i++) {
 arrFn.push(function fn() {
 console.log(i);
 });
 }
 return arrFn;
}
let arrFn = outer();
console.log(arrFn)
arrFn[0]();  // 3
arrFn[1]();  // 3
arrFn[2]();  // 3   */

// Q9 = ) Write a function fn such that if it is called like this, see below
//Usage :
// fn()()()(0) //=> returns 3
// fn()()()()()(0) //=> returns 5

   
   /* 
    function fn(){
    let count = 0;
       return function inner() {
         
        count++;

        return function innermost() {
            count++;

            return function mostInner() {
                count++;
                return count;


            };
        };
    };
}

const result = fn()()()(0); 
console.log(result);  // output 3    */

// Q9  How are asynchronous operations handled in JS
/* JavaScript, while single-threaded, handles asynchronous operations effectively using a combination of the 
event loop, call stack, task queue, and Web APIs.
Callbacks,Promises,Async/Await,Web APIs,Event Loop */

// Q10  between different queues like micro and macro task queues?
/* --  MICRO TASK QUEUE
Higher priority than the macro task queue.   
Tasks are executed immediately after the current synchronous code finishes, but before the next macro task.   
Examples of microtasks:
Promise callbacks (.then, .catch, .finally),process.nextTick(),queueMicrotask()

-- MACRO TASK QUEUE
Lower priority than the micro task queue.   
Tasks are executed after all microtasks have been processed.   
Examples of macrotasks:
setTimeout, setInterval  ,I/O operations, UI rendering  */

 //Q11 What is JavaScript?
/* JavaScript is a dynamic, high-level, interpreted programming language, commonly used for web development to 
create interactive effects within browsers. */

// Q12 What are the different data types in JavaScript?
/*The primitive data types in JavaScript are string, number, boolean, null, undefined, symbol, and objects
 (which can be an array, function, or general object). */

 // Q13 What is the difference between == and ===?
 /* == compares values for equality after performing type conversion 
 === compares both value and type without type conversion. */

        
 // Q14 Explain hoisting in JavaScript. 
 /* Hoisting is a JavaScript mechanism where variable and function declarations are moved to the
  top of their scope before code execution.
  -- Variable Hoisting = Variable declarations are also hoisted, but their initialization is not.
   This means you can access a variable before it's declared, but its value will be undefined.
  */


  // Q15 What is a closure?
/* A closure is a function that retains access to its lexical scope, even when the function is executed outside 
that scope. */ 

// Q16 What is this keyword in JavaScript
/* The this keyword refers to the context in which a function is called. Its value can change depending on the
 context (global, object, or function). */ 

 // Q17 What are promises in JavaScript?
 /* Promises are objects that represent the eventual completion or failure of an asynchronous operation. 
 They can be in states: pending, fulfilled, or rejected.*/

 // Q18 Explain the concept of asynchronous programming in JavaScript.
 /*Asynchronous programming allows operations to run in the background, enabling the execution of other code 
 while waiting for the result, improving performance and responsiveness. */

 // Q19 What is event delegation?
 /* Event delegation is a technique where a single event listener is added to a parent element instead of multiple
  listeners for each child element. This improves performance and efficiency. */

  // Q20 Explain the difference between var, let, and const
 /*    var is function-scoped and hoisted, 
        let is block-scoped and not hoisted, 
         onst is also block-scoped but maintains a constant reference to the value. */

   // Q21 What is the Document Object Model (DOM)?
   /* The Document Object Model (DOM) is a programming interface for HTML, XML, and SVG documents. 
   It represents the page as a logical tree of nodes, where each node represents a part of the document.  */ 
   
   // Q22 What is the purpose of the bind, call, and apply methods?
   /*  "These methods are used to manipulate the this keyword within functions." 
     -- call 
     Immediately invokes a function with a given this value and arguments provided individually.
     Syntax: function.call(thisArg, arg1, arg2, ...)

     --apply
      Similar to call, but accepts arguments as an array.
      Syntax: function.apply(thisArg, [argsArray])

     --bind
      Creates a new function with a bound this value and optional arguments.
     Does not immediately invoke the function.
     syntax: function.bind(thisArg, arg1, arg2, ...)

     Key Differences:

     Method              Invocation                    Argument Passing                        Returns
      call                Immediate	                   Individual arguments              Return value of the function
     apply                Immediate                     Array of arguments	              Return value of the function
     bind             Creates a new function	        Optional arguments	                       New function
     */

// Q23 - What is the importance of the async and await keywords?
 /* The async and await keywords are essential in JavaScript for handling asynchronous operations in a 
 more readable and manageable way. Here are the importance of these keywords:
*/  
// Q24 - Explain the concept of the prototype in JavaScript.
 /* A prototype in JavaScript is an object that is associated with a function and serves as a 
 blueprint for objects created from that function. 

 How it works:
 ..--Every function has a prototype property, which is initially an empty object.
 ..-- When an object is created using the new keyword with a constructor function, the object's 
 internal __proto__ property (not directly accessible) points to the constructor's prototype.
 ..-This creates a prototype chain, where objects inherit properties and methods from their prototype. 
 If a property is not found on the object itself, JavaScript searches the prototype chain.
 */
 
 // Q25 What is a Higher Order Function?
 /* Higher-Order Functions
 A higher-order function is a function that takes one or more functions as arguments or returns a 
 function as its result. 
 */

 // Q26 What is the difference between an Array and an Object?
      
 /*  Arrays
 --Ordered collection of elements: Elements are stored in a specific order, accessible by their numerical index.   
 --Mutable: Elements can be added, removed, or modified after creation.
 --Syntax: const myArray = [element1, element2, element3];
 -Common operations: push, pop, shift, unshift, splice, length, indexOf, forEach, map, filter, reduce.
       
 Objects
 -Unordered collection of key-value pairs: Each property has a unique name (key) and associated value.   
 - Mutable: Properties can be added, removed, or modified after creation.   
 -Syntax: const myObject = { key1: value1, key2: value2 };
 -Common operations: Property access using dot notation or bracket notation, 
 adding/removing properties, iterating over properties using for...in or Object.keys.

 Key Differences:
      Feature                                     Arrays	                               Objects
     Order                                       Preserved                              Not preserved
     Access                                   Numeric index	                          Key (string or symbol)
     Structure	  Storing ordered lists of data, working with numerical indices	        Representing entities with properties, storing related data
 */ 

 // Q27 How setTimeout Works in JavaScript
 /*setTimeout() is a global function in JavaScript that schedules a function or code snippet to be executed 
 after a specified delay (in milliseconds). 
 -- SETINTERVAL =  in JavaScript is a function used to repeatedly execute a given piece of code at a 
 specified interval (measured in milliseconds).
 */

 // Q28  What is the event loop in JavaScript?
 /*  The event loop is the mechanism that JavaScript uses to handle asynchronous operations.
  It's what allows JavaScript to be non-blocking, meaning it can continue executing code while waiting for tasks
   like network requests, timers, or user interactions to complete.    
     How it works:
    Call Stack: This is where synchronous code is executed. Functions are pushed onto the stack as they are called and popped off when they return.   
    Callback Queue (or Task Queue): This is where callbacks for asynchronous operations are placed once they are ready to be executed.   
    Event Loop: Continuously checks the call stack. If the call stack is empty, it takes the oldest callback from the queue and pushes it onto the call stack. 
  */

 // Q29 Explain the Module pattern in JavaScript.
 /* The Module Pattern is a design pattern used to encapsulate code and data within a single unit, 
 providing a way to create private and public members. It's particularly useful for organizing large codebases
  and preventing naming conflicts.
 */    

  // Q30  What is the purpose of Object.freeze()?
  /* Object.freeze() in JavaScript is a method used to make an object immutable, meaning its properties 
  cannot be modified, added, or deleted after freezing. 
   */
    
 // Q31 What is the difference between synchronous and asynchronous programming?
 /* 
 Synchronous Programming
 - Executes code sequentially, one line at a time.   
 - Blocks the execution until the current operation is complete.   
 - Simpler to reason about, but can lead to performance issues, especially for I/O operations.
  
  Asynchronous Programming
 - Allows multiple tasks to run concurrently without blocking the main thread.   
 - Improves performance and responsiveness, especially for I/O-bound operations.   
 - Uses mechanisms like callbacks, promises, or async/await.
 */

 //Q32  What are the advantages of using arrow functions?
 /*  1. Concise Syntax
 Shorter syntax compared to traditional function expressions.   
 Ideal for short functions with a single expression.   

 2.  Lexical this Binding
 The this keyword in arrow functions is lexically bound, meaning it inherits the this value from the enclosing scope.
 This prevents unexpected this behavior, especially in callbacks and object methods.

 3. Implicit Return
 For single-line functions, the return statement is implicit 

 4. Suitable for Callbacks
 Arrow functions are often used as callbacks due to their concise syntax and lexical this binding.  

  When to Use Arrow Functions
 Short functions with simple logic
 Callbacks where the this context is important
  Higher-order functions like map, filter, reduce
 */

// Q33  What is an IIFE (Immediately Invoked Function Expression)? 
/*An Immediately Invoked Function Expression (IIFE) is a JavaScript function that runs as soon as it is defined. */ 
    //  (function(){
    //     console.log("arman")
    //  })();  // output arman
     
    //  console.log((function(num,num2){
    //     return 9 +2
    //  })(9,8)) // 11
  




 
 


  
   // Q What will the following code output?
     /*console.log(typeof null); // output object
     console.log(typeof undefined) // output undefined 
     const a = [];
     console.log(typeof a); // output object
     console.log(1 + '1');  // output 11
     console.log('5' - 2);  // output 3
     console.log('apple' - 2); // NaN
     console.log(false == '0'); // true  ----- 0 = false, 1 = true
     console.log(5 === '5'); // false 

     let x = 10;
     setTimeout(() => {
         console.log(x);
     }, 0);
     x = 20;  // output 20 

     console.log(1 == true);  // true 
     console.log('2' + 2 - 2); // output  20 
      console.log([1, 2] == [1, 2]); // false (compares references, not values) in this both the arrays will have different references 
     console.log(0.1 + 0.2 === 0.3);  // false (floating point arithmetic issue)
     console.log(0.7 + 0.8 === 1.5);  // true 
     console.log(0.2 + 0.2 === 0.5 )   // false --, the sum of 0.7 and 0.8 happens to fall within the
      // representable range of floating-point numbers, and the result is exactly 1.5. Hence, 
      // the comparison 0.7 + 0.8 === 1.5 evaluates to true. 
      console.log('Hello'.charAt(1)); // e
      console.log(typeof NaN);   // number   

      let num = 10;
      function add() {
          num++;
          return num;
      }
      console.log(add()); // output 11 
       
      const obj = {
        a: 1,
        b: 2,
    };
    const clone = Object.assign({}, obj); // Shallow Copy
    clone.a = 3;
    console.log(obj.a); // output 1 - console.log(obj.a) prints the value of property a in the original 
     //obj object, which remains 1 as the change was made to the clone object.

     console.log(typeof (typeof 1)); // output string 

     let arr = [1, 2, 3];
     arr.length = 2; // we are geting empty array because here we are upating the length to 0
     console.log(arr); // outut [] "Emply array"

     let array = [1, 2, 3];
     array.length = 8;
     console.log(array);  //[ 1, 2, 3, <5 empty items> ]

     let ar = [1,2,3,4,5]
     ar.length = 2;
     console.log(ar)  //[ 1, 2 ]  

     console.log(5 + '4' - 2); // 52  
            
     let a = 1;
     let b = a++;
     console.log(b); //  1 (post-increment) --The postfix increment operator (++ after the variable)
      // increments the value of the variable, but returns the original value before the increment. 
      
      console.log('1' + '2' - '1'); // 11 
                   
      let x = 0;
      function foo() {
          x++;
      }
      foo();
      console.log(x); // 1  here we are getting 1 beacuse we are printing after calling the function  

      let x = 0;
      function foo() {
          x++;
      }
      console.log(x); // 0 here we are getting 0 beacuse we are printing beforecalling the function  
      foo(); 

      console.log(3 * (4 + 5)); // 27
      console.log({} == {}); // false  (different references)

      const arr = [1, 2, 3, 4].map(x => x * 2);
      console.log(arr);  // [ 2, 4, 6, 8 ]    

      console.log(2 + 2 + '2'); //42 
      console.log(true + 1);  // 2 (true is treated as 1) 
      let x = 1;
      console.log(x == '1'); // true
      console.log(x === '1');  // false 
      let str = "Hello World!";
      console.log(str.length); // 12
      console.log(1 < 2 < 3); // true 

      console.log(3 > 2 > 1); // output false 3 > 2 is evaluated first, resulting in true.
      // The result true is then compared to 1.
      // JavaScript implicitly converts true to the number 1 for comparison.
      // 1 > 1 is false. 

      // .includes() check if that particular value exist or not in that array 
      console.log([1, 2, 3].includes(5)); /// false
      console.log(["Arman","Kasish","Shubham"].includes("Arman")) // true
      console.log([1,6,9,0].includes(0)) // true 


      let obj = { a: 1 };
      obj.b = obj;
      console.log(obj.b.a); // 1 --(b references obj)

      let car = {Name:9};
      let cars =  car;
      console.log(car.Name); //9 
      
      let bike = {Name:"Hayabhusa"};
      bike.bikes = bike
      console.log(bike.bikes.Name) // Hayabhusa  
      
      console.log("Hello"[0]);
      console.log("Hi are you there"[3]) // output a

      console.log(false + true); // output 1  (false is 0 and true is 1)
      console.log(true + false) //output 1   

      console.log(null == undefined); // true --(loose equality)
      console.log(null === undefined); // false 
      console.log(undefined == null);  // true 

      let x = 1;
      let y = x++;
      console.log(y); // 1  (y gets the value before increment) 
      
      console.log('foo' + + 'bar');// putput fooNaN -- (unary plus tries to convert 'bar' to a number)  
      console.log(typeof [] === "object"); // true --(arrays are objects)
      console.log((1, 2, 3)); // 3 --(comma operator evaluates to the last value)
      console.log(true + false + "1"); // output 11 
          
      let x = 10;
      function foo() {
          x++;
          return x;
      }
      console.log(foo()); // 11 
          
      const obj = { a: 1, b: 2 };
      const copy = Object.assign({}, obj);
      copy.a = 3;
      console.log(obj.a); // 1 - beacuase we are accessing the original object  

      const obj = { a: 1, b: 2 };
      const copy = Object.assign({}, obj);
      copy.a = 3;
      console.log(copy.a); //3 

      console.log("Hello".split('o'));  // output [ 'Hell', '' ] --The part before the 'o': "Hell"
     // The part after the 'o': an empty string "" (because there's no more characters after the 'o')
     console.log("Arman farooqui".split('n')) // [ 'Arma', ' farooqui' ]
     console.log("Arman".split("")) // [ 'A', 'r', 'm', 'a', 'n' ]
     console.log("Arman".split("A")) //  [ '', 'rman' ] 
     console.log(5 > 4 > 3); //false  --  ((5 > 4) is true, and true > 3 is also false) here true = 1 so 1> 3 false
     console.log(typeof (5 + "6")); // string  --  (number is coerced to string)
     console.log('Hello'.slice(-1)); // "o" last character 
     console.log('Hello'.slice(-2)); // "lo" last character 
     console.log('Hello'.slice(-10)); // "Hello" last character  
      
     let n = 0;
     do {
         n++;
     } while (n <= 6);
     console.log(n);  //  7 The do...while loop is a post-test loop, meaning the condition is checked after the loop body is executed. 
     
     console.log("a" > "A"); // output true
     console.log("a" < "A"); // output false
     let arr = [1, 2, 3, 4];
     //name.fill() it take three arguements first the value you want to put, second from which index, 3 till which index
     console.log(arr.fill(0, 1, 3)); // [ 1, 0, 0, 4 ] --  (fills with 0 from index 1 to 3)
     const ar = [1,2,3,4,5,6,7,8,9,10]
     console.log(ar.fill(12,1,5)) // output [1, 12, 12, 12, 12,6,  7,  8,  9, 10] 
     // .indexOf() tell the index number of element that you passed
     console.log('Hello World'.indexOf('o')); // 4
     console.log('Hello World'.indexOf('r')); // 8  

     let x = 5;
     console.log(x++ + ++x); 

     console.log(typeof (0 && "Hello")); // number   (0 is falsy) */

     



     





     

      
      
      




      

      
      



       


      
      



       


      


      
      


     


      

    
      
      








     







        











  