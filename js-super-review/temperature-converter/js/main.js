//Write your pseduo code first! 
// c to f
document.querySelector('h1').addEventListener('click', cToF)

function cToF(){
    // need to value in c
    let temp = Number(document.querySelector('input').value)

    // convert c to f
    temp = temp * 9/5 + 32

    // show the value
    document.querySelector('h2').innerText = temp
}
