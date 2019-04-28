const binarySearch = require('./index.js')



test('[ 2, 2, 3, 3, 3, 4, 4, 6, 10, 12, 16, 23, 32, 76, 83, 556, 645 ] , 83  --> 83 ' , () => {   
    let arr = [ 2, 2, 3, 3, 3, 4, 4, 6, 10, 12, 16, 23, 32, 76, 83, 556, 645 ]
    let sorted = arr.sort((a,b) => a - b) 
    expect(binarySearch(sorted,32)).toEqual(32)
})
test('[ 2, 2, 3, 76, 83, 556, 645,3, 3, 4, 4, 6, 10, 12, 16, 23, 32 ] , 18  --> -1 ' , () => {   
    let arr = [ 2, 2, 3, 76, 83, 556, 645,3, 3, 4, 4, 6, 10, 12, 16, 23, 32 ]
    let sorted = arr.sort((a,b) => a - b) 
    expect(binarySearch(sorted,18)).toEqual(-1)
})
test('[ 2, 2, 3, 3, 3, 4, 4, 6, 10, 12, 16, 23, 32, 76, 83, 556, 645 ] , 10  --> 10 ' , () => {   
    let arr = [ 2, 2, 3, 3, 3, 4, 4, 6, 10, 12, 16, 23, 32, 76, 83, 556, 645 ]
    let sorted = arr.sort((a,b) => a - b) 
    expect(binarySearch(sorted,10)).toEqual(10)
})
test('[ 2, 2, 3, 3, 3, 4, 4, 6, 10, 12, 16, 23, 32, 76, 83, 556, 645 ] , 556  --> 556 ' , () => {   
    let arr = [ 2, 2, 3, 3, 3, 4, 4, 6, 10, 12, 16, 23, 32, 76, 83, 556, 645 ]
    let sorted = arr.sort((a,b) => a - b) 
    expect(binarySearch(sorted,556)).toEqual(556)
})

