// let nums = [1,[2],3];
let nums = [1,[2,[3],4]];
// let nums = [1,[2,[3,[4,[5]]]]];
// let newww = [];
let sum = 0;

function flatarr(nums){
    for(let i = 0; i < nums.length; i++){

        if(Array.isArray(nums[i]) && Array.isArray(i < 0)){
            flatarr(nums[i])
        }
        else{
            // newww.push(nums[i])
            sum = sum + nums[i]
        }
    }
    // console.log(newww)
}

flatarr(nums)

 console.log(sum)

