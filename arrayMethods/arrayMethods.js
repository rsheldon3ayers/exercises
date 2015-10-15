var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

// Use the forEach method to add the name of each planet to a div element in your HTML
var el = document.getElementById("planets");
var e2 = document.getElementById("cap")
planets.forEach(function (currentPlanet) {

  el.innerHTML += "<planet>" + " " + currentPlanet + "</planet>";
});



// Use the map method to create a new array where the first letter of each planet is capitalized
planets.map(function (currentPlanet) {

	e2.innerHTML += "<div>" + currentPlanet.charAt(0).toUpperCase() + currentPlanet.slice(1) + "</div>"


});
// Use the filter method to create a new array that contains planets with the letter 'e'


// Use the reduce method to create a sentence from the words in the following array

planets.filter(function	(currentPlanet) {

});

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

