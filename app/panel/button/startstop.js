import React from 'react';
import Reflux from 'reflux';
import {Store, Actions} from '../../store';

/**
 * Component with start/stop button
 */
class StartStop extends Reflux.Component {
    constructor() {
        super();
        this.state = {};
        this.store = Store;
    }
    render() {
        return(
            <button className="control-button start-stop" title={this.state.started ? "Pauza" : "Start"} onClick={Actions.startStop}>
                <i className={this.state.started ? "fa fa-pause" : "fa fa-play"} aria-hidden="true"></i>
            </button>
        );
    }
}

export default StartStop;