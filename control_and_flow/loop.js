// for of 
/*syntax 
for (const iterator of object) {   // iteration means we can give it anyname, object means on which value we want to run our loop
     
}*/
// const arr = ["Arman","rohit","rafik","safik"]
// for (const i of arr) {
//     console.log(i)
// } // output Arma rohit rafik safik

// let array = [1,2,4,5,6,7,]
// for (const num of array) {
//     console.log(num)
// } // output 1 2 4 5 6 7

// let str = "I am Arman"
// for (const i of str) {
//     console.log(`Intro ${i}`)
// } //output Intro I Intro Intro Intro m Intro Intro A Intro r Intro m Intro a Intro n


// >>>>>>> Maps  known for unique entry in output repeat entries will be ignore and it will  the ordet that you have given

// const map = new Map()
// map.set('Dl', 'Delhi')
// map.set('HR', 'Haryana')
// map.set('TL', 'Tamil Nadu')
// map.set('GP', 'Gorakhpur')

//console.log(map)  // output Map(4) { 'Dl' => 'Delhi', 'HR' => 'Haryana', 'TL' => 'Tamil Nadu', 'GP' => 'Gorakhpur' }

/* let map2 = new Map()
map2.set('cr', " cars")
map2.set('br', " bikes")
map2.set('Tr', " Train")
map2.set('Ar', " Aeroplane")
map2.set('bs', " Bus")

console.log(map2) */// Map(5) {'cr' => ' cars', 'br' => ' bikes', 'Tr' => ' Train', 'Ar' => ' Aeroplane','bs' => ' Bus'}

// let map3 = new Map()
// map3.set('IM',"Ironman")
// map3.set('CA',"Captain america")
// map3.set('SM',"Spider Man")
// console.log(map3) //Map(3) { 'IM' => 'Ironman',  'CA' => 'Captain america', 'SM' => 'Spider Man' }

/* Duplicate entry case in maps
  let map3 = new Map()
map3.set('IM',"Ironman")
map3.set('CA',"Captain america")
map3.set('SM',"Spider Man")
map3.set('IM',"Ironman")
console.log(map3) // Map(3) { 'IM' => 'Ironman', 'CA' => 'Captain america',  'SM' => 'Spider Man' }
 in above code output the 4 entry was ignored as it  was duplicate */

/* // Applying Array method on maps
 let map3 = new Map()
map3.set('IM',"Ironman")
map3.set('CA',"Captain america")
map3.set('SM',"Spider Man")
//  for (const value of map3) {
//    console.log(value)  // [ 'IM', 'Ironman' ] [ 'CA', 'Captain america' ] [ 'SM', 'Spider Man' ]
// } // we got the output in array form 

for (const [key,value] of map3) { // by using key value in loop so we can print key value diffrently 
   // console.log(key, "-" , value ) // IM - Ironman  CA - Captain america SM - Spider Man  
}// so in above output we did't get the output in array form it's in normally */

// const map = new Map()
// map.set('Dl', 'Delhi')
// map.set('HR', 'Haryana')
// map.set('TL', 'Tamil Nadu')
// map.set('GP', 'Gorakhpur')

// for (const [key,value] of map) {
//     console.log(key, "~~~", value ) // output Dl ~~~ Delhi HR ~~~ Haryana TL ~~~ Tamil Nadu GP ~~~ Gorakhpur
// }

// Map using object 

// const myOBJ = {
//     'AP': 'Apple',
//     'JP': 'Jaipur',
//     'BN': 'Banana'
// }
// for (const [val,key] of myOBJ) {
//     console.log(val ,"--", key)
//     } // using for of loop we can't iterate on OBJ  will get this "TypeError: myOBJ is not iterable"

// const myOBJ = {
//     AP: 'Apple',
//     JP: 'Jaipur',
//     BN: 'Banana'
// }
// for (const [val,key] of myOBJ) {
//     console.log(val ,"--", key)
// } // TypeError: myOBJ is not iterable  

// >>>>>>>>>>... for In loop

/* const obj = {
    JV: "Java",
    PN: "Python",
    JS: "Javascript",
    Nod: "NODEJS"
}
// for (const key in obj) {
//     console.log(key) // output JV PN JS Nod  -- we are able to  print all keys value
//     }

for (const key in obj) {
    console.log(`${key}  lanuages ${obj[key]}`) // output  JV  lanuages Java PN  lanuages Python JS  lanuages Javascript Nod  lanuages NODEJS
    } // in the this loop we are able to print the key and their values */


 /* let Obj = {
    90: 9001,
    89: 8009,
    10: 1001
 }
  for (const key in Obj) {
   console.log( `${key} these are values ${Obj[key]}`)
  } // output 10 these are values 1001 89 these are values 800   90 these are values 9001 */

  // For in loop in array 
//   const ar = ["apple","Mango", "Banana","pear"]
//   for (const key in ar) {
//     console.log(key)  // output 0 1 2 3 -- here in output we are only getting the keys not there values
//     }

//  const aar = ["apple","Mango", "Banana","pear"]
//  for (const key in aar) {
//    console.log(aar[key]) // output apple Mango Banana pear
//  }

//  const ar =  ["apple","Mango", "Banana","pear"]
//  for (const [value,key] in ar) {
//     console.log(ar[key,value]) // output apple Mango Banana pear
//  }

// >... for in loop on map

// const map = new Map()
// map.set('Dl', 'Delhi')
// map.set('HR', 'Haryana')
// map.set('TL', 'Tamil Nadu')
// map.set('GP', 'Gorakhpur')

// for (const key in map) {  // map it not iterable so that's why we will get nothing in output
//    console.log(key) // ouptut blank
// }

/// >>>>>...  for each loop 
/*syntax   name.forEach(function(){
    statement
}) */

// let array = ["HI","bye","gone","let"]
// array.forEach(function (val){
//     console.log(val)  // output HI  bye  gone  let
// })

// let ar = ["To","three","four","five","six"]
// ar.forEach(function(num){
//     console.log(num) // output To three four five six
// })

// let arr = [900, 800, 700,600,500]
// arr.forEach(function(ele){
// console.log(ele)  // output  900 800 700 600 500
// })

//  const ar = [900,801,8786,898]
//  ar.forEach((item) => {
//   //console.log(item) // output 900 801 8786 898
//  })

//  const array = ["Arman","Kashish","Arish","shubham"]
//  array.forEach((val) => {
//    // console.log(val)  // Arman Kashish Arish shubham
//  })

//  array.forEach((val,index,Array) => {
//     console.log(val,index,Array)
//  }) // output Arman 0 [ 'Arman', 'Kashish', 'Arish', 'shubham' ]  Kashish 1 [ 'Arman', 'Kashish', 'Arish', 'shubham' ]  Arish 2 [ 'Arman', 'Kashish', 'Arish', 'shubham' ] shubham 3 [ 'Arman', 'Kashish', 'Arish', 'shubham' ]

// array.forEach((item,index) => {
//     console.log(item,index) // output Arman 0 Kashish 1 Arish 2  shubham 3
// })  

//  const mycar =[
//     {
        
//             carname: "Ferrari",
//             carpirce: 100000
//        },
//     {
        
//             carname: "audi",
//             carpirce: 908877
//        },
//     {
       
//             carname: "jaguar",
//             carpirce: 77978
//        },
    
//  ]

//  mycar.forEach((item) =>{
// console.log(item.carname,item.carpirce) // output Ferrari 100000 audi 908877 jaguar 77978
//  })

//  const fruit = [
//     {
//         fruitname: "Apple",
//         fruitPrice: 200
//     },

//     {
//         fruitname: "mango",
//         fruitPrice: 500
//     },
//     {
//         fruitname : "banana",
//         fruitPrice : 800
//     },
//  ]
//   fruit.forEach((val) =>{
//     console.log(val.fruitPrice) // output 200  500 800
//   })

//   fruit.forEach((item) =>{
//    console.log(item.fruitname) // output  Apple  mango banana
//   })

//   fruit.forEach((num) => {
//   console.log(num.fruitPrice) // output 200 500 800
//   console.log(num.fruitname) // output apple mango banana
//   })

//   fruit.forEach((item) => {
//     console.log(item.fruitname,item.fruitPrice) // output Apple 200  mango 500 banana 800
//   })