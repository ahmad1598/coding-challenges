
const firstEvenMax = require('./index.js')

test('result for "this is a test string" should be "string"' , () => {
    expect(firstEvenMax("this is a test string")).toEqual("string")
})
test('result for "geeksforgeeks is a platform for geeks" should be "platform"' , () => {
    expect(firstEvenMax("geeksforgeeks is a platform for geeks")).toEqual("platform")
})

