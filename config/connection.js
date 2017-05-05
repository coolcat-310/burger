/**
 * Created by juancarlosnavarrete on 5/1/17.
 */
// var mysql = require("mysql");
// var connection;
//
//
//
// if (process.env.JAWSDB_URL) {
//     connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//     connection = mysql.createConnection({
//         host: "localhost",
//         user: "root",
//         password: "",
//         database: "burgers_db"
//     });
// };
//
// connection.connect(function(err) {
//     if (err) {
//         console.error('error connecting: ' + err.stack);
//         return;
//     }
//     console.log("connected as id " + connection.threadId);
// });
//
// module.exports= connection;


var mysql = require('mysql');
var connection;

// For Heroku Deployment vs. Local MySQL Database
if(process.env.JAWSDB_URL){
    connection = mysql.createConnection(process.env.JAWSDB_URL);
}
else{
    connection = mysql.createConnection({
        host     : 'localhost',
        user     : 'root',
        password : '', // Add your password
        database : 'burgers_db' // Add your database
    });
}


// Export the Connection
module.exports = connection;