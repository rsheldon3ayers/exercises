var bands = ["Boyz II Men", "NSync", "New Kids on the Block", "98 Degrees", "One Direction"];
var vegetables = ["Carrots", "Kale", "Zucchini", "Broccoli", "Squash"];

// The number of loops to perform (what if the array changes?)
var loopCount = bands.length;

// Keep track of which band we're on in the loop
var currentBand = bands[];

// Keep track of which veggie we're on in the loop
var currentVeggie = vegetables[];

// Get a reference to the appropriate DOM element for bands
var bandElement = document.getElementById("boy-bands");

// Get a reference to the appropriate DOM element for vegetables
var veggieElement = document.getElementById("vegetables");
var bandOutput = " ";
var vegOutput

// Start looping
for (var loopTracker = 0; loopTracker < loopCount; loopTracker += 1) {

  // Add the band names into the correct <div>
  bandOutput = bandOutput + "<div>" + currentBand;
  bandOutput = bandOutput + "</div>";


  // Add the veggie names into the correct <div>
  vegOutput = vegOutput + "<div>" +currentVeggie;
  vegOutput = vegOutput + "</div>";

}
bandElement.innerHTML = bandOutput;
veggieElement.innerHTML = vegOutput