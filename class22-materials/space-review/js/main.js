//Arrays





//Create and array of numbers. Sum all of the numbers. Alert the sum.
arr=[2,3,4]
// let sum=0
// for(let i=0;i<arr.length;i++){
//     sum+=arr[i]
// }
// console.log(sum)
let sum=arr.reduce((acc,curr)=>acc+curr,0)
console.log(sum)

//Create a function that takes in an array of numbers
//Return a new array of numbers that is every original number squared
// function squared(arr){
//     for(let i=0;i<arr.length;i++){
//         arr[i]=arr[i]**2
//     }
//     return arr
// }
// console.log(squared(arr))

nums=[2,3,4]
let numsSquared=nums.map(n=>n*n)
console.log(numsSquared)

//Create a function that takes string
//Print the reverse of that string to the console
function reverseStr(str){
    //split turn string into array
    //join back to string
    let reverseStr=str.spilt('').reverse().join()
    console.log()
}

//Create a function that takes in a string
//Alert if the string is a palindrome or not
// const isPalindrome=s=>s===s.split('').reverse().join('')?console.log('Yes'):console.log('No')

function isPalindrome(str){
    //reverse the string (google)
    let reverseStr=str.split('').reverse().join('')
    //compare two strings
    if(str.toLowerCase()===reverseStr.toLowerCase()){
        console.log('Yes')
    }else{
        console.log('No')
    }
}

//sort
Array.sort((a,b)=>a-b)