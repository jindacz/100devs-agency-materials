//Create an array of movie titles. Loop through the array and each element to the h2.
let movie=['m1','m2','m3']
for(let i=0;i<movie.length;i++){
    document.querySelector('h2').innerText+=movie[i]+' '
}

//Create an array of numbers. Loop through the array and three to each number and replace the old number.
let nums=[1,2,3]
for(i=0;i<nums.length;i++){
    nums[i]+=3
}
// nums.forEach((item,i)=>{nums[i]=item+3})

//Find the average of all the numbers from question two
let sum=0
nums.forEach((item)=>{sum+=item})
console.log(sum/nums.length)