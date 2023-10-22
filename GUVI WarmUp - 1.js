/* Write a function called "getOpposite".
If the given value is an integer, return its opposite value, otherwise return -1 */

var num = 5;

function getOpposite(num) {
	if (num === parseInt(num)) {
		return num * (-1);
	} else {
		return -1
	}
}
var result = getOpposite(num)
///Your code Ends here
/*
Lines For TestCase
getOpposite(5);
getOpposite(0);
getOpposite(-5);
getOpposite("5a");
getOpposite(5.5)
*/