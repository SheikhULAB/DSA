// Queue -> FIFO -> First in First Out

class Queue {
    constructor() {
      this.queue = [];
    }
    enqueue(element) {
        this.queue.push(element);
    }
    dequeue() {
        this.queue.shift();
    }
}

const premiks = new Queue();
premiks.enqueue('Ashiq');
premiks.enqueue('Dewan');
premiks.enqueue('Prem');
premiks.enqueue('Sagor');
premiks.enqueue('Raj');

console.log(premiks.queue); //[ 'Ashiq', 'Dewan', 'Prem', 'Sagor', 'Raj' ]

premiks.dequeue();
console.log(premiks.queue); //[ 'Dewan', 'Prem', 'Sagor', 'Raj' ]
premiks.dequeue();
console.log(premiks.queue); //[ 'Prem', 'Sagor', 'Raj' ]
premiks.dequeue();
console.log(premiks.queue); // [ 'Sagor', 'Raj' ]
