/*
  ...........YOUR MISSION...........

  Write a program that will convert a temperature from
  fahrenheit to celsius, or from celsius to fahrenheit.

  1. In the HTML, have one input field where someone can enter
      in a temperature.
  2. Create a radio button group where Celsius or Fahrenheit 
      can be selected as the scale that the number should be 
      converted to.
  3. Create a block level element that will hold the text of the
      converted temperature.
  4. Create a button that, when clicked, displays the converted.
  5. Create another button that, when clicked, clears any text
      in the input field.
  6. Add an event handler to the input field that checks if the 
      user pressed the enter key, and if that happens, perform
      the conversion.
  7. If the temperature is greater than 90F/32C the color of 
      the converted temperature should be red.
  8. If the temperature is less than 32F/0C the color of 
      the converted temperature should be blue.
  9. For any other temperature, the color should be green.
*/

//reference for where in the DOM the converted number will be displayed

var newTemp = document.getElementById("converted");
//Function to convert from Fahrenheit to celsius

function toCelsius (degree) {
  //(°F  -  32)  x  5/9 = °C

    degree = (tempNum - 32) * 5/9;
    degree = Math.round(degree);
    
    //determines what class to apply based on temperature.

    if(degree > 32 ){
      newTemp.classList.remove("mystyle2", "mystyle3");
      newTemp.classList.add("mystyle");

    } if (degree < 0  ) {
      newTemp.classList.remove("mystyle", "mystyle3");
      newTemp.classList.add("mystyle2");
      console.log(newTemp)
    } if (degree >= 0 && degree <= 32 ) {
      newTemp.classList.remove("mystyle2", "mystyle");
      newTemp.classList.add("mystyle3");
      console.log(newTemp)
    }
    //puts result into DOM

    newTemp.innerHTML =  "<div>" + degree + "</div>";  
    
    console.log(degree); 
  }

// FUnction to conver Celsius to Fahrenheit

function toFahrenheit (degree) {

//°C  x  9/5 + 32 = °F
  degree = tempNum * 5/9 + 32;
  degree = Math.round(degree);
    
    //determines what class to apply based on temperature

    if(degree > 90 ){
      newTemp.classList.remove("mystyle2", "mystyle3");
      newTemp.classList.add("mystyle");

    } if (degree < 32  ) {
      newTemp.classList.remove("mystyle", "mystyle3");
      newTemp.classList.add("mystyle2");
      console.log(newTemp)
    } if (degree >= 32 && degree <= 90 ) {
      newTemp.classList.remove("mystyle2", "mystyle");
      newTemp.classList.add("mystyle3");
      console.log(newTemp)
    }
    
  //displays result in DOM

  newTemp.innerHTML = "<div>" + degree + "</div>";

    console.log(degree); 
}







// Get a reference to the button element in the DOM

var button = document.getElementById("convert-button");

// Store the radio buttons in variables

var Fbutton = document.getElementById("radio-F");
var Cbutton = document.getElementById("radio-C");
var clear = document.getElementById("clear-button");


// This function should determine which conversion should
// happen based on which radio button is selected.

function determineConverter() {
   
   if(Fbutton.checked === true) {
    
    toFahrenheit(tempNum);

   }
   if(Cbutton.checked === true) {
    
    toCelsius(tempNum);

   }

   console.log("F button", Fbutton.checked);
}

//reference for what area of the DOM the enter key is pressed.

var tempNum = document.getElementById("text-box");

//Function to determine what happens when the enter key is pressed in input box.

tempNum.addEventListener("keyup", function (event) {
  tempNum = event.target.value;
  if(event.which === 13) {
    determineConverter();
  };
});


// Assign a function to be executed when the button is clicked

button.addEventListener("click", determineConverter);

// Function to determine what happens when the clear button is clicked

clear.addEventListener("click", function(event) {
    
      document.getElementById("text-box").value = " ";
      
      });











