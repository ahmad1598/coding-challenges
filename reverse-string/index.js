function reverseString(str){
    var arr = [...str]
    var j = arr.length - 1
    var temp 
    for(let i = 0 ; i < j; i++,j--){
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
    }
    return arr.join('')

}

module.exports = reverseString