let nums1 = [1,2,2,1];
let nums2 = [2,2];

function intersection(nums1,nums2){
    let map1 = new Map();
    let map2 = new Map();
    let result = [];

    for(let num of nums1){
        map1.set(num, (map1.get(num) || 0) +1 );
    }

    for(let num of nums2){
        map2.set(num,(map2.get(num) || 0 ) + 1);
    }

    for(let num of nums1){
        if(map2.has(num) && map2.get(num) > 0){
            // if(!result.includes(num)){
            //     result.push(num);
            // }
            result.push(num);
            // map2.set(num, (map2.get) - 1);
            
            // console.log(num);
        }
    }

    // console.log("Map1 ",map1);
    // console.log("MAP2 ", map2)

    return result;
}

console.log(intersection(nums1,nums2));