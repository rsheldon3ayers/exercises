/*
  .....  YOUR MISSION  .....
  1. Author functions that define the Make
      and Model of a Car and the Car itself.
  2. Create three instances of your Car that
      each have a different color.
  3. Each Car you create should inherit the
      make and model name.
*/


/*
  Create a function, Make, that has a property
   of makeName and give it the value of your
   vehicle's make.
 */
var Make = function() {
  this.makeName = "Toyota";

}


/*
Create a function, Model, to hold the 
corresponding property and value
*/
var Model = function () {
  this.modelName = "Camry"
}

// What is the prototype of a Model?
Model.prototype = new Make();

// Define a Car

var Car = function(colorName) {
  this.color = colorName;
};

// What is the prototype of a Car?
Car.prototype = new Model();

// Create the first car
var Car1 = new Car("red");



console.log("Car1", Car1)

// Create the second car

var Car2 = new Car("green");


console.log("Car2", Car2)
// Create the third car
var Car3 = new Car("black");
console.log("Car3", Car3);