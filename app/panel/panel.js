import React from 'react';
import InputArea from './inputarea';
import ButtonArea from './buttonarea';
import About from './about';

/**
 * Component groups all subpanels of the application
 */
class Panel extends React.Component {
    render() {
        return(
            <div className="panel">
                <InputArea />
                <ButtonArea />
                <About />
            </div>
        );
    }
}

export default Panel;