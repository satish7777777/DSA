let nums = [4, 5, 6, 7, 0, 1, 2];

let start = 0;
let end = nums.length -1;

let target = 1;


while(left <= right){
    let mid = Math.floor((start + end) / 2);

    if(nums[mid] == target){
        // return mid;
        console.log("Target Found ",mid);
    }
    if(nums[mid] >= nums[start]){
        if(target <= nums[start] && target > nums[mid]){
            start = mid + 1;
        }
        else{
            end = mid - 1;
        }
    // console.log("Left sorted")
}
else{
    if(target > nums[mid] && target <= nums[end]){
        end = mid -1;
    } 
    else{
        start = mid +1;
    }
    // console.log("Right sorted");
}
}
