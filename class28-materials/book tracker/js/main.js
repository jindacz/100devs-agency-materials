//Example fetch using pokemonapi.co
document.querySelector('button').addEventListener('click', getFetch)
document.querySelector('h2').innerText = localStorage.getItem('books')

function getFetch(){
  const choice = document.querySelector('input').value
  console.log(choice)
  const url = `https://openlibrary.org/isbn/${choice}.json`

  fetch(url)
      .then(res => res.json()) // parse response as JSON
      .then(data => {
        console.log(data.title)
        //if local storage is null
        if(!localStorage.getItem('books')){
          localStorage.setItem('books',books)
        }else{
          //put title into local storage
          let books=localStorage.getItem('books')+" ; "+data.title
          
          //update use local storage
          document.querySelector('h2').innerText = localStorage.getItem('books')
        }

      })
      .catch(err => {
          console.log(`error ${err}`)
      }); 
}

