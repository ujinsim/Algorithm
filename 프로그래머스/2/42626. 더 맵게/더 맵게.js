class MinHeap {
	
	constructor() {
		this.heap = [];
	}
 
	push(value) {
		this.heap.push(value);
		this.bubbleUp();
	}
 
	pop() {
		if (this.isEmpty()) return null;
		const min = this.heap[0]; 
		const end = this.heap.pop();
		if (this.heap.length > 0) {
			this.heap[0] = end;
			this.bubbleDown();
		}
		return min;
	}
 
	bubbleUp() {
		let index = this.heap.length - 1;
		const element = this.heap[index];
		while (index > 0) {
			let parentIndex = Math.floor((index - 1) / 2);
			let parent = this.heap[parentIndex];
			if (element >= parent) break; 
			
			this.heap[parentIndex] = element;
			this.heap[index] = parent;
			index = parentIndex;
		}
	}
 
	bubbleDown() {
		let index = 0;
		const length = this.heap.length;
		const element = this.heap[0];
		while (true) {
			let leftChildIndex = 2 * index + 1;
			let rightChildIndex = 2 * index + 2;
			let leftChild, rightChild;
			let swap = null;
 
			if (leftChildIndex < length) {
				leftChild = this.heap[leftChildIndex];
				if (leftChild < element) { 
					swap = leftChildIndex;
				}
			}
 
			if (rightChildIndex < length) {
				rightChild = this.heap[rightChildIndex];
				if (rightChild < element && (swap === null || rightChild < leftChild)) {
					swap = rightChildIndex;
				}
			}
			if (swap === null) break;
			this.heap[index] = this.heap[swap];
			this.heap[swap] = element;
			index = swap;
		}
	}
 
	isEmpty() {
		return this.heap.length === 0;
	}
 
	peek() { 
		return this.heap[0];
	}
}


function solution(scoville, K){
  const minHeap = new MinHeap()
  
  const N = scoville.length;
  let minCount = 0;
  
  for(let i=0; i<N; i++){
    minHeap.push(scoville[i])
  }
  
  while(minHeap.peek() < K) {
    
    if (minHeap.heap.length <= 1) { 
      return -1;
    }
    const firstMin = minHeap.pop()
    const secondMin = minHeap.pop()
    
    const value = firstMin + (secondMin*2)
    minHeap.push(value)
    minCount++;
  }
  
  return minCount
}