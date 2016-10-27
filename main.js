
'use strict';

const electron = require('electron');
const ElectronProcessIPC = require('electron-process-ipc').ElectronProcessIPC;
const app = electron.app;  // Module to control application life.
const BrowserWindow = electron.BrowserWindow;  // Module to create native browser window.

var mainWindow = null;

app.on('ready', function() {
    const electronProcessIPC = new ElectronProcessIPC();
    const backgroundURL = 'file://' + __dirname + '/background.html';
    const backgroundProcessHandler = electronProcessIPC.main.createBackgroundProcess(backgroundURL);
    mainWindow = new BrowserWindow({width: 1280, height: 600});
    backgroundProcessHandler.addWindow(mainWindow);
    mainWindow.loadURL('file://' + __dirname + '/foreground.html');
});