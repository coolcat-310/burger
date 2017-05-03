/**
 * Created by juancarlosnavarrete on 5/1/17.
 */

var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require("path");

var app = express();
var port = 3000;







app.listen(port, function() {
    console.log("Listening on PORT " + port);
});