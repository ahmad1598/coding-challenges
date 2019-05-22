const subReddit = require('./index.js')

test('https://www.reddit.com/r/funny/ --> "funny"' , () => {
    expect(subReddit('https://www.reddit.com/r/funny/')).toEqual("funny")
})
test('https://www.reddit.com/r/relationships/ --> "relationships"' , () => {
    expect(subReddit('https://www.reddit.com/r/relationships/')).toEqual("relationships")
})
test('https://www.reddit.com/r/mildlyinteresting/ --> "mildlyinteresting"' , () => {
    expect(subReddit('https://www.reddit.com/r/mildlyinteresting/')).toEqual("mildlyinteresting")
})