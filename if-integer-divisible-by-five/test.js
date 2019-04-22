const divisibleByFive = require('./index.js')

test('divisibleByFive(5) ➞ true' , () => {
    expect(divisibleByFive(5)).toEqual(true)
})
test('divisibleByFive(-55) ➞ true' , () => {
    expect(divisibleByFive(-55)).toEqual(true)
})
test('divisibleByFive(37) ➞ false' , () => {
    expect(divisibleByFive(37)).toEqual(false)
})
test('divisibleByFive(7) ➞ false' , () => {
    expect(divisibleByFive(7)).toEqual(false)
})
test('divisibleByFive(5) ➞ true' , () => {
    expect(divisibleByFive(5)).toEqual(true)
})
test('divisibleByFive(15) ➞ true' , () => {
    expect(divisibleByFive(15)).toEqual(true)
})
test('divisibleByFive(33) ➞ false' , () => {
    expect(divisibleByFive(33)).toEqual(false)
})
test('divisibleByFive(-18) ➞ false' , () => {
    expect(divisibleByFive(-18)).toEqual(false)
})
test('divisibleByFive(999) ➞ false' , () => {
    expect(divisibleByFive(999)).toEqual(false)
})