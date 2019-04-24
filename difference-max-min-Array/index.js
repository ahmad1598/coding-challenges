//Create a function that takes an array and returns the difference between the smallest and biggest numbers.

const differenceMaxMin = arr => Math.max(...arr) - Math.min(...arr)

module.exports = differenceMaxMin