// *Variables*
// Declare a variable and assign it to a sentance as a string. Alert if the sentance is a question
let str="is this the best week ever?"
console.log(str.endsWith("?"))


//Declare a variable, assign it a string of multiple words, replace every "jr. dev" with "software engineer", and print it to the console
let arr="jr.dev test test"
arr=arr.replace(/jr.dev/g,"software engineer")
console.log(arr)

console.log(arr.replaceAll("jr.dev","software engineer"))

// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rps(){
    let random=Math.random()
    if(random<.33){
        return 'rock'
    }else if(random<.66){
        return 'paper'
    }else{
        return 'scissors'
    }
}

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(choice){
    let botChoice=rps()
    if((choice==='rock'&&botChoice==='scissors')||(choice==='scissors'&&botChoice==='paper')||(choice==='paper'&&botChoice==='rock')){
        console.log('win')
    }else if(choice===botChoice){
        console.log('tie')
    }else{
        console.log('lose')
    }
}
checkWin("paper")

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.

