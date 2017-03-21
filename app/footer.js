import React from 'react';
import Reflux from 'reflux';
import {Store, Actions} from './store';
import Chart from './chart';

class Footer extends Reflux.Component {
    constructor() {
        super();
        this.state = {};
        this.store = Store;
    }
    render() {
        return(
            <div className="row footer">
                <Chart model={this.state.model} config={this.state.chartConfig} />
            </div>
        );
    }
}

export default Footer;