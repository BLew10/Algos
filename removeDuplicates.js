function removeDuplicates(nums) {
    let k = 0;
    for (let i = 0; i < nums.length; i++) {
      if (nums[i] !== nums[k]) {
        nums[++k] = nums[i];
      }
    }
    return k;
  }
//   k=2
//   i=3
//   [0,1,2,3,3,3,4]
  /**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    let insertIndex = 1;
      for(let i = 1; i < nums.length; i++){
          if(nums[i - 1] != nums[i]){  
              nums[insertIndex] = nums[i];  
              insertIndex++; 
          }
      }
      return insertIndex;
  }

  var removeDuplicates2 = function (nums) {
    let i = 0;
 
    nums.forEach((num, index) => {
        if (num !== nums[index + 1]) {
            nums[i] = num;
            i++;
        }
    })
    return i;
}