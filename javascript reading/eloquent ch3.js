// Exercises
// Minimum
// The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.

function min(a,b){
    return Math.min(a,b)
}

// console.log(min(0, 10));
// // → 0
// console.log(min(0, -10));
// // → -10
// If you have trouble putting braces and parentheses in the right place to get a valid function definition, start by copying one of the examples in this chapter and modifying it.

// A function may contain multiple return statements.

// Recursion
// We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:

// Zero is even.

// One is odd.

// For any other number N, its evenness is the same as N - 2.

// Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

// Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?

function isEven(n){
    if(n==0) return true
    else if(n==1) return false
    else if(n<0) return isEven(-n)
    else return isEven(n-2)
}

// console.log(isEven(50));
// // → true
// console.log(isEven(75));
// // → false
// console.log(isEven(-1));
// // → ??
// Your function will likely look somewhat similar to the inner find function in the recursive findSolution example in this chapter, with an if/else if/else chain that tests which of the three cases applies. The final else, corresponding to the third case, makes the recursive call. Each of the branches should contain a return statement or in some other way arrange for a specific value to be returned.

// When given a negative number, the function will recurse again and again, passing itself an ever more negative number, thus getting further and further away from returning a result. It will eventually run out of stack space and abort.



// Bean counting
// You can get the Nth character, or letter, from a string by writing "string"[N]. The returned value will be a string containing only one character (for example, "b"). The first character has position 0, which causes the last one to be found at position string.length - 1. In other words, a two-character string has length 2, and its characters have positions 0 and 1.

// Write a function countBs that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters there are in the string.

// Next, write a function called countChar that behaves like countBs, except it takes a second argument that indicates the character that is to be counted (rather than counting only uppercase “B” characters). Rewrite countBs to make use of this new function.

function countBs(str){
    let count=0
    for(let i=0;i<str.length;i++){
        if(str[i]=="B"){
            count++
        }
    }
    return count
}

function countChar(str,s){
    let count=0
    for(let i=0;i<str.length;i++){
        if(str[i]==s){
            count++
        }
    }
    return count
}

// console.log(countBs("BBC"));
// // → 2
// console.log(countChar("kakkerlak", "k"));
// // → 4
// Your function will need a loop that looks at every character in the string. It can run an index from zero to one below its length (< string.length). If the character at the current position is the same as the one the function is looking for, it adds 1 to a counter variable. Once the loop has finished, the counter can be returned.

// Take care to make all the bindings used in the function local to the function by properly declaring them with the let or const keyword.