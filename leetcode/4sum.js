// Given an array nums of n integers, return an array of all the unique quadruplets [nums[a], nums[b], nums[c], nums[d]] such that:

// 0 <= a, b, c, d < n
// a, b, c, and d are distinct.
// nums[a] + nums[b] + nums[c] + nums[d] == target
// You may return the answer in any order.

 

// Example 1:

// Input: nums = [1,0,-1,0,-2,2], target = 0
// Output: [[-2,-1,1,2],[-2,0,0,2],[-1,0,0,1]]
// Example 2:

// Input: nums = [2,2,2,2,2], target = 8
// Output: [[2,2,2,2]]


let nums = [1,0,-1,0,-2,2];
let target = 0;

function foursum(nums,target){
    nums.sort((a,b) => a - b)
    let result = [];

    for(let i = 0; i < nums.length; i++){
        if(i > 0 && nums[i] == nums[i - 1]) continue;
        for(let j = i + 1; j < nums.length; j++){
            if (j > i + 1 && nums[j] == nums[j - 1]) continue;

            let p = j + 1;
            let q = nums.length - 1;

            while(p < q){
                let sum = nums[i] + nums[j] + nums[p] + nums[q];

                if(sum < target){
                    p++;
                }
                else if(sum > target){
                   q--;
                }
                else{
                    result.push([nums[i], nums[j], nums[p], nums[q]])
                    p++;
                    q--;
                    while(p < q && nums[p] == nums[p -1]){
                        p++;
                    }
                }
            }
        }
    }
    return result;
}

console.log(foursum(nums,target));


 // STEP 1: Sort the array in ascending order.
    // Sorting allows us to use the two-pointer approach.
    // STEP 2: Store all valid quadruplets.

    // STEP 3: First loop selects the first number (i).
    // We stop at length - 3 because we need 3 more elements.

    // Skip duplicate values for the first number.
        // We only want to process each unique starting value once.

        // STEP 4: Second loop selects the second number (j).
        // j always starts after i.
        // We stop at length - 2 because 2 more elements are needed.

        // Skip duplicate values for the second number.
            // j > i + 1 ensures we don't skip its first valid occurrence.

        
        // STEP 5: Initialize two pointers.
        // p starts immediately after j.

        // q starts at the last index of the array.

        // STEP 6: Continue searching while pointers don't cross.

        // Calculate the sum of all four selected elements.

        // CASE 1: Sum is smaller than target.
                // Since array is sorted, increase p to get a larger sum.

        // CASE 2: Sum is greater than target.
                // Decrease q to get a smaller sum.

        // CASE 3: Sum matches the target.

        // Store the valid quadruplet.

                    // Move both pointers to search for another combination.
                    

                    // Skip duplicate values at p.
                    // Compare with the previous element because p has moved forward.


                    // Skip duplicate values at q.
                    // Compare with the next element because q has moved backward.
             

    // STEP 7: Return all unique quadruplets.