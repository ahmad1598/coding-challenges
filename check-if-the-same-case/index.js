//Create a function that returns true if an input string contains only uppercase or only lowercase 
function sameCase(str) {
	let upper = 0;
  let lower = 0;
  for(let i = 0; i < str.length; i++){
    if(str[i] === str[i].toUpperCase()){
      upper++
    } else if(str[i] === str[i].toLowerCase()){
      lower++
    }
  }
  return (upper === str.length || lower === str.length) ? true : false
}

module.exports = sameCase