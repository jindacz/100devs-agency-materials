//Create a function that has a loop that prints '21' 21 times to the console and then call that function
//Bonus can you make it print '21' 21 times to the dom?

function Run21 (){
    for (let i = 0; i < 21; i += 1) {
        document.querySelector("#savageSays").innerText += ' 21 '
        console.log(21)
    }
}
Run21 ()