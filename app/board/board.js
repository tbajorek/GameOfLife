import React from 'react';
import Reflux from 'reflux';
import {Store, Actions} from '../store';

class Board extends Reflux.Component {
    constructor() {
        super();
        this.state = {};
        this.store = Store;
        this.dead = '#f4f1f1';
        this.alive = '#075e00';
        this.clearColor = 'white';
    }
    init() {
        if (this.canvas == undefined) {
            this.canvas = this.refs.board.getContext('2d');
        }
        if (this.width == undefined) {
            this.width=parseInt(window.getComputedStyle(this.refs.board).width);
        }
        if (this.height == undefined) {
            this.height=parseInt(window.getComputedStyle(this.refs.board).height);
        }
    }
    shouldComponentUpdate(nextProps, nextState) {
        this.clear();
        this.redraw(nextState.model.board);
        return false;
    }
    componentDidMount() {
        this.clear();
        this.redraw(this.state.model.board);
    }
    clear() {
        this.init();
        this.canvas.fillStyle = this.clearColor;
        this.canvas.fillRect(0,0,this.width, this.height);
    }
    drawRect(r,c,data,xsize,ysize) {
        var xs=c*(xsize+1);
        var ys=r*(ysize+1);
        this.canvas.fillStyle = data[r][c]?this.alive:this.dead;
        this.canvas.fillRect(xs, ys, xsize, ysize);
    }
    redraw(data) {
        var xsize = Math.round((this.width-data[0].length+1)/data[0].length);
        var ysize = Math.round((this.height-data.length+1)/data.length);
        for(let r in data) {
            r = parseInt(r);
            for(let c in data[r]) {
                c = parseInt(c);
                this.drawRect(r,c,data,xsize,ysize);
            }
        }
    }
    render() {
        return(<canvas id="canvas" className="board" ref="board" width="700px" height="700px"></canvas>);
    }
}

export default Board;