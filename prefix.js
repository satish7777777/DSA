// let nums = [2, 3, 4, 5];
// let prefix = [];
// let product = 1;

// for(let i = 0; i < nums.length; i++){
//     prefix.push(product)

//     product = nums[i] * product;
// }

// console.log(prefix)

//SUFFIX

let nums = [2, 3, 4, 5];
let suffix = [];
let product = 1;

for(let i = nums.length - 1; i >= 0; i--){
    // suffix.push(product);
    suffix[i] = product;

    product = nums[i] * product;
}

console.log(suffix);