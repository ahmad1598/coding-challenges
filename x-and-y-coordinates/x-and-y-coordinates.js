// Create a function that converts two arrays of x- and y- coordinates into an array of (x,y) coordinates.
function convertCartesian(x, y) {
	let result = []
	for(let i = 0; i < x.length; i++){
		result.push([x[i],y[i]])
	}
	return result
}

module.exports = convertCartesian