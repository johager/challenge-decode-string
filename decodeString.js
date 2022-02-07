/*
In this challenge, you’ll write a decoder.

Write a function that takes in a string and returns a string. A valid argument is a number followed by a sequence of letters. Ex. 2fcjjm

The number in the string represents how many characters each letter should shift. For example:

>>> "1a" // "b"
>>> "3ce" // "fh"
>>> "2fcjjm" // "hello"
*/

function decoder(str) {
    const strLower = str.toLowerCase()
    const shift = +str[0]
    let decoded = ""
    for (let i = 1; i < str.length; i++) {
        let code = strLower[i].charCodeAt(0)  // get ASCII code
        code += shift
        if(code > 122) {
            code -=26
        }
        decoded += String.fromCharCode(code)  // get character from ASCII code
    }
    return decoded
}

function testDecoder(str, exp) {
    console.log("===", str, "===")
    let decoded = decoder(str)
    console.log("str:", str, "decoded:", decoded, "exp:", exp, "success:", decoded === exp)
} 

testDecoder('1a', 'b')
testDecoder('3ce', 'fh')
testDecoder('2fcjjm', 'hello')
testDecoder('1z', 'a')


// https://www.ascii-code.com/
// console.log('a'.charCodeAt(0))  // 97
// console.log(String.fromCharCode(97))  // a
// console.log(String.fromCharCode(98))  // b

// a is 97
// z is 122

// console.log(String.fromCharCode(123 - 26))  // a