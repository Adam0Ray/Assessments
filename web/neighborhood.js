//FUNCTIONS
var links = [
    "https://zearestaurants.com/locations/lafayette/",
    "https://lafayette.servingsushi.com/",
    "https://agavelafayette.com/"]

function openSite() {
var randIdx = Math.random() * links.length;
randIdx = parseInt(randIdx, 10);
var link = links[randIdx];
  return open(link);

};

let restaurantButton = document.querySelector('#random')
restaurantButton.addEventListener('click', openSite)
