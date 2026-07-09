nums = [2,15,11,7]

for(let i = 0; i < nums.length; i++){
    for(let j = 0; j < nums.length; j++){
        // console.log("Outer", i + "Inner", j)
        console.log("Outer", nums[i] + "Inner", nums[j])
    }
}