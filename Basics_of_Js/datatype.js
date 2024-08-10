// let score = "33"
// // console.log(score)
// // console.log(typeof(score))

// // let score1 = undefined
// // console.log(score1)

// let valueInNumber = Number(score) // by doing this we can convert srting into number
// console.log(typeof valueInNumber)

// let name  =  1233432
// let nameInString = String(name)  //by doing this we can convert  number into string 
// console.log(typeof nameInString)
 
// let name1 = "arman"
// let nameInNumber = Number(name1)
// console.log(typeof nameInNumber)

// let car = "234anfhf"
// let carintonumber =  Number(car)
// console.log(typeof carintonumber) // output will Nan 

// let isLoggedIn = 1
// let booleanLogedIn = Boolean(isLoggedIn)
// console.log(booleanLogedIn) // true

// let isLoggedIn1 = 0
// let booleanLogedIn1 =  Boolean(isLoggedIn1)
// console.log(booleanLogedIn1) // false
 //  in Boolean 1 = true and 0 = false 


 // OPERATIONS 

//  let str =  "Arman"
//  let str1 = " Bye"
//  console.log(str + str1)
//  console.log(1+9%8*3)

// console.log(1+"3")   // 13
// console.log("3" + 1) // 31
// console.log(7 + 6 + "9")  // 139

//     COMPARISON

// console.log(1 === 1) // true
// let a = 1
// let b = 1
// console.log(a === b) // true 

// let c = null
// let d = undefined
// console.log(c === d) // false 

// console.log(1 == 1) // true 
// console.log( "1" ==  1) // true 
// console.log("1" === 1)  // false because when we use  " === " this strictly check for datatype  if the datatype is same only then the comaparision we will be done


// STACK AND HEAP MEMORY 


// ++++++++++++++++++++++++++++++++++++++
// Strings 

// const name = "Arman"
// // console.log(name)
// // console.log(name.length)  // from this we can get the length
// // console.log(name.charAt(2)) // from this we can check which letter is on which index
// // console.log(name.indexOf("n")) // from this we can check the index of any char
// console.log(name[0]) // from this we can acces the index value 

// const myname = new String("Iron man ") // this new way to initailize the string  by this we can so many thing on console 
// console.log(myname)
// console.log(myname.toUpperCase()) // output IRON MAN // from this method we can convert any string into uppercase 

// const testname = "I am avenger"

// const subString = testname.substring(3,7) // from this method we can convert any string into substring 
//the (7) index will be excluded  and it don't consider the negative value 
// console.log(subString) //output I am av -- it was from 0-7 index
//console.log(subString) // output m av// this is from 3-7 index 7 index will be excluded 
//console.log(subString)// output  m avenger -- this from 3,27 index 

// const str = "Welcome";
// const slicedStr2 = str.slice(-6, -2);  // we use this method to beak the sting from reverse  
// //console.log(slicedStr2); // Output: "lco"

// const str1 = "applejuice"
// const slicestr1 = str1.slice(-8,-1)
// //console.log(slicestr1) // output plejuic

// let noun =  "Iamhereforyou"
// let sliceNoun = noun.slice(1,8)
// console.log(sliceNoun) // output amheref

// const str = "   Armaniamboy"
// console.log(str) // output     Armaniamboy  there will be space before and after string value 
// console.log(str.trim())  // output Armaniamboy there will be no space as it will be remove with help of trim
// // trim we use to remove the extra space before and after the string so we can save the accurate data in out DB

// let string = "  kashish"
// console.log(string) // output   kashish -- before kashish there will be space as it is in string 
// console.log(string.trim()) // output kashish -- there will be no space as it will be remove with the help  of trim 

// const str =  "i am boy "
// console.log(str.replace("boy","girl")) // output i am girl // we use replace method to replace anyvalue in string 
// // basically it can be use in url

// const url = "https://Arman.farooqui.com/engi%50neer"
// const newUrl = url.replace("%50","-")
// console.log(newUrl) // output https://Arman.farooqui.com/engi-neer

// const srting =  "I am good boy rohit"
// const newstring = srting.replace("boy","girl")
// console.log(newstring) //output I am good girl rohit

// const string = " Hey how are you"
// const newstring = string.includes("are") // we use include method to check if that value is present in string or not
// console.log(newstring) //output true 

// const str = "I love you coding"
// console.log(str.includes("love")) // output true

// const str1 = "I am good"
// console.log(str1.includes("bad")) // output false

// const name =  "arman"
// const count = 45
// console.log(`my name is ${name} and my repo count is ${count}`) //output my name is arman and my repo count is 45
// // above is new method to of concating 2 strings

// const str = "alexa"
// const str1 = "jarvis"
// console.log(`i love you ${str} and ${str1} really love so much`) // output i love you alexa and jarvis really love so much

// ++++++++++++++++++++++++++++++++++++
// Number & maths in JS 

// const score = 100
// const value = new Number(500) // this way we can also define any number,string, boolean 
// //console.log(score) // output 100
// //console.log(value) // [Number: 500]

// value to string conversion 
// console.log(value.toString()) //500  -- from this we can convert any number into string 

// .toFixed method
// console.log(score.toFixed(2))//  outout 100.00  -- we use this method for decimal value
// const number = 110.9893
// console.log(number.toFixed(2)) // output 110.99 -- it will give just to decimal value
// const value = 8980.79843
// console.log(value.toFixed(3)) // output 8980.798

// .toLocaleString() 
 // we use above method to put commas in our number figure 
 
//  const value  =  10000000
//  console.log(value.toLocaleString()) // output 1,00,00,000 --- if we put "en-IN" this it will be done according
//  // to indian standads number

//  let Number  = 100000000
//  let newNumber = Number.toLocaleString()
//  console.log(newNumber)

//  let amount = 100000000000000
//  console.log(amount.toLocaleString())


// ----------------MATHS---------------
// console.log(Math);
//  __________Math.abs()__________
// console.log(Math.abs(-189)) // outoput 189  -- from "abs" we can get absolute value of any negative number
// console.log(Math.abs(-1748874)) // output 1748874
// let number = -0897935
// let newNumber =Math.abs(number) 
// console.log(newNumber) // output 897935
// console.log(Math.abs(number)) //output 897935
// console.log(Math.abs(43273)) // output  43273
// console.log(Math.abs(-000000067)) // output 55  -- zeroes will be remove 

// _________Math.round()________
// Math.round() from this method  we can get any round value of any decimal number if afer"." is 5 or >5 then the digit will be increase 
// console.log(Math.round(6778.89)) // output 6779
// console.log(Math.round(346.39)) // output  --here after "." its 3 so thats why we got 346
// console.log(Math.round(5678.5)) // output 5679 -- here after "." its 5 so thats why we got 5679
// let value = 899.89
// let newValue = Math.round(value)
// console.log(newValue) //output 900

//___________Math.ceil()________
// Math.ceil() will always give the value of +1  
// console.log(Math.ceil(89.4)) // output 90
// let value = 78.01
// let newValue = Math.ceil(value)
// console.log(newValue)  // output  79 
// let number = 79.00  // in this after point there are only 00 so the value will be same 
// let newNumber = Math.ceil(number)
// console.log(newNumber) //  output 79 

//_____Math.floor()__________
//Math.floot will always give the as same the number 
// console.log(Math.floor(89.90)) //output 89
// console.log(Math.floor(67.89)) // output 67
// const value = 45.090
// const newValue = Math.floor(value)
// console.log(newValue) // output 45

// ____Math.sqrt()________ form this we can calculate square roots 
// console.log(Math.sqrt(25)) //output 5
// console.log(Math.sqrt(49)) // output 7
// let value = 64
// let newValue = Math.sqrt(value)
// console.log(newValue) // output 8

// _______Math.random()_________ from this we will get any random valye between 1 -10
// in this output will be different in each console value 
// console.log(Math.random()) // first  output 0.5908718490320382, second output 0.1991521067412303 
 //console.log(Math.random() *10 + 1) 
 /* in above case we are multplying from 10 beacause because we need some number value before the "."
 and doing +1 in case if number 0*10 = 0 only show to avoid the we do +1 */
// suppose we need some random value between 1-6 for dice game 
// const min = 1
// const max = 6
// console.log(Math.floor(Math.random() * (max - min + 1)) + min) // outputs - 4,3,5,1 evertime the ouptu will be different 
//  const min = 50
//  const max = 100
//  console.log(Math.floor(Math.random() * (max - min +1 )) + min) // outputs 59,71,82


//______Date & TIME __________ in javascript month start with 0

// let mydate = new Date();
// console.log(mydate); //output -- 2024-07-16T08:53:41.480Z
// console.log(mydate.toString()) // output -- Tue Jul 16 2024 14:24:28 GMT+0530 (India Standard Time)
// console.log(mydate.toDateString()) // output-- Tue Jul 16 2024
// let createdate = new Date(2024,0,23)
// console.log(createdate.toString()) // output Tue Jan 23 2024 00:00:00 GMT+0530
// const newDate = new Date(2024,7,17,12,00)
// console.log(newDate.toLocaleString()) // output -- 17/8/2024, 12:00:00 pm
// let newdate =  new Date()
// console.log(newdate.getMonth()) // output 6 -- from this method we can get month from date
// console.log(newdate.getDay()) // output 2 -- from this method we can get day from date
// console.log(newDate.getHours()) // output 12 -- from this method we can get hours from date
// console.log(newDate.getMinutes()) // ooutput 0 -- from this method we can get hours from date
//   let newdate = new Date();
//   newdate.toLocaleString('default',{
//      weekday: "long", 
//      day: "length"
//   })
  
//   console.log(newdate)










 





  
 


