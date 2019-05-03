function solution(A,B){
    let strB = B.toString()
    let strA = A.toString()
    // let regex = new RegExp(A.toString(), 'g')
    // console.log((B+'').split().replace(regex,''))
    let regex = new RegExp(strA)
    let test = []
    test.push(strB.search(regex))
    // test.push(strB.replace(regex, ''))
    if(test.join('') == strB){
    return test
    }
    else{
        return solution(strA,strB)
    }
}


console.log(solution(53,1953786))
console.log(solution(78,195378678))
console.log(solution(780,195378678))