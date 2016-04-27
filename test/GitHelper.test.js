var expect = require("chai").expect;
var fs = require("fs");

var GitHelper = require("../src/GitHelper.js");


describe("GitHelper", function(){
	describe("getFiles()", function () {
		it("It should return a string containing a filepath in the callback", function(done){
			GitHelper.getFiles("https://github.com/LewisMcMahon/deploy-to-s3-testing-repo.git","master",false,false,function(err,data){
				expect(err).is.a("null");
				expect(data).is.a("string");
				done();
			});
		});
		it("It should fetch master", function(done){
			GitHelper.getFiles("https://github.com/LewisMcMahon/deploy-to-s3-testing-repo.git","master",false,false,function(err,data){
				var testFileLocation = data+"\\branch.txt";
				fs.readFile(testFileLocation, 'utf8', function (err,data) {
					expect(data).eql("master");
					done();
				});
			});
		});
		it("It should fetch dev", function(done){
			GitHelper.getFiles("https://github.com/LewisMcMahon/deploy-to-s3-testing-repo.git","dev",false,false,function(err,data){
				var testFileLocation = data+"\\branch.txt";
				fs.readFile(testFileLocation, 'utf8', function (err,data) {
					expect(data).eql("dev");
					done();
				});
			});
		});
	});
});