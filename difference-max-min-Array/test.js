const differenceMaxMin = require('./index.js')

test('[10, 4, 1, 4, -10, -50, 32, 21] ➞ 82',()=>{
    expect(differenceMaxMin([10, 4, 1, 4, -10, -50, 32, 21])).toEqual(82)
})
test('[44, 32, 86, 19] ➞ 67' , () => {
    expect(differenceMaxMin([44, 32, 86, 19])).toEqual(67)
})
test('[10,4,1,2,8,91], 90' , () => {
    expect(differenceMaxMin([10,4,1,2,8,91])).toEqual(90)
})
test('[-70,43,34,54,22], 124' , () => {
    expect(differenceMaxMin([-70,43,34,54,22])).toEqual(124)
})