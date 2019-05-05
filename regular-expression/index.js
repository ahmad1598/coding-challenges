let str = `This is is some text text with double double words some where I I I am 
        not not sure why why I am typing ok? crazy crazy expression expression`
function findDouble(str){
    const regex = /\b(\w+)\s\1\b/gi
    return str.match(regex)
}

console.log(findDouble(str))

var r = /\d{3}/

console.log(r.test('123')) //true
console.log(r.test('123ABC')) //true

var r = /^\d{3}$/
console.log(r.test('123')) //true
console.log(r.test('123ABC')) //false 

var email = /\w+@\w+\.(net|com|org)/g
console.log(email.test('ahmad.r@gmail.com')) // true
console.log(email.test('ahmad.rgmail.co')) // false
console.log(email.test('ahmad.r@gmail.co'))// false
console.log(email.test('ah@g.net'))// true
console.log(('ahmad@gmil.com').match(email)) //ahmad@gmil.com


let phone = /\(?\d{3}[-.)]\d{3}[-.]\d{4}/
console.log(phone.test('330-209-9901')) // true
console.log(phone.test('391.190.2980')) // true
console.log(phone.test('(801)212-9304')) // true
console.log(('291.290.9980').match(phone)) // 291.290.9980
console.log(('(385)290-9090').match(phone)) //(385)290-9090


let s = 'coding chanllenge is, fun'
console.log(s.split(/[,\s]+/)) // split by comma or space
console.log(s.replace(/([aeiou])/g,"$1$1")) //coodiing chaanlleengee iis, fuun  :)
