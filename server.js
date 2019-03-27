var express = require('express')

var app = express();
 app.get('*',(req,res)=>{
     res.sendFile(__dirname+req.path)
 })
 app.listen(8888,()=>{
     console.log('服务器开启成功')
 })