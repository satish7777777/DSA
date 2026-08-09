// nums = [2,15,11,7]

// for(let i = 0; i < nums.length; i++){
//     for(let j = 0; j < nums.length; j++){
//         // console.log("Outer", i + "Inner", j)
//         console.log("Outer", nums[i] + "Inner", nums[j])
//     }
// }

// nums = [5, 8, 3, 10, 7]

// for(let i = 0; i <= nums.length; i++){
//     // console.log("Number",nums[i])
//     // console.log("Number",i)
//     console.log("Index",i + "values",nums[i])
// }

// nums = [8,4,1,15,6]

// let max = 0;
// for(let i = 0; i<= nums.length; i++){

//     // console.log(nums[i])

//     if(max < nums[i]){
//         max = nums[i];

//         // console.log("MAXX",max);
//     }
// }
// console.log("MAXX",max);

// nums = [8,4,1,15,8,6]

// let min = nums[0];
// for(let i = 0; i<= nums.length; i++){

//     // console.log(nums[i])

//     if(min > nums[i]){
//         min = nums[i];

//         // console.log("MAXX",max);
//     }
// }
// console.log("MIN",min);

// nums = [1,2,3]

// // Output:

// // 1 2
// // 1 3
// // 2 3
// let one = 0;
// let two = 0;

// for(let i = 0; i < nums.length; i++){
//     for(let j = i + 1; j < nums.length; j++){

//         one = nums[i];
//         two = nums[j];
//         // console.log("I",i + "J",j)
//         console.log(one + " " + two)
//     }
// }

// Print every pair with their indices.

// Example:

// nums = [5,8,3]

// Output:

// (0,1) -> 5 8
// (0,2) -> 5 3
// (1,2) -> 8 3

// for(let i = 0; i < nums.length; i++){
//     for(let j = i + 1; j < nums.length; j++){
//         indexi = nums[i];
//         indexj = nums[j];
//         console.log( indexi + " "+  indexj);
//     }
// }

// Question 8

// Print every pair and its sum.

// Example:

// nums = [2,7,11]

// Output:

// 2 + 7 = 9
// 2 + 11 = 13
// 7 + 11 = 18

// for(let i = 0; i < nums.length; i++){
//     for(let j = i + 1; j < nums.length; j++){
//         idata = nums[i];
//         jdata = nums[j];

//         sum = idata + jdata;

//         console.log(idata + " " + "+" + " " + jdata + "=" +sum)
//     }
// }

// Question 9 ⭐

// Print only the pairs whose sum is even.

// Example:

// nums = [1,2,3,4]

// Expected:

// 1 3
// 2 4

// for(let i = 0; i < nums.length; i++){
//     for(let j = i +1; j < nums.length; j++){
//         idata = nums[i];
//         jdata = nums[j];

//         sum = idata + jdata;

//         if (sum % 2 == 0){
//             console.log(nums[i] + " " + nums[j]);
//         }

//         // console.log(sum + " " + nums[i] + " " + nums[j]);
//     }
// }

// Question 10 ⭐

// Print only the pairs whose sum is greater than 10.

// Example:

nums = [2,7,5,9]

// Output:

// 2 9
// 7 5
// 7 9
// 5 9

let n = 8;
for (let i = 0; i <=n; i++) {
  for (let j = 0; j < i; j++) {
    process.stdout.write("* ");
    // console.log("* ");
  }
  console.log();
}


// const num = [1,2,4,5,6,7,8];
// for(let i=0; i<num.length; i++){
//     if(num[i] %2 ==0 ){  // solve this without logic 
//         console.log(num[i])
//     }
// }

// Find all pairs whose sum is 10.

// Example:

// nums = [1,9,2,8,3,7]

// // Output:

// // 1 9
// // 2 8
// // 3 7

// for(let i = 0; i < nums.length; i++){
//     for(let j = i + 1; j < nums.length; j++){
//         sum = nums[i] + nums[j];

//         if(sum == 10){
//             // console.log(nums[i] + " " + nums[j])
//             console.log(i + " " + j);
//         }
//         // console.log(sum)
//     }
// }

// Question 13 ⭐

// Find the first pair whose sum equals the target.

// Example:

// nums = [4,1,6,5]
// target = 10

// Output:

// (0,2)

// for(let i = 0; i < nums.length; i++){
//     for(let j = i +1; i < nums.length; j++){
//         sum = nums[i] + nums[j];

//         if(sum == target){
//             console.log(i + " " + j);
//         }
//     }
// }


// Question 15

// Count how many pairs have the same value.

// Example:

nums = [2,2,3,2]

// Output:

// 3

let numbers = 0;
for(let i = 0; i < nums.length; i++){
    for(let j = i + 1; j < nums.length; j++){
        first = nums[i];
        second = nums[j];
       

        if(first == second ){
            numbers++;
            // console.log("NNNNNN",numbers);
        }
       
    }
}
 console.log("NNNNNN",numbers);