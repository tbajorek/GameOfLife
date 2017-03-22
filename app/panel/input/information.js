import React from 'react';
import Reflux from 'reflux';
import {Store, Actions} from '../../store'

class Information extends Reflux.Component {
    constructor() {
        super();
        this.state = {};
        this.store = Store;
    }

    render() {
        return(
            <div className="info-block">
                <span className="param">Populacja:&nbsp;{this.state.model.history.getInPercent(true)}</span>
                <span className="param">Czas:&nbsp;{this.state.model.history.time}</span>
            </div>
        );
    }
}

export default Information;