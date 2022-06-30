//---Easy
//create a function that subtracts two numbers and alerts the difference
function sub2(num1,num2){
    
    alert(num1-num2)
}
sub2(50,30)

//create a function that divides three numbers and console logs the quotient
function divide(n1,n2,n3){
    console.log(n1/n2/n3)
}

//create a function that multiplys three numbers and returns the product
function multiply3(n1,n2,n3){
    console.log(n1/n2/n3)
}
function turnIntoMoney(){
    let product=multiply3(5,10,2)
    alert('$'+product)
}
turnIntoMoney()

//---Medium
//create a function that takes in three numbers. Add the first two numbers and return the remainder of dividing the sum of the first two numbers by the third number
function remainder(n1,n2,n3){
    console.log((n1+n2)%n3)
}
console.log(remainder(3,3,2))


//---Hard
//create a function that takes in 4 numbers. Multiply the first two numbers. If the product is greater than 100 add the sum of the last two numbers and console log the value. If the product is less that 100, subtract the difference of the last two numbers and console log the value. If the product is 100, multiply the first three numbers together and alert the remainder of dividing the fourth number
function remainder(n1,n2,n3,n4){
    if (n1*n2>100){
        console.log(n3+n4)
    }else if(n1*n2<100){
        console.log(n3-n4)
    }
}
