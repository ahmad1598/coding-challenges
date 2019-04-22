const isIdentical = require('./index.js')

test('isIdentical("aaaaaa") ➞ true' , () => {
    expect(isIdentical('aaaaaa')).toEqual(true)
})
test('isIdentical("aabaaa") ➞ false' , () => {
    expect(isIdentical('aabaaa')).toEqual(false)
})
test('isIdentical("ccccca") ➞ false' , () => {
    expect(isIdentical('ccccca')).toEqual(false)
})
test('isIdentical("kk") ➞ true' , () => {
    expect(isIdentical('kk')).toEqual(true)
})
test('isIdentical("kkkkk") ➞ true' , () => {
    expect(isIdentical('kkkkk')).toEqual(true)
})
test('isIdentical("ckkkk") ➞ false' , () => {
    expect(isIdentical('ckkkk')).toEqual(false)
})