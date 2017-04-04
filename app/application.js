import React from 'react';
import Reflux from 'reflux';
import {Store, Actions} from './store';
import Header from './header';
import Board from './board/board';
import Model from './board/model';
import Panel from './panel/panel';
import Footer from './footer';

/**
 * Main class of Game of Life application
 */
class Application extends Reflux.Component {
    constructor() {
        super();
        this.state = {};
        this.store = Store;
    }

    render() {
        return(
            <div className="application">
                <Header />
                <div className="row">
                    <Panel />
                    <Board />
                </div>
                <Footer />
            </div>
        );
    }
}

export default Application;