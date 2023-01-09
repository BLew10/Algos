/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function (numRows) {
    let main = []
    let currArr = []
    let oldArr = [1]
    for (let i = 0; i < numRows; i++) {
        currArr.push(1)
        for (let j = 0; j < i; j++) {
            if (j === i) currArr.push(1)
            else if (oldArr[j + 1]) currArr.push(oldArr[j] + oldArr[j + 1])
            else currArr.push(oldArr[j])
        }
        main.push(currArr)
        oldArr = currArr
        currArr = []
    }
    return main
};

/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    const returnArr = [];
    for (let i=0; i<numRows; i++) {
        let tempArr = [];
        for (let j=0; j<=i; j++) {
            let left = 0;
            let right = 0;
            if (i === 0) {
                tempArr = [1]
            }
            else {
                if (returnArr[i-1][j-1]) {
                    left = returnArr[i-1][j-1]
                }
                if (returnArr[i-1][j]) {
                    right = returnArr[i-1][j]
                }
                tempArr.push(left + right)
            }
        }
        returnArr.push(tempArr);
    }
    return returnArr;
};

/**
 * @param {number} numRows
 * @return {number [][]}
 */


var generate = function(numRows) {
    let result = []
    for (let i = 0; i < numRows; i++) {
        result[i] = []
        for (let j = 0; j < i + 1; j++) {
            if (j === 0 || j === i) {
                result [i][j] = 1
            } 
            else {
                result [i][j] = result [i - 1][j - 1] + result [i - 1][j]
            }
        }
        
    }
    return result
}

const numRows = 7
console.log(generate(numRows))

var generate = function(numRows) {
    let output = []
    for (let i = 0; i < numRows; i++){ // for each row of triangle
      output[i] = [];
      output[i][0] = 1; // outer of triangle will always be 1
      for (let j = 1; j <= i; j++){ // 
          if(j === i) {
              output[i][j] = 1;
          } else {
            output[i][j] = output[i-1][j-1] + output[i-1][j]
          }
      }
    }
  return output
}