const additiveInverse = require('./additive-inverse.js')

test('the correct result for array [5, -7, 8, 3] would be [-5, 7, -8, -3] ' , () => {
    expect(additiveInverse([5, -7, 8, 3])).toEqual([-5, 7, -8, -3]);
});
test('the correct result for array [1, 1, 1, 1, 1] would be [-1, -1, -1, -1, -1]' , () => {
    expect(additiveInverse([1, 1, 1, 1, 1])).toEqual([-1, -1, -1, -1, -1]);
});
test('the correct result for array [-5, -25, 35] would be [5, 25, -35]' , () => {
    expect(additiveInverse([-5, -25, 35])).toEqual([5, 25, -35]);
});
