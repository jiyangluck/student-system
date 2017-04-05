const express = require('express');
var bodyParser = require("body-parser");
const app = express();
const datahundle = require('./datahundle.js');
app.use(express.static('public'));
app.use(bodyParser.urlencoded({extended:false}));


app.post("/insert",function(req,res){
	// 参数格式
	// var obj = {
	// 	"name":"小明",
	// 	"age":2,
	// 	"sex":"female"
	// };
	var obj = req.body;
	datahundle.addData("data/students.json",obj,function(err){
		res.send('添加成功');
	})
})
app.post("/delete",function(req,res){
	//参数格式
	// var obj = {
	// 	"name":"小明",
	// 	"age":2,
	// 	"sex":"female"
	// };
	var obj = req.body;
	datahundle.deleteData("data/students.json",obj,function(err){
		res.send('删除成功')
	})
})
app.post("/update",function(req,res){
	//参数格式
	// var obj1 = {
	// 	"name":"小明",
	// 	"age":2,
	// 	"sex":"female"
	// };
	// var obj2 = {
	// 	"name":"小红",
	// 	"age":2,
	// 	"sex":"female"
	// };
	datahundle.updateData("data/students.json",obj1,obj2,function(err){
		res.send('修改成功')
	})
})

app.get("/getstudents",function(req,res){
	datahundle.selectData("data/students.json",function(err,data){
		res.send(data);
	})
})




app.listen(8080,function(){
	console.log('server is running');
})