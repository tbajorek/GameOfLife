class History {
    constructor(limit) {
        if (limit == undefined) {
            limit = 100;
        }
        this.limit = limit;
        this.time = -1;
        this.lastValue = null;
    }

    add(value) {
        this.lastValue = value;
        ++this.time;
    }

    isFull() {
        return this.time >= this.limit;
    }
}

export default History;