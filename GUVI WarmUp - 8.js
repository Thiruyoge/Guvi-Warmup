/* Given two numbers, return true if the sum of both numbers is less than 100. Otherwise return false. */

function lessThan100(num1, num2) {
	///Your code Starts here 
	let val = num1 + num2;
	return val < 100 ? true : false
	///Your code Ends here
}
/*
Lines For TestCase
lessThan100(22, 15);
lessThan100(83, 34);
lessThan100(50, 50);
*/