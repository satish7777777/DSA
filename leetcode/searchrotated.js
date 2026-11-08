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
    // console.log("Left sorted")
}
else{
    // console.log("Right sorted");
}
}
