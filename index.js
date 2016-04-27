#! /usr/bin/env node

var program = require("commander");
var pjson = require("./package.json");
var colors = require("colors");
var fs = require("fs");

var deployToS3Config

try {
	fs.accessSync("deployToS3.json", fs.F_OK);
	deployToS3Config = require("./deployToS3.json");
} catch (e) {
	deployToS3Config = null;
}

program
	.version(pjson.version)
	.option(" --deploy [value]", "deploy a config")
	.parse(process.argv);

if (program.deploy) {
	if (deployToS3Config){
		if (deployToS3Config["deploymentGroups"]){
			for (var i = 0; i < program.deploy.length; i++) {
				if (deployToS3Config["deploymentGroups"][program.deploy[i]]){

				}else{
					console.log("%j not found in config file ".red , program.deploy[i]);
				}
			}
		}else{
			console.log("No deployment groups found in config file ".red);
		}
	}else{
		console.log("No config file found".red);

	}
}