var merge = function (nums1, m, nums2, n) {
    let oneIdx = 0
    let twoIdx = 0
    nums1.splice(m)
    while (m !== oneIdx) {

        if (nums1[oneIdx] >= nums2[twoIdx]) {

            nums1.splice(oneIdx, 0, nums2[twoIdx])
            nums2.shift()
            oneIdx++
            twoIdx++
                     
        } else {
            oneIdx++
        }
        
        
        
    }
    for(let i = 0; i < nums2.length; i++ ){
        nums1.push(nums2[i])
    }

}
    ;
    let num = [2,0]
    merge(num,1,[1],1)
    console.log(num)

    nums1.splice(m, n)
    for (let i=0; i<nums2.length; i++) {
        nums1.push(nums2[i])
    }
    nums1.sort((a,b) => {return a-b})
    return nums1