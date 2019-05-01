const anagram = require('./index.js')

test('anagram , nagaram --> true' , () => {
    expect(anagram('anagram','nagaram')).toEqual(true)
})
test('cat , rat --> false' , () => {
    expect(anagram('cat','rat')).toEqual(false)
})
test('cat , tac --> true' , () => {
    expect(anagram('cat','tac')).toEqual(true)
})
test('interested , detsereint --> true' , () => {
    expect(anagram('interested','detsereint')).toEqual(true)
})
