// Write a function that returns true if all characters in a string are identical and false otherwise.

const isIdentical = str =>  {
    for(let i = 1; i < str.length; i++){
    if(str[i] !== str[i-1]) return false
  }
  return true
}

module.exports = isIdentical