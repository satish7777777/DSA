// Given an array nums of size n, return the majority element.

// The majority element is the element that appears more than ⌊n / 2⌋ times. You may assume that the majority element always exists in the array.


// Example 1:

// Input: nums = [3,2,3]
// Output: 3
// Example 2:

// Input: nums = [2,2,1,1,1,2,2]
// Output: 2
 


let nums = [3,2,3]

function majorityElement(nums) {
    let count = 1;
    let candidate = nums[0];

    for(let i = 1; i < nums.length; i++){
        if(count == 0){
            candidate = nums[i];
            count++;
        }
        else if(nums[i] == candidate){
            count++;
        }
        else if(nums[i] != candidate){
            count--;
           
        }
    }
    return candidate;
};

console.log(majorityElement(nums))