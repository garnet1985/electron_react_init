const { app, BrowserWindow, ipcMain } = require('electron')
const path = require('path');
const MainApp = require('../bed');
const mainApp = new MainApp(ipcMain, app);

require('electron-reload')(path.resolve(__dirname, '../bed'), {
  electron: path.join(__dirname, '../node_modules', '.bin', 'electron'),
  argv: ['--dev'],
  forceHardReset: true
});

const conf = {
  windowWidth: 1280,
  windowHeight: 800,
  icon: path.join(__dirname, '/public/favico.ico'),
}

let mainWindow;

function createWindow(isDev) {
  mainWindow = new BrowserWindow({
    width: conf.windowWidth, 
    height: conf.windowHeight,
    icon: conf.icon,
    webPreferences: {
      nodeIntegration: true
    }
  });
  if(isDev){
    mainWindow.loadURL('http://localhost:3000/');
    mainWindow.webContents.openDevTools();
  }else{
    mainWindow.loadURL(`file://${path.join(__dirname, '../build/index.html')}`);
  }
  mainWindow.on('closed', () => mainWindow = null);
}

app.on('ready', () => {
  let isDevMode = true;
  if(process.argv.indexOf('--dev') < 0){
    isDevMode = false;
  }
  createWindow(isDevMode);
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (mainWindow === null) {
    createWindow();
  }
});