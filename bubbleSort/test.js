

const bubbleSort = require('./index.js')

test('[10, 5, 9, 7, 10, 1, 2, 5, 4] --> [ 1, 2, 4, 5, 5, 7, 9, 10, 10 ]' , () => {
    let unsortedArr = [10,5,9,7,10,1,2,5,4]
    expect(bubbleSort(unsortedArr)).toEqual([ 1, 2, 4, 5, 5, 7, 9, 10, 10 ])    
})
test('[100,2,21,330,54,76,35,9,0,34] --> [ 0, 2, 9, 21, 34, 35, 54, 76, 100, 330 ]' , () => {
    let unsortedArr = [100,2,21,330,54,76,35,9,0,34]
    expect(bubbleSort(unsortedArr)).toEqual([ 0, 2, 9, 21, 34, 35, 54, 76, 100, 330 ])    
})
test('[-1,3,12,1,-3,98,102,32,67,45] --> [ -3, -1, 1, 3, 12, 32, 45, 67, 98, 102 ]' , () => {
    let unsortedArr = [-1,3,12,1,-3,98,102,32,67,45]
    expect(bubbleSort(unsortedArr)).toEqual([ -3, -1, 1, 3, 12, 32, 45, 67, 98, 102 ])    
})