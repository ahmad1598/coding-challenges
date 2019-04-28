
let swapped
function bubbleSort(arr){
    do{
    swapped = false
    let end = arr.length - 1
    for(let i = 0; i < end; i++){
        if(arr[i] > arr[i+1]){
            swapped = true
            let temp = arr[i]
            arr[i] = arr[i+1]
            arr[i+1] = temp
        }
    }
    end--
} while(swapped)
return arr
}

module.exports = bubbleSort