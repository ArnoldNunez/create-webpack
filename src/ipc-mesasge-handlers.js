/**
 * File containing our ipc message handlers.
 */

'use strict'

const { ipcMain } = require('electron');
const IpcMessages = require('./IpcMessages');
const Window = require('./Window');

/**
 * Minimize window message.
 * This will be called when we would like to minimize the application window.
 */
ipcMain.on(IpcMessages.MINIMIZE_WINDOW_MSG, (event, arg) => {
    event.returnValue = 'minimizing';
    Window.mainWindow.minimize();
});

/**
 * Maximize window message.
 * This will be called when we would like to minimize the application window.
 * If the window is already maximized, the window will restore down instead.
 */
ipcMain.on(IpcMessages.MAXIMIZE_WINDOW_MSG, (event) => {
    if (Window.mainWindow.isMaximized()) {
        event.returnValue = 'restoring down';
        Window.mainWindow.restore();
    } else {
        event.returnValue = 'maximizing';
        Window.mainWindow.maximize();
    }
});

/**
 * Close window message.
 * This will be called when we would like to minimize the application window.
 */
ipcMain.on(IpcMessages.CLOSE_WINDOW_MSG, (event) => {
    event.returnValue = 'closing';
    Window.mainWindow.close();
});