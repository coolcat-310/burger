/**
 * Created by juancarlosnavarrete on 5/1/17.
 */

var orm = require("../config/orm");

var burger = {
    selectAll: function(callback){
        orm.selectAll(function (res) {
            callback(res);
        });
    },
    insertOne: function (myObj, callback) {
        orm.insertOne(myObj, function(res){
            callback(res)
        });
    },
    updateOne: function(idVal, callback){
        orm.updateOne(idVal, function(res){
            callback(res);
        });
    }
};

module.exports = burger;