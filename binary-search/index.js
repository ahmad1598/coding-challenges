
//Binary Search Algorithm 

function binarySearch(arr,value){
    let high = arr.length - 1
    let low = 0
    let mid = 0

    while(low <= high) {
        mid = Math.floor((high + low ) / 2)
        if(arr[mid] === value){
            return arr[mid]
        } 
        else if(value > arr[mid]){
            low = mid + 1
        } 
        else{
            high = mid - 1
        } 
    }
    return -1
}


module.exports = binarySearch

