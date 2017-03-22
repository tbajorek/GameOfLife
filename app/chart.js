import React from 'react';
const ReactHighcharts = require('react-highcharts');

class Chart extends React.Component {
    shouldComponentUpdate(nextProps, nextState) {
        let chart = this.refs.chart.getChart();
        let history = nextProps.model.history;
        if (history.time == 0) {
            chart.series[0].setData([]);
            chart.redraw();
        }
        if (history.isFull()) {
            chart.series[0].data[0].remove();
        }
        chart.series[0].addPoint({x: history.time, y: history.getInPercent()});
        return history.time == 0;
    }
    render() {
        return(
            <div className="chart">
                <ReactHighcharts config={this.props.config} ref="chart" />
            </div>
        );
    }
}

export default Chart;