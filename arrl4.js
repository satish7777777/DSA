// Question 26 ⭐⭐⭐
// Find the element that appears the most times (No Map)

// Given:

// nums = [2,4,2,5,4,2]

// Expected Output

// 2
// Frequency = 3

// Example 2

// nums = [1,1,2,3,3,3]

// Output

// 3
// Frequency = 3

// let nums = [2,4,2,5,4,2]
// let unique = [];
// let frequency = 0;
// let frequentNo = 0;

// for(let i = 0; i < nums.length; i++){
//     if(unique.includes(nums[i])){
//         continue;
//     }
//     if(!unique.includes[nums[i]]){
//         unique.push(nums[i])
//     }
//     let count = 0;
//     for(let j = 0; j < nums.length; j++){
        

//         if(nums[i] == nums[j]){
//             count++;
//         }
//         // console.log(nums[i] + "=>" + count);
//     }
//     if(count > frequency){
//         frequency = count;
//         frequentNo = nums[i];
//     }
//     // console.log(nums[i] + "=>" + count);
    
// }
// console.log(frequentNo+ " => " +frequency)

// Reverse an array without using reverse()

// Example

// nums = [1,2,3,4,5]

// Expected Output

// [5,4,3,2,1]

// let nums = [1,2,3,4,5];
// let reversee = [];

// for(let i = nums.length - 1; i >=0; i--){
//     reversee.push(nums[i]);
// }

// console.log(reversee)


// Question 29 ⭐⭐
// Left rotate an array by one position

// Example

// nums = [1,2,3,4,5]

// Expected Output

// [2,3,4,5,1]

// The first element moves to the end.

// let nums = [1,2,3,4,5]

// let one = [];


// for(let i = 1; i < nums.length; i++){
//     one.push(nums[i])
//     // one = nums[i];
// }

// for(let i = 0; i < nums[0]; i++){
//     one.push(nums[i])
// }

// // // let s = nums.slice[1,4];
// console.log(one)

// Right rotate an array by one position

// Example

// nums = [1,2,3,4,5]

// Expected Output

// [5,1,2,3,4]

// nums = [1,2,3,4,5]

// let rev = [];

// let last = nums.length;

// rev.push(last);

// for(let i = 0; i < nums.length - 1; i++){
//     rev.push(nums[i])
// }

// console.log(rev)

// let nums = [1,[2,[3,4],5],6];
// let re = [];


// function flatter(nums){
//     for(let i = 0; i < nums.length; i++){
        
//         if(Array.isArray(nums[i])){
//             flatter(nums[i]);
//         }
//         else{
//             re.push(nums[i])
//         }
//     }
// }

// flatter(nums);
// console.log(re)

let nums = [12, 56, 789, 14, 659, 48];
let re = [];

for(let i = 0; i < nums.length; i++){
    nums[i] = String(nums[i]);

    if(nums[i].includes('8')){
        re.push(nums[i])
    }
}

// console.log(nums);
console.log(re)