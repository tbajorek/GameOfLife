import React from 'react';
import Reflux from 'reflux';
import {Store, Actions} from '../../store';

class Reset extends Reflux.Component {
    constructor() {
        super();
        this.state = {};
        this.store = Store;
    }

    render() {
        return(
            <button className="control-button reset" title="Reset" disabled={this.state.started ? "true" : ""} onClick={Actions.reset}>
                <i className="fa fa-refresh" aria-hidden="true"></i>
            </button>
        );
    }
}

export default Reset;