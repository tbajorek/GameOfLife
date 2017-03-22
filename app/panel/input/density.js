import React from 'react';
import Reflux from 'reflux';
import {Store, Actions} from '../../store';

class Density extends Reflux.Component {
    constructor() {
        super();
        this.state = {};
        this.store = Store;
    }

    render() {
        return(
            <div className="param-block">
                <span className="param">Gęstość:&nbsp;</span>
                <input type="number" step="0.01" max="1.0" min="0.01" className="param param-density" disabled={this.state.started ? "true" : ""} value={this.state.density} onChange={Actions.changeDensity} />&nbsp;[0;1]
            </div>
        );
    }
}

export default Density;
