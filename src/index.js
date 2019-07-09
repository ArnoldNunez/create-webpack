/**
 * The entry point of the electron main process.
 */

'use strict'

const { app, BrowserWindow, ipcMain } = require('electron');
const Window = require('./Window');

/**
 * This will create the window object for the application.
 */
function createWindow() {
  
  // Create the browser window.
  Window.mainWindow = new BrowserWindow({
    width: 800,
    height: 600,
    frame: false,
    webPreferences: {
      nodeIntegration: true
    }
  });

  // and load the index.html of the app.
  //Window.mainWindow.loadFile('index.html');
  Window.mainWindow.loadURL('http://localhost:2777');

  // Open the DevTools.
  Window.mainWindow.webContents.openDevTools();

  // Emitted when the window is closed.
  Window.mainWindow.on('closed', () => {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
    Window.mainWindow = null
  });
}

/** 
 * This method will be called when Electron has finished
 * initialization and is ready to create browser windows.
 * Some APIs can only be used after this event occurs.
 */
app.on('ready', createWindow);

/**
 * Quit when all windows are closed. 
 */
app.on('window-all-closed', () => {
  // On macOS it is common for applications and their menu bar
  // to stay active until the user quits explicitly with Cmd + Q
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

/**
 * Called when the application is activated. Can be triggered when launching app
 * for first time, attempting to re-launch while running, or clicking the application's
 * dock or taskbar icon.
 */
app.on('activate', () => {
  // On macOS it's common to re-create a window in the app when the
  // dock icon is clicked and there are no other windows open.
  if (Window.mainWindow === null) {
    createWindow();
  }
})



// Requires for apps main process specific code
require('./ipc-mesasge-handlers');