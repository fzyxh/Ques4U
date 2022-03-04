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
}

module.exports = new UserModel();