console.log("Welcome"[7]);
console.log("object".length);
console.log(object[object.length - 1]);

// CURRENCY CONVERTER
// $NG TO $USD FORMULA:
//  NG = USD x 1500

let USD = 1200
let NG = /*convert USD to NG */

console.log(/*Print out NG to the console */)

// Comparison Operators
let age = 16;
let hasId = true
if ( age > 18 ) {
    console.log("You're x years old, you may enter the club")
} else if ( age === 18) {
    console.log("You just turned 18, welcome!")
}else {
    console.log("You're x years old, get outta here.")
}

// Logical Operators
// && and ||
 
// Ternary Operator
let str = hasMembership ? "show Video" : "hide Video"

// Loops -- Loops repeat the same code over and over again 
// Types of loops -- For loop, While loop,  Do while loop
let counter = 1
while (counter < 5) {
    console.log("while loop ran")
    counter = counter + 1;
}
console.log("while loop finished running");

for (let i = 0; i < 5; i++){
    console.log(i)
}

/* write a for-Loop that loops through i to 15.
  - if the number is odd, print "asap"
  - if the number is even, print 'frontend'
  - if the number is divisible by 5, print "asapfrontend"
  
  */

  for (let i = 1; i <= 15; i++){
    if(i % 5 === 0)
        console.log(`${i} - asap frontend`)
  }else if (i % 2 === 0){
    console.log(`${i} - frontend`)
  }else {
      console.log(`${i} - asap`)
  }

/* Print out all the characters from the string:
  "Asap frontend"
*/

let str = ""
for (let i = 0; i < str.length; ++i){
    console.log(str[i]) 
}


// Function -- functions are reusable blocks of code that perform a specific task.
// function Declaration
function greetUser(name) {
    console.log(name)
}

// call the function
greetUser("paul")