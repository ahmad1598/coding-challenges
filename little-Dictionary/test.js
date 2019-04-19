const dictionary = require('./index.js')

test('for initial "bu" in array ["button", "breakfast", "border"], the result should be ["button"]' , () => {
    expect(dictionary("bu", ["button", "breakfast", "border"])).toEqual(["button"])
})
test('for initial "beau" in array ["pastry", "delicious", "name", "boring"], the result should be []' , () => {
    expect(dictionary("beau", ["pastry", "delicious", "name", "boring"])).toEqual([])
})
test('for initial "there" in array ["there", "here", "everywhere"], the result should be []' , () => {
    expect(dictionary("there", ['there', 'here', 'everywhere'])).toEqual(["there"])
})
test('for initial "sno" in array ["snow", "paper", "ghost"], the result should be []' , () => {
    expect(dictionary("sno", ["snow", "paper", "ghost"])).toEqual(["snow"])
})