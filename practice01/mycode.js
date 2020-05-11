var myArray = ["bug", "insect", "mammal", "reptile", "mammoth", "turtles"];

function practiceOne(string, array) {
	for (var arrayIndex = 0; arrayIndex < array.Length; arrayIndex++) {
		if (array[arrayIndex].length > string.length) {
			console.log(array[arrayIndex]);
		}
	}
}
