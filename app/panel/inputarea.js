import React from 'react';
import Size from './input/size';
import Density from './input/density';
import Information from './input/information';

/**
 * Component groups input fields with parameters of the simulation
 */
class InputArea extends React.Component {
    render() {
        return(
            <div className="control-area control-input-area">
                <Size />
                <Density />
                <hr />
                <Information />
            </div>
        );
    }
}

export default InputArea;