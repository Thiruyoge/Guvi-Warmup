/* Create a function to calculate the distance between two points defined by their x, y coordinates. */

function getDistance(x1, y1, x2, y2) {
	const x = x2 - x1;
	const y = y2 - y1;
	const distance = x * 2 + y * 2;
	return distance;
	///Your code Ends here
}
/*
Lines For TestCase
getDistance(100, 100, 400, 300);
getDistance(1,2,4,6);
*/