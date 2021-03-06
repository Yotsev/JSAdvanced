class List {

    constructor() {

        this.elements = [];
        this.size = this.elements.length;

    }

    add(element) {

        this.elements.push(Number(element));
        this.elements.sort((a, b) => a - b);
        this.size++;

    }

    remove(index) {

        if (index < 0 || index >= this.elements.length) {
            
            throw new Error('Index out of range');

        }

        this.elements.splice(index, 1);
        this.elements.sort((a, b) => a - b);
        this.size--;

    }

    get(index) {

        if (index < 0 || index >= this.elements.length) {
            
            throw new Error('Index out of range');

        }

        return this.elements[index];

    }
}