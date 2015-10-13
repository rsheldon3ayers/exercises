var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var arrayF = [];
var arrayD = [];
var arrayC = [];
var arrayB = [];
var arrayA = [];

for (var i = 0; i < scores.length; i++) {

	if (scores[i] < 60) {
    arrayF.push(scores[i]);
	console.log("Grade is F");

	} else if (scores[i] <= 70) {
		
		arrayD.push(scores[i]);
		console.log("Grade is D");
	} else if (scores[i] <= 80) {
		arrayC.push(scores[i]);
		console.log("Grade is C")
	} else if (scores[i] <= 90) {
		arrayB.push(scores[i]);
		console.log("Grade is B");
	}  else if (scores[i] <= 100) {
		arrayA.push(scores[i]);
		console.log("Grade is A");
	} 
}
var highestGrade = Math.max.apply(Math, scores);
console.log("Highest Grade is ", highestGrade);
var lowestGrade = Math.min.apply(Math, scores);
console.log("Lowest Grade is ", lowestGrade);
console.log("Total F's:", arrayF.length);
console.log("Total D's:", arrayD.length);
console.log("Total C's:", arrayC.length);
console.log("Total B's:", arrayB.length);
console.log("Total A's:", arrayA.length);
