const nums = [10, 5, 20, 8, 15];

let first = nums[0];
let second = nums[1];

for(let i = 0; i < nums.length; i++){

    if(first < nums[i]){
        second = first;
        first = nums[i];
    }
    else if(nums[i] != first && second < nums[i]){
        second = nums[i]
    }
}
console.log("FIRST",first, "SECOND", second)