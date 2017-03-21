import React from 'react';
import Reflux from 'reflux';
import {Store, Actions} from '../../store';

class Size extends Reflux.Component {
    constructor() {
        super();
        this.state = {};
        this.store = Store;
    }

    render() {
        return(
            <div className="param-block">
                <span className="param">Wymiary:&nbsp;</span>
                <input type="number" step="1" max="280" className="param param-width" value={this.state.width} onChange={Actions.changeWidth} disabled={this.state.started ? "true" : ""} />&nbsp;x&nbsp;
                <input type="number" step="1" max="280" className="param param-height" value={this.state.height} onChange={Actions.changeHeight} disabled={this.state.started ? "true" : ""} />
            </div>
        );
    }
}

export default Size;
