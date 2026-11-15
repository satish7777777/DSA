let arr = [1,2,2,3,4,5,6,7,5];
arr.sort();
let result = [];
let j = 0;
//[2,5]

for(let i = 1; i < arr.length; i++){
    if(arr[j] == arr[i]){
        j++;
        result.push(arr[i]);
    }
    else if(arr[j] !== arr[i]){
        j++;
    }
}

console.log(result);