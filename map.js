let nums = [2, 2, 3, 3, 3, 4];

let map = new Map();

for(let i = 0; i < nums.length; i++){
    // map.set(num, (map.get(num) || 0) + 1);
    // map.set(nums[i], (map.get(nums[i]) || 0) + 1);
    // map.set(nums[i], (map.get(nums[i]) || 0) + 1)
    map.set(nums[i], (map.get(nums[i]) || 0) + 1)
}
console.log(map);