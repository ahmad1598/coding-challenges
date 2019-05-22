const numberSyllables = require('./index.js')

test('buf-fet --> 2' , ()=> {
    expect(numberSyllables('buf-fet')).toEqual(2)
})

test('beau-ti-ful --> 3' , ()=> {
    expect(numberSyllables('beau-ti-ful')).toEqual(3)
})

test('mon-u-men-tal --> 4' , ()=> {
    expect(numberSyllables('mon-u-men-tal')).toEqual(4)
})

test('on-o-mat-o-poe-ia --> 6' , ()=> {
    expect(numberSyllables('on-o-mat-o-poe-ia')).toEqual(6)
})