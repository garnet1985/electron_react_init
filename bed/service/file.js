const fs = require('fs');
const child_process = require('child_process');

function File(){  

}

File.prototype.save = function(fileName, fileDir, value = ''){
	try{
		if(fileName && fileDir && this.isValidFile(fileName)){
			if(!this.isFolderExist(fileDir)){
				this.createFolder(fileDir)
			}

			if(this.isJSON(fileName)){
				value = JSON.stringify(value);
			}

			fs.writeFileSync(path.resolve(fileDir, `./${fileName}`), value, {
	      flag: 'w', 
	      code: 'utf-8'
	    })
		}else{
			throw new Error('missing param for file.save method');
		}
	}catch(exception){
		console.log(exception);
	}
	return value;
}

File.prototype.load = function(fileName, fileDir){
	let result = '';
	try{
		let filePath = path.resolve(fileDir, `./${fileName}`)
		if( this.isFileExist(filePath) ){
			result = fs.readFileSync(filePath, 'utf-8');
			if(this.isJSON(fileName)){
				result = JSON.parse(result)
			}
		}
	}catch(exception){
		console.log(exception);
	}
	return result;
}