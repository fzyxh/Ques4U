var UserModel = require('../models/UserModel');

// module.exports : export the function as a class
module.exports = function(user_id,user_name,user_password,user_email) {
    // store the information when creat a new object
    this.User_id = user_id;
    this.User_name = user_name;
    this.User_power = '1';
    this.User_password = user_password;
    this.User_email = user_email;
    this.User_setting = '{}';
    // method of register
    this.register = function() {
        let info = {
            "user_id" : this.User_id,
            "user_name" : this.User_name,
            "user_power" : this.User_power,
            "user_password" : this.User_password,
            "user_email" : this.User_email,
            "user_setting" : this.User_setting
        };
        UserModel.insert(info);
    }
};