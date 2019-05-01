const twoSum = require('./index.js')

test('[2,5,5,11], 10 --> [1,2]' , () => {
    expect(twoSum([2,5,5,11] , 10)).toEqual([1,2])
})
test('[3,2,3], 6 --> [0,2]' , () => {
    expect(twoSum([3,2,3] , 6)).toEqual([0,2])
})
test('[3,2,4], 6 --> [1,2]' , () => {
    expect(twoSum([3,2,4] , 6)).toEqual([1,2])
})
test('[3,2,1,12], 13 --> [2,3]' , () => {
    expect(twoSum([3,2,1,12] , 13)).toEqual([2,3])
})