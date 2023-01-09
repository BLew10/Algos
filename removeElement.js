var removeElement = function(nums, val) {
    let pointer = 0
    let pushIdx = nums.length-1
    while(pointer !== pushIdx){
        if(nums[pointer] === val && nums[pushIdx] !== val){
            [nums[pointer], nums[pushIdx] ] = [nums[pushIdx], nums[pointer] ]
            pushIdx--
        } else if(nums[pointer] === val && nums[pushIdx] === val){
            pushIdx--
            [nums[pointer], nums[pushIdx] ] = [nums[pushIdx], nums[pointer] ]
        }
        pointer++
    }
    return nums.splice(pushIdx);
  }
let nums =[0,1,2,2,3,0,4,2]

  console.log(removeElement(nums, 2))
  console.log(nums)