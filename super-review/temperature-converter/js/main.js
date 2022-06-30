//Write your pseduo code first! 
document.querySelector('h1').addEventListener('click',convert)

function convert(){
    //enter the value
    let enteredVal=Number(document.querySelector('input').value)
    //convert c to f
    let temp=enteredVal*1.8+32
    //show value to user
    document.querySelector('h2').innerText=temp
}