import React from 'react';

import FileMenuBar from './FileMenuBar';
import TitleBar from './TitleBar';

class WindowFrame extends React.Component {
    constructor() {
        super();


    }

    render() {


        return (
            <div className="window-frame">
                <TitleBar />
                <FileMenuBar />
            </div>
        );
    }
}

export default WindowFrame;