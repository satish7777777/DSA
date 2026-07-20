// Question 1
// nums = [12,56,789,14,659,48]

// Output

// [789,48]

nums = [12,56,789,14,659,48]
let eight = [];
for(let i = 0; i < nums.length; i++){
    nums[i] = String(nums[i]);

    if(nums[i].includes('8')){
        
        eight.push(nums[i]);
    }

    console.log(nums)
}

// console.log(nums)
// console.log(eight)