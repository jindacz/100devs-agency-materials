// *Variables*
// Create a variable and console log the value
let a=100
console.log(num)

// Create a variable, add 10 to it, and alert the value
let b=10
b+=10
alert("b")

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function subtract(a,b,c,d){
    alert(a-b-c-d)
}

// Create a function that divides one number by another and returns the remainder
function remainder(a,b){
    return a%b
}
console.log(remainder(12,3))

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function jumanji(a,b){
    if(a+b>50){
        alert("Jumanji")
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function multiplys3(a,b,c){
    if((a*b*c)%3==0){
        alert("Zebra")
    }
}

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function logXTimes(word,x){
    for(i=1;i<x;i++){
        console.log(word)
    }
}
