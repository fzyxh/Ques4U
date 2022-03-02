var path = require('path');
var appRoot = path.resolve(__dirname);
var config = {
	web:{
		name:"Ques4U",
		appRoot:appRoot
	},
	url:{
		host:"http://127.0.0.1:8888"
	},
	auth:{
		activeKey : "activeKey",
		checkActive: false
	}
};

module.exports = config;