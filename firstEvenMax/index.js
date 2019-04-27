
//Given a string of words separated by spaces. The task is to find the first maximum length even word from the string

const firstEvenMax = str => {
    let arr = str.split(' ')
    let evenFilter = arr.filter(item => item.length % 2 === 0)
    let max = evenFilter[0]
    for(let i = 0; i < evenFilter.length; i++){
      if(evenFilter[i].length > max.length) max = evenFilter[i]
    }
    return max
  }
  
  
  module.exports = firstEvenMax