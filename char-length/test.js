
const rle = require('./index.js')

test("'a' -> a1 " , () => {
    expect(rle('a')).toEqual('a1')
})
test("'aa' -> a2 " , () => {
    expect(rle('aa')).toEqual('a2')
})
test("'aabbb' -> a2b3 " , () => {
    expect(rle('aabbb')).toEqual('a2b3')
})
test("'aabbbaa' -> a2b3a2 " , () => {
    expect(rle('aabbbaa')).toEqual('a2b3a2')
})
