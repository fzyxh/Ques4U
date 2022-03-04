const res = require('express/lib/response');
var config = require('../config'); //导入config文件
var query=require("../utils/db.js");

class UserModel {

    insert(data) {
        let sql_pre = "INSERT INTO " + config.table_names.users_info + " SET ?";
        query(sql_pre,data,function(err,result,fields) {
            if(err){
                console.log(err);
                return false;
            }else{
                console.log(result);
                return true;
            }
        })
    }

    delete(data) {
        //delete group according id
        let sql_pre = "DELETE FROM " + config.table_names.users_info + " where user_id=?";
        query(sql_pre,data,function(err,result,fields) {
            if(err){
                console.log(err);
                return false;
            }else{
                console.log(result);
                return true;
            }
        })
    }

    find(data, callback) {
        //delete group according email
        let sql_pre = "SELECT * FROM " + config.table_names.users_info + " where user_email=?";
        query(sql_pre,data,function(err,result,fields) {
            if(err){
                console.log(err);
                if(result.length>0){
                    callback(err,JSON.parse(JSON.stringify(result[0])));
                }
                else{
                    callback(err,null);
                }
            }else{
                console.log(result);
                if(result.length>0){
                    callback(err,JSON.parse(JSON.stringify(result[0])));
                }
                else{
                    callback(err,null);
                }
            }
        })
    }
}

module.exports = new UserModel();