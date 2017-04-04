import History from '../history';

/**
 * Model of board with alive and dead cells
 */
class Model {
    constructor(width, height, density) {
        if (width == undefined &&
            height == undefined &&
            density == undefined
        ) return;
        this.generateBoard(width, height, density);
        this.shifts = [];
        this.calcNext = function(r,c,board){return 0;};this.count=0;
    }

    generateBoard(width, height, density) {
        this.width = width;
        this.height = height;
        this.size = this.height*this.width;
        this.history = new History(100, this.size);
        this.density = density;
        this.population = 0;
        var board = new Array(height);
        for (var r=0;r<height;++r) {
            board[r] = new Array(width);
            for (var c=0;c<width;++c) {
                board[r][c] = 0;
            }
        }
        let border = parseInt(this.density*this.size);
        let counter = 0;
        while (counter < border) {
            let point = this.randomPoint();
            if (board[point.y][point.x] == 0) {
                board[point.y][point.x] = 1;
                ++counter;
            }
        }
        this.population = border;
        this.board = board;
        this.history.addNormalized(this.population);
    }

    initializeByArray(initValue) {
        this.board = initValue;
        this.width = this.board[0].length;
        this.height = this.board.length;
        this.size = this.width * this.height;
        for(var r in this.board) {
            r = parseInt(r);
            for (var c in this.board[r]) {
                c = parseInt(c);
                if (this.board[r][c]) {
                    ++this.population;
                }
            }
        }
    }

    randomPoint() {
        let x = Math.floor(Math.random() * this.width);
        let y = Math.floor(Math.random() * this.height);this.count++;
        return {x, y};
    }
    setCalcNext(calcNext) {
        this.calcNext = calcNext;
    }
    setShifts(shifts) {
        this.shifts = shifts;
    }

    getNormalizedValue(v, reference) {
        return parseInt((v+reference)%reference);
    }

    getNormalizedPoint(r,c) {
        let x = this.getNormalizedValue(c, this.width);
        let y = this.getNormalizedValue(r, this.height);
        return {"c":x,"r":y};
    }

    getValue(r, c) {
        let point = this.getNormalizedPoint(r, c);
        return this.board[point.r][point.c];
    }

    getAliveNumber(r, c) {
        let counter = 0;
        for(var i in this.shifts) {
            if(this.getValue(r+this.shifts[i][0], c+this.shifts[i][1])) {
                ++counter;
            }
        }
        return counter;
    }

    nextStep() {
        this.population = 0;
        for(var r in this.board) {
            r = parseInt(r);
            for (var c in this.board[r]) {
                c = parseInt(c);
                this.board[r][c] = this.calcNext(this.getValue(r, c), this.getAliveNumber(r,c));
                if (this.board[r][c]) {
                    ++this.population;
                }
            }
        }
        this.history.addNormalized(this.population);
    }
}

export default Model;