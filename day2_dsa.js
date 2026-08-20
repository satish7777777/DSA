// // Remove Duplicates

// let nums = [5,3,4,5,2,3,5];

// for(let i = 0; i < nums.length; i++){
//     for(let j = i + 1; j < nums.length; j++){
//         if(nums[i] == nums[j]){
//             // nums.pop(nums[j])
//             nums.splice(j, 1);
            
//             // console.log("match", nums[i])
//         }
//     }
//     // console.log("ARRRAY",nums)
// }
// console.log(nums)


//Two Sum
// const nums = [2, 7, 11, 15];
// const target = 9;

// for(let i = 0; i < nums.length; i++){
//     for(let j = i + 1; j < nums.length; j++){
//         let sum = nums[i] + nums[j];

//         if(target == sum){
//             console.log("NUMBERS", nums[i] + " " + nums[j] + "Indexs", i + " " + j)
//         }
//     }
// }

// Move Zeros to End



// const nums = [0, 1, 0, 3, 12];
// let zero  = 0;

// for(let i = 0; i < nums.length; i++){
    
//     if(nums[i] == 0){
//         zero++;
//         nums.splice(i, 1);
//         nums.push(0);
//     }
//     // console.log("zero",zero)
// }
// console.log("zero",zero)

// console.log(nums)

// let numss = [10, 20, 30, 40, 50];

// function swap(numss){
//     let left = 0;
//     let right = numss.length - 1;
    
//     while(left < right){
//         let temp;
//         temp = numss[left];
//         numss[left] = numss[right];
//         numss[right] = temp;

//         left++;
//         right--
//     }
//     return numss;
// }

// console.log(swap(numss));
// swap(nums);

// let left = 0;
// let right = nums.length - 1;
// console.log(right)

// while(left <= right){
//     left = right;
//     left++;
//     right--;
// }

// console.log(nums)

const nums = [0, 1, 0, 3, 12];

function removeZero(nums){
    let left = 0;
    let right = nums.length - 1;

    while(left <= right){
        if(nums[left] == 0){
            let temp;
            temp = nums[left];
            nums[left] = nums[right];
            nums[right] = temp;
        }
        left++;
    }
    return nums;
}

console.log(removeZero(nums))
// for(let i = 0; i < nums.length; i++){
//     for(let j = i +1; j < nums.length; j++){

//     }
// }