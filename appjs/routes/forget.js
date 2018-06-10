var express = require('express')
var ModelUser = require('../models/user')
var router = express.Router()

router.post('/',function (req, res, next){
	var resJson = {
		status: false,
		msg: ''
	};
    
    //修改密码
	ModelUser.update({name:req.body.name},{$set:{password:req.body.password}},function(err){
		if(err){
			console.log(err);
		}else{
			resJson.status = true;
			resJson.msg = '修改成功';
			res.send(resJson);
		}
	})
})      


module.exports = router