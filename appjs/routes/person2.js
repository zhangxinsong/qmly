var express = require('express')
var ModelDaoyou = require('../models/daoyou')
var router = express.Router()

router.get('/',(req, res, next) => {
	ModelDaoyou.find({},(err, data) => {
		if(err) res.send(err);
		if(data){
			res.send(data);
		}else{
			res.send('找不啊到')
		}
	});
})
router.post('/',function (req, res, next){
	var postData = {
		touxiang: req.body.touxiang,
		sex: req.body.sex,
		age: req.body.age,
		area: req.body.area,
		introduce: req.body.introduce
	};

	var resJson = {
		status: false,
		msg: ''
	};

	ModelDaoyou.update({name:req.body.name},{$set:postData},{multi:true}, function(err){
		if(err){
			console.log(err);
		}else{
			resJson.status = true;
			resJson.msg = '修改成功';
			res.send(resJson);
		}
	});
})
router.post('/one',function (req, res, next){
	var postData = {
		xingming: req.body.xingming,
		shenfen: req.body.shenfen,
		zhaopian1: req.body.zhaopian1,
		zhaopian2: req.body.zhaopian2
	};

	var resJson = {
		status: false,
		msg: ''
	};

	ModelDaoyou.update({name:req.body.name},{$set:postData},{multi:true}, function(err){
		if(err){
			console.log(err);
		}else{
			resJson.status = true;
			resJson.msg = '修改成功';
			res.send(resJson);
		}
	});
})
router.post('/two',(req, res, next) => {
	ModelDaoyou.find({name:req.body.name},(err, data) => {
		if(err) res.send(err);
		if(data){
			res.send(data);
		}else{
			res.send('找不啊到')
		}
	});
})


module.exports = router