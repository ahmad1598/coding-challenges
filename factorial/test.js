const factorial = require('./index.js')

test('factorial(5) -> 120' , () => {
    expect(factorial(5)).toEqual(120)
})
test('factorial(4) -> 24' , () => {
    expect(factorial(4)).toEqual(24)
})
test('factorial(3) -> 6' , () => {
    expect(factorial(3)).toEqual(6)
})
test('factorial(2) -> 2' , () => {
    expect(factorial(2)).toEqual(2)
})
test('factorial(1) -> 1' , () => {
    expect(factorial(1)).toEqual(1)
})