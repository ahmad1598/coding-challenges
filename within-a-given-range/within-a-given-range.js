// Given a number and an object with min and max properties, return true if the number lies within the given range (inclusive). //

 /* Examples
    isInRange(4, { min: 0, max: 5 }) ➞ true

    isInRange(4, { min: 4, max: 5 }) ➞ true

    isInRange(4, { min: 6, max: 10 }) ➞ false

    isInRange(5, { min: 5, max: 5 }) ➞ true */

function isInRange(num, range) {
    if(range.min % 1 != 0){
        for(let i = range.min; i <= range.max; i = i + (range.min % 1)){
            if(i === num) return true
        }
        return false
        } else {
            for(let i = range.min; i <= range.max; i++){
                if(i === num) return true
            }
            return false
    }
}