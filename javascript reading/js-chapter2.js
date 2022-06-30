// Improved hello
// Write a program that asks the user for his first name and his last name. The program then displays them in one sentence.
firLast=prompt("What is your first name and last name?")
alert(firLast)

// Final values
// Observe the following program and try to predict the final values of its variables.
let a = 2;
a -= 1;
a++;
let b = 8;
b += 2;
const c = a + b * b;
const d = a * b + b;
const e = a * (b + b);
const f = a * b / a;
const g = b / a * a;
console.log(a, b, c, d, e, f, g);

// VAT calculation
// Write a program that asks the user for a raw price. After that, it calculates the corresponding final price using a VAT rate of 20.6%.
const input=prompt("Enter a number:");
const nb=Number(input);
let VAT=0.206*nb;
alert(VAT)

// From Celsius to Fahrenheit degrees
// Write a program that asks for a temperature in Celsius degrees, then displays it in Fahrenheit degrees.

// The conversion between scales is given by the formula: [°F] = [°C] x 9/5 + 32.
const input2=prompt("Enter a C number:");
const nb2=Number(input);
let F=nb2*9/5+32

// Variable swapping
// Observe the following program.

let number1 = 5;
let number2 = 3;

// TODO: type your code here (and nowhere else!)

console.log(number1); // Should show 3
console.log(number2); // Should show 5
// Add the necessary code to swap the values of variables number1 and number2.

// T> This exercise has several valid solutions. You may use more than two variables to solve it.
let number3=number1
number1=number2
number2=number3
console.log(number1);
console.log(number2);