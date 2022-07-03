//Stack -> LIFO -> Last in First Out

class Stack {
    constructor() {
        this.stack = [];
    }
    add(element) {
       this.stack.push(element);
    }
    remove() {
        return this.stack.pop();
    }
}

const plates = new Stack();
plates.add('Abul');
plates.add('Babul');
plates.add('Cabul');
plates.add('Dabul');
plates.add('Ebul');

console.log(plates.stack); //[ 'Abul', 'Babul', 'Cabul', 'Dabul', 'Ebul' ]

plates.remove();
console.log(plates.stack); //[ 'Abul', 'Babul', 'Cabul', 'Dabul' ]
plates.remove();
console.log(plates.stack); //[ 'Abul', 'Babul', 'Cabul' ]