var express = require('express')
var ModelDingdan = require('../models/dingdan')
var router = express.Router()

router.post('/',function (req, res, next){
	var postData = {
		name: req.body.name,
		daoyou: req.body.daoyou,
		zhuangtai: req.body.zhuangtai,
    	renshu: req.body.renshu,
    	mobile: req.body.mobile,
    	luxianid: req.body.luxianid,
	};

	var resJson = {
		status: false,
		msg: ''
	};

	ModelDingdan.create(postData, function (err, data){
		if(err){
			resJson.msg = '发布异常';
			res.send(resJson);
		}else{
			resJson.msg = '发布成功';
			resJson.status = true;
			res.send(resJson);
		}
		
	});
})

// router.post('/one',function (req, res, next){
// 	var postData = {
// 		xingming: req.body.xingming,
// 		shenfen: req.body.shenfen,
// 		zhaopian1: req.body.zhaopian1,
// 		zhaopian2: req.body.zhaopian2
// 	};

// 	var resJson = {
// 		status: false,
// 		msg: ''
// 	};

// 	ModelDingdan.update({name:req.body.name},{$set:postData},{multi:true}, function(err){
// 		if(err){
// 			console.log(err);
// 		}else{
// 			resJson.status = true;
// 			resJson.msg = '修改成功';
// 			res.send(resJson);
// 		}
// 	});
// })
// router.post('/two',(req, res, next) => {
// 	ModelDingdan.find({_id:req.body.id},(err, data) => {
// 		if(err) res.send(err);
// 		if(data){
// 			res.send(data);
// 		}else{
// 			res.send('找不啊到')
// 		}
// 	});
// })



module.exports = router