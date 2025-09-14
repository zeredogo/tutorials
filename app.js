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

let age = 15;
let hasId = true;
if ( age >= 18 && hasId === false ) {
    console.log(`You're ${age} years old, you may enter the club`)
} else {
    console.log(`You're ${age} years old, get outta here.`)
}

// Ternary Operator

const clubMenbers =
  age >= 18 || hasId === false
    ? `You're ${age} years old, you may enter the club`
    : `You're ${age} years old, get outta here.`;

console.log(clubMenbers);

// Loops 
/*let counter = 1;
while(counter <= 5) {
    console.log("loop is running")
    counter = counter + 1;
}
console.log(`finished running ${counter}`)*/

for (let i = 0; i < 5; i++){
    console.log(i)
}

let style = "Prettier";
for (let i = 1; i < style.length; i++){
    console.log(style)
}
