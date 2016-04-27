var expect = require("chai").expect;
var fs = require("fs");

var FileHelper = require("../src/FileHelper.js");

describe("FileHelper", function(){
	describe("getFiles()", function () {
		it("It should return a list", function(done){
			FileHelper.getFiles("testFiles",[],function (err,files) {
				expect(files).is.a("array");
				done();
			});
		});
		it("It should return all files but .git", function(done){
			FileHelper.getFiles("testFiles",["*.git*"],function (err,files) {
				var testFilesShould = [
					"testFiles\\index.html",
					"testFiles\\css\\css.css",
					"testFiles\\js\\fittext.js",
					"testFiles\\js\\jquery.textfill.min.js",
					"testFiles\\js\\js.js",
					"testFiles\\images\\servers.jpg"
				]
				expect(files).to.have.members(testFilesShould);
				var testFilesShouldNot = [
					"testFiles\\.gitignore",
					"testFiles\\.git\\not a git file.gitignore"
				]
				expect(files).to.not.have.members(testFilesShouldNot);
				done();
			});
		});
	});
});