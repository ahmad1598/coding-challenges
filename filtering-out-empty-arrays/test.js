const removeEmptyArrays = require('./index.js')

test("['a', 'b', []] should be ['a','b'] ",() => {
    expect(removeEmptyArrays(['a', 'b', []])).toEqual(['a','b'])
})
test("[1, 2, [], 4] should be [1, 2, 4] ",() => {
    expect(removeEmptyArrays([1, 2, [], 4])).toEqual([1, 2, 4])
})
test("[[], [], [], []] should be [] ",() => {
    expect(removeEmptyArrays([[], [], [], []])).toEqual([])
})
test("[1, 2, 3, 4] should be [1, 2, 3, 4] ",() => {
    expect(removeEmptyArrays([1, 2, 3, 4])).toEqual([1, 2, 3, 4])
})
test("[1, [], [], 4] should be [1,4] ",() => {
    expect(removeEmptyArrays([1, [], [], 4])).toEqual([1,4])
})