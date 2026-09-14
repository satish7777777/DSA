//  let arr = [5, 3, 8, 2, 1];

// function bubble(arr){
//     // let first = 0;
//     // let second = 1;

//     for(let i = 0; i < arr.length; i++){
//         for(let j = 0; j <arr.length - 1; j++){
//             console.log(arr[j] + " " + arr[j + 1])
//             if(arr[j] > arr[j + 1]){
//                 [arr[j], arr[j + 1]] = [arr[j+1], arr[j]];
//             }
//         }
//     }

//     return arr;

// }

// console.log(bubble(arr));

// let arr = [5, 3, 8, 2, 1];

// function selectionsort(arr){
    

//     for(let i = 0; i < arr.length -1; i++){
//         let min = i;
//         for(let j  = i + 1; j < arr.length; j++){
//             if(arr[min] > arr[j]){
//                 min = j;
//             }
//         }
//         console.log([arr[i] + " " + arr[min]]);
//         [arr[i], arr[min]] = [arr[min], arr[i]]
//     }
//     return arr;
//     // console.log(min)
// }

// console.log(selectionsort(arr));