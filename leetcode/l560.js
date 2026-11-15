let nums = [1,-1,0];
let k = 0;
let result = 0;
let map = new Map();
let sum = 0;


map.set(0,1);

// for(let i of nums){
for(let i = 0; i < nums.length; i++){
    sum += nums[i];
    let needed = sum - nums[i];
    if(map.has(needed)){
        result += map.get(needed);
    } 
    // if(needed == 0){
    //     result++;
    // }
    map.set(sum, (map.get(sum) || 0) + 1);
}

console.log(result);