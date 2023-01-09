var isPalindrome = function (s) {
    if (s === " ") return true
    const alphanumeric = /[a-zA-Z0-9]/
    let string = ""
    s = s.toLowerCase()
    for (let i = 0; i < s.length; i++) {
        if (s[i].match(alphanumeric)) string += s[i]
    }
    for (let j = 0; j < string.length / 2; j++) {
        if (string[j] !== string[string.length - j - 1]) return false
    }
    
    return true
};


/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    if (s === "") {
        return true
    }
    string = s.toLowerCase()
    for (let i = 0; i < string.length; i++) {
        if (string[i] >= 'a' && string[i] <= 'z' || string[i] >= '0' && string[i] <= '9') {
            formatted += string[i]
        }
    }
    if (formatted !== formatted.split('').reverse().join('')) {
        return false
    }
};