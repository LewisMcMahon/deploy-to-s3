var expect = require("chai").expect;
var fs = require("fs");
var del = require("del");

var GitHelper = require("../src/GitHelper.js");

var repoLocations = [];

after(function(done) {
	// Cleanup
	if(repoLocations.length != 0 ) {
		del.sync(repoLocations,{force:true});
		done();
	}else{
		done();
	}

});

describe("GitHelper", function(){
	describe("cloneRepo()", function () {
		it("It should return a string containing a filepath in the callback", function(done){
			GitHelper.cloneRepo("https://github.com/LewisMcMahon/deploy-to-s3-testing-repo.git","master",false,false,function(err,repoLocation){
				expect(err).is.a("null");
				expect(repoLocation).is.a("string");
				if (repoLocation){
					repoLocations.push(repoLocation);
				}
				done();
			});
		});
		it("It should fetch master", function(done){
			GitHelper.cloneRepo("https://github.com/LewisMcMahon/deploy-to-s3-testing-repo.git","master",false,false,function(err,repoLocation){
				var testFileLocation = repoLocation+"\\branch.txt";
				fs.readFile(testFileLocation, "utf8", function (err,data) {
					expect(data).eql("master");
					if (repoLocation){
						repoLocations.push(repoLocation);
					}
					done();
				});
			});
		});
		it("It should fetch dev", function(done){
			GitHelper.cloneRepo("https://github.com/LewisMcMahon/deploy-to-s3-testing-repo.git","dev",false,false,function(err,repoLocation){
				var testFileLocation = repoLocation+"\\branch.txt";
				fs.readFile(testFileLocation, "utf8", function (err,data) {
					expect(data).eql("dev");
					if (repoLocation){
						repoLocations.push(repoLocation);
					}
					done();
				});
			});
		});
	});
});