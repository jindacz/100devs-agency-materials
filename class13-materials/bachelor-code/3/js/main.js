const contestants = document.querySelectorAll("h2")
//const contestants = document.querySelectorAll(".contentant")

//put smurf on every thing in the class
Array.from(contestants).forEach(element => element.addEventListener('click', checkForRose))

function checkForRose(click){
	if(click.target.classList.contains('rose')){
		document.querySelector('#nikki').classList.toggle('hidden')
	}else{
		alert("Wrong!");
	}
}
