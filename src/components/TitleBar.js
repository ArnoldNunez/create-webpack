// Node imports
import { ipcRenderer } from 'electron';

// React imports
import React from 'react';

// Material-UI Imports
import { SurroundSoundSharp, CloseSharp, MinimizeSharp, MaximizeSharp, Close } from '@material-ui/icons';

// Styles
import '../sass/TitleBar.scss';

// main process communication
const IpcMessages = require('../IpcMessages');

/**
 * Component for the application Title Bar.
 */
class TitleBar extends React.Component {
    /**
     * Default constructor
     */
    constructor() {
        super();

        this.handleWindowBtn = this.handleWindowBtn.bind(this);
    }

    /**
     * On click Handler for the title bar window buttons.
     * @param { Event } e The event object.
     */
    handleWindowBtn(e) {
        const buttonId = e.target.id;
        switch (buttonId) {
            case 'window-minimize-btn':
                ipcRenderer.sendSync(IpcMessages.MINIMIZE_WINDOW_MSG, IpcMessages.MINIMIZE_WINDOW_MSG);
                break;

            case 'window-maximize-btn':
                ipcRenderer.sendSync(IpcMessages.MAXIMIZE_WINDOW_MSG, IpcMessages.MAXIMIZE_WINDOW_MSG_WINDOW_MSG);
                break;

            case 'window-close-btn':
                ipcRenderer.sendSync(IpcMessages.CLOSE_WINDOW_MSG, IpcMessages.CLOSE_WINDOW_MSG);
                break;

            default:
                break;
        }
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
                    <button id="window-minimize-btn" className="window-nav__btn" onClick={this.handleWindowBtn}>
                        <MinimizeSharp fontSize="small"/>
                    </button>
                    <button id="window-maximize-btn" className="window-nav__btn" onClick={this.handleWindowBtn}>
                        <MaximizeSharp fontSize="small"/>
                    </button>
                    <button id="window-close-btn" className="window-nav__btn window-nav__btn--red" onClick={this.handleWindowBtn}>
                        <CloseSharp fontSize="small"/>
                    </button>
                </div>
            </div>
        );
    }
}

export default TitleBar;