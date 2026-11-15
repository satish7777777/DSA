// You are given an array of strings nums and an integer k. Each string in nums represents an integer without leading zeros.

// Return the string that represents the kth largest integer in nums.

// Note: Duplicate numbers should be counted distinctly. For example, if nums is ["1","2","2"], "2" is the first largest integer, "2" is the second-largest integer, and "1" is the third-largest integer.

 

// Example 1:

// Input: nums = ["3","6","7","10"], k = 4
// Output: "3"
// Explanation:
// The numbers in nums sorted in non-decreasing order are ["3","6","7","10"].
// The 4th largest integer in nums is "3".
// Example 2:

// Input: nums = ["2","21","12","1"], k = 3
// Output: "2"
// Explanation:
// The numbers in nums sorted in non-decreasing order are ["1","2","12","21"].
// The 3rd largest integer in nums is "2".
// Example 3:

// Input: nums = ["0","0"], k = 2
// Output: "0"
// Explanation:
// The numbers in nums sorted in non-decreasing order are ["0","0"].
// The 2nd largest integer in nums is "0".
 

// Constraints:

// 1 <= k <= nums.length <= 104
// 1 <= nums[i].length <= 100
// nums[i] consists of only digits.
// nums[i] will not have any leading zeros.


let nums = ["2","21","12","1"];
let numbers = [];
let numb = 0;
let k = 3;

//Output 3

for(let char of nums){
    let num = Number(char)
    numbers.push(num)
}

numbers.sort((a,b) => a - b)

let result = numbers[numbers.length - k].toString();

// for(let i = numbers.length; i >= nums.length - k; i--){
//     // if()
//     numb  = (numbers[i]).toString();
//     // console.log(numbers[i])
// }

// let numbers = nums.map(Number).sort((a,b) => a - b);

console.log(numbers)
console.log(typeof(result))






// for(let char of nums){
//     let num = Number(char);
//     console.log(typeof(num));
//     for(let i = 0; i <= numbers.length; i++){
//         if(numbers[i] > num){
//             numbers.push(num)//push number in the place of numbers[i]
//         }
//         else{
//             numbers.push(num)
//         }
//     }
//     // numbers.push(num)
// }

// console.log(numbers)