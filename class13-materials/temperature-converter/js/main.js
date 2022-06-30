//Write your pseduo code first! 

//need the value in selseeyes
document.querySelector('#check').addEventListener('click', convert)

//convert from selseeyes to fairenheight

function convert() {

    const sel = document.querySelector('#sel').value
  
    //Conditionals go here
    const F=sel*(9/5)+32
    
    document.querySelector('#placeToPutResult').innerText = F
  }
  

//show it