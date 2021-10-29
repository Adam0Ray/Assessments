// console.log('hello world')  //good test


//FUNCTIONS
function clickColor(event){
	event.preventDefault();
	alert('Green');
}

function clickPlace(event){
	event.preventDefault();
	alert('Mountains');
}

function clickRitual(event){
	event.preventDefault();
	alert('Exercise');
}


//VARIABLES
let colorButton = document.querySelector('#color');
colorButton.addEventListener('click', clickColor);

let placeButton = document.querySelector('#place');
placeButton.addEventListener('click', clickPlace);

let ritualButton = document.querySelector('#ritual');
ritualButton.addEventListener('click', clickRitual);
