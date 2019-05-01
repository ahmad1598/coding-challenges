function anagram(str1, str2){
    if(str1.length != str2.length){
        return false
    }
    let count1 = {}
    let count2 = {}
    for(let i = 0; i < str1.length; i++){
        if(count1[str1[i]]){
            count1[str1[i]]++
            
        } else{
            count1[str1[i]] = 1
        }
        if(count2[str2[i]]){
            count2[str2[i]]++
            
        } else{
            count2[str2[i]] = 1
        }

    }

    for(let item in count1){
        if(count1[item] != count2[item]){
            return false
        }
    }
    return true

}

module.exports = anagram