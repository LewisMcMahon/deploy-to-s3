var expect = require("chai").expect;
var fs = require("fs");

var FileHelper = require("../src/FileHelper.js");

describe("FileHelper", function(){
	describe("getFiles()", function () {
		it("It should return a list", function(done){
			FileHelper.getFiles("../testfiles",[],function (err,files) {
				expect(err).is.a("list");
				done();
			});
		});
		it("It should return all files but .git", function(done){
			FileHelper.getFiles("../testfiles",[],function (err,files) {
				expect(err).is.eql([]);
				done();
			});
		});
	});
});