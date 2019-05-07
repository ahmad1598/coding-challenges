const calcDeterminant = require('./index.js')

test('[[1, 2],[3, 4]] -> -2' , () => {
    expect(calcDeterminant([[1, 2],[3, 4]])).toEqual(-2)
})
test('[[5, 3],[3, 1]] -> -4' , () => {
    expect(calcDeterminant([[5, 3],[3, 1]])).toEqual(-4)
})
test('[[1,1],[1,1]] -> -4' , () => {
    expect(calcDeterminant([[1,1],[1,1]])).toEqual(0)
})