/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
    let sum = 0
    let romanValues = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    for (let i = 0; i < s.length; i++) {
        
            if (romanValues[s[i+1]] > 1 && s[i] === "I") {
                sum += (romanValues[s[i + 1]] - 1)
                i += 1
            }
            else if (romanValues[s[i+1]] > 10 && s[i] === "X") {

                sum += (romanValues[s[i + 1]] - 10)
                i += 2
            }
            else if (romanValues[s[i+1]] > 100 && s[i] === "C") {

                sum += (romanValues[s[i + 1]] - 100)
                i += 2
            }
            else{            
                sum += romanValues[s[i]]
            
            }
      
    }

    return sum

};

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const symbols = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    }
    
    let sum = 0;
    for (let i=s.length-1; i>=0; i--) {
        if (symbols[s[i-1]] < symbols[s[i]]) {
            sum += symbols[s[i]] - symbols[s[i-1]]
            i--;
        } else {
            sum += symbols[s[i]]
        }
    }
    return sum;
};