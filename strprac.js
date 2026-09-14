// let str = "hello";
// // let result;

// function rev(str) {
//   let result = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     result += str[i];
//   }
//   console.log(result);
//   return result;
// }

// console.log(rev(str));


// function countVowels(str){
//     let vowel = 0;
//     // console.log(str)

//     for(let char of str){
//         //  if(char.includes('aeiouAEIOU')){
//         if('aeiouAEIOU'.includes(char)){
//             vowel++;
//         }
//     }
    // }

    // for(let i = 0; i < str.length; i++){
    //     if("aeiouAEIOU".includes(str[i])){
    //         vowel++;
    //     }
    // }
    // console.log(vowel)
    // return vowel;
    // for()
// }

// console.log(countVowels("javascript"))


// function removeSpaces(str){
//     let result = "";

//     for(char of str){
//         let c = char;

//         if(c !== " "){
//             result += c;
//         }
//     }
//     return result;
// }


// console.log(removeSpaces("hello world from javascript"))

// function isPalindrome(str){
//      let rev = "";

//     for(let i = str.length -1; i >= 0; i--){
       
//         rev += str[i];
//     }
//     return rev == str;
// }

// console.log(isPalindrome("hello"))



function firstNonRepeating(str){
    let frequency = {};

    for(let char of str){
        frequency[char] = (frequency[char] || 0) + 1;
    }

    for(let char of str){
        if(frequency[char] === 1){
            return char;
        }
        else{
            return null;;
        }
    }
}

console.log(firstNonRepeating("aabbcc"))