var mongoose = require('mongoose');

var dingdanSchema = new mongoose.Schema({
	name: String,
	daoyou: String,
	zhuangtai: String,
	renshu: Number,
	mobile: Number,
	luxianid: String
});

module.exports = mongoose.model('dingdan',dingdanSchema);