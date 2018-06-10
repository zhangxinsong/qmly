var express = require('express')
var ModelUser = require('../models/user')
var router = express.Router()

router.get('/',(req, res, next) => {
	ModelUser.find({name:'111'},(err, data) => {
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
		touxiang: req.body.touxiang,
		sex: req.body.sex,
		age: req.body.age,
		brithday: {
			year: req.body.brithday.year,
			month: req.body.brithday.month,
			day: req.body.brithday.day
		},
		area: req.body.area,
		introduce: req.body.introduce
	};

	var resJson = {
		status: false,
		msg: ''
	};

	ModelUser.update({name:req.body.name},{$set:postData},{multi:true}, function(err){
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