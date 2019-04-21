// Create a function that removes the first and last characters from a string.

function removeFirstLast(str) {
	return str.length > 2 ? str.split('').slice(1,str.length-1).join('') : str
}


module.exports = removeFirstLast