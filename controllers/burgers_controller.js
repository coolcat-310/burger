/**
 * Created by juancarlosnavarrete on 5/1/17.
 */

var express = require('express');
var burger = require('../models/burger');
var router = express.Router();


//home

router.get('/', function(req, res){
   res.redirect('/index');
});

router.get('/index', function (req,res) {
    burger.selectAll(function(data){
       var myBurgers = {
           burgers: data
       };
       res.render('index', myBurgers);
    });
});

router.post('/burger/eat/:id', function(req, res) {
    var idVal = parseInt(req.params.id);
    burger.updateOne(idVal, function(data){
        var myBurgers = {
            burgers: data
        };
        res.render('index', myBurgers);
    });
});



module.exports = router;