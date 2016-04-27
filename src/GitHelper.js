"use strict";
module.exports = class GitHelper {

	constructor() {
	}

	static cloneRepo(repo,branch,username,password,callback){
		var temp = require("temp");
		var Git = require("nodegit");
		var cloneOptions = new Git.CloneOptions();

		cloneOptions.checkoutBranch = branch;
		var tempPath = temp.path();

		Git.Clone(repo, tempPath,cloneOptions)
			// Look up this known commit.
			.then(function() {
				return callback(null,tempPath);
			})
			.catch(function(err) {
				return callback(err,tempPath);
			});

	}
};