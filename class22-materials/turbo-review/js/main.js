// *Variables*
// Declare a variable and assign it to your fav drink as a string. Make sure there is no whitespace on either side of the string, and print the value to the console
let fD=" cola "
fD=fD.trim()
console.log(fD)

//Declare a variable, assign it a string of multiple words, and check to see if one of the words is "apple".
let str="bob str apple"
if(str.search('apple')!==-1){
    console.log("yes")
}else{
    console.log("no")
}


// *Functions*
// Create a function that returns rock, paper, or scissors as randomly as possible
function rand(){
    val=Math.random();
    if(val<0.33){
        return "rock"
    }else if(val>=0.33 && val<0.66){
        return "paper"
    }else{
        return "scissors"
    }
}
rand()

// *Conditionals*
//Create a function that takes in a choice (rock, paper, or scissors) and determines if they won a game of rock paper scissors against a bot using the above function
function checkWin(playerChoice){
    let botChoice=rand()
    if((playerChoice==='rock'&&botChoice==='scissors')||playerChoice==='paper'&&botChoice==='rock'||playerChoice==='scissors'&&botChoice===''){
        console.log('win')
    }else if(playerChoice===botChoice){
        console.log('tie')
    }else{
        console.log('lose')
    }
}
checkWin('rock')

//*Loops*
//Create a function that takes an array of choices. Play the game x times where x is the number of choices in the array. Print the results of each game to the console.
function playGameXTimes(arr){
    arr.forEach(choice=>checkWin(choice))
}
playGameXTimes(['rock','paper','scissors'])