const isInRange = require('./within-a-given-range.js')

test('The number 4 is in the range of 0 - 5, then the result should be true' , () => {
    expect(isInRange(4, {min:0, max:5})).toEqual(true)
})
test('The number 4 is in the range of 4 - 5, then the result should be true' , () => {
    expect(isInRange(4, {min:4, max:5})).toEqual(true)
})
test('The number 4 is in the range of 6 - 10, then the result should be true' , () => {
    expect(isInRange(4, {min:6, max:10})).toEqual(false)
})
test('The number 5 is in the range of 5 - 5, then the result should be true' , () => {
    expect(isInRange(5, {min:5, max:5})).toEqual(true)
})