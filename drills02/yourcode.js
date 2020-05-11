// - countOccurences:
// 	- given an array of words and a separate word, count how many times a particular word given occurs within that array for example:
// 	- input ['dog','cat','dog','pig','canary','cat','dog'], 'dog'
// 	- returns 3

function countOccurences(array, string) {
	var stringCount = 0;

	for (var i = 0; i < array.length; i++) {
		if (array[i] === string) {
			stringCount++;
		}
	}
	return stringCount;
}
// - wordLengths:
// 	- given an array of words, return an array of numbers representing the length of each word For example:
// 	- input ['canary','silly','dog','a','mellow'])
// 	- return [6,5,3,1,6]
function wordLengths(array) {
	var wordLengthArray = [];
	for (var i = 0; i < array.length; i++) {
		wordLengthArray.push(array[i].length);
	}
	return wordLengthArray;
}
// - getMinMaxMean: given an array of numbers, get the minimum, maximum, and mean numbers. Return them as an object. Mean is another word for average For example:
// 	- input [3,1,9,12,4]
// 	- return: {min: 1, max: 12, mean: 25.8}

function getMinMaxMean(array) {
	var newObject = {
		min: null,
		max: null,
		mean: null
	};
	var totals = 0;

	for (var i = 0; i < array.length; i++) {
		if (newObject.max < array[i + 1]) {
			newObject.max = array[i + 1];
		}
		if (newObject.min > array[i + 1] || newObject.min === null) {
			newObject.min = array[i + 1];
		}
		totals += array[i];
	}
	newObject.mean = totals / array.length;
	return newObject;
}

// - findMode: Given an array of numbers, find the number that occurs the most often for example:
// 	- input [5,2,7,18,2,42,5,2]
//  - countArray = [2, 3, 1, 1, 3, 1, 2, 3]
// 	- returns 2, since it occurs 3 times. If 2 numbers occur the same amount, return the last one

function findMode(array) {
	var counterArray = [];
	for (var currentIndex = 0; currentIndex < array.length; currentIndex++) {
		var counter = 0;
		for (var comparedIndex = 0; comparedIndex < array.length; comparedIndex++) {
			if (array[currentIndex] === array[comparedIndex]) {
				counter++;
			}
		}
		counterArray.push(counter);
	}

	var max = counterArray[0];

	for (var maxIndex = 0; maxIndex < counterArray.length; ++maxIndex) {
		debugger;
		if (max < counterArray[maxIndex + 1]) {
			max = counterArray[maxIndex + 1];
		}
	}

	return array[counterArray[max]];
}
