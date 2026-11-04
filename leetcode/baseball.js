// You are keeping the scores for a baseball game with strange rules. At the beginning of the game, you start with an empty record.

// You are given a list of strings operations, where operations[i] is the ith operation you must apply to the record and is one of the following:

// An integer x.
// Record a new score of x.
// '+'.
// Record a new score that is the sum of the previous two scores.
// 'D'.
// Record a new score that is the double of the previous score.
// 'C'.
// Invalidate the previous score, removing it from the record.
// Return the sum of all the scores on the record after applying all the operations.

// The test cases are generated such that the answer and all intermediate calculations fit in a 32-bit integer and that all operations are valid.

// Example 1:

// Input: ops = ["5","2","C","D","+"]
// Output: 30
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "2" - Add 2 to the record, record is now [5, 2].
// "C" - Invalidate and remove the previous score, record is now [5].
// "D" - Add 2 * 5 = 10 to the record, record is now [5, 10].
// "+" - Add 5 + 10 = 15 to the record, record is now [5, 10, 15].
// The total sum is 5 + 10 + 15 = 30.
// Example 2:

// Input: ops = ["5","-2","4","C","D","9","+","+"]
// Output: 27
// Explanation:
// "5" - Add 5 to the record, record is now [5].
// "-2" - Add -2 to the record, record is now [5, -2].
// "4" - Add 4 to the record, record is now [5, -2, 4].
// "C" - Invalidate and remove the previous score, record is now [5, -2].
// "D" - Add 2 * -2 = -4 to the record, record is now [5, -2, -4].
// "9" - Add 9 to the record, record is now [5, -2, -4, 9].
// "+" - Add -4 + 9 = 5 to the record, record is now [5, -2, -4, 9, 5].
// "+" - Add 9 + 5 = 14 to the record, record is now [5, -2, -4, 9, 5, 14].
// The total sum is 5 + -2 + -4 + 9 + 5 + 14 = 27.
// Example 3:

// Input: ops = ["1","C"]
// Output: 0
// Explanation:
// "1" - Add 1 to the record, record is now [1].
// "C" - Invalidate and remove the previous score, record is now [].
// Since the record is empty, the total sum is 0.

// let ops =  ["5","2","C","D","+"];

// function baseball(ops) {
//   let output = [];
//   let sum = 0;
//   for (let char of ops) {
//     // console.log(char)
//     // output += char

//     if (char === "C") {
//       //remove element of previous output element
//       output.pop();
//     } else if (char === "D") {
//       //double the previous output elemnt (if the elemnt type is string chnage it in number aand multiply with 2)
//       let previous = output[output.length - 1];
//       output.push(previous * 2);
//     } else if (char === "+") {
//       let previous = output[output.length - 1];
//       let previous2 = output[output.length - 2];
//       output.push(previous + previous2);
//       //add previous two elemnts of output and add in output (convert if it is number if it is in string )
//     } else {
//       //just add the char in output (by chnageing its type from string to number)
//       output.push(Number(char));
//     }
//   }
//   for(let i = 0; i < output.length; i++){
//     sum = sum + output[i]
//   }

//   return {
//     output,sum
//   };
// }

// let startime = performance.now();
// let result = baseball(ops);
// let endtime = performance.now();

// console.log("Result ", result);
// console.log("Calculated Time ", endtime - startime, " ms")

// console.log(baseball(ops))
// An integer x.
// Record a new score of x.
// '+'.
// Record a new score that is the sum of the previous two scores.
// 'D'.
// Record a new score that is the double of the previous score.
// 'C'.
// Invalidate the previous score, removing it from the record.
// Return the sum of all the scores on the record after applying all the operations.

// console.log(typeof(output))
// console.log(output);




let ops = ["5","-2","4","C","D","9","+","+"];

function baseball(ops) {
  let output = [];
  let sum = 0;

  for(let char of ops){
    switch(char){

        case "C":
            output.pop();
            break;
        
        case "D":
            let previous = output[output.length - 1];
            output.push(previous * 2);
            break;

        case "+":
            let previous1 = output[output.length - 1];
            let previous2 = output[output.length - 2];
            output.push(previous1 + previous2);
            break;

        default:
            output.push(Number(char))
            break;
    }

  }
  for(let i = 0; i < output.length; i++){
    sum  = sum + output[i]
  }

  return{
    sum, output
  }
}

let startime = performance.now();
let result = baseball(ops);
let endtime = performance.now();

console.log(result);
console.log("Time " , endtime - startime, "ms");