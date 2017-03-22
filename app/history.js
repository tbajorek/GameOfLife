class History {
    constructor(limit, maxValue, precision) {
        if (limit == undefined) {
            limit = 100;
        }
        if (maxValue == undefined) {
            maxValue = 1;
        }
        if (precision == undefined) {
            precision = 4;
        }
        this.limit = limit;
        this.time = -1;
        this.maxValue = maxValue;
        this.lastValue = null;
        this.precision = precision;
    }

    add(value) {
        this.lastValue = this.getWithPrecision(value, this.precision);
        ++this.time;
    }

    addNormalized(value) {
        this.lastValue = this.getWithPrecision(value/this.maxValue, this.precision);
        ++this.time;
    }

    getWithPrecision(value, precision) {
        return Number(value).toFixed(precision);
    }

    getInPercent(symbol) {
        let value = this.getWithPrecision(this.lastValue*100.0, this.precision-2);
        if (symbol === true) {
            value += '%';
            return value;
        } else {
            return parseFloat(value);
        }

    }

    isFull() {
        return this.time >= this.limit;
    }
}

export default History;