var express = require("express");

var app = express();
app.get("/test",function(req,res){
    res.send({
        result:"Hello World"
    })
});
var server = app.listen(3000,function(){
    console.log("demo app 启动");
});
module.exports = app;