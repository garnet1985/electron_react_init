const API = require('./api');

function Main(ipcMain, app){
	this.api = new API(ipcMain);
}

module.exports = Main;


