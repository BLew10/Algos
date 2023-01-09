/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let object = {
        "]": "[",
        ")": "(",
        "}": "{"
    }

    let lastOpen = []

    for(let paren of s){
        if(object.hasOwnProperty(paren) && lastOpen[lastOpen.length-1] !== object[paren]){
            return false
        } else if (!object.hasOwnProperty(paren)){
            lastOpen.push(paren)
        } else {
            lastOpen.pop()
        }
    }
    return lastOpen.length === 0

};