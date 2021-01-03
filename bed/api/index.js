const xlsx = require('xlsx');

function API(ipcMain){
	this.ipcMain = ipcMain;
	this.initListeners();
}

API.prototype.initListeners = function(){
	this.ipcMain.on('loadExcel', (e, args) => {
		let excel = xlsx.readFile(args);
	  e.sender.send(`loadExcel.complete`, excel);
	});
}


module.exports = API;