
//Write a function that maps files to their extension names.

const getExtension = arr => {
    let result = []
    arr.map(item => result.push(item.split('.')[1]))
    return result
}

module.exports = getExtension