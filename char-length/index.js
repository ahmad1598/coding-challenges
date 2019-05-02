const rle = ( input ) => {
    let count = 1
    let arr = []
    let inputArr = [...input]
    for(let i = 0; i < inputArr.length - 1; i++){
      if(inputArr[i] === inputArr[i+1]) {
        count++
      }else{
        arr.push(inputArr[i],count)
        count = 1
      }
      
    }
    arr.push(inputArr[inputArr.length - 1],count)
    return arr.join('')
  }

  module.exports = rle