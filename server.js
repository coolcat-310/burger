/**
 * Created by juancarlosnavarrete on 5/1/17.
 */

var express = require("express");
var bodyParser = require("body-parser");
//var methodOverride = require("method-override");
//var path = require("path");
var exphbs = require('express-handlebars');
var router = require('./controllers/burgers_controller');
var app = express();

app.use(express.static(process.cwd() + '/public'));
app.use(bodyParser.urlencoded({ extended: false }));
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

var PORT = process.env.PORT || 3000;

app.use('/', router);




app.listen(PORT, function() {
    console.log("Listening on PORT " + PORT);
});