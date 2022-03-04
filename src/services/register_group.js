var GroupModel = require('../models/GroupModel');
// var mysql  = require('mysql');  //导入mysql包
// var config = require('../config'); //导入config文件
// var express = require('express'); //导入express
// const Connection = require('mysql/lib/Connection');
// const res = require('express/lib/response');
// var app = express();

// // creat the connection to mysql server
// var connection = mysql.createConnection(config.mysql_connection_info);
// connection.connect();

// module.exports : export the function as a class
module.exports = function(group_id,group_name,master_id,group_rulers,group_members) {
    // store the information when creat a new object
    this.Group_id = group_id;
    this.Group_name = group_name;
    this.Master_id = master_id;
    this.Group_rulers = group_rulers;
    this.Group_members = group_members;
    // method of register
    this.register = function() {
        let info = {
            "group_id" : this.Group_id,
            "group_name" : this.Group_name,
            "master_id" : this.Master_id,
            "group_rulers" : this.Group_rulers,
            "group_members" : this.Group_members
        };
        GroupModel.insert(info);

        // let sql_pre = "INSERT INTO " + config.table_names.groups_info + " SET ?";
        // connection.query(sql_pre,info,(err,result) => {
        //     if(err){
        //         console.log(err);
        //         return false;
        //     }else{
        //         console.log(result);
        //         return true;
        //     }
        // })
    }
};