/* Given an object and a key, "getProperty" returns the value of the property at the given key. If there is no property at the given key, it should return null. */

var obj = {
	mykey: 'value'
}

function getProperty(object, key) {
	if (object && key in object) {
		return object[key];
	} else {
		return undefined;
	}
}