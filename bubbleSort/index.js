
// let swapped
function bubbleSort(arr){
    let isSorted = false
    while(!isSorted){
        isSorted = true
        let end = arr.length - 1
        for(let i = 0; i < end; i++){
            if(arr[i] > arr[i+1]){
                let temp = arr[i]
                arr[i] = arr[i+1]
                arr[i+1] = temp
                isSorted = false
            }
        }
        end--
    }
    return arr
}

module.exports = bubbleSort