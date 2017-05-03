/**
 * Created by juancarlosnavarrete on 5/1/17.
 */

var connection = require("./connection.js");

var orm = {
    selectAll: function(callback) {
        var queryString = "SELECT * FROM burgers";
        connection.query(queryString, function(err, result) {
            if (err) {
                throw err;
            }
            console.log(result);
            //callback(result);
        });
    },
    insertOne: function(myObj, callback) {

        var queryString = "INSERT INTO burgers SET ?";

        console.log(queryString);

        connection.query(queryString, {
            burger_name: myObj.name,
            devoured: false,
            myDate: myObj.date
        }, function(err, result) {
            console.log(result);
            //callback(result);
        });
    },
    updateOne: function(column1, value1, column2, value2, callback){
        var queryString = "UPDATE burgers SET ?? = ? WHERE ?? = ?";
        console.log(queryString);
        connection.query(queryString, [column1, value1, column2, value2], function(err, result) {
            console.log(result);
            //callback(result);
        });
    }
};

module.exports = orm;
