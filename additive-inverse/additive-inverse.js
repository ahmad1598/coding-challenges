// A number added with its additive inverse equals zero. Create a function that returns an array of additive inverses.


// My Solution
    function additiveInverse(arr) {
        return arr.map(num => num * -1);
        
    }


    module.exports = additiveInverse