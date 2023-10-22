/* Given an array, "getLastElement" returns the last element of the given array. If the given array has a length of 0, it should return '-1'. */

function getLastElement(array) {
	///Your code Starts here 
	let l = array.length;
	if (l != 0) {
		return array[l - 1];
	} else {
		return -1;
	}
	///Your code Ends here
}
/*
Lines For TestCase
getLastElement([1, 2, 3, 4]);
getLastElement([1, 2, 3, 4,5,6,7]);
getLastElement([]);
*/