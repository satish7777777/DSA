// let arr = [1,2,3,4,5,6,7];

// function twop(arr){
//     // let arr = [];
//     let left = 0;
//     let right = arr.length - 1;
//     let temp =0;

//     while(left < right){
//         temp = arr[left];
//         arr[left] = arr[right];
//         arr[right] = temp;

//         left++;
//         right--;
//     }

//     return arr;

//     // console.log(left);
//     // console.log(right);
// }

// console.log(twop(arr))

let arr = [5, 3, 8, 2, 1];

function bubble(arr){
    // let first = 0;
    // let second = 1;

    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j <arr.length - 1; j++){
            if(arr[j] > arr[j + 1]){
                [arr[j], arr[j + 1]] = [arr[j+1], arr[j]];
            }
        }
    }

    return arr;

}

console.log(bubble(arr));