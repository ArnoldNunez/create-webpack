'use strict'

const { BrowserWindow } = require('electron');

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.
var mainWindow = null;

/**
 * Class containing our main window object. Use this to pass main window.
 * to our commonjs files that need to interact with the window.
 */
class Window  {
    set mainWindow(value) { mainWindow = value; }
    get mainWindow() { return mainWindow; }
}

module.exports = Window;