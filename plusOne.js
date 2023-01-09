/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    
    let addOnAt = digits.length - 1
    digits[addOnAt]+=1 
    if(digits[0] === 10){
            digits[0] = 0
            digits.unshift(1)
            return digits
    }
        
    while(digits[addOnAt] === 10){
        digits[addOnAt] = 0
        digits[addOnAt - 1]+=1 
        if(digits[0] === 10){
            digits[0] = 0
            digits.unshift(1)
            return digits
        }
        
        addOnAt--
    }

    return digits
};