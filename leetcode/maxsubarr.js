// Given an integer array nums, find the subarray with the largest sum, and return its sum.

// Example 1:

// Input: nums = [-2,1,-3,4,-1,2,1,-5,4]
// Output: 6
// Explanation: The subarray [4,-1,2,1] has the largest sum 6.
// Example 2:

// Input: nums = [1]
// Output: 1
// Explanation: The subarray [1] has the largest sum 1.
// Example 3:

// Input: nums = [5,4,-1,7,8]
// Output: 23
// Explanation: The subarray [5,4,-1,7,8] has the largest sum 23.

//Kadane Algorithum
// let nums = [-2,1,-3,4,-1,2,1,-5,4];

// let maxsum = 0;
// let sum = 0;

// for(let i = 0; i < nums.length; i++){

//     let currentsum = sum + nums[i];
//     // console.log("CCC",currentsum)

//     if(currentsum < 0){
//         sum = 0;
//     }
//     else{
//         sum = currentsum;

//     }
//     if(sum > maxsum){
//         maxsum = sum;
//     }

// }

// console.log(maxsum)

let nums = [5,4,-1,7,8];

function maxsubarray(nums) {
  let sum = 0;
  let maxsum = 0;

  for (let i = 0; i < nums.length; i++) {
    let currentsum = sum + nums[i];

    if (currentsum < 0) {
      sum = 0;
    } else {
      sum = currentsum;
    }

    if (sum > maxsum) {
      maxsum = sum;
    }
  }

  return maxsum;
}

console.log(maxsubarray(nums))




// let nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4];

// let sum = nums[0];
// let maxsum = nums[0];

// for (let i = 1; i < nums.length; i++) {
//     let currentsum = sum + nums[i];

//     if (nums[i] > currentsum) {
//         sum = nums[i];
//     } else {
//         sum = currentsum;
//     }

//     if (sum > maxsum) {
//         maxsum = sum;
//     }
// }

// console.log(maxsum); // 6
