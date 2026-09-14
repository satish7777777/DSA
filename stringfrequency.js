let str = "hello javascript";

function freq(str) {
  let frequency = {};

  for (let char of str) {
    frequency[char] = (frequency[char] || 0) + 1;
  }

  for(let char of str){
    if(frequency[char] === 1){
        return char;
    }
  }
  console.log(frequency)
}

console.log(freq(str));
