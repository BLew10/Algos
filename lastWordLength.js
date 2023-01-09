var lengthOfLastWord = function (s) {
    let d = s.trim()
    let last = ""
    for (let i = d.length - 1; i >= 0; i--) {
        if (d[i] !== " ") {
            console.log(last)
            last += d[i]
        } else {
            return last.length
        }
    }
    return last.length

};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {

    let last = ""
    let wordStarts = false
    let wordEnds = false
    for (let i = s.length - 1; i >= 0; i--) {
        if (s[i] === " " && s[i - 1] !== " ") {
            wordStarts = true
        } else if (s[i - 1] === " " && s[i] !== " ") {
            wordEnds = true
        }
        if (s[i] !== " ") {
            last += s[i]
        }
        if (wordStarts && wordEnds) return last.length
    }
    return last.length

};

var lengthOfLastWord = (s) => {
    //trim eliminates the space, split turns it into an array. You know the last word is the last index of the array
    const arr = s.trim().split(" ");
    return arr[arr.length - 1].length;
}

console.log(lengthOfLastWord("Hello World"))