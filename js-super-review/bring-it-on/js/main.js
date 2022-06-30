// *Variables*
// Create a variable and console log the value
let test1 = 1
console.log(test1);

// Create a variable, add 10 to it, and alert the value
let test2 = 5
test2 += 10
console.log(test2);

// *Functions*
// Create a function that subtracts 4 numbers and alerts the difference
function sub4(n1,n2,n3,n4){
    console.log(n1 - n2 - n3 - n4)
}

// Create a function that divides one number by another and returns the remainder
function divAndRem(n1, n2){
    console.log(n1 % n2);
}

// *Conditionals*
// Create a function that adds two numbers and if the sum is greater than 50 alert Jumanji
function Jumanji(n1, n2){
    if (n1 + n2 > 50){
        console.log("Jumanji");
    }
}

// Create a function that multiplys three numbers and if the product is divisible by 3 alert ZEBRA
function mul3(n1,n2,n3){
    let product = n1 * n2 * n3
    if (product % 3 === 0){
        console.log("ZEBRA");
    }
}
mul3(1,2,3)

//*Loops*
//Create a function that takes in a word and a number. Console log the word x times where x was the number passed in
function xTimes(word,num){
    for(let i = 0; i < num; i += 1){
        console.log(word);
    }
}
