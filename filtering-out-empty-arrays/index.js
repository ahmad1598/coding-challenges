//filter out empty arrays from an array. In other words, transform something that looks like this: ['a', 'b', [], [], [1, 2, 3]] to look like ['a', 'b', [1, 2, 3]].

function removeEmptyArrays(arr) {
	return arr.filter(x => typeof(x) !== 'object')
}

module.exports = removeEmptyArrays