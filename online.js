let nums = [2,4,2,5,4,6];
let dub = []

for(let i = 0; i < nums.length; i++){
    
    if(!dub.includes(nums[i])){
        console.log(dub.includes(i))
        dub.push(nums[i])
    }
}
console.log(dub);


function tar(nums,target){
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            let sum = nums[i] + nums[j]
            
            if(sum == target){
                console.log(i + " , " + j)
            }
        }
    }
}

tar(nums,target)


nums = [2, 5, 6, 8]
target = 10
// Expected Output
// 3
count = 0;

for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++){
        let sum = nums[i] + nums[j]
        
        if(sum > target){
            count++
            console.log(i + " , " + j)
        }
    }
}

console.log(count)

