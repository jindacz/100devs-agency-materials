//Create a function that takes in an array of numbers. Multiply each number together and alert the product. 
function test(arr){
    // for(let i=1;i<=arr.length;i++){
    //     let prod=1
    //     prod*=arr[i]
    // }
    // alert(prod)
    let prod=1
    arr.forEach(num=>prod *= num)
    console.log(prod)
}
test([10,2,3])

