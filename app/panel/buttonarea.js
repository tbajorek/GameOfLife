import React from 'react';
import StartStop from './button/startstop';
import OneStep from './button/onestep';
import Reset from './button/reset';

/**
 * Component groups buttons for managing the simulation
 */
class ButtonArea extends React.Component {
    render() {
        return(
            <div className="control-area control-button-area">
                <StartStop />
                <OneStep />
                <Reset />
            </div>
        );
    }
}

export default ButtonArea;