var GroupModel = require('../models/GroupModel');

// module.exports : export the function as a class
module.exports = function(group_id) {
    // store the information when creat a new object
    this.Group_id = group_id;
    // method of delete
    this.delete = function() {
        GroupModel.delete(this.Group_id);
    }
};