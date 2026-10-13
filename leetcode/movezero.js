// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

 

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// let nums = [0,1,0,3,12];

// function movezero(nums){
//     let i = 0;
//     // let j = nums[0];

//     for(let j = 0; j < nums.length; j++){
//         if(nums[j] !== 0){
//             let temp = nums[j];
//             nums[j] = nums[i];
//             nums[i] = temp;
//             i++;
//             // j++;
//         }
//         // else{
//         //     // let temp = nums[j];
//         //     // nums[j] = nums[i];
//         //     // nums[i] = temp;
//         //     // i++;
//         //     j++;
//         // }
//     }
//     console.log(nums)
//     return nums;
// }

// console.log(movezero(nums))















let nums = [1,0,2,0,3,12];

function movezero(nums){
    let i = 0;
    for(let j = 0; j < nums.length; j++){
        if(nums[j] != 0){
            let temp = nums[j];
            nums[j] = nums[i];
            nums[i] = temp;

            i++;
        }
    }
    return nums;
}

console.log(movezero(nums))
