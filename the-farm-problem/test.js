const animals = require('./index.js')

test('animals(5, 2, 8) should be 50', () => {
    expect(animals(5, 2, 8)).toEqual(50)
})
test('animals(3, 4, 7) should be 50', () => {
    expect(animals(3, 4, 7)).toEqual(50)
})
test('animals(1, 2, 3) should be 22', () => {
    expect(animals(1, 2, 3)).toEqual(22)
})
test('animals(3, 5, 2) should be 34', () => {
    expect(animals(3, 5, 2)).toEqual(34)
})