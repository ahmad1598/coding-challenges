const firstAndLast = require('./index.js')

test("result for 'marmite' should be [aeimmrt, trmmiea] " , () => {
    expect(firstAndLast("marmite")).toEqual(["aeimmrt", "trmmiea"])
})

test("result for 'bench' should be [bcehn, nhecb] " , () => {
    expect(firstAndLast("bench")).toEqual(["bcehn", "nhecb"])
})

test("result for 'scoop' should be [coops, spooc] " , () => {
    expect(firstAndLast("scoop")).toEqual(["coops", "spooc"])
})
test("result for 'fanatic' should be [aacfint, tnifcaa] " , () => {
    expect(firstAndLast("fanatic")).toEqual(["aacfint", "tnifcaa"])
})

