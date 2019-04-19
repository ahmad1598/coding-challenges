const sameCase = require('./index.js')

test('hello should be true', () => {
    expect(sameCase('hello')).toEqual(true)
})
test('HELLO should be true', () => {
    expect(sameCase('HELLO')).toEqual(true)
})
test('Hello should be false', () => {
    expect(sameCase('Hello')).toEqual(false)
})
test('ketcHUp should be false', () => {
    expect(sameCase('ketcHUp')).toEqual(false)
})
test('mArmALadE should be false', () => {
    expect(sameCase('mArmALadE')).toEqual(false)
})
test('marmalade should be true', () => {
    expect(sameCase('marmalade')).toEqual(true)
})
test('MARMALADE should be false', () => {
    expect(sameCase('MARMALADE')).toEqual(true)
})