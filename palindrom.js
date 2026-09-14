let str = "madam";

function palindromtwopointer(str){
    let left = 0;
    let right = str.length -1;

    while(left < right){
        if(str[left] !== str[right]){
            return false;
        }
        left++;
        right--;

    }
    return true;
}

console.log(palindromtwopointer(str))

// function palindrom(str) {
//   let result = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }

//   return str === result;

// //   if(result == str){
// //     return true;
// //   }else{
// //     return false;
// //   }
// //   console.log(result);
// }

// console.log(palindrom(str));


// for(let char of str){
//     let result = "";

// }
