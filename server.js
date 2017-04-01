const express = require('express');
const app = express();
const datahundle = require('./datahundle.js');
app.use(express.static('public'));


app.post("/insert",function(req,res){
	var obj = {
		"name":"小明",
		"age":2,
		"sex":"female"
	};
	datahundle.addData("/data/students.json",obj,function(){
		res.send('添加成功');
	})
})
app.post("/delete",function(req,res){
	
})
app.post("/update",function(req,res){
	
})




app.listen(8080,function(){
	console.log('server is running');
})