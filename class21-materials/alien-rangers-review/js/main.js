//Arrays

//Create and array of tv shows. Loop through and print each show to the console
let tvS=["s1","s2","s3"]
tvS.forEach(show=>console.log(show))

//Create and array of numbers
let nums=[3,4,5,6,7,8]
//Return a new array of numbers that includes every even number from the previous Arrays
let res=[]
function even(arr){
    for(let i=1;i<arr.length;i++){
        if(arr[i]%2===0){
            res.push(arr[i])
        }
    }
    return res
}
console.log(even(nums))

let onlyEvens=arr=>arr.filter(n=>n%2===0)
console.log(onlyEvens(nums))


//Create a function that takes in an array of numbers
//Alert the sum of the second lowest and the second highest number
// let nums=[3,4,5,6,7,8]
// function secondLH(arr){
//     let maxIndex=IndexOf(Math.max(arr))
//     let minIndex=IndexOf(Math.min(arr))
//     delete arr[maxIndex]
//     delete arr[minIndex]
//     let max=Math.max(arr)
//     let min=Math.min(arr)
//     console.log(max+min) 
// }
// secondLH(nums)
function sumSecondLowAndHigh(arr){
    let sorted=arr.sort((a,b)=>a-b)
    console.log(sorted[1]+sorted[n-2])
}
sumSecondLowAndHigh([2,3,1,5,4])