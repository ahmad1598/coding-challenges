// Write a function that returns the lexicographically first and lexicographically last rearrangements of a string. Output the results in the following manner:

// firstAndLast(string) ➞ [first, last]

function firstAndLast(s) {
    return [s.split('').sort().join(''), s.split('').sort().reverse().join('') ]
}

module.exports = firstAndLast