//Create a function that takes in an array of numbers. Return a new array containing every even number from the original array (do not use map or filter)

function onlyEvensFinder(arr){
    // let res = []
    // for (let i = 0; i < arr.length; i += 1){
    //     if (arr[i] % 2 === 0){
    //         res.push(arr[i])
    //     }
    // }
    // return res

    // let onlyEvens = []
    // arr.forEach( e => {
    //     if (e % 2 === 0){
    //         onlyEvens.push(e)
    //     }
    // })
    // return onlyEvens

    return arr.filter( num => num % 2 === 0 )
}

console.log(onlyEvensFinder([1,2,3,4,5,6]))