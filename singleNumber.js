var singleNumber = function (nums) {
    let pointer = 0
    let next = 1
    while (next < nums.length && pointer < nums.length - 1) {
        if (next !== pointer) {
            if (nums[pointer] !== nums[next]) {
                next++
            } else {
                pointer++
                next = 0
            }
        } else {
            next++
        }
    }
    return nums[pointer]
};

var singleNumber = function (nums) {

    let dict = {}
    for (let i = 0; i < nums.length; i++) {
        if (dict[nums[i]]) dict[nums[i]]++
        else dict[nums[i]] = 1
    }

    for (const key in dict) {
        if (dict[key] === 1) return key
    }
}