// React imports
import React from 'react';

// Material-UI Imports
import { SurroundSoundSharp, CloseSharp, MinimizeSharp, MaximizeSharp, Close } from '@material-ui/icons';

// Styles
import '../sass/TitleBar.scss';

/**
 * Component for the application Title Bar.
 */
class TitleBar extends React.Component {
    /**
     * Default constructor
     */
    constructor() {
        super();
    }

    /**
     * React render method.
     * @returns content for the app title bar.
     */
    render() {
        return (
            <div className="title-bar">
                <div className="logo">
                    <SurroundSoundSharp color="primary" />
                </div>

                <div className="execution-path">
                    <span>Webpack Create</span>
                </div>

                <div className="window-nav">
                    <button className="window-nav__btn">
                        <MinimizeSharp fontSize="small"/>
                    </button>
                    <button className="window-nav__btn">
                        <MaximizeSharp fontSize="small"/>
                    </button>
                    <button className="window-nav__btn window-nav__btn--red">
                        <CloseSharp fontSize="small"/>
                    </button>
                </div>
            </div>
        );
    }
}

export default TitleBar;