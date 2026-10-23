// You are given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

// You may assume that each input would have exactly one solution, and you may not use the same element twice.

// You can return the answer in any order.

// Example 1:

// Input: nums = [2,7,11,15], target = 9
// Output: [0,1]
// Explanation: Because nums[0] + nums[1] == 9, we return [0, 1].
// Example 2:

// Input: nums = [3,2,4], target = 6
// Output: [1,2]
// Example 3:

// Input: nums = [3,3], target = 6
// Output: [0,1]

// let nums = [2,7,11,15];
// let target = 9;

// function twosum(nums,target){
// nums.sort();
// let start = 0;
// let end = nums.length - 1;
// let indexes = [];

// for(let i = 0; i < nums.length; i++){
//     let currentsum = nums[start] + nums[end];

//     if(currentsum > target){
//         // currentsum = 0;
//         end--;
//     }
//     else if(currentsum < target){
//         // currentsum = 0;
//         start++;
//     }
//     else{
//         indexes.push(start,end);
//         break;
//     }
// }
// return indexes;

// while(start < end){
//     let currentsum = nums[start] + nums[end];

//     if(target < currentsum){
//         sum = currentsum;
//         end--;
//     }
//     else if(target > currentsum){
//         sum = currentsum;
//         start++;
//     }
//     else {
//         // sum = currentsum;
//         indexes.push(start, end)
//         return indexes;
//     }

// }

// return indexes;

// for(let i = 0; i < nums.length; i++){
//     let currentsum = nums[start] + nums[end];
//     // console.log(currentsum)

//     if(currentsum > target){
//         end--;
//     }
//     else if(currentsum < target){
//         start++;
//     }else{
//         indexes.push(start,end);
//         break;
//         // console.log(`Start ${start} End ${end}`);
//     }
// }

// return indexes;

// console.log(`First ${start} End ${end}`);

//   let result = [];

// nums.map((num, i) => {
//     for (let j = i + 1; j < nums.length; j++) {
//         if (num + nums[j] === target) {
//             result = [i, j];
//             return;
//         }
//     }
// });

// return result;
// }

// console.log(twosum(nums,target));

// let nums = [3,2,4];
// let target = 6;

// function twosum(nums, target){
//     nums.sort();
//     // console.log(nums)
//     let first = nums[0];
//     let last = nums[nums.length -1];
//     console.log(first, "  ", last)

//     // for(let i = 0; i < nums.length; i++){
//     //     let currentsum =
//     // }
// }

// console.log(twosum(nums,target))

//[ 1, 2 ]

let nums = [3, 2, 4];
let target = 6;

function twosum(nums, target) {
  let map = new Map();

  for (let i = 0; i < nums.length; i++) {
    let needed = target - nums[i];
    //needed =4

    console.log(map.has(needed));
    if (map.has(needed)) {
      //   console.log(map.has(needed))
      return [map.get(needed), i];
      // return [nums[map.get(needed)], nums[i]];
    }
    map.set(nums[i], i);
    // console.log("false")
  }
}

console.log(twosum(nums, target));
