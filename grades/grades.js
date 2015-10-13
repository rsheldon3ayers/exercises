var scores = [82, 71, 95, 55, 98, 69, 72, 78, 84, 64, 58, 87];
var currentScore,
    highestScore = 0,
    lowestScore = 101;
var arrayF = [];
var arrayD = [];
var arrayC = [];
var arrayB = [];
var arrayA = [];

for (var i = 0; i < scores.length; i++) {
	currentScore = scores[i];
	if (currentScore > highestScore) {
		highestScore = currentScore;
	}
	if (currentScore < lowestScore) {
		lowestScore = currentScore;
	}





switch (true) {

	case (currentScore < 61):
		arrayF.push(currentScore);
		break;
	case (currentScore < 71):
		arrayD.push(currentScore);	
		break;
	case (currentScore < 81):
		arrayC.push(currentScore);	
		break;
	case (currentScore < 91):
		arrayB.push(currentScore);	
		break;
	case (currentScore < 101):
		arrayA.push(currentScore);	
		break;	
	}
}
console.log("Highest Score", highestScore);
console.log("Lowest Score", lowestScore);
console.log("Total F's:", arrayF.length);
console.log("Total D's:", arrayD.length);
console.log("Total C's:", arrayC.length);
console.log("Total B's:", arrayB.length);
console.log("Total A's:", arrayA.length);

