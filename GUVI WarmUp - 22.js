/* Given an object and a key, "removeProperty" removes the given key from the given object. */

var obj = {
	"mykey": "value"
}

function removeProperty(object, key) {
	if (object && key in object) {
		delete object[key];
	}
}
removeProperty(obj, "mykey");
/*
Lines For TestCase
obj.mykey === undefined;
*/