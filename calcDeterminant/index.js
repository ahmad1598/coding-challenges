
//Create a function to calculate the determinant of a 2 x 2 matrix. The determinant of the following matrix is: ad - bc:

function calcDeterminant(matrix) {
	return(matrix[0][0] * matrix[1][1]) - (matrix[0][1]* matrix[1][0])
}

module.exports = calcDeterminant