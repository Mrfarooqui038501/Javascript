/*-  using inspect on html file  we can check all info about the page in "Element"
- document.getElementById('title') we use to get information about the Element id 
- document.getElementById('title').className we use to get information about the class name 
- document.getElementById('title').getAttribute we use this get all Attributes
- document.getElementById('title').getAttribute('id') we use this to get all arrtibutes by passing their name
- name.innerText =  will give all the text from html file
- name.textContent = will give all the text if its even set display none using css means if something is hide this also show that 
-name.innerHTML = Sets or returns the HTML content of an element.Includes all HTML tags and elements within the specified element.

---- QUERY SELECTOR 
- document.querySelector('give any tag name which info you want to have ')
-document.querySelector('#idname') this we use for to select the id 
-document.querySelector('.name')this we use for to select the class

___ QUERY SELECTOR ALL

 - document.querySelectorAll("tag name") it will be good we do it storing it in variable for further  use 
 - const myli =document.querySelectorAll("tag name") == output undefined then just write variable name 
  - myli[0].style.color = 'green' this will change first elemtent color "[0]" we using it becuase we can change only one item at a time
  --  myli[1].style.backgroundColor = 'red' --  more example 
-- NOTE whenever we use document.querySelectorAll we have to give the index'[0]' only then it  will work
-- QUERY SELECTOR ALL  always give nodelist and its not array its just like have arrays properties 

   document.querySelectorAll('li)
VM2887:1 Uncaught SyntaxError: Invalid or unexpected tokenUnderstand this error
document.querySelectorAll('li')
NodeList(3) [li, li, li]
const myul = doc
VM2943:1 Uncaught ReferenceError: doc is not defined
    at <anonymous>:1:14
(anonymous) @ VM2943:1Understand this error
const myul = document.querySelectorAll('li')
undefined
const myul = document.querySelectorAll('ul')
undefined
const myli = document.querySelectorAll('li')
undefined
myli
NodeList(3) [li, li, li]0: li1: li2: lilength: 3[[Prototype]]: NodeList
myli[0].st
undefined
myli[0].style.color = 'green'
'green'
myli[2].st
undefined
myli[2].style.color = 'pink'
'pink'
my
VM3322:1 Uncaught ReferenceError: my is not defined
    at <anonymous>:1:1
(anonymous) @ VM3322:1Understand this error
myli[1].style.backgroundColor = 'red'
'red'
myli[0].style.padding = '50px'
'50px'
myli[0].style.padding = '15px'
'15px'
myli[2].style.letterSpacing = '13px'
'13px'
all teh above are uses of document.querySelectorAll()
---


>>>>>>>>> document.getElementsByClassName('list') >>>>..
-- document.getElementsByClassName('list') in this we are getting all info using class ......
...and it will return "HTMLCollection []"
 -- if we use this and store it in variable so we can use it for further things as well
 const listName = document.getElementsByClassName('list') 
 -- if we want to conver it in array so we use Array.from(varible name) then we can use it like array 

 >>>>>>>>> HOW to create a new element in DOM
 -- How to find Children and parent using classes 
<script>
    const parent = document.querySelector('.parent')
    // console.log(parent) // it will all elements of div  class
    // console.log(parent.children) // output HTMLCollection(4) [div, div, div, div]
    // console.log(parent.children[1].innerHTML); // output August

    for(let i = 0; i < parent.children.length; i++ ){ inner.HTML have similar propeties like  array so we can use loop on it
       // console.log(parent.children[i].innerHTML) // output Janurary Auagust  July  Dec
    }
    for(let i =0; i <parent.children.length; i++){
        console.log(parent.children[i]) // <div>Janurary</div> <div>August</div> <div>July</div> <div>Dec</div>
    } 
     
    // Styling using parent and children
    parent.children[0].style.color = "red" // we can style the child like this way as well using DOM
    parent.children[2].style.padding = "10px" 
    //parent.children[1].style.background-color = "red"
    //console.log(parent.firstElementChild) // January // here we are getiing the child  elements 
    console.log(parent.lastElementChild)  // output Dec
    
     //console.log('NODES:', parent.childNodes) // output NODES: NodeList(9) [text, div, text, div, text, div, text, div, text]
    //console.log("NODES:".,children.parentNodes) // wrong cant access 
    const  month = document.querySelector('.parent')
    console.log(month)
    console.log(month.parentElement);//  from this we can access the parent elemets
    console.log(month.nextElementSibling); // from this we can access the child next sibling elmement 

    // >>>>>> now we create elements in DOM 
    const div = document.createElement("div") 
    // in abvoe line we created vaiable div using  " document.createElement("div") "
    console.log(div)
    // here we called it  
    div.className = "main"
    // here we set the class name
    div.id = Math.round(Math.random() *20 +1)
    // here we set the id 
    div.setAttribute('title'," General title")
    // here  we are setting attribute title 
    div.style.backgroundColor = "pink"
    // here we are giving background color
    div.style.padding = "10px"
    // here we giving padding 
    div.style.color = "blue"
    // here  we are giving the color to the text
    
    const adTxt = document.createTextNode("I am learing Javascript")
    // here we made a variabe and used   document.createTextNode we put the text that we want in div
    div.append(adTxt)
    // here  we adding the text in div used append
    document.body.appendChild(div)
    // here we are  connecting to document body show it will be visible on our  page

       // >>>>>>. in this we will edit and remove elements from DOM
           

        <body style="background-color:brown;color: pink;">
    <ul class="javascript">
        <li> I am learing Javascript </li>
    </ul>
</body>
<script>
    function addlanguage(langName){
        // we made this function so we don't need to do these below step again and again
        const lil = document.createElement('li');
        lil.innerHTML = `${langName}`
        document.querySelector('.javascript').appendChild(lil)
    }
     addlanguage("Java")
     addlanguage("php")

     function addcar(carName){   // 
        const brand = document.createElement('li')
        brand.innerHTML = `${carName}`
        document.querySelector('.javascript').appendChild(brand)
     }
     addcar("ferrari")
     addcar("Bucati")

     // now we will write above code in optimise way 
     function addbike(bikeName){
        const brand = document.createElement('li')
      brand.appendChild(document.createTextNode(bikeName)) // this is the optimise lines 
      document.querySelector('.javascript').appendChild(brand)
     }
     addbike("Hayabhusa")
     addbike("BMW")

     function addbus (busName){
        const bus = document.createElement("li")
        bus.appendChild(document.createTextNode(busName))
        document.querySelector('.javascript').appendChild(bus)
     }
     addbus("DTC")
     addbus("haryana Road ways")

     // now we will edit the elements 
     const edit = document.querySelector('li:nth-child(7)') // here we selecting which element we want to change
     const newli = document.createElement('li') // here we are creating new li
     newli.textContent ="I am changed" // here we are mentioning what we want to change 
     edit.replaceWith(newli) // we are replacing new with old element 

     const nEdit = document.querySelector('li:nth-child(9)')
     const newN = document.createElement('li')
     newN.textContent= "I am second chnage"
     nEdit.replaceWith(newN)

     const editNew = document.querySelector("li:last-child")
     editNew.outerHTML = '<li>I am new</li>'

     // Now we will se how to remove elements 
       const removeEL = document.querySelector("li:last-child") // in query selector we are passing with child we want to remove 
        removeEL.remove()
</script>
</html>

</script>






*/ 

