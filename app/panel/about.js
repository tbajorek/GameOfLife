import React from 'react';
import Size from './input/size';
import Density from './input/density';
import Information from './input/information';

/**
 * Component with  information about the application and its author
 */
class About extends React.Component {
    render() {
        return(
            <div className="control-area control-about-area">
                <a className="element" target="_blank" href="./dokumentacja.pdf">
                    <i className="fa fa-file-pdf-o" aria-hidden="true"></i>&nbsp;Dokumentacja
                </a>
                <a className="element" target="_blank" href="GameOfLife.zip">
                    <i className="fa fa-download" aria-hidden="true"></i>&nbsp;Pobierz kod
                </a>
                <span className="element">
                    Autor: Tomasz Bajorek
                </span>
                </div>
        );
    }
}

export default About;
