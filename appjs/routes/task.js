var express = require('express')
var Modeltask = require('../models/task')
var router = express.Router()

router.get('/',function (req, res, next){
	Modeltask.find({},function(err,data){
		if(err) res.send(err);
		if(data[0]){
		res.send(data);
		}else{
		res.send({status:false,msg:'没有数据'})
		}
	})
})
router.post('/',function (req, res, next){
	var postData = {
		name: req.body.name,
		title: req.body.title,
    	area: req.body.area,
    	fuwu: req.body.fuwu,
    	year: req.body.year,
    	month: req.body.month,
    	day: req.body.day,
    	tianshu: req.body.tianshu,
    	type: req.body.type,
    	miaoshu: req.body.miaoshu
	};

	var resJson = {
		status: false,
		msg: ''
	};
	Modeltask.create(postData, function (err, data){
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
	Modeltask.find({_id: req.body.id},function(err,data){
		if(err) res.send(err);
		if(data){
			res.send(data);
		}else{
			res.send('meiyou')
		}
	})
})

module.exports = router