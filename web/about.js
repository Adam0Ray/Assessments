console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	// console.log('form submit');
	alert('The form has been submitted successfully.')
}

function mouseoverDucky(event){
	event.preventDefault();
	alert('You are shining, just like this Ducky!');
}
let duck = document.querySelector('img');
duck.addEventListener('mouseover', mouseoverDucky);

let form = document.querySelector('form#contact');

form.addEventListener('submit', handleSubmit);