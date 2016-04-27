var GitHelper = require("./src/GitHelper.js");

GitHelper.cloneRepo("https://github.com/LewisMcMahon/deploy-to-s3-testing-repo.git","master",false,false,function(err,data){
	console.log(err);
	console.log(data);
});