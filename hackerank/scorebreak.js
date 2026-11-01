// 10
// 3 4 21 36 10 28 35 5 24 42
// 10 5 20 20 4 5 2 25 1
let num = [10,5,20,20,4,5,2,25,1];

function minmax(num){
let min = num[0];
let max = num[0];
let mincount = 0;
let maxcount = 0;

for(let i = 1; i < num.length; i++){
    if(num[i] > max){
        maxcount++;
        max = num[i]
    }
    else if(num[i] < min){
        mincount++;
        min = num[i]
    }
}
return [maxcount,mincount];
}

console.log(minmax(num));