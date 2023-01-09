var longestCommonPrefix = function (strs) {
    let prefix = strs[0]

    for (let i = 1; i < strs.length; i++) {
        let idx = 0
        if (prefix === strs[i]) {
            continue
        } else {
            while (strs[i][idx] === prefix[idx]) {
                idx++
            }

            prefix = strs[i].substring(0, idx)
        }
    }

    return prefix
};

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    let prefix = strs[0];
    strs.forEach((str) => {
        let temp = "";
        for (let i=0; i<str.length; i++) {
            if (str[i] == prefix[i]) {
                temp += str[i];
            } else {
                if (temp.length < prefix.length) {
                    prefix = temp;
                }
            }
        }
    });

    return `"${prefix}"`
}

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
    let prefix = "";
    strs.sort();
    let firstWordArr = strs[0]
    let lastWordArr = strs[strs.length - 1]
    //start comparing
    for (let i = 0; i < firstWordArr.length; i++) {
      if (firstWordArr[i] != lastWordArr[i]) break;
      prefix += firstWordArr[i];
    }
    return prefix;
  };

console.log(longestCommonPrefix(["dog","racecar","car"]))
console.log(longestCommonPrefix(["flower","flow","flight","alphabet"]))