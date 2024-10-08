const transform = require('./index.js') 

test('[1, 2, 3, 4, 5] ➞ [2, 1, 4, 3, 6]' , () => {
    expect(transform([1, 2, 3, 4, 5])).toEqual([2, 1, 4, 3, 6])
})
test('[3, 3, 4, 3] ➞ [4, 4, 3, 4]' , () => {
    expect(transform([3, 3, 4, 3])).toEqual([4, 4, 3, 4])
})
test('[2, 2, 0, 8, 10] ➞ [1, 1, -1, 7, 9]' , () => {
    expect(transform([2, 2, 0, 8, 10])).toEqual([1, 1, -1, 7, 9])
})
test('[9, 13, 15, 5, 2, 11] ➞ [10, 14, 16, 6, 1, 12]' , () => {
    expect(transform([9, 13, 15, 5, 2, 11])).toEqual([10, 14, 16, 6, 1, 12])
})