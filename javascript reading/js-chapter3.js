// Following day
// Write a program that accepts a day name from the user, then shows the name of the following day. Incorrect inputs must be taken into account.

let day=prompt("what day is today?")
switch (day){
    case "Monday":
        console.log("following tuesday")
        break;
    case "Tuesaday":
        console.log("following wednesday")
        break;
    default:
        console.log("not a valid weather type")
}


// Number comparison
// Write a program that accepts two numbers, then compares their values and displays an appropriate message in all cases.
let n1=Number(prompt("num1"))
let n2=Number(prompt("num2"))

if (n1>n2){
    console.log("n1 larger than n2")
}else if(n1<n2){
    console.log("n1 is smaller than n2")
}else{
    console.log("n1 is equal to n2")
}

// Final values
// Take a look at the following program.

let nb1 = Number(prompt("Enter nb1:"));
let nb2 = Number(prompt("Enter nb2:"));
let nb3 = Number(prompt("Enter nb3:"));

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++;
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
console.log(nb1, nb2, nb3);


// Number of days in a month
// Write a program that accepts a month number (between 1 and 12), then shows the number of days of that month. Leap years are excluded. Incorrect inputs must be taken into account.
let month = prompt("Enter a month")

switch (month){
    case January:
        console.log("31 days")
        break;
    case February:
        console.log("28 days")
        break;
    case March:
        console.log("31 days")
        break;
    case April:
        console.log("30 days")
        break;
    case May:
        console.log("31 days")
        break;
    case June:
        console.log("30 days")
        break;
    case July:
        console.log("31 days")
        break;
    case August:
        console.log("31 days")
        break;
    case September:
        console.log("30 days")
        break;
    case October:
        console.log("31 days")
        break;
    case November:
        console.log("30 days")
        break;
    case December:
        console.log("31 days")
        break;
    default:
        console.log("invalid month")
}


// Following second
// Write a program that asks for a time under the form of three information (hours, minutes, seconds). The program calculates and shows the time one second after. Incorrect inputs must be taken into account.

// This is not as simple as it seems... Look at the following results to see for yourself:

// 14h17m59s => 14h18m0s
// 6h59m59s => 7h0m0s
// 23h59m59s => 0h0m0s (midnight)

let hour = Number(prompt("Enter the hour: "))
let minutes = Number(prompt("Enter the minutes: "))
let seconds = Number(prompt("Enter the seconds: "))
 
if (hour >= 0 && hour <= 23 && minutes >= 0 && minutes <= 59 && seconds >=0 && seconds <= 59){
    seconds++
    if (seconds === 60){
        seconds = 0;
        minutes++
        if (minutes === 60){
            minutes = 0;
            hour++
            if (hour === 24){
                hour = 0;
            }
        }
    }
    console.log (`In a second the time will be ${hour}: ${minutes} : ${seconds}`);
    }
else {
    console.log("Enter correct information");
}