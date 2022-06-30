//Write your pseduo code first! 

//only on click

//get value out of input

//

document.querySelector('#check').addEventListener('click', calc)

function calc() {
  //get the value out of input
  const C = document.querySelector('#temp').value
    //convert the value 
  F = C*9/5+32
  //show value to user
  document.querySelector('#res').innerText = F
}
