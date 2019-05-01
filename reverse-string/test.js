const reverseString = require('./index.js')

test('hello -> olleh' , () => {
    expect(reverseString('hello')).toEqual('olleh')
})
test('reverse -> esrever' , () => {
    expect(reverseString('reverse')).toEqual('esrever')
})
test('"" -> ""' , () => {
    expect(reverseString('')).toEqual('')
})
test('12345 -> 54321' , () => {
    expect(reverseString('12345')).toEqual('54321')
})
test('hi my name is -> si eman ym ih' , () => {
    expect(reverseString('hi my name is')).toEqual('si eman ym ih')
})