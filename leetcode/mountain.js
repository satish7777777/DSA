// You are given an integer mountain array arr of length n where the values increase to a peak element and then decrease.

// Return the index of the peak element.

// Your task is to solve it in O(log(n)) time complexity.

// Example 1:

// Input: arr = [0,1,0]

// Output: 1

// Example 2:

// Input: arr = [0,2,1,0]

// Output: 1

// Example 3:

// Input: arr = [0,10,5,2]

// Output: 1

// Constraints:

// 3 <= arr.length <= 105
// 0 <= arr[i] <= 106
// arr is guaranteed to be a mountain array.

// let arr = [0, 10, 5, 2];

// function mountainmax(arr) {
//   let left = 0;
//   let right = arr.length - 1;
//   let mid = Math.floor(left + (right - left) / 2);
//   let output = 0;

//   console.log("MID ", mid, "VALUE ", right);

//   while (left < right) {
//     if (arr[mid] < arr[mid + 1] && arr[mid] > arr[mid - 1]) {
//       //incresing order
//       left = mid;
//     } else if (arr[mid] > arr[mid + 1] && arr[mid] < arr[mid - 1]) {
//       //decresing order
//       right = mid;
//     }
//     else if(arr[mid] > arr[mid + 1] && arr[mid] > arr[mid - 1]){
//         output = arr[mid];
//     }
//   }
//   return output;
// }

// console.log(mountainmax(arr));

let arr = [0,2,1,0];

function mountainmax(arr) {
  let start = 1;
  let end = arr.length -2;

  while(start <= end){
    let mid = start + Math.floor((end - start) / 2);

    if(arr[mid + 1] < arr[mid] && arr[mid - 1] < arr[mid]){
        return mid;
    }
    else if(arr[mid] < arr[mid + 1]){
        start = mid + 1;
    }
    else{
        end = mid -1;
    }
  }
  return -1;
}

console.log(mountainmax(arr));

























