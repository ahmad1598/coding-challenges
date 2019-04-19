// Create a function that takes in an initial word and filters out an array to contain words 
// that start with the same letters as the initial word.

function dictionary(initial, words) {
	let result = []
  for(let word of words){
     word.includes(initial) ? result.push(word) : []
  }
  return result
}

module.exports = dictionary