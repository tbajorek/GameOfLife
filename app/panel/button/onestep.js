import React from 'react';
import Reflux from 'reflux';
import {Store, Actions} from '../../store';

class OneStep extends Reflux.Component {
    constructor() {
        super();
        this.state = {};
        this.store = Store;
    }
    render() {
        return(
            <button className="control-button one-step" title="Jeden krok" disabled={this.state.started ? "true" : ""} onClick={Actions.next}>
                <i className="fa fa-forward" aria-hidden="true"></i>
            </button>
        );
    }
}

export default OneStep;