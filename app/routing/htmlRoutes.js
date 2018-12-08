

var path = require("path");
module.exports = function(){
    'user strict';
    var htmlRoutes = require('express').Router();

    htmlRoutes.get("/", function(req, res){
        res.sendFile(path.join(__dirname, '../public/',"home.html"));
        //res.send("test");
        
    });


    htmlRoutes.get("/survey", function(req,res){
        res.sendFile(path.join(__dirname,'../public/', "survey.html"));
    });

    return htmlRoutes;
}