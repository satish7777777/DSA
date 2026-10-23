// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

 

// Example 1:

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]
// Explanation:
// rotate 1 steps to the right: [7,1,2,3,4,5,6]
// rotate 2 steps to the right: [6,7,1,2,3,4,5]
// rotate 3 steps to the right: [5,6,7,1,2,3,4]
// Example 2:

// Input: nums = [-1,-100,3,99], k = 2
// Output: [3,99,-1,-100]
// Explanation: 
// rotate 1 steps to the right: [99,-1,-100,3]
// rotate 2 steps to the right: [3,99,-1,-100]


let nums = [-1,-100,3,99];
let k = 2;



 

function rev(nums,k){
    let n = nums.length;
    k = k % n;

    function reverseq(arr,first,last){
        // let first = 0;
        // let last = arr.length;

        while(first < last){
            let temp = arr[first];
            arr[first] = arr[last];
            arr[last] = temp;
            first++;
            last--;

        }
    }

    reverseq(nums, 0 ,n-1);
    reverseq(nums, 0, k-1);
    reverseq(nums, k, n-1);

    // nums.reverse();
    // nums.splice(0,k, ...nums.slice(0,k).reverse());
    // nums.splice(k,n-k, ...nums.slice(k).reverse());

    return nums;
    
    // console.log(`N ${n} and K ${k}`)
}   

console.log(rev(nums,k));