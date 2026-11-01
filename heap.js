let score  = [10,3,8,9,4];

// let maxHeap = new MaxHeap();



//Max Heap
class MaxHeap{
    constructor(){
        this.heap = [];
    }

    //insert element
    push(value){
        this.heap.push(value);

        let index = this.heap.length - 1;

        while(index > 0){
            let parent = Math.floor((index - 1) / 2);

            if(this.heap[parent].score >= this.heap[index].score){
                break;
            }

            [this.heap[parent], this.heap[index]] = [this.heap[index], this.heap[parent]];

            index = parent;
        }
    }


    //remove elements
    // pop(){
    //     if (this.heap.length === 0) return null;

    //     if (this.heap.length === 1){
    //         return this.heap.pop();
    //     }

    //     let max = this.heap[0];

    //     this.heap[0] = this.heap.pop();

    //     let index = 0;

    // }
}

let maxHeap = new MaxHeap();

for(let i = 0; i < score.length; i++){
    maxHeap.push({
        score: score[i],
        index: i
    })
}

// maxHeap.push({ score: 10, index: 0 });
// maxHeap.push({ score: 30, index: 1 });
// maxHeap.push({ score: 20, index: 2 });
// maxHeap.push({ score: 50, index: 3 });
// maxHeap.push({ score: 40, index: 4 });



console.log(maxHeap.heap);

































var findRelativeRanks = function(score) {

    class MaxHeap {
        constructor(score) {
            this.heap = [];

            for (let i = 0; i < score.length; i++) {
                this.push({
                    score: score[i],
                    index: i
                });
            }
        }

        // Insert element - Heapify Up
        push(value) {
            this.heap.push(value);

            let index = this.heap.length - 1;

            while (index > 0) {

                let parent = Math.floor((index - 1) / 2);

                if (this.heap[parent].score >= this.heap[index].score) {
                    break;
                }

                [
                    this.heap[parent],
                    this.heap[index]
                ] = [
                    this.heap[index],
                    this.heap[parent]
                ];

                index = parent;
            }
        }

        // Remove maximum - Heapify Down
        pop() {

            if (this.heap.length === 0) {
                return null;
            }

            if (this.heap.length === 1) {
                return this.heap.pop();
            }

            let max = this.heap[0];

            this.heap[0] = this.heap.pop();

            let index = 0;

            while (true) {

                let left = 2 * index + 1;
                let right = 2 * index + 2;

                let largest = index;

                if (
                    left < this.heap.length &&
                    this.heap[left].score > this.heap[largest].score
                ) {
                    largest = left;
                }

                if (
                    right < this.heap.length &&
                    this.heap[right].score > this.heap[largest].score
                ) {
                    largest = right;
                }

                if (largest === index) {
                    break;
                }

                [
                    this.heap[index],
                    this.heap[largest]
                ] = [
                    this.heap[largest],
                    this.heap[index]
                ];

                index = largest;
            }

            return max;
        }
    }

    // Create Max Heap
    let maxHeap = new MaxHeap(score);

    // Store final ranks
    let answer = new Array(score.length);

    let rank = 1;

    // Extract maximum elements
    while (maxHeap.heap.length > 0) {

        let athlete = maxHeap.pop();

        let result;

        if (rank === 1) {
            result = "Gold Medal";
        }
        else if (rank === 2) {
            result = "Silver Medal";
        }
        else if (rank === 3) {
            result = "Bronze Medal";
        }
        else {
            result = String(rank);
        }

        // Store at original index
        answer[athlete.index] = result;

        rank++;
    }

    return answer;
};