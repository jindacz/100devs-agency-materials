//Arrays

//Create and array of numbers. Sum all of the numbers. Alert the sum.
arr=[1,2,3]
arr.reduce((total,item)=>total+item,0)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
arr.map(item=>item*item)

//Create a function that takes string
//Print the reverse of that string to the console
str="hello"
function rev(str){
    return str.split('').reverse().join('')
}

//Create a function that takes in a string
//Alert if the string is a palindrome or not
str="racecar"
function palindrome(str){
    return str==rev(str)
}