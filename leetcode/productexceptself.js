// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]

let nums = [-1,1,0,-3,3];
let output = new Array(nums.length).fill(1);

let prefix = 1;
for(let i = 0; i < nums.length; i++){
    output[i] = prefix;
    prefix = nums[i] * prefix;
}

let suffix = 1;

for(let i = nums.length -1; i >= 0; i--){
    output[i] = output[i] * suffix;
    suffix = nums[i] * suffix;
}

console.log(output)





// let nums = [1,2,3,4];
// let output = [];
// let prefix = [];
// let suffix = [];
// let product = 1;
// let product2 = 1;

// for(let i = 0; i < nums.length; i++){
//     prefix.push(product);

//     product = product * nums[i];
// }

// for(let i = nums.length - 1; i >= 0; i--){
//     suffix[i] = product2;
//     product2 = product2 * nums[i];
// }

// for (let i = 0; i < nums.length; i++) {
//     // Your logic here
//     let sum = prefix[i] * suffix[i];
//     // console.log("SUMMMM",sum);
//     output.push(sum);
// }
// // console.log(prefix);
// // console.log(suffix)
// console.log("SUM", output)















// let nums = [1,2,3,4];
// let output = [];

// for(let i = 0; i < nums.length; i++){
//     let product = 1;
//     // console.log(product, "  PPPPPPPPP")
//     for(let j = 0; j < nums.length; j++){
//         if(i !== j){
//             product *= nums[j];
//             // console.log(product, "  PPPPPPPPP")
//             //     let sum = nums[i] * nums[j];
//             //     console.log("SUM ",sum)
//             //   console.log(`I ${i} and  J ${j}`)
//         }
      
//     }
//     output.push(product)
// }

// console.log(output)