let nums = [18,28,34,77,34,77,1,1]; //fetch opnly numbers which include 8

for(let i = 0; i < nums.length; i++){
    for(let j = 0; j < nums.length; j++){
        if(nums[j] > nums[j + 1]){
            [nums[j], nums[j+1]] = [nums[j+1], nums[j]];
        }
    }
}

console.log(nums)

// let dub = [];

// for(let i = 0; i < nums.length; i++){
//     if(!dub.includes(nums[i])){
//         dub.push(nums[i]);
//     }
// }
// console.log(dub);

// let first = nums[0];
// let second = nums[1];
// for(let i = 0; i < nums.length; i++){
//     if(nums[i] > first){
//         second = first;
//         first = nums[i];
//     }
//     else if(first !== nums[i] && nums[i] > second){
//         second = nums[i];
//     }
// }

// console.log(first);
// console.log(second);

// let eight = [];

// for(let i = 0; i < nums.length; i++){
//     let str = String(nums[i]);

//     if(str.includes('8')){
//         eight.push(str)
//     }
// }

// console.log(eight);

// let nums = [1,[2,3,[4,5],6,7]];
// let re = [];

// function flat(nums){
//     for(let i = 0; i < nums.length; i++){
//         if(Array.isArray(nums[i])){
//             flat(nums[i])
//         }
//         else{
//             re.push(nums[i])
//         }
//     }
// }

// flat(nums);
// console.log(re);