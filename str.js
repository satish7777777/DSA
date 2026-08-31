//Valid Anagram

let namee = "satish";
let n = "tishosa";

function anagram(str1, str2) {

    let f1 = str1.split("");
    let f2 = str2.split("");
    // console.log(f1)
    let a = f1.length;
    let b = 0;

    for(let i = 0; i < f1.length; i++){
        for(let j = 0; j < f2.length; j++){
            // console.log(str1[i] + " == " + str2[j])
            if(str1[i] == str2[j]){
                b++;
                // str2[j] = 0;
                break;
            }
        }
    }

    console.log(a + " -- " + b)

    if(a == b){
        return true;
    }else{
        return false;
    }
//   let counter = {}; //create HashMap/Object

//   if (str1.length !== str2.length) {//if length is not equal to both string then return false
//     return false;
//   }
//   for (let letter of str1) { //Iterate over each character of str1
//     counter[letter] = (counter[letter] || 0) + 1;  // Count the frequency of each character in str1 (key value pair) in the counter object
//   }
//   console.log(counter);

//   for (let items of str2) { // Iterate over each character of str2
//     if (!counter[items]) { //If the current character doesn't have a positive remaining count, return false.
//       return false;
//     }
//     counter[items] -= 1; //decresing the count of letters (key value pair) from the counter object
//   }
//   console.log(counter);
//   return true;
}

console.log(anagram(namee, n));

// let frequency = namee.split("")
// let frequency2 = n.split("")

// for(let i = 0; i < frequency.length; i++){
//     frequency = (frequency || 0) + 1;
//     console.log(namee[i])
// }
// frequency[namee] = (frequency[namee] || 0) + 1;

// console.log(frequency)
// console.log(frequency2)

// let counter = {}
// for(let letter of namee){
//     counter[letter] = (counter[letter] || 0) + 1;
//     // console.log(counter[letter])
// }

// for(let letter of n){
//     counter[letter]-=1;
//     return true;
// }
