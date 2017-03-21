import React from 'react';
import Reflux from 'reflux';
import Model from './board/model';

var Actions = Reflux.createActions([
    'startStop',
    'next',
    'reset',
    'changeWidth',
    'changeHeight',
    'changeDensity'
]);

class Store extends Reflux.Store {
    constructor() {
        super();
        this.state = {
            time: 0,
            started: 0,
            interval: null,
            width: 100,
            height: 100,
            density: 0.1
        };
        this.state.model = new Model(this.state.width, this.state.height, this.state.density);
        this.state.model.setShifts(this.getMooreArea());
        this.state.model.setCalcNext(function(val, alive){
            if (val == 1 && (alive == 2 || alive == 3)) {
                return 1;
            } else if(val == 0 && alive == 3) {
                return 1;
            }
            return 0;
        });

        this.state.chartConfig = {
            xAxis: {
                categories: []
            },
            series: [{
                data: [],
                showInLegend: false,
                name: 'Populacja',
                marker: {
                    enabled: false
                }
            }],
            yAxis: {
                min: 0,
                title:{
                    text:'Populacja',
                    rotation: -90
                }
            },
            chart: {
                width: '1000',
                height: '170',
                animation: false
            },
            title: {
                text: '',
                style: {
                    display: 'none'
                }
            },
            subtitle: {
                text: '',
                style: {
                    display: 'none'
                }
            }
        };

        this.listenables = Actions;
    }

    getMooreArea() {
        return [
            [-1,-1],
            [-1,0],
            [-1,1],
            [0,-1],
            [0,1],
            [1,-1],
            [1,0],
            [1,1]
        ];
    }

    onStartStop() {
        if (this.state.started == 0) {
            let store = this;
            let newInterval = setInterval(function(){
                store.onNext();
            }, 100);
            this.setState({started: 1, interval: newInterval});
        } else {
            clearInterval(this.state.interval);
            this.setState({started: 0, interval: null});
        }
    }

    onNext() {
        this.state.model.nextStep();
        let newModel = this.state.model;
        let newChartConfig = this.state.chartConfig;
        let newTime = ++this.state.time;
        this.setState({model:newModel, time:newTime, chartConfig: newChartConfig});
    }

    onReset() {
        this.state.model.generateBoard(
            this.state.width,
            this.state.height,
            this.state.density
        );
        let newModel = this.state.model;
        let newChartConfig = this.state.chartConfig;
        this.setState({model:newModel, time:0, chartConfig: newChartConfig});
    }

    onChangeWidth(event) {
        this.setState({"width":parseInt(event.target.value)});
    }

    onChangeHeight(event) {
        this.setState({"height":parseInt(event.target.value)});
    }

    onChangeDensity(event) {
        this.setState({"density":parseFloat(event.target.value)});
    }
}

export {Store, Actions};