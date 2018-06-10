var mongoose = require('mongoose');

var daoyouSchema = new mongoose.Schema({
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
    area: String,
    introduce: String,
    shenfen: Number,
    xingming:{
        type: String,
        default: " "
    },
    zhaopian1:{
        type: String,
        default: "http://img.zcool.cn/community/01b5ff5621157032f87557019c89de.jpg@2o.jpg"
    },
    zhaopian2:{
        type: String,
        default: "http://img.zcool.cn/community/01b5ff5621157032f87557019c89de.jpg@2o.jpg"
    }
});


module.exports = mongoose.model('daoyou',daoyouSchema);