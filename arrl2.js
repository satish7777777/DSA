// Question 16: Count pairs whose sum is equal to target

// Given an array of integers and a target, count how many unique pairs have a sum equal to the target.

// Example 1
// nums = [1, 9, 2, 8, 3, 7]
// target = 10
// Expected Output
// 3
// Explanation

// The pairs are:

// (1,9)
// (2,8)
// (3,7)
// Example 2
// nums = [2, 4, 6, 8]
// target = 10
// Expected Output
// 2

// nums = [1, 9, 2, 8, 3, 7]
// target = 10
// total = 0;

// for(let i = 0; i < nums.length; i++){
//     for(let j = i + 1; j < nums.length; j++){

//         let sum = nums[i] + nums[j];
        
//         if(sum == 10){
//             total++;
//         }
//     }
// }

// console.log("TOTAL",total)

// Question 17: Count pairs whose sum is less than target

// Count all unique pairs whose sum is less than the target.

// Example
// nums = [1, 2, 3, 4]
// target = 6
// Expected Output
// 4
// Explanation

// Valid pairs:

// 1 2
// 1 3
// 1 4
// 2 3

// nums = [1, 2, 3, 4]
// target = 6

// for(let i = 0; i < nums.length; i++){
//     for(let j = i + 1; j < nums.length; j++){

//         let sum = nums[i] + nums[j];
//         // console.log(sum)

//         if(sum < target){
//             console.log(nums[i] + " " + nums[j]);
//         }
//     }
// }

// Count pairs whose sum is greater than target

// Count all unique pairs whose sum is greater than the target.

// Example
// nums = [2, 5, 6, 8]
// target = 10
// Expected Output
// 3
// Explanation

// Valid pairs:

// 5 6
// 5 8
// 6 8


// nums = [2, 5, 6, 8]
// target = 10

// for(let i = 0; i < nums.length; i++){
//     for(let j = i + 1; j < nums.length; j++){
//         let sum = nums[i] + nums[j];

//         if(sum > target){
//             console.log(nums[i] + " " + nums[j]);
//         }
//     }
// }

// Find the pair with the largest sum

// Find the pair whose sum is the largest.

// Example
// nums = [4, 7, 1, 9, 3]
// Expected Output
// Pair: 7 9
// Sum: 16
// Another Example
// nums = [10, 2, 5, 8]
// Expected Output
// Pair: 10 8
// Sum: 18

// nums = [4, 7, 1, 9, 3];
// let max = 0;
// let index = []

// for(let i = 0; i < nums.length; i++){
//     for(let j = i + 1; j < nums.length; j++){
//         let sum = nums[i] + nums[j];
//         // console.log("SSSSUM", sum);

//         if(max < sum){
//             max = sum;
//             index.length = 0;
//             index.push(nums[i],nums[j]);
//             // console.log(nums[i] + " " + nums[j]);
//             // console.log("MMAZ", max)
//         }
//         //  console.log(nums[i] + " " + nums[j]);
//     }
// }
// console.log(max)
// console.log(index)

// Find the pair with the smallest sum

// Find the pair whose sum is the smallest.

// Example
// nums = [4, 7, 1, 9, 3]
// Expected Output
// Pair: 1 3
// Sum: 4
// Another Example
nums = [8, 6, 2, 5]
// Expected Output
// Pair: 2 5
// Sum: 7

// nums = [8, 6, 2, 5]

let min = nums[0] + nums[1];
let index = [nums[0], nums[1]]

for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++){
        // min = nums[i] + nums[j];
        let sum = nums[i] + nums[j];
        console.log("SSSSUM", sum);

        if(min > sum){
            min = sum;
            index.length = 0;
            index.push(nums[i],nums[j]);
            // console.log(nums[i] + " " + nums[j]);
            // console.log("MMAZ", min)
        }
        //  console.log(nums[i] + " " + nums[j]);
    }
}
console.log(min)
console.log(index)