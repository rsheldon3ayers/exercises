var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = bands.length;
  console.log("loopCount", loopCount);


// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");
console.log("bandElement", bandElement);

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");
console.log("veggieElement", veggieElement);
var bandOutput = " ";
var vegOutput = " ";

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {
	// Keep track of which band we're on in the loop
	var currentBand = bands[loopTracker];
	console.log("currentBand", currentBand);

	// Keep track of which veggie we're on in the loop
    var currentVeggie = vegetables[loopTracker];
    console.log("currentVeggie", currentVeggie);

  // Add the band names into the correct <div>
  bandOutput = bandOutput + "<div>" + currentBand;
  bandOutput = bandOutput + "</div>";

 // Add the veggie names into the correct <div>
  vegOutput = vegOutput + "<div>" +currentVeggie;
  vegOutput = vegOutput + "</div>";
}
bandElement.innerHTML = bandOutput;

veggieElement.innerHTML = vegOutput

switch (criteria) {
	case 1:
	  console.log("one")
}