var express = require('express')
var ModelLuxian = require('../models/luxian')
var router = express.Router()

router.get('/',(req, res, next) => {
	ModelLuxian.find({},(err, data) => {
		if(err) res.send(err);
		if(data){
			res.send(data);
		}else{
			res.send('找不啊到')
		}
	});
})
router.post('/two',(req, res, next) => {
	ModelLuxian.find({_id:req.body.id},(err, data) => {
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
		name: req.body.name,
		title: req.body.title,
		money: req.body.money,
    	jieshao: req.body.jieshao,
    	img: req.body.img,
    	img1: req.body.img1,
    	img2: req.body.img2,
    	img3: req.body.img3,
    	img4: req.body.img4
	};

	var resJson = {
		status: false,
		msg: ''
	};

	ModelLuxian.create(postData, function (err, data){
		if(err){
			resJson.msg = '发布异常';
			res.send(resJson);
		}
		resJson.msg = '发布成功';
		resJson.status = true;
		res.send(resJson);
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

	ModelLuxain.update({name:req.body.name},{$set:postData},{multi:true}, function(err){
		if(err){
			console.log(err);
		}else{
			resJson.status = true;
			resJson.msg = '修改成功';
			res.send(resJson);
		}
	});
})


module.exports = router