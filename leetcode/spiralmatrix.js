// Given an m x n matrix, return all elements of the matrix in spiral order.

 

// Example 1:


// Input: matrix = [[1,2,3],[4,5,6],[7,8,9]]
// Output: [1,2,3,6,9,8,7,4,5]
// Example 2:


// Input: matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]]
// Output: [1,2,3,4,8,12,11,10,9,5,6,7]

let matrix = [[1,2,3,4],[5,6,7,8],[9,10,11,12]];

function spiral(matrix){
    let top = 0;
    let bottom = matrix.length - 1;
    let left = 0;
    let right = matrix[0].length - 1;
    let result = []
    // console.log(`Top ${top} Bottom ${bottom} Left ${left} Right${right}`)

    while(top <= bottom  && left <= right){
        
        for(let col = left; col <= right; col++){
            result.push(matrix[top][col])
           
        }
         top++;

        for(let row = top; row <= bottom; row++){
            result.push(matrix[row][right]);
        }
        right--;

        for(let col = right; col >= left; col--){
            result.push(matrix[bottom][col]);
        }
        bottom--;
        for(let row = bottom; row >= top; row--){
            result.push(matrix[row][left]);
        }
        left++
    }
    return result;
}

console.log(spiral(matrix));