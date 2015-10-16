
function coinCounter (dollarAmount) { 
// Initialize a JavaScript object to hold the coins 

	var coinPurse = {

	quarters: 0,
	dimes: 0,
	nickels: 0,
    pennies: 0

    }
    
    if (dollarAmount % .25 !== 0) {
    	
    coinPurse.quarters = Math.floor(dollarAmount / .25);
    dollarAmount = dollarAmount - (coinPurse.quarters * .25);
	
	}

    if (dollarAmount % .10 !== 0) {
    	coinPurse.dimes = Math.floor(dollarAmount / .10);
    	 dollarAmount = dollarAmount - (coinPurse.dimes * .10);
   
    }
    if (dollarAmount % .05 !== 0) {
    	coinPurse.nickels = Math.floor(dollarAmount / .05);
    	 dollarAmount = dollarAmount - (coinPurse.nickels * .05);
    }
    if (dollarAmount % .01 !== 0) {
    	coinPurse.pennies = Math.floor(dollarAmount / .01);
    	 // dollarAmount = dollarAmount - (coinPurse.dimes * .01);
   
    }



	return coinPurse; 
}

var coins = coinCounter(5.17); 
console.log(coins);