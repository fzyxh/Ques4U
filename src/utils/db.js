var mysql = require('mysql');
var config = require('../config'); //导入config文件

var pool = mysql.createPool(config.mysql_connection_info);
// var connection = mysql.createConnection(config.mysql_connection_info);
// connection.connect();

var query=function(sql_pre,data,callback){
    pool.getConnection(function(err,conn){
        if(err){
            callback(err,null,null);
        }
        else{
            conn.query(sql_pre,data,function(qerr,vals,fields){
                //释放连接
                conn.release();
                //事件驱动回调
                callback(qerr,vals,fields);
            });
        }
    });
};

module.exports=query;
/*
3，在js类使用如下
var query=require("../utils/db.js");

query("select 1 from 1",function(err,vals,fields){
    //do something
});
*/