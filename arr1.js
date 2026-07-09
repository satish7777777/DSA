// Example 1
// Input:
// nums = [2,7,11,15]
// target = 9

// Output:
// [0,1]

// Explanation:

// nums[0] + nums[1] = 2 + 7 = 9
// Example 2
// Input:
nums = [3,2,4]
target = 6

// Output:
// [1,2]

// nums = [2,7,11,15]
// target = 9



function operation2(target, nums) {
    let a = 0;
    let b = 0;
    for(let i = 0; i < nums.length; i++){
        for(let j = 1; j < nums.length; j++){
            // console.log("inner",nums[i] + "outer", nums[j]);
            // console.log("inner",i + "outer", j);
            // a = nums[i];
            // b = nums[j];
            a = i;
            b = j;
            let sum = nums[i] + nums[j];
        //     console.log("SSS",sum);
        // console.log("Targert", target)
        //     if(sum !== target){
        //     return "Invalid sum request"     
        // }
        if(sum == target){
            // sum == target;
            let arrResult = [a, b]
            console.log("AAAAARRRRAY", arrResult);
            // return arrResult;
            }
            
        }     
    }


    }

    operation2(target, nums)
