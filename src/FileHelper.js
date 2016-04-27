"use strict";
module.exports = class FileHelper {

	static getFiles(filesLocation,filterList,callback){
		var recursive = require("recursive-readdir");
		
		recursive(filesLocation, [], function (err, files) {
			if (err) {
				return callback(err, null);
			}
			for (var i = 0; i < filterList.length; i++) {
				files = FileHelper.filterList(files,filterList[i]);
			}
			return callback(null, files);
		});
	}

	//sync function returns filterd list
	static filterList(list,filter){
		var globToRegExp = require("glob-to-regexp");
		var re = globToRegExp(filter);
		var filterdList = []
		for (var i = 0; i < list.length; i++) {
			if (!re.test(list[i])) {
				filterdList.push(list[i]);
			}
		}
		return filterdList;
	}
};