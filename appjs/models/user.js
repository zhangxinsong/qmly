var mongoose = require('mongoose');

var userSchema = new mongoose.Schema({
	name: {
		type: String,
		unique: true
	},
	password: String,
	touxiang: {
		type: String,
		default: "http://img.zcool.cn/community/01b5ff5621157032f87557019c89de.jpg@2o.jpg"
	},
	sex:　String,
	age: Number,
	brithday: {
		year: {
			type: Number,
			default: 0
		},
		month: {
			type: Number,
			default: 0
		},
		day: {
			type: Number,
			default: 0
		}
	},
	area: String,
	introduce: String
});

module.exports = mongoose.model('user',userSchema);