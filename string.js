const str = "hello";

function vowel(str){
    let v = [];
    let count = 0;

    for(let i = 0; i < str.length; i++){
        const char = str[i].toLowerCase();
        if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u"){
            v.push(char);
            count++;
        }
    }
    console.log(v)
    console.log("Count" + count)
}

// function countchar(str){
//     let count = 0;

//     for(let i = 0; i < str.length; i++){
//         count++;
//     }
//     // console.log(count)
//     return count;
// }


// function reverse(str){
//     let result = "";
//     for(let i = str.length - 1; i >= 0; i--){
//         result += str[i]
//     }
//     return result;
//     // console.log(result)
// }

console.log(vowel(str))

// let result = "";
// for(let i = str.length -1; i >= 0; i--){
    
//     result +=str[i];
//     console.log(str[i] + " == " + i);
//     // console.log(str.length)
  
// }
//   console.log(result)

//    let result = "";
// for(let char of str){
 
//     result +=char
//     console.log(char)
   
// }
//  console.log(result)