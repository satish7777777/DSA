let ar = [1, 2, 3, 4, 10, 11];

function simpleArraySum(ar) {
    // Write your code here
    let result = 0;
    
    for(let i = 0; i < ar.length; i++){
        let current = result + ar[i];
        
        result = current;
    }
    return result;
}

console.log(simpleArraySum(ar))