// Input: nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5, nums = [0,1,2,3,4,_,_,_,_,_]

// let nums = [0,0,1,1,1,2,2,3,3,4];

// let ne = [];

// for(let i = 0; i < nums.length; i++){
//     if(nums[i] !== nums[i+1]){
//         ne.push(nums[i])
//     }
    // for(let j = i+1; j < j + 2; j++){
    //     if(nums[i] !== nums[j]){
    //         ne.push(nums[j])
    //     }
    // }
// }

// console.log(ne)

















let nums = [0,0,1,1,1,2,2,3,3,4];

function remove(nums){
    let i = 0;
    for(let j = 1; j < nums.length; j++){
        // console.log(nums[i])
    if(nums[j] !== nums[i]){
        i++;
        nums[i] = nums[j]
    }
   
}
// console.log(nums)
 return i +1;
}
console.log(remove(nums));
// console.log(nums);