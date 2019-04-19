const ctoa = require('./char-to-ascii.js')

test('The Ascii value for character A would be 65' , () => {
    expect(ctoa('A')).toEqual(65)
})
test('The Ascii value for character m would be 109' , () => {
    expect(ctoa('m')).toEqual(109)
})
test('The Ascii value for character [ would be 91' , () => {
    expect(ctoa('[')).toEqual(91)
})
test('The Ascii value for character \\ would be 92' , () => {
    expect(ctoa('\\')).toEqual(92)
})