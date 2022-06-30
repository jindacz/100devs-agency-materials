// *Variables*
// Create a variable and console log the value
const a=10
console.log(a)

// Create a variable, add 10 to it, and alert the value
let b=10
b+=10
alert(b)

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub4(a,b,c,d){
    return a-b-c-d
}

// Create a function that divides one number by another and returns the remainder
function divide(a,b){
    return a%b
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function add2(a,b){
    if(a+b>50){
        alert("Jumanji")
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiply3(a,b,c){
    if(a*b*c%3===0){
        alert("ZEBRA")
    }
}

// Carousel
// Write a program that launches a carousel for 10 turns, showing the turn number each time.

// When it's done, improve it so that the number of turns is given by the user.

n1=prompt("how many numbers")
for (let i=1;i<=n1;i++){
    console.log(i)
}

// Parity
// Check the following program that shows even numbers (divisible by 2) between 1 and 10.

// Improve the program so that it also shows odd numbers. Improve it again to replace the initial number 1 by a number given by the user.

let n2=prompt("which numbers n2")
for (let i = n2; i <= 10; i++) {
    if (i % 2 === 0) {
      console.log(`${i} is even`);
    }
    if (i % 2 === 1) {
        console.log(`${i} is odd`);
      }
  }
 
// Input validation
// Write a program that continues to ask the user for a number until the entered number is less than or equal to 100.

// When you are done with the above, improve the program so that the terminating number is between 50 and 100.  
let n3=prompt("which numbers validation")
while (n3>100||n3<50){
    n3=prompt("which numbers validation")
}

// Multiplication table
// Write a program that asks the user for a number, then shows the multiplication table for this number.

// When you are done, improve the program so it only accepts numbers between 2 and 9 (use the previous exercise as a blueprint).
let n4=prompt("input a number")
while (n4>=9||n4<2){
    n4=prompt("input a number")
}
function multTable(n4){
    for (let i = 1; i <= 9; i++) {
        console.log(`${i} x ${n4} = ${i*n4}`);
      }
}
multTable(n4)

// Neither yes nor no
// Write a program that plays "neither yes, nor no" with the user. Specifically, the programs asks the user to enter text until either "yes" or "no" is typed, which ends the game.
let n5=prompt("input until")
y='yes'
n='no'
while (n5!==y||n5!==n){
    n5=prompt("input until")
}
//????????

// FizzBuzz
// Write a program that shows all numbers between 1 and 100 with the following exceptions:

// It shows "Fizz" instead if the number is divisible by 3.

// It shows "Buzz" instead if the number is divisible by 5 and not by 3.

// When it's done, improve it so that the program shows "FizzBuzz" instead for numbers divisible both by 3 and by 5.

for(let i=1;i<100;i++){
    if(i%5==0&&i%3==0){
        console.log("FizzBuzz")
    }else if(i%5==0&&i%3!==0){
        console.log("Buzz")
    }else if((i%3)==0){
        console.log("Fizz")
    }else{
        console.log(i)
    }
}

