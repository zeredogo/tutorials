/*let pie = "Hello World";
console.log(pie[pie.length - 1]);

// CURRENCY CONVERTER
// $NG TO $USD FORMULA:
//  NG = USD x 1500

let USD = 14;
let NG = USD * 1500;
console.log(NG);

// conditions
let numbers = 5;
if( numbers >= 15) {
    console.log("Numbers is Greater than 15")
} else {
    console.log("Numbers is Less than 15")
}

let age = 25;
if ( age >=25) {
    console.log("Age is equal to 25")
} else {
    console.log("Age is less than 25")
}



let colors = 10;
if (colors > 10) {
    console.log("Red");
}else if (colors < 10) {
    console.log("Blue")
}else{
    console.log("Green");
};


let Apple = 11;
if (Apple > 10) {
    console.log("iPhone");
}else if (Apple < 10) {
    console.log("MacBook")
}else{
    console.log("iPad")
}; 

let Arrays = [1, 2, 3, 4, 5]

console.log(Arrays)*/
/* write a for-Loop that loops through i to 15.
  - if the number is odd, print "back"
  - if the number is even, print 'Welcome'
  - if the number is divisible by 5, print "welcome"
  
  */
/* Print out all the characters from the string:
  "Asap frontend"
*/

// &&  and ||

/*let age = 15;
let hasId = true;
if ( age >= 18 && hasId === false ) {
    console.log(`You're ${age} years old, you may enter the club`)
} else {
    console.log(`You're ${age} years old, get outta here.`)
}

// Ternary Operator
 let abc = a <1 ?'hi' : "hello";
const clubMenbers =
  age >= 18 || hasId === false
    ? `You're ${age} years old, you may enter the club`
    : `You're ${age} years old, get outta here.`;

console.log(clubMenbers);*/

// Loops
/**let counter = 1;
while(counter <= 5) {
    console.log("loop is running")
    counter = counter + 1;
}
console.log(`finished running ${counter}`)

for (let i = 0; i < 5; i++){
    console.log(i)
}

let style = 123456;
for (let i = 0; i <= style.length; i++){
    console.log(style.length - 1)
} */

let signIn = true;
let vipUser = true;

// show video : don't show video
const showVideo =
  signIn === true && vipUser === true ? "show video" : "Don't show video";
console.log(showVideo);

if (signIn === true && vipUser === true) {
  console.log("show video");
} else {
  console.log("don't show video");
}

signIn === true && vipUser === true
  ? console.log("show video")
  : console.log("Don't show video");

/* write a for-Loop that loops through i to 15.
  - if the number is odd, print "back"
  - if the number is even, print 'Welcome'
  - if the number is divisible by 5, print "welcome back"
  
  */
for(i = 1; i <= 15; i++){
    if(i % 5 === 0){
        console.log('welcome back')
    } else if(i % 2 === 0){
        console.log('Welcome')
    }else{console.log('Back')}
}



function convertUsdToAud(dollers){
  let AUD = dollers * 1.5
  return AUD
}
console.log(convertUsdToAud(1000))

 Function
//  function Declaration
 function greetUser(name, time) {
    console.log(`Good ${time}, ${name}`)
 }

// call the function
 greetUser("Paul", "Morning");
 greetUser("Dogo", "evening")

  function sum(num1, num2) {
    return num1 + num2
  }

 console.log(sum(2, 7))



// function Declaration
 function fullName(firstName, lastName){
    console.log(firstName, lastName)
 }
// call the function
 fullName("Paul", "Dogo")

 const name = (firstName, lastName) => {
    console.log(lastName, firstName,)
 }

name("Paul", "Dogo")

  /* Create a function that converts $USD into NG
   #NG to $USD formula:
   NG = USD x 1500

   convertUsdToNg(1000)
   convertUsdToNg(500)
   convertUsdToNg(300)
  */
 function convertUsdToNg(dollers){
  let NG = dollers * 1500
  return NG
}
console.log(convertUsdToNg(1000))


//  Arrow Function

   const convertUsdToNg2 = (dollars) => {
      return dollars * 1500
   }

   console.log(convertUsdToNg2(350))

// Arrays
   let array = [20, 15, 10, 30, 5, 'Paul']

   array.push('James')

    console.log(array)

   let Product = ['Mango', 50, true, 'Grapes', 300, false];

   console.log(Product[Product.length - 1])

   Product.push('Orange')

   console.log(Product[Product.length - 1])

   Product.push(60, true, 'Strawberry')

   console.log(Product[Product.length - 1])

   Product.pop(Product[Product.length - 1])

   console.log(Product[Product.length - 1])


  

  




//   // first element of an array
//   console.log(array[0])
//   // Last element of an array
// console.log(array[array.length - 1])

// array methods
// Mutating method
//array.push(13)

// Non-mutating method

/*let filteredArray = array.filter((element) => {
  console.log(element);
  if (element <= 15) {
     return true
    }
})*/

//Another way of doing this if the para-meter is just one you don't need ()
// and you just return the element directly with the if statement
/* 
let filteredArray = array.filter(element => {
     return element <= 15
    })
*/
    // there is another way but only if you are returning a single line of code 
//     let filteredArray = array.filter(element => element <= 15)
// console.log(filteredArray)

//Exercise
// Filter out all the people who are not 18+ years old
