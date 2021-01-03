function API(ipcMain){
	this.ipcMain = ipcMain;
	this.initListeners();
}

API.prototype.initListeners = function(){
	this.ipcMain.on('getName', (e, args) => {
	  e.sender.send('getName.complete', 'cow boy');
	});
}


module.exports = API;