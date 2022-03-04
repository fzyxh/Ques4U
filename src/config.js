const path = require('path');
const appRoot = path.resolve(__dirname);
const config = {
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
	},
    mysql_connection_info:{
        host     : 'localhost',      
        user     : 'root',             
        password : 'root',      
        port: '3306',                  
        database: 'ques4u'
    },
    table_names:{
        users_info : 'users_info',
        groups_info : 'groups_info',
        questionnaires_info : 'questionnaires_info',
        questions_info : 'questions_info',
        tags_info : 'tags_info',
        questionnaires_results : 'questionnaires_results'
    }
};

module.exports = config;