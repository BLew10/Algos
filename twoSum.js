//my solution
var twoSum = function(nums, target) {
    for(let i = 0; i < nums.length; i++){
        let sum = 0
        let solution = []
        sum+=nums[i]
        solution.push(i)
        for(let j = i+1; j < nums.length; j++) {
            sum+=nums[j]
            if(sum === target){
                solution.push(j)
                return solution
            }
            sum-=nums[j]
        }
    }
};

//open ai
function twoSum(nums, target) {
    // create a hash map to store the elements and their indices
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        map.set(nums[i], i);
    }

    // search for the two elements that add up to the target
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement) && map.get(complement) !== i) {
            return [i, map.get(complement)];
        }
    }
}
 

//matts 
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const hash = {};
    for (let i=0; i<nums.length; i++) {
        let compliment = target - nums[i]
        if (hash.hasOwnProperty(compliment)) {
            return [hash[compliment], i]
        } else {
            hash[nums[i]] = i;
        }
    }
    return []
};