// /*
//   ...........YOUR MISSION...........

//   Write JavaScript functions that perform the following tasks.

//   1. document.write() the characters of any string in reverse order.
//   2. document.write() the characters of any string in alphabetical order.
//   3. document.write() true, or false, if the passed string is a palidrome.

//   Note: document.write() is a fast way to put content into the DOM 
//   without the need for a getElementById() and innerHTML.
// */

// function reversal(origString) {
//   var reversedString = origString.split("").reverse().join("");
//   document.write(reversedString);

  
//   return reversedString;
// }

// function alphabits(origString) {
//   document.write("<div>" + origString.split("").sort().join("") + "</div>");
// }

// function palindrome(origString) {
//   var newString = origString.replace(/[\s,]/g, "").toLowerCase();
//   var reversedNewString = reversal(newString);

//   if (newString === reversedNewString) {
//     document.write("<div>\"" + origString + "\" is a palidrome</div>");
    
//   } else {
//     document.write("<div>\"" + origString + "\" is not a palindrome</div>");
    
//   }
// }


// var testString = "mom, dad, brother, sister, cat, dog";

// reversal(testString);
// alphabits(testString);
// palindrome(testString);

// var car = {
// 	make: "Nissan",
// 	wheels: 4,
// 	model: "Xterrra",
// 	options = {
// 		ac: true,
// 		dvd: false,
// 		underlighting: false,
// 		awd: true
// 	}
// };

// console.log(car.make.options)

function add(one, two) {
return one + two;

}
function subtract(one, two) {
return one - two;

}
function multiply(one, two) {
return one * two;

}
var result1 = add(1, 2);
var result2= subtract(5, 2);
var result3 = multiply(20, 10);
console.log(result1, result2, result3)