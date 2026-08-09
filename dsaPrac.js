//find Max

// let nums =[10, 5, 20, 8, 15];
// let max = 0;

// function findMax(nums){
//     for(let i = 0; i < nums.length; i++){
        
//         if(max < nums[i]){
//             max = nums[i]
//         }
       
//     }
    
// console.log("MAZZZ", max);
// }

// // console.log("MAZZZ", max);

// findMax(nums)

//find second max

let nums = [10, 5, 20, 8, 15];
let secMax = 0;

function maxx(nums){
    let first = nums[0]
    let second = nums[1]

    for(let i = 0; i < nums.length; i++){
        if(first < nums[i]){
            second = first
            first = nums[i]
        }
        else if(second < nums[i] && nums[i] !== first){
            second = nums[i]
        }
    }
    console.log("first",first)
    console.log("second", second)
}

maxx(nums)