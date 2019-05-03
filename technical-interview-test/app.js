function solution(A,B){
    let strB = B.toString()
    let strA = A.toString()
    let result = []
    for(let i = 0; i < strA.length;i++){
        for(let j = 0; j < strB.length; j++){
            if(strA[i] == strB[j]){
                result.push(j)
            } 
        }return (result.join(''))
    } 
}


console.log(solution(53,1953786))
console.log(solution(78,195378678))
console.log(solution(780,195378678))


function solution(A){
    let result = (Number(A.join('')) + 1).toString()
    let final = []
    for(let i = 0; i < result.length; i++){
        final.push(Number(result[i]))
    }
    return final
}

console.log(solution([1,4,3,9,9])) // 1,4,4,0,0
console.log(solution([1,4,3,8,9])) // 1,4,3,9,0
console.log(solution([0,0,0,0,0])) // 0,0,0,0,1
console.log(solution([3,1,0,0,9])) // 3, 1, 0, 1, 0


function solution(S){
    const test = S.replace('AA','').replace('BB','').replace('CC','')
    if(test == S){
        return test
    } 
    else{
        return solution(test)
    }
}

console.log(solution('ACCAABBC')) // AC
console.log(solution('ABCBBCBA')) // ''
console.log(solution('BABABA')) // 'BABABA'
console.log(solution('BBBAABABBBCCBCBBCACB')) // 'CB'
console.log(solution('BBBBBBBB')) // ''