// Find the pair whose sum is closest to the target ⭐

// Given an array of integers and a target, find the pair whose sum is closest to the target.

// If there are multiple pairs with the same difference, return any one of them.

// Example 1
// nums = [1, 4, 7, 10]
// target = 8
// Expected Output
// Pair: 1 7
// Sum: 8
// Example 2
// nums = [2, 5, 9, 12]
// target = 11
// Expected Output
// Pair: 2 9
// Sum: 11
// Example 3
// nums = [2, 4, 9]
// target = 10
// Expected Output
// Pair: 2 9
// Sum: 11

// Because:

// |11 - 10| = 1
// |6 - 10| = 4
// |13 - 10| = 3

// nums = [1, 4, 7, 10]
// target = 8
// let pair = [nums[0], nums[1]];
// let currentDifference = Math.abs((nums[0] + nums[1]) - target);;


// for(let i = 0; i < nums.length; i++){
//     for(let j = i + 1; j < nums.length; j++){
//         let sum = nums[i] + nums[j];
//         // console.log(sum)

//         let difference = Math.abs(sum - target);

//         if(difference < currentDifference){
//             currentDifference = difference;
//             pair = [nums[i], nums[j]];
//         }

//         // if(sum == target){
//         //     // console.log(sum)
//         //     // console.log(target)
//         //     pair.length = 0;
//         //     pair.push(nums[i], nums[j]);
//         // }

//         // else if(sum < target){
//         //     let difference = target - sum;
//         //     console.log(sum)
//         //     console.log(target)

//         //     if(difference > currentDifference){
//         //         currentDifference = difference;
//         //         pair.length = 0;
//         //         pair.push(nums[i], nums[j]);
//         //     }
//         // }
        
//         // else if(sum > target){
//         //     let difference = sum - target;
//         //     console.log(sum)
//         //     console.log(target)

//         //     if( difference > currentDifference){
//         //         currentDifference = difference;
//         //         pair.length = 0;
//         //         pair.push(nums[i], nums[j]);
//         //     }
//         // }
//     }
// }

// console.log("pairs", pair);


// Count pairs with an even sum

// Count how many unique pairs have an even sum.

// Example
// nums = [1,2,3,4]
// Expected Output
// 2
// Explanation

// Valid pairs:

// 1 3
// 2 4
// Example
// nums = [2,4,6]
// Expected Output
// 3

// nums = [1,2,3,4]
// let evenNumbers = 0;

// for(let i = 0; i < nums.length; i++){
//     for(let j = i + 1; j < nums.length; j++){
//         let even = nums[i] + nums[j];

//         if(even % 2 == 0){
//             evenNumbers++;
//         }
//     }
// }

// console.log(evenNumbers)


// Count pairs with an odd sum

// Count how many unique pairs have an odd sum.

// Example
// nums = [1,2,3,4]
// Expected Output
// 4
// Explanation
// 1 2
// 1 4
// 2 3
// 3 4
// Example
// nums = [2,4,6]
// Expected Output
// 0

// let oddNumbers = 0;

// for(let i = 0; i < nums.length; i++){
//     for(let j = i + 1; j < nums.length; j++){
//         let odd = nums[i] + nums[j]
//         // console.log()

//         if(odd % 2 !== 0){
//             oddNumbers++;
//             console.log(nums[i] + " " + nums[j])
//         }
//     }
// }

// console.log("uycdfgt",oddNumbers)

// Print all duplicate values ⭐

// Print every value that appears more than once.

// Example
// nums = [2,4,2,5,4,6]
// Expected Output
// 2
// 4
// Example
// nums = [1,1,1,2]
// Expected Output
// 1

// Important: Print each duplicate value only once, even if it appears three or more times.

// For example:

// nums = [2,2,2,2]

// Expected:

// 2

// Not:

// 2
// 2

// nums = [2,4,2,5,4,6]
// let dublicate = []

// for(let i = 0; i < nums.length; i++){
//     for(let j = i + 1; j < nums.length; j++){
//         if(nums[i] == nums[j]){
//             if(!dublicate.includes(nums[i])){
//                 dublicate.push(nums[i])
//             }
            
//         }
//     }
// }

// console.log(dublicate)

// Count the frequency of each element (Nested Loops Only) ⭐⭐⭐

// Don't use Map, Set, or objects.

// For each unique element, print how many times it appears.

// Example
// nums = [2,4,2,5,4,2]
// Expected Output
// 2 -> 3
// 4 -> 2
// 5 -> 1
// Example
nums = [1,1,2,3,3]
// Expected Output
// 1 -> 2
// 2 -> 1
// 3 -> 2

// nums = [2,4,2,5,4,2]
let unique = []

for(let i = 0; i < nums.length; i++){

    if(unique.includes(nums[i])) {
        continue;
    }
     let count = 0;
    for(let j = 0; j < nums.length; j++){
       
        if(nums[i] == nums[j]){
            count++;
        }

        if(!unique.includes(nums[i])){
                unique.push(nums[i])
            }
    }
    console.log(nums[i] + " " + count )
}


// console.log("gggggg",unique);