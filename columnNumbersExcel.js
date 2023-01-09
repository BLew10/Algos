/**
 * @param {number} columnNumber
 * @return {string}
 */
var convertToTitle = function (columnNumber) {
    let answer = ""
    let alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"

    while (columnNumber > 0) {
            temp = (columnNumber -1) % 26
            columnNumber = ((columnNumber - 1)  - temp) / 26
            answer = alphabet[temp] + answer
    }

    return answer

};


console.log(convertToTitle(701))
console.log(convertToTitle(52))
console.log(convertToTitle(2147483647))
// console.log(convertToTitle(28))
// console.log(convertToTitle(1))
// console.log(convertToTitle(28))
// console.log(convertToTitle(1))


