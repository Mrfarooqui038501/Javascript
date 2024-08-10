// filter syntax name.filter()  it gives true false

//const ar = [1,2,3,4,5,6,7,8,9,10]
 
//let newAr = ar.filter((num) => num >= 5)
//console.log(newAr) // output [ 5, 6, 7, 8, 9, 10 ]

//let arNew = ar.filter((val) => val < 6)
//console.log(arNew) // output  [ 1, 2, 3, 4, 5 ]

// const arNew1 = ar.filter((val) => {
//   return val < 7    // here we are using return statement beacause we open the parenthesis and using curly brackets 
// })
//console.log(arNew1) // output [ 1, 2, 3, 4, 5, 6 ]

const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  //const userBk = books.filter((bk) => bk.title === "Book Two")
  //console.log(userBk) // [   { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 } ]
//   const userBk = books.filter((bk) => bk.edition > 2000)
//   console.log(userBk) // output got it long 

 //const userBk = books.filter((bk) => {return bk.genre === "Fiction" && bk.publish === 1987})
 //console.log(userBk) // output [  { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 } ]


 // MAp syntax name.map() it return the output and values 

 //const numbers = [1,2,3,4,5,6,7,8,9,10]
//  const ans = numbers.map((num) => {
//    return num + 3
//  })

//  console.log(ans) // output [  4,  5,  6,  7,  8,  9, 10, 11, 12, 13 ]

// const result = numbers.map((val) => val)
// console.log(result) // output [ 1, 2, 3, 4,  5, 6, 7, 8, 9, 10 ]

// const result = numbers.map((num) => num*2).map((num) => num+1)
// console.log(result) // output [  3,  5,  7,  9, 11,  13, 15, 17, 19, 21 ]

// const ans = numbers.map((val) => val + 5).map((num) => num -1)
// console.log(ans) // [ 5,  6,  7,  8,  9, 10, 11, 12, 13, 14 ]

// const ans = numbers.map((val) => val + 5).map((num) => num -1).filter((num) => num > 8)
// console.log(ans)  // output  [ 9, 10, 11, 12, 13, 14 ]

// const result = numbers.map((num) => num*2).map((num) => num+1).filter((val) => val >10 && val <30 )
// console.log(result)  // output [ 11, 13, 15, 17, 19, 21 ]


// REDUCE  name.reduce()

let pop = [2,4,6]
// let total = pop.reduce((acc,crval) => {  // acc =accumulator, crval = current value
// return acc + crval
// },0)
// console.log(total) // output 12

//    let total = pop.reduce((acc,crval) => {
//     console.log(`acc val ${acc} and crval val ${crval}`)
//     return acc + crval
//     },0)
//     console.log(total) // output 12

// let ans = pop.reduce((acc, cv) => acc * cv,1)
// console.log(`val of ${acc} and val of ${cv}`)
// console.log(ans) // output 48
    


