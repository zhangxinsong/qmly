var express = require('express')
var ModelDaoyou = require('../models/daoyou')
var router = express.Router()

router.post('/one',(req, res, next) => {
	console.log(req.body);
	ModelDaoyou.findOne({name:req.body.name},(err, data) => {
		if(err) res.send(err);
		if(data){
			res.send(data);
		}else{
			res.send('找不啊到')
		}
	});
}) 

router.post('/',function (req, res, next){
	var resJson = {
		status: false,
		msg: ''
	};
    
    //查找用户名
	ModelDaoyou.findOne({name: req.body.name}, function (err, data){
		if(err) console.log(err);
        
        //判断密码是否相等
		if(data){
			if(data.password ==req.body.password){
                resJson.status = true;
                resJson.msg = '登录成功';
                res.send(resJson)
            }else{
                resJson.status = false;
                resJson.msg = '用户名密码不符';
                res.send(resJson)
            }
        }else{
            resJson.status = false;
            resJson.msg = '不存在的用户名';
            res.send(resJson)
        }
	});
})


module.exports = router