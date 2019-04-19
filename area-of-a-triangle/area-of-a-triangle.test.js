const triArea = require('./area-of-a-triangle.js')

test('the area for triangle by base 3 and height 2 would be 3', () => {
    expect(triArea(3,2)).toEqual(3);
})
test('the area for triangle by base 7 and height 4 would be 14', () => {
    expect(triArea(7,4)).toEqual(14);
})
test('the area for triangle by base 10 and height 10 would be 50', () => {
    expect(triArea(10,10)).toEqual(50);
})