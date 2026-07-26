// Question 1
// nums = [12,56,789,14,659,48]

// Output

// [789,48]

// nums = [12,56,789,14,659,48]
// let eight = [];
// for(let i = 0; i < nums.length; i++){
//     nums[i] = String(nums[i]);

//     if(nums[i].includes('8')){
        
//         eight.push(nums[i]);
//     }

//     console.log(nums)
// }

// console.log(nums)
// console.log(eight)


// Return all numbers ending with 8

// [18,28,34,58]

// Output

// [18,28,58]

// let nums = [18,28,34,58]; //fetch opnly numbers which include 8
// let eight = []

// for(let i = 0; i < nums.length; i++){
//     nums[i] = String(nums[i]);

//     if(nums[i].endsWith('8')){
//         eight.push(nums[i])
//     }
// }

// console.log(eight)

// [12,154,87,109,34]

// Output

// [12,154,109]


// let nums = [12,154,87,109,34];
// let one = []

// for(let i = 0; i < nums.length; i++){
//     nums[i] = String(nums[i])

//     if(nums[i].at(0) == "1"){
//         one.push(nums[i])
//     }
// }

// console.log(one)

// [188,89,880,908]

// Output

// [188,880]

// let nums = [188,89,880,908];
// let eight = [];

// for(let i = 0; i < nums.length; i++){
//     let str = String(nums[i])
//     let count = 0

//     for(let j = 0; j < str.length; j++){
//         // console.log(j)
//         console.log(str[j])
//         if(str[j] === '8'){
//             count++
//         }
//     }

//     if(count > 1){
//         eight.push(str)
//     }
//     // if(nums[i].includes('8') <= 2){
//     //     eight.push(nums[i])
//     // }
// }

// console.log(eight)


// [12,18,28,80,91]

// Output

// 4

// let nums = [12,18,28,80,91]

// let numbers = 0

// for(let i = 0; i < nums.length; i++){
//     let str = String(nums[i]);

//     for(let j = 0; j < str.length; j++){
//         if(str[j] === '8'){
//             numbers++
//         }
//     }
// }

// console.log(numbers)

// let nums = [12,80,18,28,80,91]

// for(let i = 0; i < nums.length; i++){

//     let str = String(nums[i])

//     if(str.includes('8')){
//         console.log(nums[i]);
//         nums[i] = "eight"
//         // i.replace("eight")
//         // break;
//     }
// }

// console.log(nums)

// Print the index of every number containing 8
// let nums = [12,80,18,80,91,28];

// for(let i = 0; i < nums.length; i++){
//     // let str = String(nums[i])
//     nums[i] = String(nums[i])

//     if(nums[i].includes('8')){
//         console.log(i)
//     }
// }

// console.log(nums)

// Remove every number containing 8

// let nums = [12,80,18,80,91,28];

// for(let i = 0; i < nums.length; i++){
// for(let i = nums.length -1; i >= 0; i--){

    // nums[i] = String(nums[i])
    // let str = String(nums[i])

    // if(str.includes("8")){
    //     nums.splice(i,1)
    // }

    // if(nums[i].includes('8')){
    //     nums.splice(i,1)
    // }

    // if(String(nums[i]).includes('8')){
//         nums.splice(i,1)
//     }
// }

// console.log(nums)

// let nums = [12,80,18,80,91,28];

// for(let i = nums.length - 1; i >= 0; i--){

//     if(String(nums[i]).includes("8")){
//         nums.splice(i,1);
//     }

// }

// console.log(nums);

// Find numbers containing both 8 and 9

// [89,98,18,29,809]

// ↓

// [89,98,809]

let nums = [89,98,18,29,809]

for(let i = nums.length - 1; i >= 0; i--){
// for(let i = 0; i <= nums.length; i++){
    // if(!String(nums[i]).includes('8') && !String(nums[i]).includes('9')){
    //     nums.splice(i,1);
    // }

    let str = String(nums[i]);

    if (!str.includes('8') || !str.includes('9')) {
        nums.splice(i, 1);
    }
    
}

console.log(nums)

// let nums = [89,98,18,29,809]
// let newf = [];

// for(let i = nums.length - 1; i >= 0; i--){
// for(let i = 0; i <= nums.length; i++){
    // if(String(nums[i]).includes('8') && String(nums[i]).includes('9')){
        // nums.splice(i,1);
//         newf.push(nums[i])
//     }
// }

// console.log(nums)
// console.log(newf)

// let num = "8991"

// console.log(num.includes('8' && '1' && '9'))