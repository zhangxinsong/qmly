var express = require('express')
var ModelUser = require('../models/user')
var router = express.Router()

router.get('/',(req, res, next) => {
	var arr = {name:'zhangxin'}
	ModelUser.find({name:'zhangxin'},(err, data) => {
		if(err) res.send(err);
		if(data[0]){
			res.send(data);
		}else{
			res.send('找不啊到')
		}
	});
}) 
router.post('/',function (req, res, next){
	var postData = {
		name: req.body.name,
		password: req.body.password
	};

	var resJson = {
		status: false,
		msg: ''
	};
		
	ModelUser.findOne({name: req.body.name}, function (err, data){
		if(err) console.log(err);
			
		if(data){
			resJson.msg = '此用户已经被注册';
			res.send(resJson);
		}else{
			ModelUser.create(postData, function (err, data){
				if(err){
					resJson.msg = '注册异常';
					res.send(resJson);
				}
				resJson.msg = '注册成功';
				resJson.status = true;
				res.send(resJson);
			});
		}
	});
})


module.exports = router