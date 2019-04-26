

const transform = arr => {
	for(let i = 0; i < arr.length; i++){
		 (arr[i] % 2 === 0) ? arr[i]-- : arr[i]++			
	}
	return arr
}

module.exports = transform