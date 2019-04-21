const removeFirstLast = require('./index.js')

test('hello should be ell', () => {
    expect(removeFirstLast('hello')).toEqual('ell')
})
test('benefit should be enefi', () => {
    expect(removeFirstLast('benefit')).toEqual('enefi')
})
test('wordy should be ord', () => {
    expect(removeFirstLast('wordy')).toEqual('ord')
})
test('maybe should be ayb', () => {
    expect(removeFirstLast('maybe')).toEqual('ayb')
})
test('to should be to', () => {
    expect(removeFirstLast('to')).toEqual('to')
})
test('a should be a', () => {
    expect(removeFirstLast('a')).toEqual('a')
})
test(' "" should be ""', () => {
    expect(removeFirstLast('')).toEqual('')
})

