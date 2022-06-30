// Coding time!
// Create all these programs in a generic fashion: the program output should reflect any update in the array's content.

// Musketeers
// Write a program that:

// Creates an array named musketeers containing values "Athos", "Porthos" and "Aramis".
let musketeers=["Athos","Porthos","Aramis"]
// Shows each array element using a for loop.
for(let i=0;i<musketeers.length;i++){
    console.log(musketeers[i]);
}
// Adds the "D'Artagnan" value to the array.
musketeers.push("D'Artagnan")
// Shows each array element using the forEach() method.
musketeers.forEach(item=>{
    console.log(item);
})
// Remove poor Aramis.
musketeers.splice(2,1)
// Shows each array element using a for-of loop.
for(const item of musketeers){
    console.log(item)
}

// Sum of values
// Write a program that creates the following array, then calculates and shows the sum of its values (42 in that case).
const values = [3, 11, 7, 2, 9, 10]
let sum=0
function sumArr(arr){
    for(let item of arr){
        sum+=item
    }
    return sum
}
console.log(sumArr(values))


// Array maximum
// Write a program that creates the following array, then calculates and shows the array's maximum value.
// const values = [3, 11, 7, 2, 9, 10];
const val = [3, 11, 7, 2, 9, 10]
let max=0
function maxArr(arr){
    for(let i=0;i<arr.length;i++){
        if(arr[i]>max){
            max=arr[i]
        }
    }
    return max
}
console.log(maxArr(val))


// List of words
// Write a program that asks the user for a word until the user types "stop". The program then shows each of these words, except "stop".
let word=[]
let input=prompt("Enter a word")
while(input!=="stop"){
    word.push(input)
    input=prompt("Enter a word")
}
for(i=0;i<word.length;i++){
  console.log(word[i])
}    