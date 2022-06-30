document.querySelector('#check').addEventListener('click', check)

function check() {

  const day = document.querySelector('#day').value

  //Conditionals go here
  if(day==="Tuesday"||day==="Thursday"||day==="tuesday"||day==="thursday"){
    alert('class day!')
  }else if(day==="Saturday"||day==="Sunday"||day==="saturday"||day==="sunday"){
    alert('weekend!')
  }else{
    alert('boring')
  }

}
