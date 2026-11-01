let grid =  [[1, 3], [2, 2]];

let map1 = new Map();
let n = grid.length;
let result = [];

for(let row of grid){
    for(let num of row){
        map1.set(num, (map1.get(num) || 0) + 1);
    }
}

for(let i = 1; i <= n * n; i++){
    // console.log(i)
    if(!map1.has(i)){
        result[1] = i;
        // console.log(i)
    }
    else if(map1.get(i) === 2){{
        result[0] = i;
    }
    }
}

console.log("MAAAP ",result);     